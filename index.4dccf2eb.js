!function(){var e="live_B7WKiVwpg0nCeeBlUPcCDGfP7ZE2paN1CCGtwQPnRxhhVEhajeJeAon7IZnKWn2z",n="https://api.thecatapi.com/v1/",t=new Headers({"Content-Type":"application/json","x-api-key":e});function o(e){return fetch("".concat(n,"images/search?breed_ids=").concat(e),{headers:t}).then((function(e){if(!e.ok)throw new Error("Failed to fetch cats");return e.json()})).then((function(e){return console.log(e),{data:e}}))}var a=document.getElementById("loader"),c=document.getElementById("error"),d=document.getElementById("cat_select"),r=document.querySelector(".cat-info");function i(){return fetch("".concat(n,"breeds"),{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch cats");return e.json()})).then((function(e){return console.log(e),{data:e}})).then((function(e){var n=e.data;Object.values(n).map((function(e){return n=e.name,t=e.id,console.log(n),void d.insertAdjacentHTML("beforeend",'<option value="'.concat(t,'">').concat(n,"</option>"));var n,t}))}))}d.addEventListener("change",(function(e){r.innerHTML="",a.classList.remove("hidden"),o(e.target.value).then((function(e){var n=e.data;console.log(n);var t=n[0].breeds[0].description,o=n[0].breeds[0].name;!function(e,n,t){var o='<div \n  class="max-w-lg mt-5  p-4 border border-gray-200 rounded shadow  md:p-6 ">\n  <div class="flex items-center w-full justify-center h-[400px] mb-4 bg-gray-300 rounded dark:bg-gray-400">\n   <img src="'.concat(e,'" class="w-full h-full object-cover"> </img>\n  </div>\n  <div class="text-lg font-bold w-fit mb-4">').concat(t,'</div>\n  <div class="w-fit p-4 bg-gray-300   mb-2.5">\n   <p>').concat(n,"</p>\n  </div>\n\n</div>\n  ");r.insertAdjacentHTML("beforeend",o)}(n[0].url,t,o),a.classList.add("hidden")})).catch((function(e){a.classList.add("hidden"),c.classList.remove("hidden")}))})),window.addEventListener("DOMContentLoaded",(function(){i().catch((function(e){a.classList.add("hidden"),c.classList.remove("hidden")}))}))}();
//# sourceMappingURL=index.4dccf2eb.js.map
