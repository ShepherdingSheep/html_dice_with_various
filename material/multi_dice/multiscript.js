var x = y = z = 0;
var r_sound = new Audio('./material/rolling.wav');
var d_sound = new Audio('./material/rolling_done.wav');
var bonk_sound = new Audio('./material/bonk.mp3')
var n = 0;
var before = 0;
var dice = document.getElementById('dice');
let now_mone = now_one = now_two = now_three = now_four = now_five = 0;

const dice_roulette = (shield) => {
            //숫자 추첨//
            if(shield == 1){
                x = math.randomInt(1,5);
            } else{
                if (dice.classList.contains('daruma') || dice.classList.contains('golden') || dice.classList.contains('even')){
                    x = math.randomInt(0,4);
                } else{
                    x = math.randomInt(0,5);
                    var nugul = math.pickRandom([true, false]);
                    if(dice.classList.contains('single') && x == 0 && nugul){
                        setTimeout(function(){x = 5;},2500);
                    }
                    //전 턴과 같을 경우 다시 추첨//
                    if (dice.classList.contains('single') && before == x){
                        if(x == 0 && nugul){
                            setTimeout(function(){x = 5;},2500);
                        } else{
                            x = math.randomInt(0,5);
                        }
                    };
                };
            }
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
                case 5:
                    dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(180deg)';
                    y = 180;
                    z = 0;
                    break;
                default:
                    dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                    y = 90;
                    z = 0;
                    break;
            }
};

const nugulman = () => {
    if (x == 5){
        dice.classList.add('bonk');
        dice.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(180deg)';
        y = 180;
        z = 0;
        setnum(1);
        bonk_sound.currentTime = 0;
        bonk_sound.play();
        setTimeout(function(){bonk_sound.pause(); dice.classList.remove('bonk');}, 1000);
    } else{
        setnum(1);
    }
}

const sign_number = () => {
    if (dice.classList.contains('odd')){
        f_num = math.randomInt(0,3)*2-1;
    } else if (dice.classList.contains('even')){
        f_num = math.pickRandom([-2, 2, 2, 2, 4]);
    } else if (dice.classList.contains('golden')){
        f_num = math.pickRandom(['돌격', '후퇴']);
    } else if (dice.classList.contains('daruma')){
        f_num = math.pickRandom(['뱅하싶', '트하싶']);
    } else if (dice.classList.contains('slow')){
        f_num = math.pickRandom([-1, -1, 1, 1, 2]);
    } else if (dice.classList.contains('fast')){
        f_num = math.pickRandom([2, 3, 3, 4, 4]);
    } else if (dice.classList.contains('back')){
        f_num = math.pickRandom([1, -1, -2, -3, -4]);
    } else if (dice.classList.contains('joker')){
        f_num = math.pickRandom([-4, -4, 4, 4, 4]);
    } else if (dice.classList.contains('edge')){
        f_num = math.pickRandom(['뱅하싶', '디맥섬', '투온섬', '디맥섬', '투온섬']);
    } else{
        f_num = math.randomInt(0, 5);
        if (f_num == 0){
            f_num = -1;
        }
    }
}

function roll(){
    document.getElementById('dice_pan').style.pointerEvents = 'none';
    if (dice.classList.contains('start')){
        //첫 주사위 설정//
        dice.classList.remove('start');
        dice.classList.add('ready');
        setTimeout(function(){dice.classList.remove('ready'); dice.classList.add('reroll')},100);
        var falsenumber = setInterval(function(){
            f_num = math.randomInt(1,5);
            document.getElementById('s_number').innerText = f_num;
        }, 20);
        //오디오 재생//
        r_sound.currentTime = 0;
        r_sound.play();
        //주사위 추첨//
        dice_roulette(1);
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice.classList.remove('reroll'); dice.classList.add('ready'); r_sound.pause();}, 3000);
        setTimeout(function(){setnum(0); d_sound.play();}, 2000);
        setTimeout(function(){clearInterval(falsenumber);}, 1900);
    } else if (dice.classList.contains('shield')){
        //dice 굴리기 위한 class 지정//
        dice.classList.remove('ready');
        dice.classList.add('reroll');
        //필요한 변수 지정//
        before = x;
        var falsenumber = setInterval(function(){
            f_num = math.randomInt(1,5);
            document.getElementById('s_number').innerText = f_num;
        }, 20);
        //오디오 재생//
        r_sound.currentTime = 0;
        r_sound.play();
        //주사위 추첨//
        dice_roulette(1);
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice.classList.remove('reroll'); dice.classList.add('ready'); r_sound.pause();}, 3000);
        setTimeout(function(){setnum(0); d_sound.play();}, 2000);
        setTimeout(function(){clearInterval(falsenumber);}, 1900);
    } else if (dice.classList.contains('ready')){
        //dice 굴리기 위한 class 지정//
        dice.classList.remove('ready');
        dice.classList.add('reroll');
        //필요한 변수 지정//
        before = x;
        if(x == 5){
            before = 0;
        }
        var falsenumber = setInterval(function(){
            sign_number();
            if(f_num == 0){
                document.getElementById('s_number').innerText = '-1';
            } else{
                document.getElementById('s_number').innerText = f_num;
            }
        }, 20);
        //오디오 재생//
        r_sound.currentTime = 0;
        r_sound.play();
        //주사위 추첨//
        dice_roulette(0);
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){clearInterval(falsenumber);}, 1900);
        setTimeout(function(){setnum(0); d_sound.play();}, 2000);
        setTimeout(function(){dice.classList.remove('reroll'); dice.classList.add('ready'); r_sound.pause(); if(x==0 || x==5){nugulman();};}, 3000);
    }
    setTimeout(function(){document.getElementById('dice_pan').style.pointerEvents = 'all';}, 3000);
};

//전광판 게시 function//
function setnum(m_check){
    if (dice.classList.contains('odd')) {
        switch (x){
            case 0:
                document.getElementById('s_number').innerText = '-1';
                break;
            case 1:
            case 2:
                document.getElementById('s_number').innerText = '1';
                break;
            case 3:
            case 4:
                document.getElementById('s_number').innerText = '3';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
                break;
        }
    } else if (dice.classList.contains('even')) {
        switch (x){
            case 0:
                document.getElementById('s_number').innerText = '-2';
                break;
            case 1:    
            case 2:
                document.getElementById('s_number').innerText = '2';
                break;
            case 3:
                document.getElementById('s_number').innerText = '4';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
                break;
        }
    } else if (dice.classList.contains('golden')) {
        switch (x){
            case 0:
            case 1:
                document.getElementById('s_number').innerText = '후퇴';
                break;
            case 2:
            case 3:
                document.getElementById('s_number').innerText = '돌격';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
                break;
        }
    } else if (dice.classList.contains('daruma')) {
        switch (x){
            case 0:
            case 2:
                document.getElementById('s_number').innerText = '뱅하싶';
                break;
            case 1:
            case 3:
                document.getElementById('s_number').innerText = '트하싶';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
                break;
        }
    } else if (dice.classList.contains('slow')) {
        switch (x){
            case 0:
            case 1:
            case 5:
                document.getElementById('s_number').innerText = '-1';
                break;
            case 2:
            case 3:
                document.getElementById('s_number').innerText = '1';
                break;
            case 4:
                document.getElementById('s_number').innerText = '2';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
                break;
        }
    } else if (dice.classList.contains('fast')) {
        switch(x){
            case 0:
                document.getElementById('s_number').innerText = '2';
                break;
            case 1:
            case 2:
                document.getElementById('s_number').innerText = '3';
                break;
            case 3:
            case 4:
                document.getElementById('s_number').innerText = '4';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
        }
    } else if (dice.classList.contains('back')) {
        switch(x){
            case 0:
                document.getElementById('s_number').innerText = '1';
                break;
            case 1:
                document.getElementById('s_number').innerText = '-1';
                break;
            case 2:
                document.getElementById('s_number').innerText = '-2';
                break;
            case 3:
                document.getElementById('s_number').innerText = '-3';
                break;
            case 4:
                document.getElementById('s_number').innerText = '-4';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
        }
    } else if (dice.classList.contains('joker')) {
        switch(x){
            case 0:
            case 1:
                document.getElementById('s_number').innerText = '-4';
                break;
            case 2:
            case 3:
            case 4:
                document.getElementById('s_number').innerText = '4';
                break;
            default:
                document.getElementById('s_number').innerText = '?';
        }
    } else if (dice.classList.contains('edge')) {
        if (x == 0){
            document.getElementById('s_number').innerText = '뱅하싶';
        } else if (x == 1){
            document.getElementById('s_number').innerText = '디맥섬';
        } else if (x == 2){
            document.getElementById('s_number').innerText = '투온섬';
        } else if (x == 3){
            document.getElementById('s_number').innerText = '디맥섬';
        } else if (x == 4){
            document.getElementById('s_number').innerText = '투온섬';
        } else{
            document.getElementById('s_number').innerText = '?';
        }
    } else if (document.getElementById('dice_pan').getAttribute('onclick') == 'doubleroll()') {
        if (x == 0){
            document.getElementById('s_number').innerText = '-1';
        } else if (x == 1){
            document.getElementById('s_number').innerText = '1';
        } else if (x == 2){
            document.getElementById('s_number').innerText = '2';
        } else if (x == 3){
            document.getElementById('s_number').innerText = '3';
        } else if (x == 4){
            document.getElementById('s_number').innerText = '4';
        } else{
            document.getElementById('s_number').innerText = '?';
        }
    } else{
        if (x == 0){
            document.getElementById('s_number').innerText = '-1';
            if(m_check == 1){
                now_mone += 1;
                document.getElementById('sta_mone').innerText = now_mone;
            };
        } else if (x == 1){
            document.getElementById('s_number').innerText = '1';
            now_one += 1;
            document.getElementById('sta_one').innerText = now_one;
        } else if (x == 2){
            document.getElementById('s_number').innerText = '2';
            now_two += 1;
            document.getElementById('sta_two').innerText = now_two;
        } else if (x == 3){
            document.getElementById('s_number').innerText = '3';
            now_three += 1;
            document.getElementById('sta_three').innerText = now_three;
        } else if (x == 4){
            document.getElementById('s_number').innerText = '4';
            now_four += 1;
            document.getElementById('sta_four').innerText = now_four;
        } else if (x == 5){
            document.getElementById('s_number').innerText = '+1';
            if(m_check == 1){
                now_five += 1;
                document.getElementById('sta_five').innerText = now_five;
            };
        } else{
            document.getElementById('s_number').innerText = '?';
        }
    }
    var dice_meter = ((-1*now_mone)+(1*now_one)+(2*now_two)+(3*now_three)+(4*now_four))/(now_mone+now_one+now_two+now_three+now_four)
    if (dice_meter < 2.0){
        document.getElementById('sta_type').innerText = '억까';
        document.getElementById('sta_type').style.color = 'red';
        document.getElementById('sta_meter').innerText = math.round(dice_meter, 2);
        document.getElementById('sta_meter').style.color = 'red';
    } else if (2.2 < dice_meter){
        document.getElementById('sta_type').innerText = '억빠';
        document.getElementById('sta_type').style.color = 'dodgerblue';
        document.getElementById('sta_meter').innerText = math.round(dice_meter, 2);
        document.getElementById('sta_meter').style.color = 'dodgerblue';
    } else if (2.0 <= dice_meter <= 2.2){
        document.getElementById('sta_type').innerText = '정속주행';
        document.getElementById('sta_type').style.color = 'black';
        document.getElementById('sta_meter').innerText = math.round(dice_meter, 2);
        document.getElementById('sta_meter').style.color = 'black';
    }
};

const proreset = () => {
    now_mone = now_one = now_two = now_three = now_four = 0;
    document.getElementById('sta_mone').innerText = 0;
    document.getElementById('sta_one').innerText = 0;
    document.getElementById('sta_two').innerText = 0;
    document.getElementById('sta_three').innerText = 0;
    document.getElementById('sta_four').innerText = 0;
    document.getElementById('sta_type').innerText = '정속주행';
    document.getElementById('sta_type').style.color = 'black';
    document.getElementById('sta_meter').innerText = 0;
    document.getElementById('sta_meter').style.color = 'black';
}

//전광판 더블 표시//
function setdouble(){
    if (before == x){
        //주사위 숫자 같을 경우 더블 표시//
        document.getElementById('s_number').innerText += ' 더블'
    } else{
        //아닐 경우 다른 숫자 표시//
        if (x == 0){
            document.getElementById('s_number').innerText += ' -1';
        } else{
            document.getElementById('s_number').innerText += ' '+x;
        }
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

//버튼 누를 시 더블 주사위 표시//
function dividedice(){
    if(document.getElementById('dice_pan').classList.contains('shop')){
        return
    }
    var diceclassvalue = ['various', 'odd', 'even', 'fast', 'slow', 'golden', 'daruma', 'back', 'joker'];
    for (var i = 0; i <= diceclassvalue.length; i++){
        if(dice.classList.contains(diceclassvalue[i])){
            dice.classList.remove(diceclassvalue[i]);
        };
    };
    //더블 주사위 표시//
    document.getElementById('dice_pan').innerHTML = '<div id="dice_d1" class="start dice_d"><div id="dice_1"><img src="./material/num_1.png" /></div><div id="dice_2"><img src="./material/num_2.png" /></div><div id="dice_3"><img src="./material/num_3.png" /></div><div id="dice_4"><img src="./material/num_4.png" /></div><div id="dice_5"><img src="./material/num_2.png" /></div><div id="dice_6"><img src="./material/num_back.png" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="dice_d2" class="start dice_d"><div id="dice_1"><img src="./material/num_1.png" /></div><div id="dice_2"><img src="./material/num_2.png" /></div><div id="dice_3"><img src="./material/num_3.png" /></div><div id="dice_4"><img src="./material/num_4.png" /></div><div id="dice_5"><img src="./material/num_2.png" /></div><div id="dice_6"><img src="./material/num_back.png" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="status"><div id="s_number">?</div></div>';
    //버튼 이미지, 텍스트 교체//
    document.getElementById('ddimg').innerHTML = '<img src="./material/single_dice.png" width="50px">';
    document.getElementById('ddtext').innerText = '주사위 합치기';
    //버튼 누를 시 원래대로 돌아가도록 설정//
    document.getElementById('dice_pan').setAttribute('onclick', 'doubleroll()');
    document.getElementById('double').setAttribute('onclick', 'fusiondice()');
    //더블 주사위를 다른 곳에도 사용하도록 변수 설정//
    var dice_d1 = document.getElementById('dice_d1');
    var dice_d2 = document.getElementById('dice_d2');
    //확률 표시 상태에서 돌아갈 시 원상복구//
    document.getElementById('but_selectdice').setAttribute('onclick', 'sdice()');
    document.getElementById('iftext').innerText = '주사위 선택'
};
function fusiondice(){
    if(document.getElementById('dice_pan').className == 'shop'){
        document.getElementById('dice_pan').classList.remove('shop');
        document.getElementById('ddtext').innerText = '주사위 나누기';
    }
    //단독 주사위 표시//
    document.getElementById('dice_pan').innerHTML = '<div id="dice" class="ready single"><div id="dice_1"><img src="./material/num_1.png" id="img_1" /></div><div id="dice_2"><img src="./material/num_2.png" id="img_2" /></div><div id="dice_3"><img src="./material/num_3.png" id="img_3" /></div><div id="dice_4"><img src="./material/num_4.png" id="img_4" /></div><div id="dice_5"><img src="./material/num_nugul.png" id="img_5" /></div><div id="dice_6"><img src="./material/num_back.png" id="img_6" /></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div id="status"><div id="s_number">?</div></div>';
    //버튼 이미지, 텍스트 교체//
    document.getElementById('ddimg').innerHTML = '<img src="./material/double_dice.png" width="50px">';
    document.getElementById('ddtext').innerText = '주사위 나누기';
    //버튼 누를 시 원래대로 돌아가도록 설정//
    setTimeout(function(){
        document.getElementById('dice_pan').setAttribute('onclick', 'roll()'); document.getElementById('double').setAttribute('onclick', 'dividedice()');
    },500)
    //싱글 주사위를 다른 곳에도 사용하도록 변수 설정//
    dice = document.getElementById('dice');
    //확률 표시 상태에서 돌아갈 시 원상복구//
    document.getElementById('but_selectdice').setAttribute('onclick', 'sdice()');
    document.getElementById('iftext').innerText = '주사위 선택'
};
//확률 표시를 위한 function//
function sdice(){
    document.getElementById('dice_pan').classList.add('shop');
    //확률 계산을 위한 변수//
    //확률 표시//
    document.getElementById('dice_pan').innerHTML = '<div class="dice_information"><div class="information__image"><img src="./material/multi_dice/dice_image/none_dice.png" id="dice_infoimg"></div><div class="information__text"><div class="information__name" id="info_dicename">주사위 선택하지 않음</div><div class="information__number"><img class="number__img" id="info_number_1" src="./material/multi_dice/dice_information/num_none.png"><img class="number__img" id="info_number_2" src="./material/multi_dice/dice_information/num_none.png"><img class="number__img" id="info_number_3" src="./material/multi_dice/dice_information/num_none.png"><img class="number__img" id="info_number_4" src="./material/multi_dice/dice_information/num_none.png"><img class="number__img" id="info_number_5" src="./material/multi_dice/dice_information/num_none.png"></div></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div class="dice_select_row"><div class="dice_select" id="dice_odd" onclick="dicesetting(1)" onmouseover="dicemarket(1)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/odd_dice.png"></div><div class="dice_select" id="dice_even" onclick="dicesetting(2)" onmouseover="dicemarket(2)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/even_dice.png"></div><div class="dice_select" id="dice_golden" onclick="dicesetting(3)" onmouseover="dicemarket(3)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/golden_dice.png"></div><div class="dice_select" id="dice_daruma" onclick="dicesetting(4)" onmouseover="dicemarket(4)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/daruma_dice.png"></div></div>';
    document.getElementById('dice_pan').innerHTML += '<div class="dice_select_row"><div class="dice_select" id="dice_slow" onclick="dicesetting(5)" onmouseover="dicemarket(5)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/slow_dice.png"></div><div class="dice_select" id="dice_fast" onclick="dicesetting(6)" onmouseover="dicemarket(6)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/fast_dice.png"></div><div class="dice_select" id="dice_back" onclick="dicesetting(7)" onmouseover="dicemarket(7)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/back_dice.png"></div><div class="dice_select" id="dice_joker" onclick="dicesetting(8)" onmouseover="dicemarket(8)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/joker_dice.png"></div></div>'
    document.getElementById('dice_pan').innerHTML += '<div class="dice_select_row"><div class="dice_select" id="dice_edge" onclick="dicesetting(11)" onmouseover="dicemarket(11)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/edge_dice.png"></div><div class="dice_select" id="dice_who" onclick="dicesetting('+math.randomInt(12)+')" onmouseover="dicemarket(12)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/molu_dice.png"></div><div class="dice_select" id="shield_joker" onclick="dicesetting(9)" onmouseover="dicemarket(9)" onmouseleave="dicemarket(0)"><img src="./material/multi_dice/dice_image/shield_dice.png"></div></div>'
    document.getElementById('dice_pan').setAttribute('onclick', '');
    document.getElementById('double').setAttribute('onclick', '');
    //원상복구를 위한 버튼 교체//
    document.getElementById('but_selectdice').setAttribute('onclick', 'fusiondice()');
    document.getElementById('ddtext').innerText = '클릭 불가';
    document.getElementById('iftext').innerText = 'Go Back';
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
                y = 270;
                z = 90;
                break;
            case 1:
                dice_d1.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 90;
                z = 90;
                break;
            case 2:
                dice_d1.style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                dice_d1.style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 0;
                z = 0;
                break;
            case 4:
                dice_d1.style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 180;
                z = 0;
                break;
            default:
                dice_d1.style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 0;
                z = 0;
                break;
        }
        //시간 후 주사위 원상복구, 오디오 교체, 전광판에 게시//
        setTimeout(function(){dice_d1.className = 'ready dice_d'; r_sound.pause();}, 3000);
        setTimeout(function(){setnum(0); d_sound.play();}, 2000);
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
                y = 270;
                z = 90;
                break;
            case 1:
                document.getElementById('dice_d2').style.transform = 'rotateX(0deg) rotateZ(0deg)';
                y = 90;
                z = 90;
                break;
            case 2:
                document.getElementById('dice_d2').style.transform = 'rotateX(90deg) rotateY(180deg) rotateZ(0deg)';
                y = 90;
                z = 0;
                break;
            case 3:
                document.getElementById('dice_d2').style.transform = 'rotateX(90deg) rotateY(270deg) rotateZ(90deg)';
                y = 0;
                z = 0;
                break;
            case 4:
                document.getElementById('dice_d2').style.transform = 'rotateX(270deg) rotateY(90deg) rotateZ(90deg)';
                y = 180;
                z = 0;
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

const refresh = () => {
    fusiondice();
    setTimeout(() => {for (var i = 1; i <= 4; i++){
        var imgid = 'img_'+i;
        var imgsrc = './material/num_'+i+'.png';
        document.getElementById(imgid).src = imgsrc;;
    };
    document.getElementById('img_5').src = './material/num_nugul.png';
    document.getElementById('img_6').src = './material/num_back.png';
    document.getElementById('dice').className = 'start single';
    document.getElementById('s_number').innerText = '?';}, 50)
    x = -1;
}

const prosta = () => {
    if (document.getElementById('alert').style.visibility == 'visible'){
        proexit();
    } else{
        document.getElementById('alert').style.visibility = 'visible';
    }
}

const proexit = () => {
    document.getElementById('alert').style.visibility = 'hidden';
}

function preloading (imageArray) {
    let imgArr_L = imageArray.length;
    for (let i = 0; i < imgArr_L; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading([
    './material/multi_dice/dice_back/back_back.png',
    './material/multi_dice/dice_back/back_daruma.png',
    './material/multi_dice/dice_back/back_emergency.png',
    './material/multi_dice/dice_back/back_even.png',
    './material/multi_dice/dice_back/back_fast.png',
    './material/multi_dice/dice_back/back_golden.png',
    './material/multi_dice/dice_back/back_joker.png',
    './material/multi_dice/dice_back/back_odd.png',
    './material/multi_dice/dice_back/back_slow.png',
    './material/multi_dice/dice_back/back_back.png',
    './material/multi_dice/dice_image/back_dice.png',
    './material/multi_dice/dice_image/daruma_dice.png',
    './material/multi_dice/dice_image/even_dice.png',
    './material/multi_dice/dice_image/fast_dice.png',
    './material/multi_dice/dice_image/golden_dice.png',
    './material/multi_dice/dice_image/joker_dice.png',
    './material/multi_dice/dice_image/none_dice.png',
    './material/multi_dice/dice_image/odd_dice.png',
    './material/multi_dice/dice_image/shield_dice.png',
    './material/multi_dice/dice_image/slow_dice.png',
    './material/multi_dice/dice_image/edge_dice.png',
    './material/multi_dice/dice_image/molu_dice.png',
    './material/multi_dice/dice_information/num_1.png',
    './material/multi_dice/dice_information/num_2.png',
    './material/multi_dice/dice_information/num_3.png',
    './material/multi_dice/dice_information/num_4.png',
    './material/multi_dice/dice_information/num_back.png',
    './material/multi_dice/dice_information/num_back2.png',
    './material/multi_dice/dice_information/num_back3.png',
    './material/multi_dice/dice_information/num_back4.png',
    './material/multi_dice/dice_information/num_darumapyun.png',
    './material/multi_dice/dice_information/num_darumatsu.png',
    './material/multi_dice/dice_information/num_goldback.png',
    './material/multi_dice/dice_information/num_goldgo.png',
    './material/multi_dice/dice_information/num_none.png',
    './material/multi_dice/dice_information/num_null.png',
    './material/multi_dice/dice_information/num_bang.png',
    './material/multi_dice/dice_information/num_twoon.png',
    './material/multi_dice/dice_information/num_djmax.png',
    './material/multi_dice/dice_number/daruma_pyun.png',
    './material/multi_dice/dice_number/daruma_tsu.png',
    './material/multi_dice/dice_number/golden_back.png',
    './material/multi_dice/dice_number/golden_go.png',
    './material/multi_dice/dice_number/edge_bang.png',
    './material/multi_dice/dice_number/edge_twoon.png',
    './material/multi_dice/dice_number/edge_djmax.png',
])