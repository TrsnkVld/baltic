<template>
<main class="article">
	<header-title  :headerTitle="title" :headerDesc="date" />
	<article>
		<b-container fluid>
			<img-txt-row
				:rowDate="date"
				:rowText="text"
				:rowImages="images"
				:order="1"
				type="slider"
				:gallery="images"
				class="articleRow"
				data-aos="fade-in"
			/>
		</b-container>
	</article>
	<background-image />
</main>
</template>

<script>
import imgTxtRow from './common/img-txt-row';
import headerTitle from './common/header-title';
import backgroundImage from './common/background-image';

export default {
    name: 'article-page',
    components: {
		imgTxtRow,
		headerTitle,
		backgroundImage
    },
    data: () => ({
		title: 'Балтик Шиппинг на "World Food Moscow"',
		date: '11 декабря 2019',
		text: [
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'C 24 по 27 сентября 2019 года Балтик Шиппинг приняла участие в 28-ой Международной выставке продуктов питания "World Food Moscow".',
			'Ежегодное участие в выставке позволяет изучить тенденции развития food-индустрии, а так же дает уникальную возможность встретиться с Клиентами и обсудить планы для дальнейшего крепкого сотрудничества.',
			'После насыщенных переговоров на выставке Балтик Шиппинг организовала традиционный бизнес-фуршет для Клиентов и Друзей компании.'
		],
		images: [
			{
				id: 1,
				src: "article_img_1.jpg",
			},
			{
				id: 2,
				src: "_R4A6221.jpg",
			},
			{
				id: 3,
				src: "_R4A5707.jpg",
			},
			{
				id: 4,
				src: "article_img_1.jpg",
			},
			{
				id: 5,
				src: "article_img_1.jpg",
			},
			{
				id: 6,
				src: "article_img_1.jpg",
			},
		]
	}),

}
</script>

<style lang="less">
@import '../less/variables.less';
main {
	&.article .background-image {
		background-image: url('../assets/img/article_bg.jpg');
	}
}

.article {

	.textRow {
		&__img {
			min-height: unset;
			order: 1;

			&::after {
				display: none;
			}

			.up(@xl;{
				order: 0;
			});
		}
	}

	.swiper {
		&-slide {
			height: auto;

			.image {
				position: absolute;
				top: 0;
				left: 0;
				background-position: top center;
			}

			img {
				/*
				min-width: unset;
				max-width: unset;
				min-height: unset;
				max-height: unset;
				*/
				min-height: 100%;
				min-width: 100%;

				top: 0;
				transform: translate(-50%, 0%);




				.up(@md;{
					width: auto;
					max-height: unset;
					width: 101%;
				});
			}
		}
	}
}
</style>
