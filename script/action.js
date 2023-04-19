$(document).ready(function(){
    
    var merong = 0;
    var visualW = $('#visual').width();   //1200
    var slideLiLength = $('.slide_box li').length;  //6
    var visualTotalW = slideLiLength * visualW;
    

    $('.btn_prev').hide();
    $('.slide_box').width(visualTotalW);

    //오른쪽버튼
    $('.btn_next').click(function(){
        //merong = merong + 1;
        //merong += 1;
        //merong++

        // if(merong == 5){
        //     alert('현재 merong값은 = '+ merong + '이다')
        // }

        merong++;  // 1 2 3
        $('.btn_prev').show();
        $('.slide_num').text((merong+1)+'/'+slideLiLength);

        if(merong >= slideLiLength-1){
            $('.btn_next').hide();
        };

        $('.slide_box').animate({marginLeft:-(merong*visualW)});

        console.log(merong)
    });

    //왼쪽버튼
    $('.btn_prev').click(function(){
        merong--;
        $('.btn_next').show();
        $('.slide_num').text((merong+1)+'/'+slideLiLength);

        if(merong <= 0){
            merong = 0;
            $('.btn_prev').hide();
        };

        $('.slide_box').animate({marginLeft:-(merong*visualW)});
        
        console.log(merong);
    })

})