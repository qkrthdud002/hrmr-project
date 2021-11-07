$(()=>{

  $('.delete-btn').on('click', (event)=>{
    const btn=$(event.currentTarget);
    const todo_id=btn.attr('todo_id');

    const url='/todolist/'+todo_id;
    $.ajax({
      url:url,
      type:'delete',
      contentType:'application/json',
    })
    .done((response)=>{
      location.reload();
    })
    .fail((response, error)=>{

    })
  });

  $('.stopwatch-btn').on('click', (event)=>{
    const btn=$(event.currentTarget);
    const todo_id=btn.attr('todo_id');
    const url='/stopwatch/'+todo_id;
    console.log(url)
    location.replace('/stopwatch/'+todo_id);
  });

  // 새 할일 등록
  $('#newTodo').on('click', ()=>{
    const newtodotext = $('#newtodotext').val();

    if(newtodotext === ''){
      alert('할 일을 추가하세요.');
      return;
    }

    const data={
      todotext:newtodotext
    }
    $.ajax({
      url:'/todolist',
      type:'post',
      contentType:'application/json',
      data:JSON.stringify(data)
    })
    .done((response)=>{
      //location.replace('/todolist')
      location.reload();
    })
    .fail((request, status, err)=>{
      
    });
  });

  // am4core.ready(()=>{
  //   var container = am4core.create("chartdiv", am4core.Container);
  //   container.width = am4core.percent(100);
  //   container.height = am4core.percent(10);

  //   var interfaceColors = new am4core.InterfaceColorSet();
  //   var colorSet = new am4core.ColorSet();
    
  //   var chart = container.createChild(am4plugins_timeline.CurveChart);

  //   chart.data = [
  //     //{
  //   //   "start_time": "2021-11-06 08:00",
  //   //   "end_time": "2021-11-06 17:00",
  //   //   "todo_text": "Official workday"
  //   // }, {
  //   //   "start_time": "2021-11-06 06:00",
  //   //   "end_time": "2021-11-06 11:00",
  //   //   "todo_text": "Gathering requirements",
  //   //   "bulletf1":false
  //   // }, {
  //   //   "start_time": "2021-11-1006 11:30",
  //   //   "end_time": "2021-11-06 16:30",
  //   //   "todo_text": "Development"
  //   // },{
  //   //   "start_time": "2021-11-06 16:00",
  //   //   "end_time": "2021-11-06 18:00",
  //   //   "todo_text": "Producing specifications"
  //   // }, {
  //   //   "start_time": "2021-11-06 13:00",
  //   //   "end_time": "2021-11-06 01:00",
  //   //   "todo_text": "Testing",
  //   //   "bulletf2":false 
  //   // },
  //   {
  //     "todo_text": ""
  //   } ].reverse();

  //   // chart 의 x축, y축, 등등의 설정
  //   chart.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
  //   chart.dateFormatter.inputDateFormat = "yyyy-MM-ddTHH:mm:ss.SSSZ";
  //   chart.dy = 90;
  //   chart.maskBullets = false;

  //   var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  //   categoryAxis.dataFields.category = "todo_text";
  //   categoryAxis.renderer.labels.template.paddingRight = 25;
  //   categoryAxis.renderer.minGridDistance = 10;
  //   categoryAxis.renderer.innerRadius = 0;
  //   categoryAxis.renderer.radius = 100;
  //   categoryAxis.renderer.grid.template.location = 1;

  //   var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   dateAxis.renderer.minGridDistance = 70;
  //   dateAxis.min = new Date("2021-11-07 06:00").getTime();
  //   dateAxis.max = new Date("2021-11-08 06:00").getTime();

  //   dateAxis.baseInterval = { count: 1, timeUnit: "minute" };
  //   dateAxis.startLocation = -0.5;

  //   //dateAxis.renderer.points = [{ x: -400, y: 0 }, { x: -250, y: 0 }, { x: 0, y: 60 }, { x: 250, y: 0 }, { x: 400, y: 0 }];
  //   dateAxis.renderer.autoScale = false;
  //   dateAxis.renderer.polyspline.tensionX = 0.8;
  //   dateAxis.renderer.tooltipLocation = 0;
  //   dateAxis.renderer.grid.template.disabled = true;
  //   dateAxis.renderer.line.strokeDasharray = "1,4";
  //   dateAxis.renderer.line.strokeOpacity = 0.7;
  //   dateAxis.tooltip.background.fillOpacity = 0.2;
  //   dateAxis.tooltip.background.cornerRadius = 5;
  //   dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  //   dateAxis.tooltip.label.paddingTop = 7;

  //   var labelTemplate = dateAxis.renderer.labels.template;
  //   labelTemplate.verticalCenter = "middle";
  //   labelTemplate.fillOpacity = 0.7;
  //   labelTemplate.background.fill = interfaceColors.getFor("background");
  //   labelTemplate.background.fillOpacity = 1;
  //   labelTemplate.padding(7,7,7,7);

  //   var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
  //   series.columns.template.height = am4core.percent(15);
  //   series.columns.template.tooltipText = "{categoryX}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

  //   series.dataFields.openDateX = "start_time";
  //   series.dataFields.dateX = "end_time";
  //   series.dataFields.categoryY = "todo_text";
  //   series.columns.template.propertyFields.fill = "color"; // get color from data
  //   series.columns.template.propertyFields.stroke = "color";
  //   series.columns.template.strokeOpacity = 0;

  //   series.columns.template.adapter.add("fill", function (fill, target) {
  //     return chart.colors.getIndex(target.dataItem.index * 3);
  //   })

  //   var flagBullet1 = new am4plugins_bullets.FlagBullet();
  //   series.bullets.push(flagBullet1);
  //   flagBullet1.disabled = true;
  //   flagBullet1.propertyFields.disabled = "bulletf1";
  //   flagBullet1.locationX = 1;
  //   flagBullet1.label.text = "start_time";

  //   var flagBullet2 = new am4plugins_bullets.FlagBullet();
  //   series.bullets.push(flagBullet2);
  //   flagBullet2.disabled = true;
  //   flagBullet2.propertyFields.disabled = "bulletf2";
  //   flagBullet2.locationX = 0;
  //   flagBullet2.background.fill = interfaceColors.getFor("background");
  //   flagBullet2.label.text = "end_time";

  //   var bullet = new am4charts.CircleBullet();
  //   series.bullets.push(bullet);
  //   bullet.circle.radius = 3;
  //   bullet.circle.strokeOpacity = 0;
  //   bullet.locationX = 0;

  //   bullet.adapter.add("fill", function (fill, target) {
  //     return chart.colors.getIndex(target.dataItem.index * 3);
  //   })

  //   var bullet2 = new am4charts.CircleBullet();
  //   series.bullets.push(bullet2);
  //   bullet2.circle.radius = 3;
  //   bullet2.circle.strokeOpacity = 0;
  //   bullet2.propertyFields.fill = "color";
  //   bullet2.locationX = 1;

  //   bullet2.adapter.add("fill", function (fill, target) {
  //     return chart.colors.getIndex(target.dataItem.index * 3);
  //   })

  //   chart.scrollbarX = new am4core.Scrollbar();
  //   chart.scrollbarX.align = "center"
  //   chart.scrollbarX.width = 800;
  //   chart.scrollbarX.parent = chart.bottomAxesContainer;
  //   chart.scrollbarX.dy = - 90;
  //   chart.scrollbarX.opacity = 0.4;

  //   var cursor = new am4plugins_timeline.CurveCursor();
  //   chart.cursor = cursor;
  //   cursor.xAxis = dateAxis;
  //   cursor.yAxis = categoryAxis;
  //   cursor.lineY.disabled = true;
  //   cursor.lineX.strokeDasharray = "1,4";
  //   cursor.lineX.strokeOpacity = 1;

  //   dateAxis.renderer.tooltipLocation2 = 0;
  //   categoryAxis.cursorTooltipEnabled = false;



  //   //차트에 몇시간 공부했는지 나타나게 해주는 코드
  //   var axis = clock.xAxes.push(new am4charts.ValueAxis());
  //   axis.min = 0;
  //   axis.max = 12;
  //   axis.strictMinMax = true;
    
  //   axis.renderer.line.strokeWidth = 1;
  //   axis.renderer.line.strokeOpacity = 0.5;
  //   axis.renderer.line.strokeDasharray = "1,4";
  //   axis.renderer.minLabelPosition = 0.05; // hides 0 label
  //   axis.renderer.inside = true;
  //   axis.renderer.labels.template.radius = 30;
  //   axis.renderer.grid.template.disabled = true;
  //   axis.renderer.ticks.template.length = 12;
  //   axis.renderer.ticks.template.strokeOpacity = 1;
    
  //   // serves as a clock face fill
  //   var range = axis.axisRanges.create();
  //   range.value = 0;
  //   range.endValue = 12;
  //   range.grid.visible = false;
  //   range.tick.visible = false;
  //   range.label.visible = false;
    
  //   var axisFill = range.axisFill;
    
  //   // hands
  //   var hourHand = clock.hands.push(new am4charts.ClockHand());
  //   hourHand.radius = am4core.percent(60);
  //   hourHand.startWidth = 5;
  //   hourHand.endWidth = 5;
  //   hourHand.rotationDirection = "clockWise";
  //   hourHand.pin.radius = 8;
  //   hourHand.zIndex = 1;
    
  //   var minutesHand = clock.hands.push(new am4charts.ClockHand());
  //   minutesHand.rotationDirection = "clockWise";
  //   minutesHand.startWidth = 3;
  //   minutesHand.endWidth = 3;
  //   minutesHand.radius = am4core.percent(78);
  //   minutesHand.zIndex = 2;
    
  //   chart.cursor.events.on("cursorpositionchanged", function (event) {
  //      var value = dateAxis.positionToValue(event.target.xPosition)
  //      var date = new Date(value);
  //      var hours = date.getHours();
  //      var minutes = date.getMinutes();
  //      // set hours
  //      hourHand.showValue(hours + minutes / 60, 0);
  //      // set minutes
  //      minutesHand.showValue(12 * minutes/ 60, 0);       
  //   })





  am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd",
      dateFields: ["valueX", "openValueX"]
    });
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }))
    
    var colors = chart.get("colors");
    
    // Data
    var data = [
      {
        todo_text: "John",
        start_time: "2021-11-07 08:00",
        end_time: "2021-11-07 10:00",
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0)
        }
      },
      {
        todo_text: "John",
        start_time: "2021-11-07 12:00",
        end_time: "2021-11-07 15:00",
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0.4)
        }
      },
      {
        todo_text: "John",
        start_time: "20121-11-07 15:30",
        end_time: "2021-11-07 21:30",
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0.8)
        }
      },
    
      {
        todo_text: "Jane",
        start_time: "2021-11-07 09:00",
        end_time: "2021-11-07 12:00",
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 0)
        }
      },
      {
        todo_text: "Jane",
        start_time: "2021-11-07 13:00",
        end_time: "2021-11-07 17:00",
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 0.4)
        }
      }
      //,
    
      // {
      //   category: "Peter",
      //   fromDate: "2018-01-01 11:00",
      //   toDate: "2018-01-01 16:00",
      //   columnSettings: {
      //     fill: am5.Color.brighten(colors.getIndex(4), 0)
      //   }
      // },
      // {
      //   category: "Peter",
      //   fromDate: "2018-01-01 16:00",
      //   toDate: "2018-01-01 19:00",
      //   columnSettings: {
      //     fill: am5.Color.brighten(colors.getIndex(4), 0.4)
      //   }
      // },
    
      // {
      //   category: "Melania",
      //   fromDate: "2018-01-01 16:00",
      //   toDate: "2018-01-01 20:00",
      //   columnSettings: {
      //     fill: am5.Color.brighten(colors.getIndex(6), 0)
      //   }
      // },
      // {
      //   category: "Melania",
      //   fromDate: "2018-01-01 20:30",
      //   toDate: "2018-01-02 00:00",
      //   columnSettings: {
      //     fill: am5.Color.brighten(colors.getIndex(6), 0.4)
      //   }
      // },
    
      // {
      //   category: "Donald",
      //   fromDate: "2018-01-01 13:00",
      //   toDate: "2018-01-02 00:00",
      //   columnSettings: {
      //     fill: am5.Color.brighten(colors.getIndex(8), 0)
      //   }
      // }
    ];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "todo_text",
        renderer: am5xy.AxisRendererY.new(root, { inversed: true }),
        tooltip: am5.Tooltip.new(root, {
          themeTags: ["axis"],
          animationDuration: 200
        })
      })
    );
    
    yAxis.data.setAll([
      { todo_text: "John" },
      { todo_text: "Jane" },
      { todo_text: "Peter" },
      { todo_text: "Melania" },
      { todo_text: "Donald" }
    ]);
    
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      openValueXField: "start_time",
      valueXField: "end_time",
      categoryYField: "todo_text",
      sequencedInterpolation: true
    }));
    
    series.columns.template.setAll({
      templateField: "columnSettings",
      strokeOpacity: 0,
      tooltipText: "{todo_text}: {openValueX.start_time('yyyy-MM-dd HH:mm')} - {valueX.start_time('yyyy-MM-dd HH:mm')}"
    });
    
    series.data.processor = am5.DataProcessor.new(root, {
      dateFields: ["start_time", "end_time"],
      dateFormat: "yyyy-MM-dd HH:mm"
    });
    series.data.setAll(data);
    
    // Add scrollbars
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
    
   // }); // end am5.ready()
    



    $.ajax({
      url:'/todolist/records',
      type:'get',
      contentType:'application/json',
    })
    .done((reverse)=>{
      console.log(reverse)
      chart.data=JSON.stringify(reverse)
    })
    .fail((request, status, err)=>{
      
    });
  });
});