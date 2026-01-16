import "clsx";
import { H as HeaderHome, N as Nav } from "../../../chunks/HeaderHome.js";
function _page($$renderer) {
  HeaderHome($$renderer);
  $$renderer.push(`<!----> <main class="stats svelte-koh4in"><h2 class="svelte-koh4in">Statistieken</h2> <section class="total svelte-koh4in"><p class="svelte-koh4in">Totaal opgevangen</p> <p class="svelte-koh4in">502 Liter</p> <p class="svelte-koh4in">Het aantal liter dat je hebt opgevangen staat gelijk aan:</p> <section class="milestone svelte-koh4in"><div class="slider svelte-koh4in"><figure class="done svelte-koh4in"><img src="/images/shower.jpg" alt="" class="svelte-koh4in"/> <section class="svelte-koh4in"><p class="svelte-koh4in">250L</p> <p class="svelte-koh4in">Half uur douchen</p></section></figure> <figure class="svelte-koh4in"><div class="showMilestone svelte-koh4in"><i class="fa-solid fa-chevron-down svelte-koh4in"></i></div> <img src="/images/shower.jpg" alt="" class="svelte-koh4in"/> <section class="svelte-koh4in"><p class="svelte-koh4in">500L</p> <p class="svelte-koh4in">Uur douchen</p></section></figure> <figure class="locked svelte-koh4in"><img src="/images/milestone.png" alt="" class="svelte-koh4in"/> <section class="svelte-koh4in"><p class="svelte-koh4in">1000L</p> <p class="svelte-koh4in">Is 1m2 aan water</p></section></figure> <figure class="locked svelte-koh4in"><img src="/images/pool.png" alt="" class="svelte-koh4in"/> <section class="svelte-koh4in"><p class="svelte-koh4in">2000L</p> <p class="svelte-koh4in">Klein zwembad</p></section></figure> <figure class="locked svelte-koh4in"><img src="/images/pool.png" alt="" class="svelte-koh4in"/> <section class="svelte-koh4in"><p class="svelte-koh4in">5000L</p> <p class="svelte-koh4in">Groot zwembad</p></section></figure></div></section></section> `);
  Nav($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
