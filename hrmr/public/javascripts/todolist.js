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
  const newtodotext = $('#todoid').val();

});