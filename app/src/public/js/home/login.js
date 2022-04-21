'use strict'

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector('#button');


loginBtn.addEventListener('click', login);
function login(){
    const req = {
        id: id.value,
        pwd: pwd.value,
    };

    fetch('/login',{
        method:'post',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        if (!res.success){
            alert(res.msg);
        }
    }).catch((err) => {
        console.error('로그인 중 에러 발생');
    });
}

// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });