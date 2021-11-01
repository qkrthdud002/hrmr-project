$(()=>{
  console.log('script loaded')
  document.getElementById('newTodo').onclick = (ev) => {
  console.log(ev)
  }
  alert('loaded'); 
});
