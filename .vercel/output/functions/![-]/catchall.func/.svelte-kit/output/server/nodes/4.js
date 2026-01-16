import * as universal from '../entries/pages/home/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/home/+page.ts";
export const imports = ["_app/immutable/nodes/4.D7eqYRkd.js","_app/immutable/chunks/BciU6upK.js","_app/immutable/chunks/CrKLhVVU.js","_app/immutable/chunks/Dn-xeAs5.js","_app/immutable/chunks/BUyBGVwE.js","_app/immutable/chunks/Du2rIYVo.js","_app/immutable/chunks/i_-7ZOEr.js","_app/immutable/chunks/Ce3cnRq4.js","_app/immutable/chunks/BONLXmF1.js","_app/immutable/chunks/ByBP6FjO.js","_app/immutable/chunks/vg0DZ4Z7.js","_app/immutable/chunks/BiXV2gGN.js"];
export const stylesheets = ["_app/immutable/assets/HeaderHome.DjpLetbC.css","_app/immutable/assets/4.CyijRC0m.css"];
export const fonts = [];
