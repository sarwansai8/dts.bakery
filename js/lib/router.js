/* ============================================================
   DTS CHOCOLATE — SPA ROUTER
   Hash-based client-side routing for single-page application
   ============================================================ */

class AppRouter {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.beforeHooks = [];
    this.afterHooks = [];
    this.notFoundHandler = null;
    this.appContainer = null;
  }

  init(containerId = 'app') {
    this.appContainer = document.getElementById(containerId);
    window.addEventListener('hashchange', () => this.handleRoute());
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => this.handleRoute());
    } else {
      setTimeout(() => this.handleRoute(), 0);
    }
    document.addEventListener('click', (e) => this.handleLinkClick(e));
    return this;
  }

  route(path, handler, options = {}) {
    this.routes.set(path, { handler, ...options });
    return this;
  }

  notFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }

  beforeEach(hook) {
    this.beforeHooks.push(hook);
    return this;
  }

  afterEach(hook) {
    this.afterHooks.push(hook);
    return this;
  }

  navigate(path) {
    window.location.hash = path;
  }

  getPath() {
    return window.location.hash.slice(1) || '/';
  }

  getParams(routePattern, actualPath) {
    const patternParts = routePattern.split('/');
    const pathParts = actualPath.split('/');
    const params = {};

    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        const paramName = patternParts[i].slice(1);
        params[paramName] = decodeURIComponent(pathParts[i]);
      }
    }

    return params;
  }

  matchRoute(path) {
    // Exact match first
    if (this.routes.has(path)) {
      return { route: this.routes.get(path), params: {}, pattern: path };
    }

    // Pattern matching with :params
    for (const [pattern, route] of this.routes) {
      const patternParts = pattern.split('/');
      const pathParts = path.split('/');

      if (patternParts.length !== pathParts.length) continue;

      let match = true;
      for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) continue;
        if (patternParts[i] !== pathParts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        return {
          route,
          params: this.getParams(pattern, path),
          pattern
        };
      }
    }

    return null;
  }

  async handleRoute() {
    const path = this.getPath();

    // Run before hooks
    for (const hook of this.beforeHooks) {
      const result = await hook(path, this.currentRoute);
      if (result === false) return;
    }

    const match = this.matchRoute(path);

    if (match) {
      this.currentRoute = { path, ...match };
      try {
        await match.route.handler(this.appContainer, match.params);
      } catch (error) {
        console.error('Route handler error:', error);
      }
    } else if (this.notFoundHandler) {
      this.currentRoute = { path, pattern: '404' };
      await this.notFoundHandler(this.appContainer);
    }

    // Run after hooks
    for (const hook of this.afterHooks) {
      await hook(path, this.currentRoute);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleLinkClick(e) {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('data-link');
      this.navigate(href);
    }
  }
}

// Create global instance
window.Router = new AppRouter();
