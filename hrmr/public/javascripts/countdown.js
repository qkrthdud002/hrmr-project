$(()=>{
    $('#start').on('click', ()=>{
        let hour = $('#target_hour').val();
        let min = $('#target_min').val();
        let sec = $('#target_sec').val();
        if(hour == '' && min == '' && sec == ''){
            alert('시간을 입력하세요.');
            return;
        }
        
        let timernumber = window.setInterval(()=>{
            console.log(1)
            sec = sec - 1;
            $('#time').text(hour + ':' + min + ':' + sec);
            if(min == 0 && hour != 0){
                hour--;
                min = 60;
            }
            else if(sec == 0 && min != 0){
                min--;
                sec = 60;
            }
            else if(sec == 0 && min == 0 && hour == 0){
                $('#time').text(hour + ':' + min + ':' + sec);
                alert('끝.');
                window.clearInterval(timernumber)
                return;
            }
        }, 1000);

        $('#stop').on('click', ()=>{
            window.clearInterval(timernumber)
            alert('종료');
            return;
        });
        
        $('#pause').on('click', ()=>{
        
        });
    });
});