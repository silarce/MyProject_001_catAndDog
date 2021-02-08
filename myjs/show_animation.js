

// 取得show_1_item並轉為陣列
const show_1_item = document.querySelectorAll('.show_1_item');
const s1Class = show_1_item[0].className;
const gateImgShow_1 = document.getElementById('gateImgShow_1');
let s1 = []
for(i = 0; i < show_1_item.length; i++){
    s1[i] = i;
}
// 取得show_2_item並轉為陣列
const show_2_item = document.querySelectorAll('.show_2_item');
const s2Class = show_2_item[0].className;
const gateImgShow_2 = document.getElementById('gateImgShow_2');
let s2 = []
for(i = 0; i < show_2_item.length; i++){
    s2[i] = i;
}

// 索引值紀錄，用於避免取到同一張照片
let imgNum= 0;
let imgOld= 0;
let imgOldOld = 0;

function show1(){
    // 設定兩個元素的z-index使之交互出現在上層
    gateImgShow_1.style.zIndex = 1;
    gateImgShow_2.style.zIndex = 0;
    // 隨機取照片索引值並改照片------------
    let reNew = Math.floor(Math.random()*9+1)
    while(reNew == imgNum || reNew == imgOld || reNew == imgOldOld){
        reNew = Math.floor(Math.random()*9+1)
    }
    // 在三張照片內不會選到重複的
    imgOldOld = imgOld;
    imgOld = imgNum;
    imgNum = reNew;
    for(i = 0; i<show_1_item.length; i++){
        show_1_item[i].style.backgroundImage = `url("img/index_show/showImg_${imgNum}.jpg")`;
    }
    // --------------------------

    // 先複製出一個新的陣列，然後隨機取得元素索引值(不重複)
    // 再用這個索引值取得元素，一個一個同時改變上下層元素的class
    // 上層變不透明(getOpacity)，下層變透明(notOpacity)
    // 最後再用setTimeout定時跑show3
    // show3內容與show1幾乎相同，只差在上下層相反
    let s1Copy = s1.concat();
    let RM = ""
    let s1Timer = setInterval(show2,200)
    function show2(){
        RM = Math.floor(Math.random()*s1Copy.length);
        TRM = s1Copy[RM]
        show_1_item[TRM].className = s1Class + " getOpacity "
        show_2_item[TRM].className = s2Class + " notOpacity "
        s1Copy.splice(RM, 1)
        if(s1Copy == false && s1Copy[0]!==0){
            clearInterval(s1Timer)
            setTimeout(show3,5000)
        }
    }
}
function show3(){
    gateImgShow_1.style.zIndex = 0;
    gateImgShow_2.style.zIndex = 1;

    // 隨機取照片索引值並改照片
    let reNew = Math.floor(Math.random()*9+1)
    while(reNew == imgNum || reNew == imgOld || reNew == imgOldOld){
        reNew = Math.floor(Math.random()*9+1)
    }
    // 在三張照片內不會選到重複的
    imgOldOld = imgOld;
    imgOld = imgNum;
    imgNum = reNew;
    for(i = 0; i<show_2_item.length; i++){
        show_2_item[i].style.backgroundImage = `url("img/index_show/showImg_${imgNum}.jpg")`;
    }
    // -------------------

    let s2Copy = s2.concat();
    let RM = ""
    let s2Timer = setInterval(show4,200)
    
    function show4(){
        RM = Math.floor(Math.random()*s2Copy.length);
        TRM = s2Copy[RM]
        show_2_item[TRM].className = s2Class + " getOpacity "
        show_1_item[TRM].className = s1Class + " notOpacity "
        s2Copy.splice(RM, 1)
        if(s2Copy == false && s2Copy[0]!==0){
            clearInterval(s2Timer)
            setTimeout(show1,5000)
        }
    }
}
show1()
































