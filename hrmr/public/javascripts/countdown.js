$(()=>{
    $('#start').on('click', ()=>{
        const hour = $('#target_hour').val();
        const min = $('#target_min').val();
        const sec = $('#target_sec').val();
        if(hour == '' && min == '' && sec == ''){
            alert('시간을 입력하세요.');
            return;
        }
        
        $('#time').text(hour + ':' + min + ':' + sec);
    });
 
});