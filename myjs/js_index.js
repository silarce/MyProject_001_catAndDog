
// ABC頁面的監聽
// ABC頁面的監聽
// ABC頁面的監聽
{
    const A_t = document.querySelectorAll('.A_title')
    const A_i = document.querySelector('#Aimg');
    const A_i_class = document.querySelector('#Aimg').className;

    const C_t = document.querySelectorAll('.C_title')
    const C_i = document.querySelector('#Cimg');
    const C_i_class = document.querySelector('#Cimg').className;

    const B_t = document.querySelectorAll('.B_title')
    const B_i = document.querySelector('#Bimg');
    const B_i_class = document.querySelector('#Bimg').className;
    const B_i_2 = document.querySelector('#Bimg2');
    const B_i_2_class = document.querySelector('#Bimg2').className;


    document.getElementById('page_A').addEventListener('scroll', page_A_img_change);
    document.getElementById('page_B').addEventListener('scroll', page_B_img_change);
    document.getElementById('page_C').addEventListener('scroll', page_C_img_change);
    
    // 廢案
    // document.addEventListener('scroll',fuc1);
    // function fuc1() {
    //     page_A_img_change();
    //     page_B_img_change();
    //     page_C_img_change();
    // }

    let upp = 90;
    let dow = 150;

    function page_A_img_change() {
        let y0 = A_t[0].getBoundingClientRect().y;
        if (y0 > upp && y0 < dow) {
            A_i.className = A_i_class + " Aimg_1"
        }
        let y1 = A_t[1].getBoundingClientRect().y;

        if (y1 > upp && y1 < dow) {
            A_i.className = A_i_class + " Aimg_2"
        }
        let y2 = A_t[2].getBoundingClientRect().y;

        if (y2 > upp && y2 < dow) {
            A_i.className = A_i_class + " Aimg_3"
        }
        let y3 = A_t[3].getBoundingClientRect().y;

        if (y3 > upp && y3 < dow) {
            A_i.className = A_i_class + " Aimg_4"
        }
    };

    function page_B_img_change() {
        let y0 = B_t[0].getBoundingClientRect().y;

        if (y0 > upp && y0 < dow) {
            B_i.className = B_i_class + " Bimg_1"
            B_i_2.className = B_i_2_class + " Bimg_5"
        }
        let y1 = B_t[1].getBoundingClientRect().y;

        if (y1 > upp && y1 < dow) {
            B_i.className = B_i_class + " Bimg_2"
            B_i_2.className = B_i_2_class + " Bimg_6"
        }
        let y2 = B_t[2].getBoundingClientRect().y;

        if (y2 > upp && y2 < dow) {
            B_i.className = B_i_class + " Bimg_3"
            B_i_2.className = B_i_2_class + " Bimg_7"
        }
        let y3 = B_t[3].getBoundingClientRect().y;

        if (y3 > upp && y3 < dow) {
            B_i.className = B_i_class + " Bimg_4"
            B_i_2.className = B_i_2_class + " Bimg_8"
        }
    };

    function page_C_img_change() {
        let y0 = C_t[0].getBoundingClientRect().y;

        if (y0 > upp && y0 < dow) {
            C_i.className = C_i_class + " Cimg_1"
        }
        let y1 = C_t[1].getBoundingClientRect().y;

        if (y1 > upp && y1 < dow) {
            C_i.className = C_i_class + " Cimg_2"
        }
        let y2 = C_t[2].getBoundingClientRect().y;

        if (y2 > upp && y2 < dow) {
            C_i.className = C_i_class + " Cimg_3"
        }
        let y3 = C_t[3].getBoundingClientRect().y;

        if (y3 > upp && y3 < dow) {
            C_i.className = C_i_class + " Cimg_4"
        }
    };
}
// ------------------------------------------------
















