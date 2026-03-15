import{a as u,S as p,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(i){const r="https://pixabay.com/api/",s={key:"55034403-f88339d3d304c1de3b7a91a97",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21};return u.get(r,{params:s}).then(o=>o.data)}const c=document.querySelector(".gallery"),n=document.querySelector(".loader-wrap"),f=new p(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});function d({webformatURL:i,largeImageURL:r,tags:s,likes:o,views:e,comments:t,downloads:a}){return`<li class="gallery-item">
          <a href="${r}">
            <img
              class="gallery-image"
              src="${i}"
              data-source="${r}"
              alt="${s}"
							loading="lazy"
            />
          </a>
          <ul class="gallery-info-list">
            <li>
              <p class="info-title">Likes</p>
              <p class="info-text">${o}</p>
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
        </li>`}function g(i){const r=i.map(d).join("");c.innerHTML=r,f.refresh()}function y(){c&&(c.innerHTML="",f.refresh())}function h(){n&&n.classList.remove("is-hidden")}function L(){n&&n.classList.add("is-hidden")}const b={searchForm:document.querySelector(".form")};b.searchForm.addEventListener("submit",i=>{i.preventDefault();const s=new FormData(i.target).get("search-text").trim();if(!s){l.error({title:"Error",message:"Please enter a search query.",position:"topRight",timeout:3e3});return}h(),m(s).then(o=>{const e=o.hits;y(),e.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):g(e)}).catch(o=>{l.error({title:"Error",message:"Please try again later.",position:"topRight",timeout:3e3}),console.log(o)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
