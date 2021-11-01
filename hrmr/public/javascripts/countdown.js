$(()=>{
    $('#start').on('click', ()=>{
        let intervalId;
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
        intervalId = window.setInterval(()=>{
            console.log(1)
            if(sec != 0){
                sec = sec - 1;
            }
            if(min == 0 && hour != 0){
                hour--;
                min = 59
            }
            else if(sec == 0 && min != 0){
                min--;
                sec = 59;
            }
            else if(sec == -1 && min == 0 && hour == 0){
                // $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
                alert('끝.');
                window.clearInterval(timernumber)
                return;
            }
            $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
        }, 1000);

        // $('#stop').on('click', ()=>{
        //     $('#time').text(String(hour).padStart('00') + ":" + String(min).padStart('00') + ":" + String(sec).padStart('00'));
        //     window.clearInterval(timernumber)
        //     alert('종료');
        //     return;
        // });

        $('#stop').on('click', ()=>{
            clearInterval(intervalId)
            sec = 0; min = 0; hour = 0;
            alert('종료');
            appendmin.textContent = "00"
            appendsec.textContent = "00" 
            appendhour.textContent = "00"
        });
    });
});