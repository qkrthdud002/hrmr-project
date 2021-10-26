$(()=>{
    $('#start').on('click', ()=>{
        const hour = $('#target_hour').val();;
        const min = $('#target_min').val();;
        const sec = $('#target_sec').val();;
        
        $('#time').text(hour + ':' + min + ':' + sec);
    });
});