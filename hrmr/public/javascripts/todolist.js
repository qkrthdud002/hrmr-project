$(()=>{
  console.log('script loaded')
  document.getElementById('newTodo').onclick = (ev) => {
  console.log(ev)
  }
  alert('loaded'); 
});

$('div').find('input').each(function(){
  console.log($(this.type()));
});