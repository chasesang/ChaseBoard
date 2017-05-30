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
//= require moment
//= require fullcalendar
//= require external-dragging-calendar
//= require_tree .
$(document).ready(function(){
  $('.chosen-select').chosen();

  $('[data-toggle="popover"]').popover()
})
var Script = function () {


    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });


}();

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

// right slidebar

$(function(){
 $.slidebars();
});

// for mobile check
function mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

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

// custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: '', scrollspeed: 60});

    //$("html").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000', scrollspeed: 100, mousescrollstep: 60});

    $(".table-responsive").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000', horizrailenabled: true });



// widget tools

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



// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }






}();


$(document).ready(function() {

				// Manage status of dragging event and calendar
				var calEventStatus = [];


				/* Required functions */

		        var isEventOverDiv = function(x, y) {

		            var external_events = $( '#external-events' );
		            var offset = external_events.offset();
		            offset.right = external_events.width() + offset.left;
		            offset.bottom = external_events.height() + offset.top;

		            // Compare
		            if (x >= offset.left
		                && y >= offset.top
		                && x <= offset.right
		                && y <= offset .bottom) { return true; }
		            return false;

		        }


		        function makeEventsDraggable () {

			        $('.fc-draggable').each(function() {

					  	// store data so the calendar knows to render an event upon drop
			            $(this).data('event', {
			                title: $.trim($(this).text()), // use the element's text as the event title
			                stick: true // maintain when user navigates (see docs on the renderEvent method)
			            });

			            // make the event draggable using jQuery UI
			            $(this).draggable({
			                zIndex: 999,
			                revert: true,      // will cause the event to go back to its
			                revertDuration: 0  //  original position after the drag
			            });

			            console.log('makeEventsDraggable');

			            // Dirty fix to remove highlighted blue background
			            $("td").removeClass("fc-highlight");

					});

			    }



		        /* initialize the external events
		        -----------------------------------------------------------------*/

		        $('#external-events .fc-event').each(function() {

		            // store data so the calendar knows to render an event upon drop
		            $(this).data('event', {
		                title: $.trim($(this).text()), // use the element's text as the event title
		                stick: true // maintain when user navigates (see docs on the renderEvent method)
		            });

		            // make the event draggable using jQuery UI
		            $(this).draggable({
		                zIndex: 999,
		                revert: true,      // will cause the event to go back to its
		                revertDuration: 0  //  original position after the drag
		            });

		        });


		        /* initialize the calendar1
		        -----------------------------------------------------------------*/

		        $('#calendar1').fullCalendar({
		            header: {
		                left: 'prev,next today',
		                center: 'title',
		                right: 'month,agendaWeek,agendaDay'
		            },
		            editable: true,
		            droppable: true, // this allows things to be dropped onto the calendar
		            dragRevertDuration: 0,
		            eventLimit: true, // allow "more" link when too many events
		            drop: function(date, jsEvent, ui) { console.log('calendar 1 drop'); console.log(date); console.log(jsEvent); console.log(ui); console.log(this);
		                // is the "remove after drop" checkbox checked?
		                if ($('#drop-remove').is(':checked')) {
		                    // if so, remove the element from the "Draggable Events" list
		                    $(this).remove();
		                }

		                // if event dropped from another calendar, remove from that calendar
		                if (typeof calEventStatus['calendar'] != 'undefined') {
		                	$(calEventStatus['calendar']).fullCalendar('removeEvents', calEventStatus['event_id']);
		                	//$(calEventStatus['calendar']).fullCalendar('unselect');
						}

		                makeEventsDraggable();
		            },
		            eventReceive: function( event ) {  console.log('calendar 1 eventReceive');
		            	makeEventsDraggable();
		            },
		            eventDrop: function( event, delta, revertFunc, jsEvent, ui, view ) {  console.log('calendar 1 eventDrop');
		            	makeEventsDraggable();
		            },
		            eventDragStart: function( event, jsEvent, ui, view ) {
		            	console.log(event); console.log(jsEvent); console.log(ui); console.log(view);

		            	// Add dragging event in global var
		            	calEventStatus['calendar'] = '#calendar1';
		            	calEventStatus['event_id'] = event._id;
		            	console.log('calendar 1 eventDragStart');
		            },
		            eventDragStop: function( event, jsEvent, ui, view ) { console.log('calendar 1 eventDragStop');

		                if(isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
		                    $('#calendar1').fullCalendar('removeEvents', event._id);
		                    var el = $( "<div class='fc-event'>" ).appendTo( '#external-events-listing' ).text( event.title );
		                    el.draggable({
		                      zIndex: 999,
		                      revert: true,
		                      revertDuration: 0
		                    });
		                    el.data('event', { title: event.title, id :event.id, stick: true });
		                }

		                calEventStatus = []; // Empty
		                makeEventsDraggable();
		            },
		            eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
		                makeEventsDraggable();
		            },
		            viewRender: function() { console.log('calendar 1 viewRender');
		                makeEventsDraggable();
		            },
		        });


		        /* initialize the calendar2
		        -----------------------------------------------------------------*/

		        $('#calendar2').fullCalendar({
		            header: {
		                left: 'prev,next today',
		                center: 'title',
		                right: 'month,agendaWeek,agendaDay'
		            },
		            editable: true,
		            droppable: true, // this allows things to be dropped onto the calendar
		            dragRevertDuration: 0,
		            eventLimit: true, // allow "more" link when too many events
		            drop: function(date, jsEvent, ui) { console.log('calendar 2 drop'); console.log(date); console.log(jsEvent); console.log(ui); console.log(this);

		                // is the "remove after drop" checkbox checked?
		                if ($('#drop-remove').is(':checked')) {
		                    // if so, remove the element from the "Draggable Events" list
		                    $(this).remove();
		                }

		                // if event dropped from another calendar, remove from that calendar
		                if (typeof calEventStatus['calendar'] != 'undefined') {
		                	$(calEventStatus['calendar']).fullCalendar('removeEvents', calEventStatus['event_id']);
						}

		                makeEventsDraggable();
		            },
		            eventReceive: function( event ) { console.log('calendar 2 eventReceive');
		            	makeEventsDraggable();
		            },
		            eventDrop: function( event, delta, revertFunc, jsEvent, ui, view ) { console.log('calendar 2 eventDrop');
		            	makeEventsDraggable();
		            },
		            eventDragStart: function( event, jsEvent, ui, view ) {

		            	// Add dragging event in global var
		            	calEventStatus['calendar'] = '#calendar2';
		            	calEventStatus['event_id'] = event._id;
		            	console.log('calendar 2 eventDragStart');
		            },
		            eventDragStop: function( event, jsEvent, ui, view ) {  console.log('calendar 2 eventDragStop');

		                if(isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
		                    $('#calendar2').fullCalendar('removeEvents', event._id);
		                    var el = $( "<div class='fc-event'>" ).appendTo( '#external-events-listing' ).text( event.title );
		                    el.draggable({
		                      zIndex: 999,
		                      revert: true,
		                      revertDuration: 0
		                    });
		                    el.data('event', { title: event.title, id :event.id, stick: true });
		                }

		                calEventStatus = []; // Empty
		                makeEventsDraggable();
		            },
		            eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
		                makeEventsDraggable();
		            },
		            viewRender: function() { console.log('calendar 2 viewRender');
		                makeEventsDraggable();
		            },
		        });


		        /* initialize the calendar3
		        -----------------------------------------------------------------*/

		        $('#calendar3').fullCalendar({
		            header: {
		                left: 'prev,next today',
		                center: 'title',
		                right: 'month,agendaWeek,agendaDay'
		            },
		            editable: true,
		            droppable: true, // this allows things to be dropped onto the calendar
		            dragRevertDuration: 0,
		            eventLimit: true, // allow "more" link when too many events
		            drop: function(date, jsEvent, ui) { console.log('calendar 3 drop'); console.log(date); console.log(jsEvent); console.log(ui); console.log(this);
		                // is the "remove after drop" checkbox checked?
		                if ($('#drop-remove').is(':checked')) {
		                    // if so, remove the element from the "Draggable Events" list
		                    $(this).remove();
		                }

		                // if event dropped from another calendar, remove from that calendar
		                if (typeof calEventStatus['calendar'] != 'undefined') {
		                	$(calEventStatus['calendar']).fullCalendar('removeEvents', calEventStatus['event_id']);
						}

		                makeEventsDraggable();
		            },
		            eventReceive: function( event ) {  console.log('calendar 3 eventReceive');
		            	makeEventsDraggable();
		            },
		            eventDrop: function( event, delta, revertFunc, jsEvent, ui, view ) {  console.log('calendar 3 eventDrop');
		            	makeEventsDraggable();
		            },
		            eventDragStart: function( event, jsEvent, ui, view ) {
		            	console.log(event); console.log(jsEvent); console.log(ui); console.log(view);

		            	// Add dragging event in global var
		            	calEventStatus['calendar'] = '#calendar3';
		            	calEventStatus['event_id'] = event._id;
		            	console.log('calendar 3 eventDragStart');
		            },
		            eventDragStop: function( event, jsEvent, ui, view ) { console.log('calendar 3 eventDragStop');

		                if(isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
		                    $('#calendar3').fullCalendar('removeEvents', event._id);
		                    var el = $( "<div class='fc-event'>" ).appendTo( '#external-events-listing' ).text( event.title );
		                    el.draggable({
		                      zIndex: 999,
		                      revert: true,
		                      revertDuration: 0
		                    });
		                    el.data('event', { title: event.title, id :event.id, stick: true });
		                }

		                calEventStatus = []; // Empty
		                makeEventsDraggable();
		            },
		            eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
		                makeEventsDraggable();
		            },
		            viewRender: function() { console.log('calendar 3 viewRender');
		                makeEventsDraggable();
		            },
		        });

<<<<<<< HEAD

		    });
=======
// $('#calendar').fullCalendar({
//   schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
// });
>>>>>>> css2

//
// $('.chosen-select').chosen
//    allow_single_deselect: true
//    no_results_text: 'No results matched'
//    width: '200px'
