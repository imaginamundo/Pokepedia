(function($, container){
    "use strict";

    // Used to get requests to page
    var trigger = {
        initListeners: function(){
            $(container)
            // Sample
            .on('click','#open-search', function(e) {
                $('#search').addClass('active');

                e.preventDefault();
                e.stopPropagation();
            });
        }
    };

    // Used to bind objects to view
    var view = {

    };
    // Used to do requests to server and initialize things
    var services = {
        initialize: function(){
            trigger.initListeners();
        }
    };

    // Document ready
    (function(){
        services.initialize();
    })();
})(jQuery, document);
