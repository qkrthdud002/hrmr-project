$(()=>{
  import '@fullcalendar/core/main.css';
  import '@fullcalendar/daygrid/main.css';
  import '@fullcalendar/pluginName/main.css';
  
  document.addEventListener('DOMContentLoaded', function(){
    var calendarEl = document.getElementById('calendar');
    var calendar =new FullCalendar.Calendar(calendarEl,{
      plugins : ['dayGrid', 'timeGrid'],
      header: {
        left:'dayGridMonth, timeGridWeek, timeGridDay custom1',
        center:'title',
        right:'custom2 prevYear, prev, next, nextYear'
      },
      footer:{
        left:'custom1, custom2',
        center:'',
        right:'prev, next'
      },
      customButtons:{
        custom1:{
          text:'custom 1',
          click:function(){
            alert('clicked custom button 1!');
          }
        },
        custom2:{
          text:'custom 2',
          click:function(){
            alert('clicked custom button 2!');
          }
          }
        }

    });
    calendar.render();
  });

  var calendar=new FullCalendar.Calendar(calendarEl, {
    events:[
      {
        title:'All Day Event',
        start:'2020-02-01'
      },
      {
        title:'Long Event',
        start:'2020-02-10',
        end:'2020-02-15'
      },
      {
        groupId:'999',
        title:'Repeating Event',
        start:'2020-02-09T16:00:00'
      }
    ]
  });
  // eventDisplay: 'auto',
  // defaultRangeSeparator: ' - ',
  // titleRangeSeparator: ' \u2013 ',
  // defaultTimedEventDuration: '01:00:00',
  // defaultAllDayEventDuration: { day: 1 },
  // forceEventDuration: false,
  // nextDayThreshold: '00:00:00',
  // dayHeaders: true,
  // initialView: '',
  // aspectRatio: 1.35,
  // headerToolbar: {
  //   start: 'title',
  //   center: '',
  //   end: 'today prev,next'
  // },
  // weekends: true,
  // weekNumbers: false,
  // weekNumberCalculation: 'local',
  // editable: false,
  // nowIndicator: false,
  // scrollTime: '06:00:00',
  // slotMinTime: '00:00:00',
  // slotMaxTime: '24:00:00',
  // showNonCurrentDates: true,
  // lazyFetching: true,
  // startParam: 'start',
  // endParam: 'end',
  // timeZoneParam: 'timeZone',
  // timeZone: 'local',
  // locales: [],
  // locale: '',
  // themeSystem: 'standard',
  // dragRevertDuration: 500,
  // drag<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: true,
  // allDayMaintainDuration: false,
  // unselectAuto: true,
  // dropAccept: '*',
  // eventOrder: 'start,-duration,allDay,title',
  // dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
  // handleWindowResize: true,
  // windowResizeDelay: 100,
  // longPressDelay: 1000,
  // eventDragMinDistance: 5,
  // expandRows: false,
  // navLinks: false,
  // selectable: false

  import $ from'jquery';
  import 'fullcalendar';

  $('container').fullCalendar({
    header:{
      left:'prev, next today',
      center:'title', 
      right:'month, agendaWeek, agendaDay, listWeek'
    },
    defaultDate:'2019-01-12',
    navLinks:true,
    editable:true,
    eventLimit:true,
    events:[
      {
        title:'All Day Event',
        start:'2019-01-01'
      },
      {
        title:'Long Event',
        start:'2019-01-07',
        end:'2019-01-10'
      },
      {
        id:999,
        title:'Repeating Event',
        start:'2019-01-09T16:00:00'
      },
      {
        title:'Conference',
        start:'2019-01-11',
        end:'2019-01-13'
      },
      {
        title:'Meeting',
        start:'2019-01-12T10:30:00',
        end:'2019-01-12T12:30:00'
      },
      {
        title:'Lunch',
        start:'2019-01-12T12:00:00'
      },
      {
        title:'Meeting',
        start:'2019-01-12T14:30:00'
      },
      {
        title:'Happy Hour',
        start:'2019-01-12T17:30:00'
      },
      {
        title:'Dinner',
        start:'2019-01-12T20:00:00'
      },
      {
        title:'Birthday Party',
        start:'2019-01-12T07:00:00'
      },
      {
        title:'Click for Google',
        url:'http://google.com/',
        start:'2019-01-28'
      }
    ]
  });
  $('#container').fullCalendar({
      titleRangeSeparator:' \u2013 ',
      monthYearFormat:'MMMM YYYY',
      defaultTimedEventDuration:'02:00:00',
      defaultAllDayEventDuration: { days: 1 },
      forceEventDuration:false,
      nextDayThreshold:'09:00:00',
      columnHeader:true,
      defaultView:'month',
      aspectRatio: 1.35,
      header: {
        left:'title',
        center:'',
        right:'today prev,next'
      },
      weekends:true,
      weekNumbers:false,
      weekNumberTitle:'W',
      weekNumberCalculation:'local',
      scrollTime:'06:00:00',
      minTime:'00:00:00',
      maxTime:'24:00:00',
      showNonCurrentDates:true,
      lazyFetching:true,
      startParam:'start',
      endParam:'end',
      timezoneParam:'timezone',
      timezone:false,
      locale:null,
      isRTL:false,
      buttonText: {
        prev:'prev',
        next:'next',
        prevYear:'prev year',
        nextYear:'next year',
        year:'year',
        today:'today',
        month:'month',
        week:'week',
        day:'day'
      },
      allDayText:'all-day',
      agendaEventMinHeight: 0,
      theme:false,
      dragOpacity: .75,
      dragRevertDuration: 500,
      dragScroll:true,
      unselectAuto:true,
      dropAccept:'*',
      eventOrder:'title',
      eventLimit:false,
      eventLimitText:'more',
      eventLimitClick:'popover',
      dayPopoverFormat:'LL',
      handleWindowResize:true,
      windowResizeDelay: 100,
      longPressDelay: 1000
    });
    
    var sourceData = [ {
      "category": "John",
      "segments": [ {
        "start": 7,
        "duration": 2,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 2,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Smith",
      "segments": [ {
        "start": 10,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 1,
        "color": "#8dc49f",
        "task": "Task #3"
      }, {
        "duration": 4,
        "color": "#46615e",
        "task": "Task #1"
      } ]
    }, {
      "category": "Ben",
      "segments": [ {
        "start": 12,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "start": 16,
        "duration": 2,
        "color": "#FFE4C4",
        "task": "Task #4"
      } ]
    }, {
      "category": "Mike",
      "segments": [ {
        "start": 9,
        "duration": 6,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 4,
        "color": "#727d6f",
        "task": "Task #2"
      } ]
    }, {
      "category": "Lenny",
      "segments": [ {
        "start": 8,
        "duration": 1,
        "color": "#8dc49f",
        "task": "Task #3"
      }, {
        "duration": 4,
        "color": "#46615e",
        "task": "Task #1"
      } ]
    }, {
      "category": "Scott",
      "segments": [ {
        "start": 15,
        "duration": 3,
        "color": "#727d6f",
        "task": "Task #2"
      } ]
    }, {
      "category": "Julia",
      "segments": [ {
        "start": 9,
        "duration": 2,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 1,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 8,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Bob",
      "segments": [ {
        "start": 9,
        "duration": 8,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 7,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Kendra",
      "segments": [ {
        "start": 11,
        "duration": 8,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "start": 16,
        "duration": 2,
        "color": "#FFE4C4",
        "task": "Task #4"
      } ]
    }, {
      "category": "Tom",
      "segments": [ {
        "start": 9,
        "duration": 4,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 3,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 5,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Kyle",
      "segments": [ {
        "start": 6,
        "duration": 3,
        "color": "#727d6f",
        "task": "Task #2"
      } ]
    }, {
      "category": "Anita",
      "segments": [ {
        "start": 12,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "start": 16,
        "duration": 2,
        "color": "#FFE4C4",
        "task": "Task #4"
      } ]
    }, {
      "category": "Jack",
      "segments": [ {
        "start": 8,
        "duration": 10,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      } ]
    }, {
      "category": "Kim",
      "segments": [ {
        "start": 12,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 3,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Aaron",
      "segments": [ {
        "start": 18,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 2,
        "color": "#FFE4C4",
        "task": "Task #4"
      } ]
    }, {
      "category": "Alan",
      "segments": [ {
        "start": 17,
        "duration": 2,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 2,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Ruth",
      "segments": [ {
        "start": 13,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 1,
        "color": "#8dc49f",
        "task": "Task #3"
      }, {
        "duration": 4,
        "color": "#46615e",
        "task": "Task #1"
      } ]
    }, {
      "category": "Simon",
      "segments": [ {
        "start": 10,
        "duration": 3,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "start": 17,
        "duration": 4,
        "color": "#FFE4C4",
        "task": "Task #4"
      } ]
    }, {
      "category": "John",
      "segments": [ {
        "start": 7,
        "duration": 2,
        "color": "#46615e",
        "task": "Task #1"
      }, {
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 2,
        "color": "#8dc49f",
        "task": "Task #3"
      } ]
    }, {
      "category": "Ryan",
      "segments": [ {
        "start": 10,
        "duration": 2,
        "color": "#727d6f",
        "task": "Task #2"
      }, {
        "duration": 1,
        "color": "#8dc49f",
        "task": "Task #3"
      }, {
        "duration": 4,
        "color": "#46615e",
        "task": "Task #1"
      } ]
    } ];
    
    /**
     * Function that returns chunk of the data relative to current page
     */
    function getPageData( page ) {
      var pageSize = 5;
      var from = page * pageSize;
      var to = from + pageSize;
      return sourceData.slice( from, to );
    }
    
    /**
     * Loads page data on the chart
     */
    function setPageData ( page ) {
      chart.dataProvider = getPageData( page );
      chart.validateData();
    }
    
    /**
     * Create chart
     */
    AmCharts.useUTC = true;
    var chart = AmCharts.makeChart( "chartdiv", {
      "type": "gantt",
      "theme": "light",
      "period": "hh",
      "dataDateFormat": "YYYY-MM-DD",
      "balloonDateFormat": "JJ:NN",
      "columnWidth": 0.5,
      "valueAxis": {
        "type": "date",
        "minimum": 7,
        "maximum": 31
      },
      "brightnessStep": 10,
      "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
      },
      "rotate": true,
      "categoryField": "category",
      "segmentsField": "segments",
      "colorField": "color",
      "startDate": "2021-10-27",
      "startField": "start",
      "endField": "end",
      "durationField": "duration",
      "dataProvider": getPageData( 0 ),
      "valueScrollbar": {
        "autoGridCount": true
      },
      "chartCursor": {
        "cursorColor": "#55bb76",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable": false,
        "valueZoomable": true
      }
    } );
});
