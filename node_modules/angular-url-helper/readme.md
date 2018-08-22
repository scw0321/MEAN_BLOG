```
$ npm install angular-url-helper
```

```
angular.module('myModule',[
    require('angular-url-helper')
]);
```

```
module.exports = function(UrlHelper, $scope, $http){
    var myApiUrl = UrlHelper.url('api/user'); // https://example.com/my/base/url/api/user
    var myApiUrl = $scope.url('api/user');
}
```

```
<img ng-src="{{asset('static/foo.jpg')}}"> <!-- https://example.com/my/base/url/static/foo.jpg -->
```
