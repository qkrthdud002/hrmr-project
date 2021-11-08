$(()=>{
    moment.tz.add('Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6');
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
    let start_time='';
    $('#start').on('click', ()=>{
        // 시작 시간을 저장하고
        // 1초에 한 번 불리는 타이머 시작하고
        clearInterval(intervalId)
        intervalId = setInterval(operateTimer, 1000)
        bg.classList.add("animation-bg");
        start_time = moment().tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss');//new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log(start_time)
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
    }

    $('#end').on('click', ()=>{
        clearInterval(intervalId)
        bg.classList.remove("animation-bg");
        seconds = 0; minutes = 0; hours = 0;
        appendminutes.textContent = "00"
        appendseconds.textContent = "00" 
        appendhours.textContent = "00"
        let end_time = '';
        end_time = moment().tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss');//new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log(end_time)

    //   const start_time=$('#start_time').val();
    //     // 현재 시각을 읽어온 다음
    //     const end_time= //현재시각 읽어오는 함수...

        const data={
            start_time: start_time,
            end_time: end_time
        };

        const url='/stopwatch/'+$('#todo_id').val();
        console.log(url);
        //서버로 전송
        $.ajax({ 
            url:url,
            type:'post',
            data:JSON.stringify(data),
            contentType:'application/json'
        })
        .done((response)=>{
            // 저장 완료 alert 출력하고
            // todolist로 돌아가기.
            location.replace('/todolist')
            console.log(response);
            alert('끝');
        })
    //     .fail((error)=>{
            
    //     })
    });
});