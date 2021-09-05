function email_check(email){
    let regex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if(regex.test(email)) {
        return true;
    } else{
        return false;
    }
}

function submitData(){
    if(checkSignUpForm()==true){
        alert("축하합니다. 모든 유효성 검사를 통과하셨습니다.");
        submit();
    }

}


// 이름을 동사형으로 signUpFormCheck에서 checkSignUpForm으로 바꿈
function checkSignUpForm() {
    // 변수에 달아주기
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let mobile = document.getElementById("mobile");
    let gender = document.getElementById("gender");
    let passwordCheck =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-])[A-Za-z\d!@#$%^&*()_+=-]{8,15}$/;
    let mobileCheck = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

    if(name.value == "") {
        alert('이름을 입력하세요.');
        return false;
    }

    else if(gender.value == "select") {
        alert('성별을 선택해주세요.');
        return false;
    }

    else if(email.value == "") {
        alert('이메일을 입력하세요.');
        return false;
    }

    else if(!email_check(email.value)){
        alert('이메일 형식으로 입력하세요.');
        return false;
    }

    else if(password.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }

    else if(!passwordCheck.test(password.value)) {
        alert('비밀번호는 영문자+숫자+특수문자조합으로 8~15자리 사용해야 합니다.');
        return false;
    }

    else if(confirmPassword.value !== password.value ) {
        alert('비밀번호와 확인비밀번호가 일치하지 않습니다.');
        return false;
    }

    else if(mobile.value == "") {
        alert('전화번호를 입력해주세요.');
        return false;
    }

    else if(!mobileCheck.test(mobile.value)) {
        alert('전화번호를 알맞게 입력해주세요.');
        return false;
    }else{
        // 아무 조건에도 걸리지않고 통과하면
        return true;
    }
}
