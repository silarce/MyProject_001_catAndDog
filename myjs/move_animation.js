

const bookmarks = document.querySelectorAll('.bookmark');
const page_A = document.querySelector('#page_A');
const page_B = document.querySelector('#page_B');
const page_C = document.querySelector('#page_C');
const page_D = document.querySelector('#page_D');
// const page_E = document.querySelector('#page_E');
// page_A.style.top = "-100%"
// page_B.style.top = "-100%"
// page_C.style.top = "-100%"
// page_D.style.top = "-100%"
// page_E.style.top = "-100%"

const hero_A = document.querySelector('#page_A>.hero_image');
const hero_C = document.querySelector('#page_C>.hero_image');

// 設定其他page復位
{
    // returnA()
    // returnB()
    // returnC()
    // returnD()
    // returnE()
    // A頁面復位
    function returnA() {
        if (page_A.style.top == "-100%") {
            return
        }
        // 回復不透明度
        page_A.style.opacity = 1;

        let locationY = -100;
        let widthX = 20;
        page_A.style.top = `${locationY}%`;
        page_A.style.width = `${widthX}vw`;
        // 標籤復位
        const bookmark0 = bookmarks[0];
        let bookmarkY = -10;
        let markMoveTimer = setInterval(markMove, 1)
        function markMove() {
            if (bookmarkY >= 0) {
                clearInterval(markMoveTimer);
            }
            bookmark0.style.top = `${bookmarkY}%`;
            bookmarkY += 0.1;
        }

        // let bookmarkY = 0;
        // const bookmark0 = bookmarks[0];
        // bookmark0.style.top = `${bookmarkY}%`;


    }
    // B頁面復位
    function returnB() {
        if (page_B.style.top == "-100%") {
            return
        }
        page_B.style.opacity = 1;

        let locationY = -100;
        let locationL = 40;
        let widthX = 20;
        page_B.style.top = `${locationY}%`;
        page_B.style.width = `${widthX}vw`;
        page_B.style.left = `${locationL}%`;

        const bookmark3 = bookmarks[2];
        let bookmarkY = -10;
        let markMoveTimer = setInterval(markMove, 1)
        function markMove() {
            if (bookmarkY >= 0) {
                clearInterval(markMoveTimer);
            }
            bookmark3.style.top = `${bookmarkY}%`;
            bookmarkY += 0.1;
        }

    }
    // C頁面復位
    function returnC() {
        if (page_C.style.top == "-100%") {
            return
        }
        page_C.style.opacity = 1;

        let locationY = -100;
        let widthX = 20;
        let locationL = 80;
        page_C.style.top = `${locationY}%`;
        page_C.style.width = `${widthX}vw`;
        page_C.style.left = `${locationL}%`;

        const bookmark5 = bookmarks[4];
        let bookmarkY = -10;
        let markMoveTimer = setInterval(markMove, 1)
        function markMove() {
            if (bookmarkY >= 0) {
                clearInterval(markMoveTimer);
            }
            bookmark5.style.top = `${bookmarkY}%`;
            bookmarkY += 0.1;
        }

    }
    // D頁面復位
    function returnD() {
        if (page_D.style.top == "-100%") {
            return
        }
        page_D.style.opacity = 1;

        let locationY = -100;
        let locationL = 20;
        let widthX = 20;
        page_D.style.top = `${locationY}%`;
        page_D.style.width = `${widthX}vw`;
        page_D.style.left = `${locationL}%`;

        const bookmark1 = bookmarks[1];
        let bookmarkY = -10;
        let markMoveTimer = setInterval(markMove, 1)
        function markMove() {
            if (bookmarkY >= 0) {
                clearInterval(markMoveTimer);
            }
            bookmark1.style.top = `${bookmarkY}%`;
            bookmarkY += 0.1;
        }

    }
    // E頁面復位
}

// 這個變數用來記錄是否有移動動畫正在進行
// 若為1代表有動畫正在進行
let ifmove = 0;

// page_A的移動動畫
// page_A的移動動畫
// page_A的移動動畫
{
    // 書籤
    bookmarks[0].addEventListener('click', moveA);
    // pageA

    function moveA() {
        // 先判定是否有動畫在跑
        // ifmove為1代表移動有動畫在跑
        if (ifmove === 1) {
            return;
        }
        ifmove = 1;
        // 將卷軸歸位為0
        page_A.scrollTop = 0;
        // 設定為hidden，避免動畫中可以捲動
        page_A.style.overflow = 'hidden'

        // 先設定各頁面的z-index
        page_A.style.zIndex = 11;
        page_B.style.zIndex = 10;
        page_C.style.zIndex = 10;
        page_D.style.zIndex = 10;
        // E未完成
        // page_E.style.zIndex = 0;
        let locationY = -100;
        let widthX = 20;
        let bgiX = -70;
        page_A.style.top = `${locationY}%`;
        page_A.style.width = `${widthX}vw`;
        hero_A.style.backgroundPositionX = `${bgiX}%`;

        // 元素垂直降下
        let movetimerY = setInterval(moveY, 1)
        let movetimerX;
        function moveY() {
            page_A.style.top = `${locationY}%`;
            if (locationY >= 0) {
                clearInterval(movetimerY)
                movetimerX = setInterval(moveX, 1);
            }
            locationY += 0.5;
        }
        // 元素水平展開同時水平位移背景圖片
        function moveX() {
            page_A.style.width = `${widthX}vw`;
            hero_A.style.backgroundPositionX = `${bgiX}%`;
            if (widthX >= 100) {
                clearInterval(movetimerX);
                // 設定為scroll，動畫結束後可以捲動
                page_A.style.overflow = 'scroll'
                // 動畫結束後將其他元素的書籤歸位
                returnB()
                returnC()
                returnD()
                // 將ifmove設定回0，使其他移動動畫可以作用
                ifmove = 0;
            }
            widthX += 0.5;
            bgiX += 0.375;
        }
        // bookmark[0] 書籤垂直降下並隱藏在視窗外
        this.style.transition = "0s";
        const bookmark0 = bookmarks[0];
        let bookmarkY = 0;
        let bookmarktimer = setInterval(moveBookY, 1);
        function moveBookY() {
            bookmark0.style.top = `${bookmarkY}%`;
            if (bookmarkY >= 100) {
                clearInterval(bookmarktimer);
            }
            bookmarkY += 0.5;
        }
    }
}

// page_B的移動動畫
// page_B的移動動畫
// page_B的移動動畫
{
    // pageB
    bookmarks[2].addEventListener('click', moveB)
    function moveB() {
        if (ifmove === 1) {
            return;
        }
        ifmove = 1;
        page_B.scrollTop = 0;

        page_B.style.overflow = 'hidden'
        // 先設定各頁面的z-index
        page_A.style.zIndex = 10;
        page_B.style.zIndex = 11;
        page_C.style.zIndex = 10;
        page_D.style.zIndex = 10;
        // E未完成
        // page_E.style.zIndex = 0;
        let locationY = -100;
        let locationL = 40;
        let widthX = 20;
        page_B.style.top = `${locationY}%`;
        page_B.style.width = `${widthX}vw`;
        page_B.style.left = `${locationL}%`;

        let movetimerY = setInterval(moveY, 1)
        let movetimerX;
        let movetimerLX;
        function moveY() {
            page_B.style.top = `${locationY}%`;
            if (locationY >= 0) {
                clearInterval(movetimerY)
                movetimerX = setInterval(moveX, 1);
                movetimerLX = setInterval(moveLX, 1)
            }
            locationY += 0.5;
        }
        function moveX() {
            page_B.style.width = `${widthX}vw`;
            if (widthX >= 100) {
                clearInterval(movetimerX);
                page_B.style.overflow = 'scroll'
                returnA()
                returnC()
                returnD()
                ifmove = 0;
            }
            widthX += 0.5;
        }

        function moveLX() {
            page_B.style.left = `${locationL}%`;
            if (locationL <= 0) {
                clearInterval(movetimerLX);
            }
            locationL -= 0.25;
        }
        // bookmark[2] move
        this.style.transition = "0s";
        const bookmark2 = bookmarks[2];
        let bookmarkY = 0;
        let bookmarktimer = setInterval(moveBookY, 1);
        function moveBookY() {
            bookmark2.style.top = `${bookmarkY}%`;
            if (bookmarkY >= 100) {
                clearInterval(bookmarktimer);
            }
            bookmarkY += 0.5;
        }
    }
}

// page_C的移動動畫
// page_C的移動動畫
// page_C的移動動畫
{
    // 書籤
    bookmarks[4].addEventListener('click', moveC);

    // pageC
    function moveC() {
        if (ifmove === 1) {
            return;
        }
        ifmove = 1;

        page_C.style.overflow = 'hidden'
        page_C.scrollTop = 0;
        // 先設定各頁面的z-index
        page_A.style.zIndex = 10;
        page_B.style.zIndex = 10;
        page_C.style.zIndex = 11;
        page_D.style.zIndex = 10;
        //E未完成
        // page_E.style.zIndex = 0;
        let locationY = -100;
        let widthX = 20;
        let locationL = 80;
        let bgiX = 0;
        let heroL = -80;
        page_C.style.top = `${locationY}%`;
        page_C.style.width = `${widthX}vw`;
        page_C.style.left = `${locationL}%`;
        hero_C.style.backgroundPositionX = `${bgiX}%`;
        hero_C.style.left = `${heroL}vw`;

        let movetimerY = setInterval(moveY, 1)
        let movetimerX;
        let movetimerLX
        function moveY() {
            page_C.style.top = `${locationY}%`;
            if (locationY >= 0) {
                clearInterval(movetimerY)
                movetimerX = setInterval(moveX, 1);
                movetimerLX = setInterval(moveLX, 1);
            }
            locationY += 0.5;
        }
        function moveX() {
            page_C.style.width = `${widthX}vw`;
            hero_C.style.backgroundPositionX = `${bgiX}%`;
            if (widthX >= 100) {
                clearInterval(movetimerX);
                page_C.style.overflow = 'scroll'
                returnA()
                returnB()
                returnD()
                ifmove = 0;
            }
            widthX += 0.5;
            bgiX += 0.375;
        }
        function moveLX() {
            page_C.style.left = `${locationL}%`;
            hero_C.style.left = `${heroL}vw`;
            if (locationL <= 0) {
                clearInterval(movetimerLX);
            }
            locationL -= 0.5;
            heroL += 0.5
        }

        // bookmark[4] move
        this.style.transition = "0s";
        const bookmark4 = bookmarks[4];
        let bookmarkY = 0;
        let bookmarktimer = setInterval(moveBookY, 1);
        function moveBookY() {
            bookmark4.style.top = `${bookmarkY}%`;
            if (bookmarkY >= 100) {
                clearInterval(bookmarktimer);
            }
            bookmarkY += 0.5;
        }
    }
}

// page_D的移動動畫
// page_D的移動動畫
// page_D的移動動畫
{
    let page_D_main = document.querySelector('#page_D_main')
    let page_D_nav = document.querySelector('#page_D_nav')
    let d_main_class = page_D_main.className;
    let d_nav_class = page_D_nav.className;

    // pageD
    bookmarks[1].addEventListener('click', moveD)
    function moveD() {
        if (ifmove === 1) {
            return;
        }
        ifmove = 1;
        // 使main透明
        page_D_main.className = d_main_class + " notShow"
        page_D_nav.className = d_nav_class + " notShow"

        page_D.style.overflow = 'hidden'
        page_D.scrollTop = 0;
        // 先設定各頁面的z-index
        page_A.style.zIndex = 10;
        page_B.style.zIndex = 10;
        page_C.style.zIndex = 10;
        page_D.style.zIndex = 11;
        // E未完成
        // page_E.style.zIndex = 0;
        let locationY = -100;
        let locationL = 20;
        let widthX = 20;
        page_D.style.top = `${locationY}%`;
        page_D.style.width = `${widthX}vw`;
        page_D.style.left = `${locationL}%`;

        let movetimerY = setInterval(moveY, 1)
        let movetimerX;
        let movetimerLX;
        function moveY() {
            page_D.style.top = `${locationY}%`;
            if (locationY >= 0) {
                clearInterval(movetimerY)
                movetimerX = setInterval(moveX, 1);
                movetimerLX = setInterval(moveLX, 1)
            }
            locationY += 0.5;
        }
        function moveX() {
            page_D.style.width = `${widthX}vw`;
            if (widthX >= 100) {
                clearInterval(movetimerX);
                page_D.style.overflow = 'scroll'
                returnA()
                returnB()
                returnC()
                // 使main不透明
                page_D_nav.className = d_nav_class + " show"
                setTimeout(() => { page_D_main.className = d_main_class + " show" }, 800)

                ifmove = 0;
            }
            widthX += 0.5;
        }

        function moveLX() {
            page_D.style.left = `${locationL}%`;
            if (locationL <= 0) {
                clearInterval(movetimerLX);
            }
            locationL -= 0.166667;
        }
        // bookmark[2] move
        this.style.transition = "0s";
        const bookmark1 = bookmarks[1];
        let bookmarkY = 0;
        let bookmarktimer = setInterval(moveBookY, 1);
        function moveBookY() {
            bookmark1.style.top = `${bookmarkY}%`;
            if (bookmarkY >= 100) {
                clearInterval(bookmarktimer);
            }
            bookmarkY += 0.5;
        }
    }
}


// ABCD透明動畫
// ABCD透明動畫
// ABCD透明動畫
{
    bookmarks[3].addEventListener('click', abcdNotShow);

    function abcdNotShow() {
        if (ifmove === 1) {
            return;
        }
        ifmove = 1;

        let i = 1
        let notShowTimer = ""

        if (parseInt(page_A.style.top) >= 0) {
             notShowTimer = setInterval(notShowMoveA, 1)
        }else if (parseInt(page_B.style.top) >= 0) {
             notShowTimer = setInterval(notShowMoveB, 1)
        }else if (parseInt(page_C.style.top) >= 0) {
             notShowTimer = setInterval(notShowMoveC, 1)
        }else if (parseInt(page_D.style.top) >= 0) {
             notShowTimer = setInterval(notShowMoveD, 1)
        }else {ifmove = 0;}
        

        function notShowMoveA() {
            page_A.style.opacity = i;
            i -= 0.002
            if (i <= 0) {
                clearInterval(notShowTimer)
                returnA()
                ifmove = 0;
            }
        }
        function notShowMoveB() {
            page_B.style.opacity = i;
            i -= 0.002
            if (i <= 0) {
                clearInterval(notShowTimer)
                returnB()
                ifmove = 0;
            }
        }
        function notShowMoveC() {
            page_C.style.opacity = i;
            i -= 0.002
            if (i <= 0) {
                clearInterval(notShowTimer)
                returnC()
                ifmove = 0;
            }
        }
        function notShowMoveD() {
            page_D.style.opacity = i;
            i -= 0.002
            if (i <= 0) {
                clearInterval(notShowTimer)
                returnD()
                ifmove = 0;
            }
        }



    }
}





















