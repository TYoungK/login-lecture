'use strict'

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    pwd = document.querySelector('#pwd'),
    confirmPwd = document.querySelector('#confirm-pwd'),
    regBtn = document.querySelector('#button');


regBtn.addEventListener('click', register);

function register(){
    if(id.value && name.value && pwd.value && confirmPwd.value){
        if (pwd.value !== confirmPwd.value) return alert('비밀번호 불일치.');
        const req = {
            id: id.value,
            name: name.value,
            pwd: pwd.value,
        };
    
        fetch('/register',{
            method:'post',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href='/login';
            }else{
                alert(res.msg);
            }
        }).catch((err) => {
            console.error('회원가입 중 에러 발생');
        });
    }else{
        alert('정보를 모두 입력해주세요.');
    }
    
}
