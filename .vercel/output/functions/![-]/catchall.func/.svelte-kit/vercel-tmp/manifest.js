export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/home.svg","icons/profile.svg","icons/stats.svg","images/druppel.svg","images/druppels.png","images/houseprofile.png","images/huis.png","images/landing1.png","images/landing2.png","images/landing3.png","images/landing4.png","images/m2.png","images/milestone.png","images/nojs.png","images/plat.png","images/plat2.png","images/pool.jpg","images/pool.png","images/punt.png","images/punt2.png","images/regenpijp.png","images/regenton.png","images/regenton.svg","images/schuin.png","images/schuin2.png","images/shower.jpg","images/sun.png","images/wolk.svg","manifest.json","styles/app.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".json":"application/json",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.Bjjcn3HQ.js",app:"_app/immutable/entry/app.C__VKF97.js",imports:["_app/immutable/entry/start.Bjjcn3HQ.js","_app/immutable/chunks/B149Itq3.js","_app/immutable/chunks/CrKLhVVU.js","_app/immutable/chunks/BUyBGVwE.js","_app/immutable/entry/app.C__VKF97.js","_app/immutable/chunks/CrKLhVVU.js","_app/immutable/chunks/Du2rIYVo.js","_app/immutable/chunks/i_-7ZOEr.js","_app/immutable/chunks/BciU6upK.js","_app/immutable/chunks/BUyBGVwE.js","_app/immutable/chunks/Ce3cnRq4.js","_app/immutable/chunks/BONLXmF1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gegevens",
				pattern: /^\/gegevens\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/statistieken",
				pattern: /^\/statistieken\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
