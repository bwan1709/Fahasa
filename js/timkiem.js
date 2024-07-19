app.controller('TrangTimKiemController', function ($scope) {
    $scope.prop = 'name';

    $scope.sortBy = function(prop){
        $scope.prop = prop;
    }

    $scope.selectedOrigins = []; 
    $scope.filteredProducts = [];
    $scope.filterProducts = function () {
        if ($scope.selectedOrigins.length === 0) {
            $scope.filteredProducts = $scope.Products; 
        } else {
            $scope.filteredProducts = $scope.Products.filter(function (product) {
                return $scope.selectedOrigins.includes(product.xuatxu);
            });
        }
    };
    
    $scope.originChanged = function () {
        $scope.filterProducts();
    };

    // TÌm kiếm

});
