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
      todo_text:newtodotext,
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

  // chart
  $.ajax({
    url:'/todolist/records',
    type:'get',
    contentType:'application/json',
  })
  .done((response)=>{
    console.log(response);
    initChart(response);

  })
  .fail((request, status, err)=>{
    
  });

  function initChart(data){
    // const offsetForKR = 1000 * 60 * 60 * 9;
    // console.log(data)
    // data.forEach((it) => {
    //   console.log(Date.parse(it.start_time))
    //   //it.start_time = new Date(Date.parse(it.start_time) + offsetForKR).toString()
    //   console.log(it.start_time)
    //   //it.end_time = new Date(Date.parse(it.end_time) + offsetForKR).toString()
    // })


    console.log(data)
    var root = am5.Root.new("chartdiv");
    root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd",
      dateFields: ["end_time", "start_time"]
    });
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }))
    
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

    let categories=[]
    let category_text=[]
    data.forEach(e=>{
      if(false==category_text.includes(e.todo_text)){
        category_text.push(e.todo_text)
        categories.push({todo_text:e.todo_text})
      }
    })
    
    yAxis.data.setAll(categories);
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "second", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );
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
      tooltipText: "{todo_text}: {openValueX.formatDate('yyyy-MM-dd HH:mm:ss')} - {valueX.formatDate('yyyy-MM-dd HH:mm:ss')}"
    });
    
    series.data.processor = am5.DataProcessor.new(root, {
      dateFields: ["start_time", "end_time"],
      dateFormat: "yyyy-MM-dd HH:mm:ss"
    });
    series.data.setAll(data);
    
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    series.appear();
    chart.appear(1000, 100);
  }
});