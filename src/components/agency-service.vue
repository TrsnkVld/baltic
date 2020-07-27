<template>
<main class="agencyService">
	<header-title  :headerTitle="title || ''" :headerDesc="describe || ''" />
    <chartering-services data-aos="fade-right"/>
	<section class="info">
		<b-container fluid>
			<img-txt-row
				:listText="text"
				:order="0"
				:rowImages="images"
				class="blue"
				data-aos="fade-left"
			/>
		</b-container>
	</section>
	<background-image />
</main>
</template>

<script>
import charteringServices from './chartering/chartering-services';
import imgTxtRow from './common/img-txt-row';
import headerTitle from './common/header-title';
import backgroundImage from './common/background-image';

export default {
    name: 'chartering',
    components: {
		charteringServices,
		imgTxtRow,
		headerTitle,
		backgroundImage
    },
    data: () => ({
        headerTitle: 'Агентирование',
        headerDesc: 'Компания организует комплексное обслуживание судов во время их захода в порт Санкт-Петербург.',
		text: [
			'Суда приспособлены для перевозки контейнеров и рефконтейнеров на верхней палубе;',
			'Многие суда имеют ледовый класс, что позволяет осуществлять бесперебойные заходы в порт Санкт-Петербурга в течение всего года;',
			'Трюмы имеют необходимую конструкцию для безопасного крепления широкого спектра генеральных грузов;',
			'Все экипажи имеют многолетний опыт работы на судах рефрижераторного типа;',
			'Ледовый класс, что позволяет осуществлять бесперебойные заходы в порт в течение всего года;'
		],
		images: [
			{
				id: 1,
				src: 'image1.jpg',
			},
		]
	}),
    props: [],

	computed: {
		pageData() {
			return this.$store.getters.page.AgencyService
		},

		describe() {
			if (!this.pageData) return null;
			return this.pageData.describe.TEXT;
		},

		title() {
			if (!this.pageData) return null;
			return this.pageData.title;
		}
	},
}
</script>

<style lang="less">
main {
	&.agencyService .background-image {
		background-image: url('../assets/img/chartering_bg.jpg');
	}
}
</style>
