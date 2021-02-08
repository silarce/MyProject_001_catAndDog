function page_B_img_change(){
    let y0 = B_t[0].getBoundingClientRect().y;
    console.log(y0);
    if(y0 > 100 && y0 <200 ){
        B_i.className = B_i_class + " Bimg_1"
    }
    let y1 = B_t[1].getBoundingClientRect().y;
    console.log(y1);
    if(y1 > 100 && y1 <200 ){
        B_i.className = B_i_class + " Bimg_2"
    }
    let y2 = B_t[2].getBoundingClientRect().y;
    console.log(y2);
    if(y2 > 100 && y2 <200 ){
        B_i.className = B_i_class + " Bimg_3"
    }
    let y3 = B_t[3].getBoundingClientRect().y;
    console.log(y3);
    if(y3 > 100 && y3 <200 ){
        B_i.className = B_i_class + " Bimg_4"
        B_i_2.className = B_i_2_class + " Bimg_8"
    }
}