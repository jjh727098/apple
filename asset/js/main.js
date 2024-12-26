// 메인 슬라이드
const drawerSlide = new Swiper('.drawer_slide',{
  slidesPerView: 'auto',
  spaceBetween :20,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});

$('.drawer_btn').click(function(){
  $(this).closest("section").find('.drawer_wrapper').toggleClass('show');
  $(this).css('opacity','.2');
})
$('.drawer_close').click(function(){
  $(this).closest("section").find('.drawer_wrapper').toggleClass('show');
  $('.drawer_btn').css('opacity','1');
})


// 헤더 스크롤 고정
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();//

    if (curr > lastScroll) {
        $('.navi_container').addClass('active')
    }else{
        $('.navi_container').removeClass('active')
    }
  })

// 헤더 색 변환
ScrollTrigger.create({
  trigger:".sc_technology",
  start:"0% 0%",
  endTrigger:".sc_Value",
  end:"0% 100%",
  //markers:true,
  toggleClass:{
    targets:".navi_container",
    className:"dark"
  }
})

// 네비게이션
  $('.gnb_item').hover(function(){
    $(this).find('.depth2_container').toggleClass('show');
    $('body').find('.dimmed').toggleClass('show');
})

// 검색, 장바구니 버튼 클릭시
$('.search_btn').click(function(){
  $('body').find('.search_wrapper').toggleClass('show');
  $('body').find('.dimmed').toggleClass('show');
})
$('.cart_btn').click(function(){
  $('body').find('.cart_wrapper').toggleClass('show');
  $('body').find('.dimmed').toggleClass('show');
})

videoControl(".sc_visual");
videoControl(".sc_foundation");
videoControl(".enter_container");
videoControl(".Productivity_container");
videoControl(".pnv_container");
videoControl(".connection_container");
videoControl(".apps_container");
videoControl(".sc_vision");
videoControl(".group_design");

function videoControl(frame) {
  const video = $(frame).find('video')[0]; // 비디오 DOM 요소 가져오기

  video.addEventListener('loadedmetadata', function () {
    const time = video.duration;

  // 애니메이션 정의
  const playProgress = gsap.to($(frame).find('.progress-circle'), {
    'stroke-dashoffset': 0,
    duration: time,
    ease: "none",
    repeat: -1, // 무한 반복
    onRepeat: function () {
      video.currentTime = 0; // 비디오 재생 위치 초기화
      video.play(); // 비디오 계속 재생
    }
  });

  // 재생/일시정지 버튼 클릭 이벤트
  $(frame).find('.visual_play').click(function () {
    if ($(this).hasClass('stop')) {
      $(this).removeClass('stop');
      playProgress.play(); // 애니메이션 재생
      video.play(); // 비디오 재생
    } else {
      $(this).addClass('stop');
      playProgress.pause(); // 애니메이션 일시정지
      video.pause(); // 비디오 일시정지
    }
  });

  });
}



const introTl1 = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_intro",
    start: '0% 50%',
    end: '100% 50%',
    // markers: true,
    scrub:0,
  }
})
introTl1
.to('.sc_intro video',{
  currentTime:4
})

const foundationTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_foundation",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})
foundationTl.to('.video_area',{'--css-scrim-opacity':0});


const enterTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".enter_container",
    start: '0% 0%',
    end: '80% 80%',
    // markers: true,
    scrub:0,
  }
})
enterTl.to('.enter_container .video_box',{'--css-scrim-opacity':0});
enterTl.to('.enter_container .video_label',{opacity:0});
enterTl.to('.enter_container .video_wrapper',{width:'90%'});

const PdTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".Productivity_container",
    start: '0% 0%',
    end: '80% 80%',
    // markers: true,
    scrub:0,
  }
})
PdTl.to('.Productivity_container .video_box',{'--css-scrim-opacity':0});
PdTl.to('.Productivity_container .video_label',{opacity:0});
PdTl.to('.Productivity_container .video_wrapper',{width:'90%'});

const photoTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".pnv_container ",
    start: '0% 0%',
    end: '80% 80%',
    // markers: true,
    scrub:0,
  }
})
photoTl.to('.pnv_container  .video_box',{'--css-scrim-opacity':0});
photoTl.to('.pnv_container  .video_label',{opacity:0});
photoTl.to('.pnv_container  .video_wrapper',{width:'90%'});

const ConnectTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".connection_container ",
    start: '0% 0%',
    end: '80% 80%',
    // markers: true,
    scrub:0,
  }
})
ConnectTl.to('.connection_container  .video_box',{'--css-scrim-opacity':0});
ConnectTl.to('.connection_container  .video_label',{opacity:0});
ConnectTl.to('.connection_container  .video_wrapper',{width:'90%'});

const AppsTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".apps_container ",
    start: '0% 0%',
    end: '70% 70%',
    // markers: true,
    scrub:0,
  }
})
AppsTl.to('.apps_container  .video_box',{'--css-scrim-opacity':0});
AppsTl.to('.apps_container  .video_label',{opacity:0});
AppsTl.to('.apps_container  .video_wrapper',{width:'90%'});

const visionTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".os_container ",
    start: '0% 0%',
    end: '80% 80%',
    // markers: true,
    scrub:0,
  }
})
visionTl.to('.os_container  .video_box',{'--css-scrim-opacity':0});
visionTl.to('.os_container  .video_label',{opacity:0});
visionTl.to('.os_container  .video_wrapper',{width:'90%'});


const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 1220;
canvas.height = 1172;

const frameCount = 199;

const currentFrame = (idx) => {

  return `https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/large/${idx.toString().padStart(4, '0')}.jpg`;
}; 

const images = [];
const card = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i + 1);
  images.push(img);
}

avx = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_design .sticky-wrapper',
    scrub: 0,
    start: 'top 30%',
    end: '100% 100%',
    // markers: true,
    onUpdate:function(self){

    }
  },
})
avx.to(card,199,{
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  onUpdate: render,
},'a1');
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(1)',5,{
  opacity:1,
},'a1+=14')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(1)',10,{
  yPercent:100
},'a1+=15')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(1)',5,{
  opacity:0,
},'a1+=37')

avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(2)',5,{
  opacity:1,
},'a1+=56')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(2)',10,{
  yPercent:-100
},'a1+=57')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(2)',5,{
  opacity:0,
},'a1+=80')

avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(3)',5,{
  opacity:1,
},'a1+=87')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(3)',10,{
  yPercent:100
},'a1+=88')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(3)',5,{
  opacity:0,
},'a1+=110')

avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(4)',5,{
  opacity:1,
},'a1+=120')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(4)',10,{
  yPercent:-100
},'a1+=130')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(4)',5,{
  opacity:0,
},'a1+=150')

avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(5)',5,{
  opacity:1,
},'a1+=160')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(5)',10,{
  yPercent:100
},'a1+=161')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(5)',5,{
  opacity:0,
},'a1+=170')

avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(6)',5,{
  opacity:1,
},'a1+=186')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(6)',10,{
  yPercent:100
},'a1+=187')
avx.to('.sc_design .hg_box .hg_list .hg_item:nth-child(6)',5,{
  opacity:0,
},'a1+=190')

images[0].onload = render;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(images[card.frame], 0, 0);
}

// technology
const technologyTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_technology .scroll_area",
    start: '0% 80%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})
technologyTl
.to('.part_01_back',{ y:-500, duration: 20 })
.to('.part_01_front',{ y:-400, duration: 20  },"<")
.to('.part_03',{ y:-300,  duration: 20 },"<")
.to('.start_frame',{ y:-100,  duration:20 },"<")
.to('.sc_technology .scroll_area video',{opacity:1},"c+=.70")
.to('.start_frame',{ opacity:0 },"b+=.62")

.to('.part_01_back',{ y:-1000, duration: 4},"a")
.to('.part_01_front',{ y:-800, duration: 4},"a")
.to('.part_03',{ y:-700,duration: 4},"a")
.to('.sc_technology .scroll_area video',{ y:100,duration: 4 },"a")
.to({}, { 
  duration: 4, // currentTime 변경에 걸리는 시간
  onUpdate: function () {
    const video = document.querySelector('.sc_technology .scroll_area video');
    const progress = gsap.getProperty(this, 'progress'); // 애니메이션 진행률 (0~1)
    video.currentTime = 0 + (5 * progress); // 0초에서 5초까지 점진적으로 변경
  },
  ease: "power1.inOut" // 자연스러운 가속/감속 효과
},"a");


// speaker
let videoElem1 = document.querySelector('#speaker_video');

ScrollTrigger.create({
  trigger:".group_speaker",
  start:"0% 0%",
  endTrigger:".group_feature",
  end:"0% 100%",
  // markers:true,
  onEnter: () => videoElem1.play(),
})

// feature
const featureTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_technology .group_feature",
    start: '0% 100%',
    endTrigger:".group_feature",
    end: '40% 40%',
    // markers: true,
    scrub:0,
  }
})

featureTl
.from('.feature_thumb.off',{ opacity:1, })
.from('.feature_thumb.on',{ opacity:0, })
.to('.feature_thumb.on',{ opacity:1, })

// sensor 
const sensorTl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".feature_area",
    start: '50% 50%',
    end: '100% 100%',
    // markers: true,
    onEnter:function(){
      sensorTl.play();
    }
  }
})

const sensorTl = gsap.timeline({
  paused: true,
  onComplete: function () {
    $('.replay_btn').removeClass('disabled')
  },
  onStart : function () {
    $('.replay_btn').addClass('disabled')
  }
});

sensorTl
  .to('.detail_off', { 
    opacity: 1, // 켜짐
    duration: 2 // 지속 시간
  })
  .to('.detail_video', { 
    opacity: 1, 
    duration: 2 
  })
  .to('.detail_tracking', { 
    opacity: 1, 
    duration: 2 
  })
  .to('.detail_mapping', { 
    opacity: 1, 
    duration: 2
  })
  .to('.detail_all', { 
    opacity: 1, 
    duration: 2
  })

// 버튼 클릭 이벤트
document.querySelector('.replay_btn').addEventListener('click', function () {
  sensorTl.restart(); // 타임라인 처음부터 다시 실행
});


// chipTl
const chipTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".group_dual_chip",
    start: '0% 100%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})

chipTl
.to('.dual_chip_thumb',{ width:1466, },'>')
.to('.dual_chip_thumb',{ opacity:1, },'>')

