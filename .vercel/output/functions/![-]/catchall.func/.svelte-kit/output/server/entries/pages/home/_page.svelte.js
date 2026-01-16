import { z as bind_props } from "../../../chunks/index.js";
import "graphql-request";
import { H as HeaderHome, N as Nav } from "../../../chunks/HeaderHome.js";
import { l as fallback, k as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    let elementHuidigOpgevangenWater = fallback($$props["elementHuidigOpgevangenWater"], 0);
    let elementInhoudRegenton = fallback($$props["elementInhoudRegenton"], 0);
    HeaderHome($$renderer2);
    $$renderer2.push(`<!----> <main class="landing svelte-1j6ictg"><section class="timeline svelte-1j6ictg"><section class="svelte-1j6ictg"><p class="svelte-1j6ictg">Nu</p> `);
    if (data.daily.precipitation_sum[0] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[0])}<span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[1].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[1] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[1])}<span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[2].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[2] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[2])}<span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[3].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[3] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[3])}<span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[4].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[4] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[4])}<span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[5].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[5] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[5])} <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg">${escape_html(data.daily.time[6].slice(-2))}</p> `);
    if (data.daily.precipitation_sum[6] > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1j6ictg">${escape_html(data.daily.precipitation_sum[6])}<span class="svelte-1j6ictg">mm</span></p></section></section> <section class="barrel svelte-1j6ictg"><section class="info svelte-1j6ictg"><h2 class="svelte-1j6ictg">Spatwater's Regenton</h2> <p class="svelte-1j6ictg">${escape_html(elementHuidigOpgevangenWater)} / ${escape_html(elementInhoudRegenton)}L</p></section> <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.5 434.5" class="svelte-1j6ictg"><defs><style>
            :root {
              --inhoudPercentage: 20%;
            }
            
            .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
              fill: none;
            }
      
            .cls-8 {
              fill: #ebebeb;
            }
      
            .cls-9 {
              fill: #384b61;
              transform: scaleY(var(--inhoudPercentage)) translateX(0px);
              transform-origin: bottom;
              transition: 1s;
              animation-fill-mode: forwards;
            }
            
            .isLeeg {
              transform: scaleY(20%) translateX(0px);
            }
    
            .cls-2 {
              stroke: #4ecd5d;
            }
      
            .cls-2, .cls-10, .cls-3, .cls-4, .cls-5, .cls-6 {
              stroke-linecap: round;
            }
      
            .cls-2, .cls-3 {
              stroke-width: 10px;
            }
      
            .cls-2, .cls-5, .cls-6 {
              stroke-linejoin: round;
            }
      
            .cls-10 {
              opacity: .25;
            }
      
            .cls-10, .cls-3, .cls-4 {
              stroke-miterlimit: 10;
            }
      
            .cls-10, .cls-3, .cls-4, .cls-5 {
              stroke: #d8d8d8;
            }
      
            .cls-10, .cls-4 {
              stroke-width: 5px;
            }
      
            .cls-5, .cls-6 {
              stroke-width: 15px;
            }
      
            .cls-6 {
              stroke: #77c4e3;
              transition: 1s;
              opacity: 0;
            }

            .isOpen {
              opacity: 1;
            }
      
            .cls-7 {
              clip-path: url(#clippath);
            }
        </style><clipPath id="clippath"><rect class="cls-1" x="5.5" y="4" width="266" height="423" rx="77.35" ry="77.35"></rect></clipPath></defs><g id="Layer_1-2" data-name="Layer 1"><g><g><line class="cls-6" x1="315.7" y1="427" x2="315.7" y2="347"></line><polyline class="cls-2" points="288.85 327.7 288.85 306.22 340.5 306.22"></polyline><polyline class="cls-5" points="315.7 352.95 315.7 327.7 262 327.7"></polyline></g><g class="cls-7"><rect class="cls-8" x="5.5" y="4" width="266" height="423"></rect><path class="cls-9" d="m271.5,427H5.5V-15C41.19-4.27,86.67,4.89,139.5,4.77c51.94-.11,96.71-9.16,132-19.77v442Z"></path></g><g><path class="cls-3" d="m5,141.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"></path><path class="cls-3" d="m5,297.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"></path><ellipse class="cls-10" cx="140" cy="22" rx="105" ry="19.5"></ellipse><ellipse class="cls-4" cx="139" cy="22" rx="105" ry="19.5"></ellipse></g></g></g></svg> <section class="background svelte-1j6ictg"><div class="gras svelte-1j6ictg"></div> <div class="svelte-1j6ictg"></div> <div class="svelte-1j6ictg"></div></section> <button class="leeg svelte-1j6ictg">Leeg</button></section> <dialog class="leegDialog svelte-1j6ictg"><h3 class="svelte-1j6ictg">Regenton legen</h3> <p class="svelte-1j6ictg">Weet je zeker dat je je regenton wilt legen?</p> <section class="svelte-1j6ictg"><button class="terug svelte-1j6ictg">Terug</button> <button class="svelte-1j6ictg">Leeg</button></section></dialog> `);
    Nav($$renderer2);
    $$renderer2.push(`<!----></main>`);
    bind_props($$props, { data, elementHuidigOpgevangenWater, elementInhoudRegenton });
  });
}
export {
  _page as default
};
