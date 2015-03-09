System.config({
  "baseURL": "/js",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "es6ified/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.14",
    "angular-route": "github:angular/bower-angular-route@1.3.14",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular/bower-angular-route@1.3.14": {
      "angular": "github:angular/bower-angular@1.3.14"
    }
  }
});

