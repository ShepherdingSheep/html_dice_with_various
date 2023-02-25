const dicemarket = (num) => {
    switch (num){
        case 1:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/odd_dice.png');
            document.getElementById('info_dicename').innerText = '홀수 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_back.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            break
        case 2:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/even_dice.png');
            document.getElementById('info_dicename').innerText = '짝수 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_back2.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_null.png');
            break
        case 3:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/golden_dice.png');
            document.getElementById('info_dicename').innerText = '황금열쇠 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_goldback.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_goldback.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_goldgo.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_goldgo.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_null.png');
            break
        case 4:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/daruma_dice.png');
            document.getElementById('info_dicename').innerText = '내맘대로 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_darumatsu.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_darumatsu.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_darumapyun.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_darumapyun.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_null.png');
            break
        case 5:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/slow_dice.png');
            document.getElementById('info_dicename').innerText = '저속 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_back.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_back.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            break
        case 6:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/fast_dice.png');
            document.getElementById('info_dicename').innerText = '고속 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            break
        case 7:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/back_dice.png');
            document.getElementById('info_dicename').innerText = '후진 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_back.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_back2.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_back3.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_back4.png');
            break
        case 8:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/joker_dice.png');
            document.getElementById('info_dicename').innerText = '조커! 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_back4.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_back4.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            break
        case 9:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/shield_dice.png');
            document.getElementById('info_dicename').innerText = '전진 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_null.png');
            break
        case 10:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/shield_dice.png');
            document.getElementById('info_dicename').innerText = '카오스 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_1.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_2.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_3.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_4.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_null.png');
            break
        case 11:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/edge_dice.png');
            document.getElementById('info_dicename').innerText = '엣지 주사위';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_djmax.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_bang.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_twoon.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_djmax.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_twoon.png');
            break
        case 12:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/molu_dice.png');
            document.getElementById('info_dicename').innerText = '몰?루';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            break
        default:
            document.getElementById('dice_infoimg').setAttribute('src','./material/multi_dice/dice_image/none_dice.png');
            document.getElementById('info_dicename').innerText = '주사위 선택하지 않음';
            document.getElementById('info_number_1').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_2').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_3').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_4').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            document.getElementById('info_number_5').setAttribute('src','./material/multi_dice/dice_information/num_none.png');
            break
    }
}

const dicesetting = (num) => {
    switch(num){
        case 1:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','odd');
            document.getElementById('img_1').setAttribute('src','./material/num_1.png');
            document.getElementById('img_2').setAttribute('src','./material/num_1.png');
            document.getElementById('img_3').setAttribute('src','./material/num_3.png');
            document.getElementById('img_4').setAttribute('src','./material/num_3.png');
            document.getElementById('img_5').setAttribute('src','./material/num_back.png');
            document.getElementById('img_6').setAttribute('src','./material/num_back.png');
            break
        case 2:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','even');
            document.getElementById('img_1').setAttribute('src','./material/num_2.png');
            document.getElementById('img_2').setAttribute('src','./material/num_2.png');
            document.getElementById('img_3').setAttribute('src','./material/num_4.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_backdouble.png');
            document.getElementById('img_6').setAttribute('src','./material/num_backdouble.png');
            break
        case 3:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','golden');
            document.getElementById('img_1').setAttribute('src','./material/multi_dice/dice_number/golden_back.png');
            document.getElementById('img_2').setAttribute('src','./material/multi_dice/dice_number/golden_go.png');
            document.getElementById('img_3').setAttribute('src','./material/multi_dice/dice_number/golden_go.png');
            document.getElementById('img_4').setAttribute('src','./material/multi_dice/dice_number/golden_go.png');
            document.getElementById('img_5').setAttribute('src','./material/multi_dice/dice_number/golden_back.png');
            document.getElementById('img_6').setAttribute('src','./material/multi_dice/dice_number/golden_back.png');
            break
        case 4:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','daruma');
            document.getElementById('img_1').setAttribute('src','./material/multi_dice/dice_number/daruma_tsu.png');
            document.getElementById('img_2').setAttribute('src','./material/multi_dice/dice_number/daruma_pyun.png');
            document.getElementById('img_3').setAttribute('src','./material/multi_dice/dice_number/daruma_tsu.png');
            document.getElementById('img_4').setAttribute('src','./material/multi_dice/dice_number/daruma_tsu.png');
            document.getElementById('img_5').setAttribute('src','./material/multi_dice/dice_number/daruma_pyun.png');
            document.getElementById('img_6').setAttribute('src','./material/multi_dice/dice_number/daruma_pyun.png');
            break
        case 5:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','slow');
            document.getElementById('img_1').setAttribute('src','./material/num_back.png');
            document.getElementById('img_2').setAttribute('src','./material/num_1.png');
            document.getElementById('img_3').setAttribute('src','./material/num_1.png');
            document.getElementById('img_4').setAttribute('src','./material/num_2.png');
            document.getElementById('img_5').setAttribute('src','./material/num_2.png');
            document.getElementById('img_6').setAttribute('src','./material/num_back.png');
            break
        case 6:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','fast');
            document.getElementById('img_1').setAttribute('src','./material/num_3.png');
            document.getElementById('img_2').setAttribute('src','./material/num_3.png');
            document.getElementById('img_3').setAttribute('src','./material/num_4.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_2.png');
            document.getElementById('img_6').setAttribute('src','./material/num_2.png');
            break
        case 7:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','back');
            document.getElementById('img_1').setAttribute('src','./material/num_back.png');
            document.getElementById('img_2').setAttribute('src','./material/num_backdouble.png');
            document.getElementById('img_3').setAttribute('src','./material/num_backtriple.png');
            document.getElementById('img_4').setAttribute('src','./material/num_backquaduruple.png');
            document.getElementById('img_5').setAttribute('src','./material/num_backdouble.png');
            document.getElementById('img_6').setAttribute('src','./material/num_1.png');
            break
        case 8:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','joker');
            document.getElementById('img_1').setAttribute('src','./material/num_backquaduruple.png');
            document.getElementById('img_2').setAttribute('src','./material/num_4.png');
            document.getElementById('img_3').setAttribute('src','./material/num_4.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_backquaduruple.png');
            document.getElementById('img_6').setAttribute('src','./material/num_backquaduruple.png');
            break
        case 9:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','shield');
            document.getElementById('img_1').setAttribute('src','./material/num_1.png');
            document.getElementById('img_2').setAttribute('src','./material/num_2.png');
            document.getElementById('img_3').setAttribute('src','./material/num_3.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_1.png');
            document.getElementById('img_6').setAttribute('src','./material/num_4.png');
            break
        case 10:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','chaosr');
            document.getElementById('img_1').setAttribute('src','./material/num_1.png');
            document.getElementById('img_2').setAttribute('src','./material/num_2.png');
            document.getElementById('img_3').setAttribute('src','./material/num_3.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_1.png');
            document.getElementById('img_6').setAttribute('src','./material/num_4.png');
            break
        case 11:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('various','edge');
            document.getElementById('img_1').setAttribute('src','./material/multi_dice/dice_number/edge_djmax.png');
            document.getElementById('img_2').setAttribute('src','./material/multi_dice/dice_number/edge_twoon.png');
            document.getElementById('img_3').setAttribute('src','./material/multi_dice/dice_number/edge_djmax.png');
            document.getElementById('img_4').setAttribute('src','./material/multi_dice/dice_number/edge_twoon.png');
            document.getElementById('img_5').setAttribute('src','./material/multi_dice/dice_number/edge_bang.png');
            document.getElementById('img_6').setAttribute('src','./material/multi_dice/dice_number/edge_bang.png');
            break
        default:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('dice').classList.add('single');
            document.getElementById('img_1').setAttribute('src','./material/num_1.png');
            document.getElementById('img_2').setAttribute('src','./material/num_2.png');
            document.getElementById('img_3').setAttribute('src','./material/num_3.png');
            document.getElementById('img_4').setAttribute('src','./material/num_4.png');
            document.getElementById('img_5').setAttribute('src','./material/num_nugul.png');
            document.getElementById('img_6').setAttribute('src','./material/num_back.png');
            break
    }
}