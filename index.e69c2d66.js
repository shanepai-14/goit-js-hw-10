const e=new Headers({"Content-Type":"application/json","x-api-key":"live_B7WKiVwpg0nCeeBlUPcCDGfP7ZE2paN1CCGtwQPnRxhhVEhajeJeAon7IZnKWn2z"});function t(t){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`,{headers:e}).then((e=>{if(!e.ok)throw new Error("Failed to fetch cats");return e.json()})).then((e=>({data:e})))}const n=document.getElementById("loader"),d=document.getElementById("error"),a=document.getElementById("cat_select"),i=document.querySelector(".cat-info");function r(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_B7WKiVwpg0nCeeBlUPcCDGfP7ZE2paN1CCGtwQPnRxhhVEhajeJeAon7IZnKWn2z"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch cats");return e.json()})).then((e=>({data:e}))).then((({data:e})=>{Object.values(e).map((e=>{return t=e.name,n=e.id,void a.insertAdjacentHTML("beforeend",`<option value="${n}">${t}</option>`);var t,n}))}))}a.addEventListener("change",(e=>{i.innerHTML="",n.classList.remove("hidden");t(e.target.value).then((({data:e})=>{console.log(e);const t=e[0].breeds[0].description,d=e[0].breeds[0].name;!function(e,t,n){const d=`<div \n  class="max-w-lg mt-5  p-4 border border-gray-200 rounded shadow  md:p-6 ">\n  <div class="flex items-center w-full justify-center h-[400px] mb-4 bg-gray-300 rounded dark:bg-gray-400">\n   <img src="${e}" class="w-full h-full object-cover"> </img>\n  </div>\n  <div class="text-lg font-bold w-fit mb-4">${n}</div>\n  <div class="w-fit p-4 bg-gray-300   mb-2.5">\n   <p>${t}</p>\n  </div>\n\n</div>\n  `;i.insertAdjacentHTML("beforeend",d)}(e[0].url,t,d),n.classList.add("hidden")})).catch((e=>{n.classList.add("hidden"),d.classList.remove("hidden")}))})),window.addEventListener("DOMContentLoaded",(function(){r().catch((e=>{n.classList.add("hidden"),d.classList.remove("hidden")}))}));
//# sourceMappingURL=index.e69c2d66.js.map
