import VueRouter from 'vue-router';

//import {mergeObjects} from "@/utils/utils";
import store from '@/store/index'
import routes from './routes';

const router = new VueRouter({
	linkExactActiveClass: 'active',
	mode: 'history',
	//base: process.env.BASE_URL,
	scrollBehavior: function(to, from, savedPosition) {
		
		if (to.hash) {
			return {selector: to.hash}
		} else {
			setTimeout(() => {
				return {x: 0, y: 0}
			}, 500);
		}
	},
	routes
});


router.beforeEach((to, from, next) => {
	const loaded = {user: true, page: false};
	const setLoaded = (mode) => {
		loaded[mode] = true;
		if (loaded.page) {
			let grandVar = to.meta.title;
			document.getElementById('app').className = '';
			document.getElementById('app').classList.add(grandVar);
			next();
		}
	};

	// 2. загружаем данные текущего роута (кэшируемые), в т.ч. common данные:
	if (to.meta && to.meta.api) {
		const paramsData = {
			...to.params,
			pageCode: `${to.name}`.toLowerCase(),
		};

		let params = Object.assign({}, {name: to.meta.api, params: paramsData}, to.meta);// this works only with target:es6, but we need IE11
		store.dispatch('fetchPage', params)
			.then(() => {
				//console.log("Fetched "+to.meta.controller);
				setLoaded("page");
			})
			.catch((err) => {
				console.error("Could not fetch API data: ", err);
				//next();
			});
	} else setLoaded("page");
});

router.afterEach((to, from) => {
	setTimeout(() => {
		window.scrollTo({
			'behavior': 'auto', //'smooth',
			'left': 0,
			'top': 0
		});
	}, 500);
});
export default router;
