function logInFormCheck() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value == ""){
        alert("이메일을 입력해주세요.");
        return false;
    }

    if(password.value == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
}