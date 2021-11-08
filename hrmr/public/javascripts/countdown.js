$(()=>{
    const bg = document.getElementsByClassName("countdown_outer_circle")[0];
    let timernumber=-1;
    $('#start').on('click', ()=>{
        if(timernumber != -1){
            return;
        }
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
        bg.classList.add("animation-bg");
        timernumber = window.setInterval(()=>{
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
            else if(sec == 0 && min == 0 && hour == 0){
                bg.classList.remove("animation-bg");
                // $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
                $('#time').text('00:00:00')
                alert('끝.');
                window.clearInterval(timernumber)
                timernumber=-1
                return;
            }
            $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
        }, 1000);

        // $('#stop').on('click', ()=>{
        //     clearInterval(timernumber)
        //     sec = 0; min = 0; hour = 0;
        //     alert('종료');
        // });
    });

    $('#stop').on('click', ()=>{
        bg.classList.remove("animation-bg");
        clearInterval(timernumber);
        timernumber=-1;
        $('#time').text('00:00:00')
        // window.clearInterval(timernumber)
        alert('종료');
        return;
    });
});