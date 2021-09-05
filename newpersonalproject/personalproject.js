//팝업을 위한 함수 선언 
function showPopup() {
    window.open("popup.html", "a", "width=610, height=516, left=100, top=50");
}

// 변수 선언 (보완할점: 변수를 줄일 수 있는 방법은 없을까?)
let temp;
let temp2;
let temp3;
let temp4;
let temp5;
let temp6;
let temp7;
let temp8;
let temp10;
let temp11;
let temp12;
let temp13;
let temp14;
let temp15;
let temp16;
let temp17;

//활동대사량을 구하기위한 함수 라디오 체크에 따라 다른 degree값 출력 
function getDegree(event) {

    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let fordegree = 350 + 21.6 * (input2 - ((input3 * 0.01) * input2)) + 7 * (input2 * (input3 * 0.01));
    let degree = event.target.value;

    if (degree == 'Degree1') {
        degree = fordegree * 0.2;
        document.getElementById('output15').innerHTML = (degree.toFixed(4));
        temp15 = degree;
    } else if (degree == 'Degree2') {
        degree = fordegree * 0.375;
        document.getElementById('output15').innerHTML = (degree.toFixed(4));
        temp15 = degree;
    } else if (degree == 'Degree3') {
        degree = fordegree * 0.555;
        document.getElementById('output15').innerHTML = (degree.toFixed(4));
        temp15 = degree;
    } else if (degree == 'Degree4') {
        degree = fordegree * 0.725;
        document.getElementById('output15').innerHTML = (degree.toFixed(4));
        temp15 = degree;

    }
}

// 사용자 input을 뽑아내기 위한 함수(보완할점: 함수 안에 많은 내용이 들어가 있는데 이걸 줄일 수 있을까?)
//(각 input에 함수 각각지정?)
function input() {
    let input = document.getElementById("input").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input5 = document.getElementById("input5").value;


    temp = input;
    temp2 = input2;
    temp3 = (input3 * 0.01) * input2;
    temp4 = input2 - ((input3 * 0.01) * input2);
    temp5 = input2 * (input5 * 0.01);
    temp6 = input2 - (temp3 - temp5);
    temp7 = temp3 - temp5;
    temp8 = temp6 - temp5;
    temp9 = temp7 / (1.5 / 30);
    dday();
    temp11 = 7200 * (temp2 - temp6);
    temp12 = temp11 / temp9;
    temp13 = temp2 / (temp * temp) * 10000;
    temp14 = 350 + 21.6 * temp4 + 7 * (temp2 * (input3 * 0.01));
    temp16 = temp14 + temp15;
    temp17 = temp16 - temp12;
}

// 출력을 위한 함수(보완할점: 이것도 줄이거나 반복을 줄일 수 있는 방법이 있을까)
function output() {
    document.getElementById("output3").innerHTML = temp3;

    document.getElementById("output4").innerHTML = temp4;

    document.getElementById("output5").innerHTML = (temp5.toFixed(2));

    document.getElementById("output6").innerHTML = temp6;

    document.getElementById("output7").innerHTML = (temp7.toFixed(2));

    document.getElementById("output8").innerHTML = temp8;

    document.getElementById("output9").innerHTML = (temp9.toFixed(2));

    document.getElementById("output10").innerHTML = temp10;

    document.getElementById("output11").innerHTML = (temp11.toFixed(2));

    document.getElementById("output12").innerHTML = temp12;

    document.getElementById("output13").innerHTML = (temp13.toFixed(2));

    document.getElementById("output14").innerHTML = (temp14.toFixed(3));

    document.getElementById("output16").innerHTML = (temp16.toFixed(4));

    document.getElementById("output17").innerHTML = (temp17.toFixed(4));
}

// 입력 날짜에 추천 다이어트 기간을 더하기 위한 함수
function dday() {
    const dday = document.querySelector("#input10").value;
    const ddayArr = dday.split('-');
    const date = new Date(ddayArr[0], ddayArr[1] - 1, ddayArr[2]);
    date.setDate(date.getDate() + temp9);
    temp10 = date.toLocaleDateString();
}