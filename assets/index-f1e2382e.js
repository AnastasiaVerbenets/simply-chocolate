(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const n=document.querySelector(".js-mobile-menu-container"),t=document.querySelector(".js-open-mobile-menu"),i=document.querySelectorAll(".js-close-mobile-menu"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",r),i.forEach(e=>e.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:20}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2300,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800});new Swiper(".opinions-swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2300,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800});function c(){const n=document.querySelector(".made__video"),t=document.querySelector(".made__img-wrapper");t.addEventListener("click",()=>{n.style.display="block",t.style.display="none",n.src+="&autoplay=1"})}document.addEventListener("DOMContentLoaded",c);new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0}});const a=document.querySelectorAll('a[href*="#"]');for(let n of a)n.addEventListener("click",function(t){t.preventDefault();const i=n.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})});const l=document.querySelector(".isShowBtn");window.onscroll=()=>{window.scrollY>800?l.classList.remove("isShowBtn-hide"):window.scrollY<800&&l.classList.add("isShowBtn-hide"),l.onclick=()=>{window.scrollTo(0,0)}};
