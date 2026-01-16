

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BQBMA40Z.js","_app/immutable/chunks/BciU6upK.js","_app/immutable/chunks/CrKLhVVU.js","_app/immutable/chunks/Dn-xeAs5.js"];
export const stylesheets = ["_app/immutable/assets/2.Dkvub7jZ.css"];
export const fonts = [];
