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
        timernumber = window.setInterval(()=>{
            console.log(1)
            if(sec == 0 && min == 0 && hour != 0){
                hour--;
                min = 59;
                sec = 59;
            }
            if(sec != 0){
                sec = sec - 1;
            }
            else if(sec == 0 && min != 0){
                min--;
                sec = 59;
            }
            if(sec < 0 || sec > 60 || min < 0 || min > 60 || hour < 0){
                bg.classList.remove("animation-bg");
                $('#time').text('00:00:00')
                alert('값을 다시 입력해주세요.');
                window.clearInterval(timernumber)
                timernumber=-1 
                const targets = ["target_hour", "target_min", "target_sec"].forEach(it => $(`#${it}`).val(''))
                return; 
            }
            else if(sec == 0 && min == 0 && hour == 0){
                bg.classList.remove("animation-bg");
                // $('#time').text(String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0'));
                $('#time').text('00:00:00')
                alert('끝.');
                window.clearInterval(timernumber)
                timernumber=-1
                const targets = ["target_hour", "target_min", "target_sec"].forEach(it => $(`#${it}`).val(''))
                return; 
            }
            bg.classList.add("animation-bg");
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
        $('#target_hour').val('');
        $('#target_min').val('');
        $('#target_sec').val('');
        // window.clearInterval(timernumber)
        alert('종료');
        return;
    });
});