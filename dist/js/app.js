/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/*---------------------------------------------------------------------------
Проверка WebP
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height === 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      document.body.classList.add(support ? "webp" : "no-webp");
   });
}


/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("input.tel-mask").forEach((input) => {
         let keyCode;
         function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ __ __",
               i = 0,
               val = this.value.replace(/\D/g, ""),
               new_value = matrix.replace(/[_\d]/g, (a) =>
                  i < val.length ? val.charAt(i++) : a
               );
            i = new_value.indexOf("_");
            if (i !== -1) {
               i < 5 && (i = 3);
               new_value = new_value.slice(0, i);
            }
            let reg = matrix
               .substr(0, this.value.length)
               .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
               .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
               this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) this.value = "";
         }

         input.addEventListener("input", mask);
         input.addEventListener("focus", mask);
         input.addEventListener("blur", mask);
         input.addEventListener("keydown", mask);
      });
   });
}


/*---------------------------------------------------------------------------
Бургер меню
---------------------------------------------------------------------------*/
function burgerMenu() {
   document.addEventListener("DOMContentLoaded", () => {
      const menuIcon = document.querySelector(".menu__icon");
      const menuBody = document.querySelector(".menu__body");
      const body = document.body;
      const menuBodyClose = document.querySelector(".menu__body-close");
      const animationDuration = 500;

      if (!menuIcon || !menuBody) return;

      const closeMenu = () => {
         menuIcon.classList.remove("active");
         menuBody.classList.remove("active");
         body.classList.remove("no-scroll");
      };

      menuIcon.addEventListener("click", () => {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", (e) => {
         const link = e.target.closest("a");
         if (link) {
            e.preventDefault();
            closeMenu();
            setTimeout(() => {
               window.location.href = link.href;
            }, animationDuration);
         }
      });

      if (menuBodyClose) menuBodyClose.addEventListener("click", closeMenu);

      document.addEventListener("click", (e) => {
         if (!menuBody.contains(e.target) && !menuIcon.contains(e.target)) closeMenu();
      });
   });
}



/*---------------------------------------------------------------------------
Попапы
---------------------------------------------------------------------------*/
function popups() {
   document.addEventListener("DOMContentLoaded", () => {
      const openButtons = document.querySelectorAll(".open-popup");

      function closeActivePopup() {
         const activePopup = document.querySelector(".popup.show");
         if (activePopup) {
            activePopup.classList.remove("show");
         }
      }

      openButtons.forEach((button) => {
         button.addEventListener("click", function (e) {
            e.preventDefault();

            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);
            if (!popup) return;

            // закрываем текущий попап
            closeActivePopup();

            // открываем новый
            popup.classList.add("show");
            document.body.style.overflow = "hidden";
         });
      });

      document.addEventListener("click", (e) => {
         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         const isCloseBtn = e.target.closest(".popup__close");
         const isInsideBody = e.target.closest(".popup__body");
         const isPopupArea = e.target.closest(".popup");

         if (isCloseBtn || (!isInsideBody && isPopupArea)) {
            openPopup.classList.remove("show");
            document.body.style.overflow = "";
         }
      });
   });
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.popups();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.phoneMask();


/*==========================================================================
Preloader
============================================================================*/
function initPreloader() {
   const preloader = document.querySelector('.preloader');
   const body = document.querySelector('body');

   if (!preloader) return;

   const MIN_TIME = 1000;
   const startTime = Date.now();

   window.addEventListener('load', () => {
      const timePassed = Date.now() - startTime;
      const delay = Math.max(0, MIN_TIME - timePassed);

      setTimeout(() => {
         preloader.classList.add('hidden');
         body.style.overflow = 'unset';

         setTimeout(() => {
            preloader.remove();
         }, 1200);
      }, delay);
   });
}


/*==========================================================================
Header fix
============================================================================*/
function initHeaderFix() {
   const header = document.querySelector('header');
   if (!header) return;

   const toggleHeaderClass = () => {
      header.classList.toggle('fx', window.scrollY > 0);
   };

   toggleHeaderClass();
   window.addEventListener('scroll', toggleHeaderClass);
}


/*==========================================================================
Observer Animation
============================================================================*/
function initObserverAnimation() {
   const elements = document.querySelectorAll('.element-animation');
   if (!elements.length) return;

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('element-show');
         }
      });
   }, {
      threshold: 0
   });

   elements.forEach(el => observer.observe(el));
}

/*==========================================================================
initOfficeTabs
============================================================================*/
function initOfficeTabs() {
   const tabs = document.querySelectorAll('.offices__tab');
   const items = document.querySelectorAll('.offices__items');
   const loader = document.querySelector('.loading-icon');

   if (!tabs.length || !items.length || !loader) return;

   let timeoutId = null;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         if (tab.classList.contains('active')) return;

         const target = tab.dataset.tab;
         if (!target) return;

         // отменяем предыдущий таймер
         if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
         }

         // активный таб
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         // показать лоадер
         loader.classList.add('active');

         // скрыть контент
         items.forEach(item => item.classList.remove('active'));

         // сбросить анимации
         document
            .querySelectorAll('.element-animation')
            .forEach(el => el.classList.remove('element-show'));

         timeoutId = setTimeout(() => {
            loader.classList.remove('active');

            const targetItem = document.querySelector(
               `.offices__items[data-tab="${target}"]`
            );
            if (!targetItem) return;

            targetItem.classList.add('active');

            // даём браузеру отрендерить DOM → затем анимация
            requestAnimationFrame(() => {
               requestAnimationFrame(() => {
                  targetItem
                     .querySelectorAll('.element-animation')
                     .forEach(el => el.classList.add('element-show'));
               });
            });

            timeoutId = null;
         }, 300);
      });
   });
}



/*==========================================================================
Hidden text
============================================================================*/
function initHiddenText() {
   const hiddenText = document.querySelector('.hidden-text');
   if (!hiddenText) return;

   const wrapper = hiddenText.querySelector('.hidden-text__wrapper');
   const toggleBtn = hiddenText.querySelector('.hidden-text__toggle button');
   if (!wrapper || !toggleBtn) return;

   const collapsedHeight = 160;
   wrapper.style.maxHeight = `${collapsedHeight}px`;

   toggleBtn.addEventListener('click', () => {
      const isOpen = wrapper.classList.contains('open');

      if (isOpen) {
         wrapper.style.maxHeight = `${collapsedHeight}px`;
         wrapper.classList.remove('open');
         toggleBtn.textContent = 'Показать больше';
      } else {
         wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
         wrapper.classList.add('open');
         toggleBtn.textContent = 'Скрыть';
      }
   });
}



/*==========================================================================
Офис слайдеры   
============================================================================*/
function initOfficeGallerySliders() {
   const thumbsSlider = document.querySelector('.office__gallery-slider');
   const mainSlider = document.querySelector('.office__gallery-slider-2');

   if (!thumbsSlider || !mainSlider || typeof Swiper === 'undefined') return;

   const thumbsSwiper = new Swiper(thumbsSlider, {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 6,
      watchSlidesProgress: true,
      freeMode: {
         enabled: true,
         momentum: true,
         momentumRatio: 1,
         momentumBounce: false,
      },
   });

   new Swiper(mainSlider, {
      direction: 'vertical',
      spaceBetween: 10,
      thumbs: {
         swiper: thumbsSwiper,
      },
      mousewheel: {
         releaseOnEdges: false,
         sensitivity: 2,
      },
      pagination: {
         el: '.office__gallery-pagination',
         clickable: false,
      },
      breakpoints: {
         320: {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 10,
         },
         1000: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 10,
         },
      },
   });
}

/*==========================================================================
Офис галерея
============================================================================*/
function initOfficeGalleryLightbox() {
   const openBtn = document.querySelector('.office__gallery-open');
   if (!openBtn) return;
   if (typeof Fancybox === 'undefined' || !Fancybox.show) return;

   openBtn.addEventListener('click', () => {
      const slides = document.querySelectorAll(
         '.office__gallery-slider-2 .office__gallery-item'
      );
      if (!slides.length) return;

      const items = Array.from(slides)
         .map(slide => {
            const img = slide.querySelector('img');
            if (!img?.src) return null;

            return {
               src: img.src,
               type: 'image',
               caption: ''
            };
         })
         .filter(Boolean);

      if (!items.length) return;

      Fancybox.show(items, {
         Thumbs: false,
         Toolbar: true,
      });
   });
}


/*==========================================================================
NEW BC PAGE SLIDER
============================================================================*/
function initNewBcPageSlider() {
   if (typeof Swiper === 'undefined') return;

   const bcContainer = document.querySelector('.business__slider');
   if (!bcContainer) return;

   const bcWrapper = bcContainer.querySelector('.business__slider-wrapper');
   const bcSlides = bcWrapper?.querySelectorAll('.business__slide');
   const paginationElement = document.querySelector('.business__fraction');

   if (!bcWrapper || !bcSlides?.length) return;

   let bcSwiper = null;

   const updateActiveSlideLink = (swiper) => {
      document
         .querySelectorAll('.js-slide-link')
         .forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
         `.js-slide-link[data-slide="${swiper.activeIndex}"]`
      );

      activeLink?.classList.add('active');
   };

   const updateBcSwiper = () => {
      if (window.innerWidth >= 1200) {
         if (!bcSwiper) {
            bcContainer.classList.add('swiper');
            bcWrapper.classList.add('swiper-wrapper');
            bcSlides.forEach(slide => slide.classList.add('swiper-slide'));

            bcSwiper = new Swiper(bcContainer, {
               loop: false,
               direction: 'vertical',
               slidesPerView: 1,
               watchOverflow: true,
               simulateTouch: true,
               nested: true,
               grabCursor: false,
               slideToClickedSlide: false,
               speed: 1500,
               allowTouchMove: true,
               mousewheel: {
                  forceToAxis: true,
                  releaseOnEdges: true,
                  sensitivity: 1,
               },
               keyboard: {
                  enabled: true,
                  onlyInViewport: true,
               },
               pagination: {
                  el: '.business__fraction',
                  type: 'custom',
                  clickable: true,
                  renderCustom(swiper, current, total) {
                     let html = '';
                     for (let i = 1; i <= total; i++) {
                        html += `
                  <span
                    class="swiper-pagination-item ${i === current ? 'active' : ''}"
                    data-index="${i}"
                  >
                    ${String(i).padStart(2, '0')}.
                  </span>
                `;
                     }
                     return html;
                  },
               },
               on: {
                  init: updateActiveSlideLink,
                  slideChange: updateActiveSlideLink,
               },
            });

            paginationElement?.addEventListener('click', (e) => {
               const item = e.target.closest('.swiper-pagination-item');
               if (!item) return;

               const index = Number(item.dataset.index);
               if (!Number.isNaN(index)) {
                  bcSwiper.slideTo(index - 1);
               }
            });
         }
      } else {
         if (bcSwiper) {
            bcSwiper.destroy(true, true);
            bcSwiper = null;
         }

         bcContainer.classList.remove('swiper');
         bcWrapper.classList.remove('swiper-wrapper');
         bcSlides.forEach(slide => {
            slide.classList.remove(
               'swiper-slide',
               'swiper-slide-active',
               'swiper-slide-next',
               'swiper-slide-prev'
            );
         });

         if (paginationElement) paginationElement.innerHTML = '';
      }
   };

   window.addEventListener('load', updateBcSwiper);
   window.addEventListener('resize', updateBcSwiper);

   document.querySelectorAll('.js-slide-link').forEach(link => {
      link.addEventListener('click', (e) => {
         if (!bcSwiper || window.innerWidth < 1200) return;

         e.preventDefault();
         const index = Number(link.dataset.slide);
         if (!Number.isNaN(index)) {
            bcSwiper.slideTo(index, 1500);
         }
      });
   });
}


/*==========================================================================
Office tabs in bc page
============================================================================*/
function initBcPageOfficeTabs() {
   const officesPopup = document.querySelector('.offices-popup');
   if (!officesPopup) return;

   const tabs = officesPopup.querySelectorAll('.offices-popup__tab');
   const items = officesPopup.querySelectorAll('.offices-popup__items');
   const loader = officesPopup.querySelector('.loading-icon');

   if (!tabs.length || !items.length || !loader) return;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         if (tab.classList.contains('active')) return;

         const target = tab.dataset.offices;
         if (!target) return;

         // активный таб
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         // показать лоадер
         loader.classList.add('active');

         // скрыть все блоки
         items.forEach(item => item.classList.remove('active'));

         setTimeout(() => {
            loader.classList.remove('active');
            const targetItem = officesPopup.querySelector(`.offices-popup__items[data-offices="${target}"]`);
            targetItem?.classList.add('active');
         }, 600);
      });
   });
}



/*==========================================================================
bc slider inter
============================================================================*/
function initBcPageInterSlider() {
   const interSlider = document.querySelector(".business__slide-gallery-images");
   if (!interSlider || typeof Swiper === 'undefined') return;

   new Swiper(interSlider, {
      loop: true,
      freeMode: true,
      spaceBetween: 32,
      speed: 8000,
      autoplay: {
         delay: 0,
         disableOnInteraction: true
      },
      breakpoints: {
         320: { slidesPerView: 1.5, spaceBetween: 10 },
         650: { slidesPerView: 2, spaceBetween: 20 },
         1100: { slidesPerView: 3, spaceBetween: 32 },
         1600: { slidesPerView: 4, spaceBetween: 32 },
      }
   });
}


/*==========================================================================
Galleries
============================================================================*/
function initBcPageGalleries() {
   if (typeof Fancybox === 'undefined' || !Fancybox.bind) return;

   Fancybox.bind('[data-fancybox]', { groupAll: false });

   const openBtn = document.getElementById('js-open-offices-gallery');
   if (!openBtn) return;

   openBtn.addEventListener('click', () => {
      const items = Array.from(document.querySelectorAll('[data-fancybox="offices"]')).map(el => ({
         src: el.getAttribute('href'),
         type: 'image',
      }));

      if (items.length) {
         Fancybox.show(items, { startIndex: 0 });
      }
   });
}



/*==========================================================================
Reviews slider
============================================================================*/
function initReviewsSlider() {
   const reviewsSlider = document.querySelector('.reviews__slider');
   if (!reviewsSlider || typeof Swiper === 'undefined') return;

   new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      navigation: {
         nextEl: '.reviews__next',
         prevEl: '.reviews__prev',
      },
   });
}



/*==========================================================================
Calendar
============================================================================*/
function initCalendar() {
   if (typeof AirDatepicker === 'undefined') return;

   const datepickers = document.querySelectorAll('.datepicker');
   if (!datepickers.length) return;

   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);

   datepickers.forEach(el => {
      new AirDatepicker(el, {
         minDate: tomorrow,
         autoClose: true
      });
   });
}


/*==========================================================================
Lazy Yandex Map (load last)
============================================================================*/
(function () {
   const mapSelector = '[data-map]';
   const mapElement = document.querySelector(mapSelector);
   if (!mapElement) return;

   let mapLoaded = false;

   function loadYandexMap() {
      if (mapLoaded) return;
      mapLoaded = true;

      if (window.ymaps) {
         initMap();
         return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;

      script.onload = initMap;
      document.body.appendChild(script);
   }

   if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
         if (entries[0].isIntersecting) {
            loadYandexMap();
            obs.disconnect();
         }
      }, {
         rootMargin: '200px'
      });

      observer.observe(mapElement);
   } else {
      window.addEventListener('load', loadYandexMap);
   }

   /*==========================================================================
   Map init
   ==========================================================================*/
   function initMap() {
      const mapElement = document.getElementById('map');
      if (!mapElement || typeof ymaps === 'undefined') return;

      ymaps.ready(() => {
         const mapCenter = [55.742405, 37.629388];

         const myMap = new ymaps.Map('map', {
            center: mapCenter,
            zoom: 13,
         }, {
            searchControlProvider: 'yandex#search'
         });

         let iconImageSize = window.innerWidth < 768 ? [60, 80] : [90, 100];
         let iconImageOffset = window.innerWidth < 768 ? [-30, -80] : [-45, -100];

         const myPlacemark = new ymaps.Placemark(mapCenter, {
            hintContent: 'Офисы в Москве',
            balloonContent: 'Россия, Москва, Пятницкий пер., д.3, м. Новокузнецкая'
         }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-location.png',
            iconImageSize,
            iconImageOffset
         });

         myMap.behaviors.disable('scrollZoom');
         myMap.controls.remove('searchControl');
         myMap.controls.remove('fullscreenControl');
         myMap.controls.remove('rulerControl');

         myMap.geoObjects.add(myPlacemark);

         window.addEventListener('resize', () => {
            myPlacemark.options.set({
               iconImageSize: window.innerWidth < 768 ? [85, 100] : [170, 200],
               iconImageOffset: window.innerWidth < 768 ? [-42.5, -100] : [-85, -200],
            });
         });
      });
   }
})();

/*==========================================================================
Init
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   initPreloader();
   initHeaderFix();
   initObserverAnimation();
   initOfficeGallerySliders();
   initOfficeGalleryLightbox();
   initOfficeTabs();
   initNewBcPageSlider();
   initHiddenText();
   initBcPageOfficeTabs();
   initBcPageInterSlider();
   initBcPageGalleries();
   initCalendar();
   initReviewsSlider();
});

})();

/******/ })()
;