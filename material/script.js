var x = y = z = 0;
var r_sound = new Audio('./material/rolling.wav');
var d_sound = new Audio('./material/rolling_done.wav');
var n = 0;
var before = 0;
var dice = document.getElementById('dice');
var n_1 = n_2 = n_3 = n_4 = n_m1 = 0;
function roll(){
    if (dice.className == 'ready'){
        //dice 굴리기 위한 class 지정//
        dice.className = 'reroll';
        //필요한 변수 지정//
        before = x;
        //오디오 재생//
        r_sound.currentTime = 0;
        r_sound.play();
        //숫자 추첨//
        x = math.randomInt(0,5);
        //전 턴과 같을 경우 다시 추첨//
        if (before == x){
            x = math.randomInt(0,5);
        };
        //추첨된 숫자로 주사위 굴리기//
        switch(x){
            case 0:
                dice.style.transform = 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)';
                y = 180;
                z = 0;
                break;
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
            case 2:
                dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                dice.style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 90;
                z = 90;
                break;
            case 4:
                dice.style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 270;
                z = 90;
                break;
            default:
                dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
        }
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice.className = 'ready'; r_sound.pause();}, 3000);
        setTimeout(function(){setnum(); d_sound.play();}, 2000);
    } else if (dice.className == 'start'){
        //첫 주사위 설정//
        dice.className = 'ready';
        setTimeout(function(){dice.className = 'reroll'},100);
        //오디오 재생//
        r_sound.currentTime = 0;
        r_sound.play();
        //숫자 추첨//
        x = math.randomInt(1,5);
        //추첨된 숫자에 따른 주사위 위치 설정//
        switch(x){
            case 0:
                dice.style.transform = 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)';
                y = 180;
                z = 0;
                break;
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
            case 2:
                dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                dice.style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 90;
                z = 90;
                break;
            case 4:
                dice.style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 270;
                z = 90;
                break;
            default:
                dice.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
        }
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice.className = 'ready'; r_sound.pause();}, 3000);
        setTimeout(function(){setnum(); d_sound.play();}, 2000);
    }
};
//전광판 게시 function//
function setnum(){
    if (x == 0){
        document.getElementById('s_number').innerText = '-1';
        n_m1 += 1;
    } else if (x == 1){
        document.getElementById('s_number').innerText = '1';
        n_1 += 1;
    } else if (x == 2){
        document.getElementById('s_number').innerText = '2';
        n_2 += 1;
    } else if (x == 3){
        document.getElementById('s_number').innerText = '3';
        n_3 += 1;
    } else if (x == 4){
        document.getElementById('s_number').innerText = '4';
        n_4 += 1;
    } else{
        document.getElementById('s_number').innerText = '?';
    }
};
//전광판 더블 표시//
function setdouble(){
    if (before == x){
        //주사위 숫자 같을 경우 더블 표시//
        document.getElementById('s_number').innerHTML += ' 더블'
    } else{
        //아닐 경우 다른 숫자 표시//
        if (x == 0){
            document.getElementById('s_number').innerHTML += ' -1';
        } else{
            document.getElementById('s_number').innerHTML += ' '+x;
        }
    };
    switch(x){
        case 0:
            n_m1 += 1;
            break;
        case 1:
            n_1 += 1;
            break;
        case 2:
            n_2 += 1;
            break;
        case 3:
            n_3 += 1;
            break;
        case 4:
            n_4 += 1;
            break;
        default:
            break;
    };
};
//더블 주사위 굴리기 function//
function doubleroll(){
    //주사위 초기 세팅//
    if (dice_d1.className == 'start dice_d' & dice_d2.className == 'start dice_d'){
        //ready 설정 후 reroll 시 애니메이션 원활하게 재생//
        dice_d1.className = 'ready dice_d';
        setTimeout(function(){dice_d1.className = 'reroll dice_d'},10);
        dice_d1roll();
        //두번째 주사위 굴리기//
        setTimeout(function(){dice_d2.className = 'reroll dice_d'},3060);
        setTimeout(function(){dice_d2.className = 'ready dice_d'; dice_d2roll();}, 3000);
    } else if (dice_d1.className == 'ready dice_d' & dice_d2.className == 'ready dice_d'){
        //다음 턴 주사위//
        dice_d1.className = 'reroll dice_d';
        dice_d1roll();
        //시간 후 두번째 주사위 굴리기//
        setTimeout(function(){dice_d2roll(); dice_d2.className = 'reroll dice_d'}, 3000);
    };
};
const dicepan = document.getElementById('dice_pan');
//버튼 누를 시 더블 주사위 표시//
function dividedice(){
    //더블 주사위 표시//
    document.getElementById('dice_pan').innerHTML = '<div id="dice_d1" class="start dice_d"><div id="dice_1"><img src="./material/num_1.png" /></div><div id="dice_2"><img src="./material/num_2.png" /></div><div id="dice_3"><img src="./material/num_3.png" /></div><div id="dice_4"><img src="./material/num_4.png" /></div><div id="dice_5"><img src="./material/num_2.png" /></div><div id="dice_6"><img src="./material/num_back.png" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="dice_d2" class="start dice_d"><div id="dice_1"><img src="./material/num_1.png" /></div><div id="dice_2"><img src="./material/num_2.png" /></div><div id="dice_3"><img src="./material/num_3.png" /></div><div id="dice_4"><img src="./material/num_4.png" /></div><div id="dice_5"><img src="./material/num_2.png" /></div><div id="dice_6"><img src="./material/num_back.png" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="status"><div id="s_number">?</div></div>';
    //버튼 이미지, 텍스트 교체//
    document.getElementById('ddimg').innerHTML = '<img src="./material/double_dice.png" width="50px">';
    document.getElementById('ddtext').innerHTML = 'Double Dice';
    //버튼 누를 시 원래대로 돌아가도록 설정//
    document.getElementById('dice_pan').setAttribute('onclick', 'doubleroll()');
    document.getElementById('double').setAttribute('onclick', 'fusiondice()');
    //더블 주사위를 다른 곳에도 사용하도록 변수 설정//
    var dice_d1 = document.getElementById('dice_d1');
    var dice_d2 = document.getElementById('dice_d2');
    //확률 표시 상태에서 돌아갈 시 원상복구//
    document.getElementById('but_prosta').setAttribute('onclick', 'prosta()');
    document.getElementById('iftext').innerHTML = 'Current Status'
};
function fusiondice(){
    //단독 주사위 표시//
    document.getElementById('dice_pan').innerHTML = '<div id="dice" class="ready"><div id="dice_1"><img src="./material/num_1.png" /></div><div id="dice_2"><img src="./material/num_2.png" /></div><div id="dice_3"><img src="./material/num_3.png" /></div><div id="dice_4"><img src="./material/num_4.png" /></div><div id="dice_5"><img src="./material/num_2.png" /></div><div id="dice_6"><img src="./material/num_back.png" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="status"><div id="s_number">?</div></div>';
    //버튼 이미지, 텍스트 교체//
    document.getElementById('ddimg').innerHTML = '<img src="./material/single_dice.png" width="50px">';
    document.getElementById('ddtext').innerHTML = 'Single Dice';
    //버튼 누를 시 원래대로 돌아가도록 설정//
    document.getElementById('dice_pan').setAttribute('onclick', 'roll()');
    document.getElementById('double').setAttribute('onclick', 'dividedice()');
    //싱글 주사위를 다른 곳에도 사용하도록 변수 설정//
    dice = document.getElementById('dice');
    //확률 표시 상태에서 돌아갈 시 원상복구//
    document.getElementById('but_prosta').setAttribute('onclick', 'prosta()');
    document.getElementById('iftext').innerHTML = 'Current Status'
};
//확률 표시를 위한 function//
function prosta(){
    //확률 계산을 위한 변수//
    var n_all = n_m1+n_1+n_2+n_3+n_4;
    //확률 표시//
    document.getElementById('dice_pan').innerHTML = '<div id="number_status"></div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">총 '+n_all+'회 추첨</div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">-1: '+n_m1+'회 ('+Math.round(n_m1/n_all*100)+'%) 걸림</div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">1: '+n_1+'회 ('+Math.round(n_1/n_all*100)+'%) 걸림</div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">2: '+n_2+'회 ('+Math.round(n_2/n_all*100)+'%) 걸림</div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">3: '+n_3+'회 ('+Math.round(n_3/n_all*100)+'%) 걸림</div>'
    document.getElementById('number_status').innerHTML += '<div class="probable">4: '+n_4+'회 ('+Math.round(n_4/n_all*100)+'%) 걸림</div>'
    document.getElementById('dice_pan').setAttribute('onclick', '');
    //원상복구를 위한 버튼 교체//
    if(document.getElementById('double').getAttribute('onclick') == 'dividedice()'){
        document.getElementById('but_prosta').setAttribute('onclick', 'fusiondice()');
    } else if(document.getElementById('double').getAttribute('onclick') == 'fusiondice()'){
        document.getElementById('but_prosta').setAttribute('onclick', 'dividedice()');
    };
    document.getElementById('iftext').innerHTML = 'Go Back';
};
//첫 주사위 굴리기//
function dice_d1roll(){
    //오디오 재생//
    r_sound.currentTime = 0;
    r_sound.play();
    //숫자 추첨//
    x = math.randomInt(0,5);
    //추첨된 숫자로 주사위 굴리기//
    switch(x){
            case 0:
                dice_d1.style.transform = 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)';
                y = 180;
                z = 0;
                break;
            case 1:
                dice_d1.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
            case 2:
                dice_d1.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                dice_d1.style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 90;
                z = 90;
                break;
            case 4:
                dice_d1.style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 270;
                z = 90;
                break;
            default:
                dice_d1.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
        }
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice_d1.className = 'ready dice_d'; r_sound.pause();}, 3000);
        setTimeout(function(){setnum(); d_sound.play();}, 2000);
        before = x;
};
//두번째 주사위 굴리기//
function dice_d2roll(){
    //오디오 재생//
    r_sound.currentTime = 0;
    r_sound.play();
    //숫자 추첨//
    x = math.randomInt(0,5);
    //추첨된 숫자로 주사위 굴리기//
    switch(x){
            case 0:
                document.getElementById('dice_d2').style.transform = 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)';
                y = 180;
                z = 0;
                break;
            case 1:
                document.getElementById('dice_d2').style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
            case 2:
                document.getElementById('dice_d2').style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                document.getElementById('dice_d2').style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 90;
                z = 90;
                break;
            case 4:
                document.getElementById('dice_d2').style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 270;
                z = 90;
                break;
            default:
                document.getElementById('dice_d2').style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
        }
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){document.getElementById('dice_d2').className = 'ready dice_d'; r_sound.pause();}, 3000);
        setTimeout(function(){setdouble(); d_sound.play();}, 2000);
};
//아래쪽으로 마우스 댈시 설정창 오픈//
function opensesame(){
    document.getElementById('b_collection').style.visibility = 'visible';
};
//위쪽으로 마우스 댈시 설정창 클로즈//
function closesesame(){
    document.getElementById('b_collection').style.visibility = 'hidden';
};

function refresh(){
    fusiondice();
    setTimeout(() => {
    document.getElementById('dice').className = 'start';
    document.getElementById('s_number').innerText = '?';}, 50);
};