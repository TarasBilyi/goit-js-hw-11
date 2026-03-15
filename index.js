import{a as u,S as p,i as c}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){const r="https://pixabay.com/api/",s={key:"55034403-f88339d3d304c1de3b7a91a97",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21};return u.get(r,{params:s}).then(i=>i.data)}const n=document.querySelector(".gallery"),l=document.querySelector(".loader-wrap"),f=new p(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});function d({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:a}){return`<li class="gallery-item">
          <a href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              data-source="${r}"
              alt="${s}"
							loading="lazy"
            />
          </a>
          <ul class="gallery-info-list">
            <li>
              <p class="info-title">Likes</p>
              <p class="info-text">${i}</p>
            </li>
            <li>
              <p class="info-title">Views</p>
              <p class="info-text">${e}</p>
            </li>
            <li>
              <p class="info-title">Comments</p>
              <p class="info-text">${t}</p>
            </li>
            <li>
              <p class="info-title">Downloads</p>
              <p class="info-text">${a}</p>
            </li>
          </ul>
        </li>`}function g(o){if(!n)return;if(o.length===0){n.innerHTML="",f.refresh();return}const r=o.map(d).join("");n.innerHTML=r,f.refresh()}function h(){n&&(n.innerHTML="",f.refresh())}function y(){l&&l.classList.remove("is-hidden")}function L(){l&&l.classList.add("is-hidden")}const b={searchForm:document.querySelector(".form")};b.searchForm.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(o.target).get("search-text").trim();if(!s){c.error({title:"Error",message:"Please enter a search query.",position:"topRight",timeout:3e3});return}y(),h(),m(s).then(i=>{const e=i.hits;e.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):g(e)}).catch(i=>{c.error({title:"Error",message:"Please try again later.",position:"topRight",timeout:3e3}),console.log(i)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
