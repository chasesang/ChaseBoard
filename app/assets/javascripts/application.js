// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require cocoon
//= require underscore
//= require bootstrap-sprockets
//= require chosen-jquery
//= require gmaps/google
//= require_tree .
$(document).ready(function(){
  $('.chosen-select').chosen();
})
$(function () {
  $('[data-toggle="popover"]').popover()
})

/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});


var Script = function () {

//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });

//    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }

        $(window).on('load', responsiveView);
        $(document).on('click', function(){
           if(!mobilecheck()){
               $(window).on('resize', responsiveView);
           }
        });
    });

    $('.sidebar-toggle-box').click(function () {

        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
        var owl = $("#owl-demo").data("owlCarousel");
        owl.reinit();
    });

        jQuery('.panel .tools .fa-chevron-down').click(function () {
            var el = jQuery(this).parents(".panel").children(".panel-body");
            if (jQuery(this).hasClass("fa-chevron-down")) {
                jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });

    // by default collapse widget

    //    $('.panel .tools .fa').click(function () {
    //        var el = $(this).parents(".panel").children(".panel-body");
    //        if ($(this).hasClass("fa-chevron-down")) {
    //            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
    //            el.slideUp(200);
    //        } else {
    //            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    //            el.slideDown(200); }
    //    });

        jQuery('.panel .tools .fa-times').click(function () {
            jQuery(this).parents(".panel").parent().remove();
        });


    //    tool tips

        $('.tooltips').tooltip();

    //    popovers

        $('.popovers').popover();


// calendar


// draggable porlet

var DraggablePortlet = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $("#draggable_portlets").sortable({
                connectWith: ".panel",
                items: ".panel",
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: "pointer"
            });

            $(".column").disableSelection();

        }

    };

}();




//
// $('.chosen-select').chosen
//    allow_single_deselect: true
//    no_results_text: 'No results matched'
//    width: '200px'
