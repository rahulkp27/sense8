// add content to site:
// Hero Section
$(`#${content.hero.video.id}`)[0].src = `images/${content.hero.video.value}`;
$(`#${content.hero.heading_1.id}`)[0].innerText = content.hero.heading_1.value;
$(`#${content.services.id}`)[0].innerHTML = content.services.value.map(service => `<div data-aos="fade-up" data-aos-delay="450" data-aos-offset="50"
class=" service-item group hover:shadow-lg relative w-80 md:w-96 max-h-max text-center md:m-2 p-3 cursor-pointer rounded-md overflow-hidden">
<i
  class="${service.icon} mb-2 text-7xl transition-all ease-in-out duration-300 group-hover:-translate-y-full group-hover:opacity-0"></i>
<h4
  class="uppercase text-2xl tracking-wider mb-4 transition-all ease-in-out duration-300 group-hover:-translate-y-full">
  ${service.heading}</h4>
<div>
  <div class="service-item-bg absolute text-center opacity-10 w-full h-full">
    <i
      class="${service.icon} mb-2 text-7xl transition-all ease-in-out duration-300 opacity-0 translate-y-full group-hover:-translate-y-2/4 group-hover:opacity-100"></i>
  </div>
  <div class="overlay text-justify relative">
    <p class="text-slate-800 small transition-all ease-in-out duration-300 group-hover:-translate-y-full group-hover:opacity-0"
      style="font-weight: 300;">

      ${service.text.slice(0, 126)}...
    </p>
    <p class="text-slate-800 full transition-all ease-in-out duration-300 absolute w-full top-12 translate-y-full group-hover:-translate-y-3/4 group-hover:opacity-1"
      style="font-weight: 300;">
      ${service.text}

    </p>
  </div>
</div>
</div>`).join("\n");


$(`#${content.stats.id}`)[0].innerHTML = content.stats.value.map(st => `<div data-aos="flip-left"
class=" flex flex-col  justify-center items-center">
<i class="${st.icon} text-4xl md:text-5xl"></i>
<span style="font-weight: 300;" class="text-3xl md:text-4xl mt-2 mb-1">${st.number} <i class="las la-plus"></i></span>
<p class="uppercase text-xs text-prim tracking-wider">${st.text}</p>
</div>`).join("\n")


$(`#${content.workflow.value.icons.id}`)[0].innerHTML = content.workflow.value.icons.value.map(ic => `<div data-aos="zoom-in" data-aos-delay="450" data-aos-offset="50"
class="workflow-item flex flex-col justify-center items-center text-white" data-heading="${ic.heading}">
<div
  class="hover:bg-prim border border-white rounded-full transition-all duration-300 ease-in-out w-16 md:w-32 h-16 md:h-32 flex justify-center items-center">
  <i class="${ic.icon} text-2xl md:text-3xl lg:text-5xl"></i>
</div>
<p class="uppercase mt-3 tracking-widest" style="font-weight: 300;">${ic.heading}</p>
</div>`).join("\n")

let workflowMap = new Map();
content.workflow.value.icons.value.map(ic => workflowMap.set(ic.heading, ic.text))

$(`.workflow-item`).on('click', (e) => {
  $(`#${content.workflow.value.text.id}`)[0].innerText = workflowMap.get($(e.currentTarget).data('heading'));
})

$(`#${content.workflow.value.text.id}`)[0].innerText = content.workflow.value.text.value;


$(`#${content.clients.id}`)[0].innerHTML = content.clients.value.map(c => `<div data-aos="zoom-in" data-aos-delay="300"
class="client-item rounded-md m-2 w-20 md:w-28 overflow-hidden relative">
<img src="./images/${c.value}" alt="client" class="w-full">
<div class="client-overlay absolute w-full h-full top-0 cursor-pointer"></div>
</div>`).join("\n")

$(`#${content.events.id}`)[0].innerHTML = content.events.value.map(e => `<div
class="event-item overflow-hidden relative shadow-md">
<img src="images/${e.im_link}" alt="Event">
<div class="event-overlay absolute top-0 opacity-0 w-full h-full flex justify-center items-center">
  <a href="${e.yt_link}" target="_blank" class="flex justify-center items-center">
    <i class="lab la-youtube text-6xl text-red-600"></i>
    <p class="uppercase font-bold tracking-wide text-xl text-yellow-400">youtube link</p>
  </a>
</div>
</div>`).join("\n")


$(`#${content.creators.id}`)[0].innerHTML = content.creators.value.map(c => `<a href="${c.yt_link}"><div  class="creator-item w-full overflow-hidden relative group">
<img src="./images/${c.im_link}" alt="creator" class="w-full" loading="lazy">
<div class="creator-overlay absolute w-full h-full top-0 cursor-pointer">
  <div
    class="absolute w-full h-full top-full opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all ease-in-out duration-300 flex">
    <div class="creator-info py-3 px-2 mt-auto w-full text-white">
      <p style="line-height: 7px;"
        class="uppercase tracking-wide font-semibold text-xs transition-all ease-in-out duration-300 delay-300 opacity-0 group-hover:opacity-100">
        ${c.name}</p>
      <span
        class="uppercase font-mono tracking-tight mt-1 transition-all ease-in-out duration-300 delay-300 opacity-0 group-hover:opacity-100"
        style="font-size: 11px;">${c.subs} SUBS</span>
    </div>
  </div>
</div>
</div></a>`).join("\n")


$(`#${content.team.id}`)[0].innerHTML = content.team.value.map(t => `<div class="swiper-slide">
<div class="swiper-overlay"></div>
<img src="images/${t.im_link}" alt="Team Member">
<div
  class="member-info p-4 text-center mt-4 -translate-y-full opacity-0 transition-all ease-in-out duration-300">
  <h4 class="uppercase text-prim text-sm">${t.name}</h4>
  <p class="text-xs">${t.designation}</p>
</div>
</div>`).join("\n")



$(`#${content.bootcamp.id}`)[0].innerHTML = content.bootcamp.value.map(img => `<div class="image-item overflow-hidden rounded-md shadow-md" data-aos="zoom-in"
data-aos-delay="500">
<img src="images/${img}" alt="Bootcamp Image"
  class="transition-all ease-in-out duration-300 hover:scale-125">
</div>`).join("\n")


$(`#${content.roasters.id}`)[0].innerHTML = content.roasters.value.map(img => `<div class="image-item group overflow-hidden rounded-md shadow-md relative" data-aos="zoom-in"
data-aos-delay="500">
<img src="images/${img.name}" alt="Roaster Image"
  class="transition-all ease-in-out duration-300 hover:scale-125">
  <div class="overlay absolute w-full h-full flex justify-center items-center group-hover:top-0 group-hover:opacity-100 opacity-0 top-full transition-all duration-300 ease-in-out">
    <p class="uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out delay-100 opacity-0 group-hover:opacity-100" style="background: rgba(0, 0, 0, 0.7);">${img.game}</p>
  </div>
</div>`).join("\n")

$(`#${content.production.id}`)[0].innerHTML = `<img data-aos="zoom-in" data-aos-delay="300" class="" src="images/${content.production.value}" alt="Production Example">`


$(`#${content.contact.id}`)[0].innerHTML = `<div class="socials grid grid-cols-4 gap-3 md:gap-8 lg:gap-12 m-2 mt-12">
<div class="social-item flex flex-col justify-center items-center text-white">
  <a href="${content.contact.youtube}">
    <div
      class="bg-prim hover:bg-transparent hover:text-prim border border-white rounded-full transition-all duration-300 ease-in-out w-8 md:w-12 h-8 md:h-12 flex justify-center items-center">
      <i class="lab la-youtube md:text-xl lg:text-2xl"></i>
    </div>
  </a>
</div>
<div class="social-item flex flex-col justify-center items-center text-white">
  <a href="${content.contact.discord}">
    <div
      class="bg-prim hover:bg-transparent hover:text-prim border border-white rounded-full transition-all duration-300 ease-in-out w-8 md:w-12 h-8 md:h-12 flex justify-center items-center">
      <i class="lab la-discord md:text-xl lg:text-2xl"></i>
    </div>
  </a>
</div>
<div class="social-item flex flex-col justify-center items-center text-white">
  <a href="${content.contact.facebook}">
    <div
      class="bg-prim hover:bg-transparent hover:text-prim border border-white rounded-full transition-all duration-300 ease-in-out w-8 md:w-12 h-8 md:h-12 flex justify-center items-center">
      <i class="lab la-facebook-f md:text-xl lg:text-2xl"></i>
    </div>
  </a>
</div>
<div class="social-item flex flex-col justify-center items-center text-white">
  <a href="${content.contact.instagram}">
    <div
      class="bg-prim hover:bg-transparent hover:text-prim border border-white rounded-full transition-all duration-300 ease-in-out w-8 md:w-12 h-8 md:h-12 flex justify-center items-center">
      <i class="lab la-instagram md:text-xl lg:text-2xl"></i>
    </div>
  </a>
</div>
</div>

<div class="email">
<a class="hover:text-prim" href="mailto:${content.contact.email}">${content.contact.email}</a>
</div>

<div class="phone">
<a class="hover:text-prim" href="tel:+91 ${content.contact.phone}">${content.contact.phone}</a>
</div>

<div class="mb-4 text-center text-white max-w-5xl mx-2">
<p class="uppercase" style="font-weight: 300;">&copy; All rights reserved by <a class="text-prim"
    href="">sense8esports</a></p>
</div>`

// TYPEWRITER STUFF
const headings = content.hero.heading_2.value;

let typed = new Typed(".typing", {
  strings: headings,
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
})

// change navbar color to white
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 30) {
    $(".las.la-bars").css("color", "black");
    $(".navbar").addClass('white-navbar');
    $(".navbar").removeClass('transparent-navbar');

  } else {
    $(".las.la-bars").css("color", "white");
    $(".navbar").removeClass('white-navbar');
    $(".navbar").addClass('transparent-navbar');
  }
});


// AOS animation library
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Swiper Js for teams section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
