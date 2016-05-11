(function (global) {

    var map = {
        app: 'app',
        rxjs: 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular'
    };

    var packages = {
        app: {main: 'main.js', defaultExtension: 'js'},
        rxjs: {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'}
    };

    var packageNames = [
        '@angular/core',
        '@angular/compiler',
        '@angular/common',
        '@angular/http',
        '@angular/router',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/upgrade', '@angular/testing',
        '@angular/router-deprecated'
    ];

    packageNames.forEach(function (packageName) {
        packages[packageName] = {main: 'index.js', defaultExtension: 'js'};
    });

    System.config({
        map: map,
        packages: packages
    });
})();