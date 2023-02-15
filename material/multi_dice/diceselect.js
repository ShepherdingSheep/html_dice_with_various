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
        default:
            fusiondice();
            document.getElementById('dice').className = 'ready';
            document.getElementById('img_1').setAttribute('src','./material/num_back.png');
            document.getElementById('img_2').setAttribute('src','./material/num_1.png');
            document.getElementById('img_3').setAttribute('src','./material/num_2.png');
            document.getElementById('img_4').setAttribute('src','./material/num_3.png');
            document.getElementById('img_5').setAttribute('src','./material/num_2.png');
            document.getElementById('img_6').setAttribute('src','./material/num_4.png');
            break
    }
}