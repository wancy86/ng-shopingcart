angular.module('myapp', [])

.run(function() {
    console.log('1111:', 1111);
})

.controller('shoppingCartCtrl', ['$scope', function($scope) {
    console.log('1111:', 2222);
    $scope.title = "京东商城";
    $scope.goods = [{
        name: "apple",
        price: 29.9,
        imgUrl: "http://img13.360buyimg.com/n0/jfs/t274/83/2090217694/98857/a305ee1b/5450e819Nb4f4ada9.jpg"
    }, {
        name: "orange",
        price: 72,
        imgUrl: "https://img11.360buyimg.com/n0/jfs/t2722/130/2964403780/301720/b495be0b/577a33dfNce88ebd9.jpg"
    }, {
        name: "banana",
        price: 23,
        imgUrl: "https://img11.360buyimg.com/n0/jfs/t3082/52/1016555296/267303/5e305da1/57c403e9N15c1c8bf.jpg"
    }];

    $scope.cart = [];

    $scope.addtoCart = function(index) {
        console.log('1111:', index);
        if (!$scope.cart) $scope.cart = [];
        $scope.cart.push({
            good: $scope.goods[index],
            number: 1
        });
    }

}]);
