import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import MainLayout from '@/components/layout/main-layout';
import Home from '../components/home';
import Fleet from '../components/fleet';
import Services from '../components/services';
import ServicesItem from '../components/services-item';
import Chartering from '../components/chartering';
import ShipManagement from '../components/ship-management';
import AgencyService from '../components/agency-service';
import News from '../components/news';
import NewsDetail from '../components/news-detail';
import Article from '../components/article';
import Gallery from '../components/gallery';
import Contacts from '../components/contacts';
import About from '../components/about';
import Management from '../components/management';
import Policy from '../components/policy';
const Error404 = () => import('../components/error');
const UnderDev = () => import('../components/under-dev');

const routes = [
	{
		path: '/', name: 'main-layout', component: MainLayout,
		children: [
			{path: '/', name: 'home', component: Home, meta: {title: 'toHome', api: 'Home'}},
			{path: '/fleet', name: 'fleet', component: Fleet, meta: {title: 'toFleet', api: 'Fleet'}},
			{path: '/services', name: 'services', component: Services, meta: {title: 'toServices', api: 'Services'}},
			{path: '/services/:code', name: 'services-item', component: ServicesItem, meta: {title: 'toServices', api: 'ServicesItem'}},
			{path: '/chartering', name: 'chartering', component: Chartering, meta: {title: 'toService', api: 'CommonController'}},
			{path: '/ship-management', name: 'ship-management', component: ShipManagement, meta: {title: 'toService', api: 'CommonController'}},
			{path: '/agency-service', name: 'agency-service', component: AgencyService, meta: {title: 'toService', api: 'AgencyService'}},
			{path: '/news', name: 'news', component: News, meta: {title: 'toNews', api: 'News'}},
			{path: '/news/:id', name: 'news-detail', component: NewsDetail, meta: {title: 'toArticle', api: 'News'}},
			{path: '/article', name: 'article', component: Article, meta: {title: 'toArticle', api: 'CommonController'}},
			{path: '/gallery', name: 'gallery', component: Gallery, meta: {title: 'toGallery', api: 'Gallery'}},
			{path: '/contacts', name: 'contacts', component: Contacts, meta: {title: 'toContacts', api: 'Contacts'}},
			{path: '/about', name: 'about', component: About, meta: {title: 'toAbout', api: 'About'}, props: true},
			{path: '/management', name: 'management', component: Management, meta: {title: 'toManagement', api: 'SpecialistList'}},
			{path: '/policy', name: 'policy', component: Policy, meta: {title: 'toPolicy', api: 'ConfirmPage'}},
			{path: '/under-dev', name: 'under-dev', component: UnderDev, meta: {api: 'CommonController'}},
			{path: '/error404', name: 'error', component: Error404, meta: {title: 'toError', api: 'CommonController'}},
			{path: '/*', name: 'error404', component: Error404, meta: {title: 'toError', api: 'CommonController'}}
		]
	}
];

export default routes;
