$(()=>{
    $('#submitBtn').on('click', ()=>{
        const userId = $('#userId').val();
        const password = $('#password').val();
        const passwordcheck = $('#passwordcheck').val();
        
        if(userId === ''){
            alert('아이디는 필수 항목입니다.');
            return;
        }
        if(password!=passwordcheck){
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
            
        const data = {
            userId:userId,
            password:password
        }
        
        $.ajax({
            url:'/register',
            type:'post',
            contentType:'application/json',
            data:JSON.stringify(data)
        })
        .done((response)=>{
            alert(response.result);
        })
        .fail((err)=>{
            alert(err.boom);
        });
    });
});