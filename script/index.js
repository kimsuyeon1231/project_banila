/* 베스트셀러 */
const bestSeller = new Swiper('#best_seller .swiper',{
    spaceBetween : 15,
    slidesPerView : 4,
    loop : true,
    centeredSlides: false,
    navigation: {
        nextEl: '.best_g .swiper-button-next',
        prevEl: '.best_g .swiper-button-prev',
    },
    autoplay : {delay:3000,},
    })
    
    /* 스테디셀러 */
    document.addEventListener('DOMContentLoaded', () => {
        const steadySwiper = new Swiper('#steady_seller .swiper', {
            // 화면에 1장씩, 좌우 드래그로 넘기기
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
    observer: true,
    observeParents: true,
    });

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
        autoplay : {delay:3000,},
        })
});