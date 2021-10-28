$(()=>{
    $('#start').on('click', ()=>{
        let hour = $('#target_hour').val();
        let min = $('#target_min').val();
        let sec = $('#target_sec').val();
        if(hour == '' && min == '' && sec == ''){
            alert('시간을 입력하세요.');
            return;
        }
        if(hour=='') {
            hour=0;
        }
        if(min=='') {
            min=0;
        }
        if(sec=='') {
            sec=0;
        }
        let timernumber = window.setInterval(()=>{
            console.log(1)
            sec = sec - 1;
            if(min == 0 && hour != 0){
                hour--;
                min = 60;
            }
            else if(sec == 0 && min != 0){
                min--;
                sec = 60;
            }
            else if(sec == 0 && min == 0 && hour == 0){
                // $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
                alert('끝.');
                window.clearInterval(timernumber)
                return;
            }
            $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
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