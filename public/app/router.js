app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: 'homeController'
           
        })
        .state('product', {
            url: "/product/:productID",
            templateUrl: "templates/product.html",
            controller: 'productController'
            
        })
         .state('search', {
            url: "/search",
            templateUrl: "templates/search.html",
            controller: 'searchController'
            
                  
        });
});