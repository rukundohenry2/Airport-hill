var previousimg
function openimage(imgclass){
    previousimg=imgclass
    //$(".openimage img[src='"+ url +"']").css('width','40%')
    $('.'+imgclass).css('position','fixed')
    $('.'+imgclass).css('top','5%')
    $('.'+imgclass).css('height','90%')
    $('.'+imgclass).css('left','5%')
    $('.'+imgclass).css('width','90%')
    $('.'+imgclass).css('display','flex')
    $('.'+imgclass).css('flex-direction','column')
    $('.'+imgclass).css('justify-content','space-evenly')
    $('.'+imgclass).css('box-shadow','0 0 5px 1px black')
    $('.'+imgclass).css('background-color','#000000d4')
    $('.'+imgclass).css('align-items','center')
    $('.'+imgclass).css('padding','10px')

    $("."+ imgclass +" .closebtn").css('display','block')
    $("."+ imgclass +" .closebtn").css('position','absolute')
    $("."+ imgclass +" .closebtn").css('top','5px')
    $("."+ imgclass +" .closebtn").css('right','5px')
    $("."+ imgclass +" .closebtn").css('width','50px')

    if (document.body.clientWidth >=  720 && document.body.clientWidth <=  900 ){
        $("."+ imgclass +" .currentimg").css('width','60%')
    }
    else if(document.body.clientWidth >=  560 && document.body.clientWidth <  720 ){
        $("."+ imgclass +" .currentimg").css('width','80%')
    }
    else if(document.body.clientWidth <  560 ){
        $("."+ imgclass +" .currentimg").css('width','90%')
    }
    
    $("."+ imgclass +" .currentimg").css('border-radius','20px')
    $("."+ imgclass +" .currentimg").css('box-shadow','0 0 0px 0px black')

    $("body").css('overflow-x','hidden')

}
function closeimage(){
    console.log('.'+previousimg)

    $('.'+previousimg).css('position','unset')
    $('.'+previousimg).css('top','auto')
    $('.'+previousimg).css('height','auto')
    $('.'+previousimg).css('left','auto')
    $('.'+previousimg).css('width','30%')
    $('.'+previousimg).css('display','flex')
    $('.'+previousimg).css('flex-direction','column')
    $('.'+previousimg).css('justify-content','space-evenly')
    $('.'+previousimg).css('box-shadow','0 0 0px 0px black')
    
    console.log('.'+previousimg)

    $('.'+previousimg).css('background-color','transparent')
    $('.'+previousimg).css('align-items','center')
    $('.'+previousimg).css('padding','0px')

    $("."+previousimg +" .closebtn").css('display','none')
    
    $('.'+previousimg +" .currentimg").css('width','100%')
    $('.'+previousimg +" .currentimg").css('border-radius','10px')
    $('.'+previousimg+" .currentimg").css('box-shadow','0 0 5px 1px black')
    console.log('.'+previousimg)
}
//img[src='"+ url +"']"