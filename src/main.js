//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';
import 'swiper/dist/css/swiper.css';
import './scss/varbootstrap.scss';
import './scss/aos.scss';
import 'mapbox-gl/src/css/mapbox-gl.css';
import './less/main.less';

import Vue from 'vue';
import App from './App.vue';
//TODO перенести ./plugins
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import Mapbox from 'mapbox-gl-vue';
import Vuebar from 'vuebar';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import AOS from 'aos';
import store from './store'
import i18n from './plugins/i18n';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuebar);
Vue.use(VueAwesomeSwiper);

new Vue({
    components: {
		'mapbox': Mapbox,
    },

    created () {
		AOS.init({
			duration: 1000,
			offset: 350,
			useClassNames: true,
			once: true,
		});
	},

    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
