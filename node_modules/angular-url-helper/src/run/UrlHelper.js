module.exports = ['$rootScope', 'UrlHelper', function($rootScope, UrlHelper) {
    $rootScope.asset = UrlHelper.asset;

    $rootScope.url = $rootScope.asset;
}];
