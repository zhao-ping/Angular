/**
 * Created by zp on 16-7-5.
 */
var routerApp=angular.module('angularRouter',['ngRoute']);
routerApp.config('$routerProvider',function ($routerProvider) {
    $routerProvider
        .when('/',{template:"11111111111111"})
        .when('/list',{template:"22222222222222"})
        .when('/container',{template:"33333333333333333333"})
        .otherwise({redirectTo:'/'})
})