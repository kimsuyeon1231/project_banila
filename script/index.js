/* 배너 */
const bnrSeller = new Swiper('#main_bnr .swiper',{
    loop : true,
    centeredSlides: false,
    navigation: {
        nextEl: '.bnr_control .swiper-button-next',
        prevEl: '.bnr_control .swiper-button-prev',
    },
    scrollbar: {
        el: '.bnr_control .swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay : {delay:3000,},
    })
    
/* 베스트셀러 슬라이드 */
const bestSeller = new Swiper('#best_seller .swiper',{
    spaceBetween : 15,
    slidesPerView : 5,
    loop : true,
    centeredSlides: false,
    navigation: {
        nextEl: '.best_control .swiper-button-next',
        prevEl: '.best_control .swiper-button-prev',
    },
    pagination: {
        el: '#best_seller .swiper-pagination',
        clickable: true,

    },
    breakpoints: {/* 반응형 */
        1025: { slidesPerView: 5 },
        769: { slidesPerView: 4 },
        320: { 
            slidesPerView: 3,
            spaceBetween : 11,
        },
    }
    /* autoplay : {delay:3000,}, */
    })

    
    
     /* 베스트셀러 버튼 */
    const bestBtns = document.querySelectorAll('.best_btn');
    const bestGroup = document.querySelectorAll('#best_seller .best_g');

    bestBtns.forEach(btn => {
    btn.addEventListener('click', () => {

    const tabId = btn.dataset.tab;  // "all", "skin", "cleanging", "makeup"

    // 1. 버튼 active 초기화
    bestBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. bestGroup active 초기화
    bestGroup.forEach(c => {
    if (c.dataset.tab === tabId) {
        c.classList.add('active');
    } else {
        c.classList.remove('active');
    }
    });

    });
});

/* 베스트셀러 프로덕트 오버레이 */

document.querySelectorAll('.best_product').forEach(product => {
    // 오버레이 div 생성
    const overlay = document.createElement('div');
    overlay.classList.add('dark-overlay');
    // a.best_product 안에 넣기
    product.appendChild(overlay);
    // hover 이벤트 설정
    product.addEventListener('mouseenter', () => {
        overlay.classList.add('active');
    });
    product.addEventListener('mouseleave', () => {
        overlay.classList.remove('active');
    });
});

/* 뉴 슬라이드 */
const newSeller = new Swiper('#new .swiper',{
    slidesPerView : 3,
    loop : true,
    centeredSlides: false,
    pagination: {
        el: '#new .swiper-pagination',
        clickable: true,
    },
    breakpoints: {/* 반응형 */
        1025: { slidesPerView: 3 },
        769: { slidesPerView: 3,
                spaceBetween : 3,
        },
        320: { slidesPerView: 1, spaceBetween: 0},
    }
    /* autoplay : {delay:3000,}, */
    })



    /* 스테디셀러 */
    document.addEventListener('DOMContentLoaded', () => {
        const steadySwiper = new Swiper('#steady_seller .swiper', {
            // 화면에 1장씩, 좌우 드래그로 넘기기
            spaceBetween : 63,
            slidesPerView: 1,
            loop: true,                 // 필요 없으면 false
            allowTouchMove: true,       // 터치/마우스 드래그 허용 (기본값 true)
            grabCursor: true,           // 손모양 커서 → 드래그 가능 느낌
            // 키보드/마우스휠 편의(선택)
            keyboard: { enabled: true },
            mousewheel: { forceToAxis: true, releaseOnEdges: true },
            // 스크롤바: HTML에 있는 .swiper-scrollbar 사용 (드래그 가능)
            scrollbar: {
                el: '#steady_seller .swiper-scrollbar',
                draggable: true,
                dragSize: 'auto',
            },
            // 초기 렌더 시 숨김상태였다면 레이아웃 변화 감지
            breakpoints: {
                1025: { slidesPerView: 2 },
                769: { slidesPerView: 1, },
                320: { slidesPerView: 1, 
                },
            },
    observer: true,
    observeParents: true,
    });

/* 이벤트 슬라이드 */
const eventSlide = new Swiper('#event .swiper',{
    slidesPerView : 2,
    loop : true,
    centeredSlides: false,
    pagination: {
        el: '#event .swiper-pagination',
        clickable: true,
    },
    breakpoints: {/* 반응형 */
        769 : {spaceBetween : 10,
                slidesPerView : 2,
        },
        320: { slidesPerView: 1},
    }
    /* autoplay : {delay:3000,}, */
    })


/* 인플루언서 */
const bestSeller = new Swiper('#celebrity .influencer', {
        spaceBetween : 3,
        slidesPerView : 5,
        loop : true,
        centeredSlides: false,
        navigation: {
            nextEl: '.influencer .swiper-button-next',
            prevEl: '.influencer .swiper-button-prev',
        },
        breakpoints: {
            1025: { slidesPerView: 5 },
            769: { slidesPerView: 4 },
            320: {slidesPerView: 3,
                spaceBetween : 1,
                scrollbar: {
                    el: '#celebrity .swiper-scrollbar',
                    draggable: true,
                    dragSize: 'auto',},
            }
        },
        autoplay : {delay:3000,},
        })
});


/* 위치계산 */
const el = document.querySelector('.gnb_product .lnb');
const rect = el.getBoundingClientRect();

console.log(rect.top, rect.left); // 화면 기준 좌표
console.log(rect.width, rect.height); // 크기