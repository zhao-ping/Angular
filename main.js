/**
 * Created by zp on 16-7-5.
 */
var routerApp=angular.module('angularRouter',[]);
routerApp.controller('routerCtrl',function($scope){
    $scope.items=[
        {type:'text'},
        {type:'date'}
    ];
    $scope.isShow=true;
    $scope.alertShow=false;
    $scope.toggle=function () {
        $scope.isShow=!$scope.isShow;
    };
    $scope.toggle1=function () {
        $scope.alertShow=!$scope.alertShow;
    };
    $scope.deleteitem=function(index){
        $scope.items.splice(index,1);
    };
    $scope.addItem=function () {
        var itemType=jQuery('input[type=radio]:checked').val();
        console.log(itemType);
        var newElement={type:itemType};
        $scope.items.push(newElement);
    }
});
