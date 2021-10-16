const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoForm input");

const onSubmit = (event) =>{
    event.preventDefault();
    const currentInputValue = toDoInput.value;
    console.log(currentInputValue);
    toDoInput.value = ""
}

const init = () =>{
    console.log(toDoInput.value)
    toDoForm.addEventListener("submit", onSubmit);
}

init()