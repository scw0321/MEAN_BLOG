describe('UrlHelper', function(){
    beforeEach(module('angular-url-helper'));

    var UrlHelper = null;

    beforeEach(inject(function(_UrlHelper_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        UrlHelper = _UrlHelper_;
    }));

    it('should work', function(){
        console.log(UrlHelper);
        expect(true).toEqual(true);
    });
});
