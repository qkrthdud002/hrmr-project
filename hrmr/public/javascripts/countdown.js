$(()=>{
    $('#start').on('click', ()=>{
        const target = $('#target_hour').val();
        $('#time').text(target);
    });
});