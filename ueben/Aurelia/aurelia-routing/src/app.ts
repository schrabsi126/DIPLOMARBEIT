import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;
  message='Hello World!';

  configureRouter(config: RouterConfiguration, router: Router): void {

    config.title = 'Aurelia Routing';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'HOME'},
      {route: 'about', name: 'about', moduleId: PLATFORM.moduleName('./about'), nav: true, title: 'ABOUT'},
      {route: 'account', name: 'account', moduleId: PLATFORM.moduleName('./account'), nav: true, title: 'ACCOUNT'}
    ]);

    this.router = router;
  }
}
