import "clsx";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<nav class="svelte-1h32yp1"><ul class="svelte-1h32yp1"><li class="svelte-1h32yp1"><a href="/home" class="svelte-1h32yp1"><img src="icons/home.svg" alt="" class="svelte-1h32yp1"/> <p class="svelte-1h32yp1">Home</p></a></li> <li class="svelte-1h32yp1"><a href="/statistieken" class="svelte-1h32yp1"><img src="icons/stats.svg" alt="" class="svelte-1h32yp1"/> <p class="svelte-1h32yp1">Statistieken</p></a></li> <li class="svelte-1h32yp1"><a href="/profile" class="svelte-1h32yp1"><img src="icons/profile.svg" alt="" class="svelte-1h32yp1"/> <p class="svelte-1h32yp1">Profiel</p></a></li></ul></nav>`);
  });
}
function HeaderHome($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header class="svelte-kv24ba"><section class="header-top svelte-kv24ba"><h1 class="svelte-kv24ba">B-rain</h1> <i class="fa-solid fa-bell bellbutton svelte-kv24ba"></i></section> <section class="notifications svelte-kv24ba"><h2>Notificaties</h2> <div class="noti svelte-kv24ba"><figure class="svelte-kv24ba"><p>!</p></figure> <div class="notification-info svelte-kv24ba"><p class="svelte-kv24ba">Nu</p> <p class="svelte-kv24ba">Je regenton is vol!</p></div></div> <div class="svelte-kv24ba"><figure class="svelte-kv24ba"><p>!</p></figure> <div class="notification-info svelte-kv24ba"><p class="svelte-kv24ba">25 juni</p> <p class="svelte-kv24ba">Je regenton is bijna vol</p></div></div> <div class="svelte-kv24ba"><figure class="svelte-kv24ba"><p>!</p></figure> <div class="notification-info svelte-kv24ba"><p class="svelte-kv24ba">1 juni</p> <p class="svelte-kv24ba">Je regenton is bijna vol</p></div></div></section></header>`);
  });
}
export {
  HeaderHome as H,
  Nav as N
};
