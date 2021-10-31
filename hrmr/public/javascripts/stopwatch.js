$(()=>{
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const appendhours = document.getElementById("hours");
    const appendminutes = document.getElementById("minutes");
    const appendseconds = document.getElementById("seconds");
    const buttonstsart = document.getElementById("stopwatch_button_start");
    const buttonstop = document.getElementById("stopwatch_button_stop");
    const bg = document.getElementsByClassName("outer_circle")[0];
    let intervalId;
    $('#start').on('click', ()=>{
        let today = new Date(); 
        clearInterval(intervalId)
        intervalId = setInterval(operateTimer, 1000)
        bg.classList.add("animation-bg");
        let hours1 = today.getHours();       // 시
        let minutes2 = today.getMinutes();   // 분
        let seconds3 = today.getSeconds();   // 초
        console.log(hours1)
        console.log(minutes2)
        console.log(seconds3)
    });
    function operateTimer() {
        seconds++;
        appendseconds.textContent = seconds > 9 ? seconds : '0' + seconds
        if(seconds > 59) {
            minutes++;
            appendminutes.textContent = minutes > 9 ? minutes : '0' + minutes
            seconds = 0;
            appendseconds.textContent ="00"
        }
        if(minutes > 59) {
            hours++;
            appendhours.textContent = hours > 9 ? hours : '0' + hours
            minutes = 0;
            appendminutes.textContent ="00"
        }
        // 시작 시간을 저장하고
        // 1초에 한 번 불리는 타이머 시작하고
    }

    $('#end').on('click', ()=>{
        let today = new Date(); 
        clearInterval(intervalId)
        bg.classList.remove("animation-bg");
        seconds = 0; minutes = 0; hours = 0;
        appendminutes.textContent = "00"
        appendseconds.textContent = "00"
        appendhours.textContent = "00"
        let hours1 = today.getHours();       // 시
        let minutes2 = today.getMinutes();   // 분
        let seconds3 = today.getSeconds();   // 초
        console.log(hours1)
        console.log(minutes2)
        console.log(seconds3)

        const start_time=$('#start_time').val();
        // 현재 시각을 읽어온 다음
        const end_time= //현재시각 읽어오는 함수...

        const data={
            start_time: start_time,
            end_time: end_time
    };
        //서버로 전송
        $.ajax({
            url:'/stopwatch/'+todoId,
            type:'post', 
            data:JSON.stringify(data),
            contentType:'application/json'
        })
        .done((response)=>{
            // 저장 완료 alert 출력하고
            // todolist로 돌아가기.
        })
        .fail((error)=>{
            
        })
    });
});