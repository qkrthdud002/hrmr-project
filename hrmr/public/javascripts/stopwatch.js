$(()=>{
    $('#start').on('click', ()=>{
        // 시작 시간을 저장하고
        // 1초에 한 번 불리는 타이머 시작하고
        let now = new Data();
        alert(now);
    });
    $('#end').on('click', ()=>{
        // 시작 시간 읽어오고 
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