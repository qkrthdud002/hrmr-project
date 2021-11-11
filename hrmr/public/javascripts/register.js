$(()=>{
    $('#submitBtn').on('click', ()=>{
        const userId = $('#userId').val();
        const password = $('#password').val();
        const passwordcheck = $('#passwordcheck').val();
        
        if(userId === ''){
            $('#userId').val('');
            $('#password').val('');
            $('#passwordcheck').val('');
            location.replace('/register');
            alert('아이디는 필수 항목입니다.');
            return;
        }
        if(password!=passwordcheck){
            $('#userId').val('');
            $('#password').val('');
            $('#passwordcheck').val('');
            location.replace('/register');
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
        // 나중에 이렇게 쓴 이유 설명
        .done((response)=>{
            location.replace('/login')
            console.log(response);
            alert(response.result);
        })
        .fail((request, status, err)=>{
            location.replace('/register')
            const msg = JSON.parse(request.responseText);
            alert(msg.boom);
        });
    });
});