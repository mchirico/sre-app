# sre-app


## Summary

Very simple Angular WebSocket Template


![image](https://user-images.githubusercontent.com/755710/129456423-3d938bfb-0791-4ca5-af64-861ba2d74460.png)



```bash
# Heading
ng g component navbar/navbar

# Heading pages -  (add more if needed).
ng g component navpages/home
ng g component navpages/main
ng g component navpages/auth
ng g component navpages/page0
ng g component navpages/page0/area-chart
ng g component navpages/page0/area-chart/start-chart
ng g component navpages/page0/area-chart/detail-chart
ng g component navpages/page1

ng g component navpages/search

ng g service service/backend

ng generate component websockets/basic
ng generate service websockets/sockets
ng generate service websockets/msgSockets

# D3 charts
npm install d3 --save
npm install @types/d3 --save-dev

```





https://stackblitz.com/edit/rxjs-websockets-by24wd?file=src%2Fapp%2Fapp.component.ts



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
