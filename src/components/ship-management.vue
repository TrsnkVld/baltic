<template>
<main class="management">
	<header-title  :headerTitle="headerTitle" :headerDesc="headerDesc" />
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
        headerTitle: 'Управление судами',
        headerDesc: 'Коммерческий менеджмент является одним из основных направлений деятельности компании.',
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
    props: []
}
</script>

<style lang="less">
main {
	&.management .background-image {
		background-image: url('../assets/img/chartering_bg.jpg');
	}
}
</style>
