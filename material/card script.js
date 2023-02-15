const number_img = document.getElementsByClassName('card__img');
const upper_button = document.getElementsByClassName('buttonarea__button');
const number_target = [0, 1, 2, 3, 4];
let before_card = null;

function reroll(){
    before_card = null;
    for (var i = 0; i < number_img.length; i++){
        document.getElementsByClassName('cardarea__card').item(i).style.visibility = 'visible';
        document.getElementsByClassName('cardarea__card').item(i).classList.add('card__open');
        document.getElementsByClassName('cardarea__card').item(i).style.background = '';
        number_img[i].classList.remove('card__hidden');
    }
    document.getElementById('element').style.pointerEvents = 'none';
    document.getElementById('button_reroll').innerHTML = '카드 섞는중'
    document.getElementById('button_reroll').classList.add('button__rerolling')
    setTimeout(function(){roll(); turnoff(); rear_set();}, 1000);
}

function turnoff(){
    for (var i = 0; i < number_img.length; i++){
        document.getElementsByClassName('cardarea__card').item(i).classList.remove('card__open');
    }
}

function roll(){
    for (var i = 0; i < number_img.length; i++){
        document.getElementsByClassName('cardarea__card').item(i).style.visibility = 'visible';
        number_img[i].classList.add('card__hidden');
        upper_button[i].classList.remove('button__used');
        upper_button[i].innerHTML = '뒤집기'
    }
    var number_contest = [];
    var number_candidate = [...number_target];
    for (var i = 0; i < number_img.length; i++){
        var target = Math.floor(Math.random()*(5-i));
        number_contest.push(number_candidate[target]);
        number_candidate.splice(target, 1);
        if(number_contest[i] == 0){
            var source = './material/num_back.png';
        } else{
            var source = './material/num_'+number_contest[i]+'.png';
        }
        number_img[i].src = source;
    }
    number_contest = [];
    document.getElementById('element').style.pointerEvents = 'all';
    document.getElementById('button_reroll').innerHTML = '카드 다시 정렬'
    document.getElementById('button_reroll').classList.remove('button__rerolling')
    console.log('추첨 완료');
};

function turn(value){
    var cardname = 'card_'+value;
    var buttonname = 'button_'+value;
    var imgname = 'img_'+value;
    var card_target = document.getElementById(cardname);
    var button_target = document.getElementById(buttonname);
    var img_target = document.getElementById(imgname);
    if(before_card != null){
        before_card.style.visibility = 'hidden';
    } else{
        
    };
    document.getElementById('element').style.pointerEvents = 'none';
    card_target.classList.add('card__turn');
    button_target.classList.add('button__used');
    button_target.innerHTML = '사용됨';
    setTimeout(function(){img_target.classList.remove('card__hidden'); card_target.style.background=''; card_target.classList.add('card__open');}, 1000);
    setTimeout(function(){card_target.classList.remove('card__turn'); document.getElementById('element').style.pointerEvents = 'all';}, 2000);
    before_card = card_target;
};

const direction_on = (num) => {
    var directid = 'direction_'+num;
    var directselector = document.getElementById(directid)
    directselector.innerHTML = '▲';
};

const direction_off = (num) => {
    var directid = 'direction_'+num;
    var directselector = document.getElementById(directid)
    directselector.innerHTML = '△';
};

const rear_set = () => {
    var setnum = Math.floor(Math.random()*22);
    var imgname = 'rear_'+setnum+'.png';
    if (setnum >= 13){
        for (var i = 0; i<5; i++){
            document.getElementsByClassName('cardarea__card').item(i).style.background = 'url(./material/card_rear/rear_8.png)'
        }
    } else {
        for (var i = 0; i<5; i++){
            document.getElementsByClassName('cardarea__card').item(i).style.background = 'url(./material/card_rear/'+imgname+')'
        }
    }
}