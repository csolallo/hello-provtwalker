# es6ified

A proof of concept for writing angular 1.3.x in ES6 (ECMAScript 2015).

## Tools

- [babel](https://babeljs.io/) for ES5 to ES6 transpilation.
- [jspm](http://jspm.io/) for package/dependency management, and bundling.
- [SystemJS](https://github.com/systemjs/systemjs) for module loading.
- [npm scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) as task runner.

All these tools are optional, but this suite works well together.

## installation

```bash
npm install  
npm run build  
npm run dev
```

## Misc notes

- 125k+ npm packages become available.
- `$inject`ing within module definitions should migrate well to `ng-annotate`, or Angular 2's injection attributes.
- can be awkward mix/match between `import` on `$inject`
- pushState is much prettier than hashbang.

## TODO

- example of a unit test with karma
- example of a e2e test with protractor
- pass in NODE_ENV to toggle production script in view


### es6 with angular articles:

- http://martinmicunda.com/2015/02/09/how-to-start-writing-apps-with-es6-angular-1x-and-jspm/
- https://gocardless.com/blog/es6-angular/
- http://blog.thoughtram.io/angularjs/es6/2015/01/23/exploring-angular-1.3-using-es6.html
