(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu]"),r=document.querySelector("[data-menu-close]");o.addEventListener("click",()=>{n.classList.toggle("is-open")}),r.addEventListener("click",()=>{n.classList.toggle("is-open")})})();new Swiper(".swiper",{loop:!0,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800});new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0}});function l(){const o=document.querySelector(".made__video"),n=document.querySelector(".made__img-wrapper");n.addEventListener("click",()=>{o.style.display="block",n.style.display="none",o.src+="&autoplay=1"})}document.addEventListener("DOMContentLoaded",l);
