module.exports = [function () {
    "ngInject";
    'use strict';
    var base = null,
        provider = this,
        apiBase = null;

    this.getBase = function () {
        return base;
    };

    this.setBase = function (b) {
        base = b;
    };

    this.getApiBase = function () {
        return apiBase;
    };

    this.setApiBase = function (b) {
        apiBase = b;
    };

    this.$get = ['$window', '$browser', function ($window, $browser) {

        var calculateBase = function () {
            return $window.BASE_HREF || $browser.baseHref() || '/';
        };
        var calculateApiBase = function () {
            return $window.API_BASE || calculateBase();
        };


        var UrlHelper = {
            asset: function (path) {
                if (!path) {
                    throw new Error("$rootScope.asset needs a valid relative path");
                }
                var b = provider.getBase();
                if (!b) {
                    b = calculateBase();
                }
                return b + path.replace(/^\//, '');
            },
            api: function (path) {
                if (!path) {
                    throw new Error("$rootScope.asset needs a valid relative path");
                }
                var b = provider.getApiBase();
                if (!b) {
                    b = calculateApiBase();
                }
                return b + path.replace(/^\//, '');
            }
        };
        /**
         * alias to asset()
         */
        UrlHelper.url = UrlHelper.asset;

        return UrlHelper;
    }];
}];
