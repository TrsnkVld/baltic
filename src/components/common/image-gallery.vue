<template>
<div class="image-gallery">
	<swiper :options="swiperOption" ref="mySwiper" v-if="type=='gallery'">
		<swiper-slide v-for="(item, index) in gallery" :key="`gallery-item-${index}`">
			<div class="image" :style="{ backgroundImage: `url('${setSrc(item.src)}')` }">
				<h6 v-if="item.name">{{ item.name }}</h6>
			</div>
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>


	<swiper :options="swiperOption" ref="mySwiper" v-else>
		<swiper-slide v-for="(item, index) in gallery" :key="`gallery-item-${index}`">
			<div class="image"  :style="{ backgroundImage: `url('${setSrc(item.src)}')` }">
			</div>
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</div>
</template>

<script>
export default {
	name: 'image-gallery',
	props: [
		"gallery",
		"images",
		"big",
		"type"
	],
	data: () => ({
        /*gallery: [
			{
				id: 1,
				src: 'ship.jpg',
				name: 'Baltic Hollyhock',
			},
			{
				id: 2,
				src: 'ship.jpg',
				name: 'Baltic',
			},
			{
				id: 3,
				src: 'ship.jpg',
				name: 'Hollyhock',
			},
		],*/
		swiperOption: {
			//effect: 'fade',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
            	dynamicBullets: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			speed: 500,
		},
		imageSrc: require(`../../assets/img/ship.jpg`),
	}),

	methods: {
		setSrc(src) {
			if (src.includes('upload')) return src;
			return require(`../../assets/img/${src}`);
		}
	},

	mounted() {
	}
}
</script>

<style lang="less">
// :style="`background-image: url('${background()});`"
  @import '../../less/variables.less';
	.image-gallery {
		height: 100%;
	}

	.swiper-wrapper {
		& > div {
			height: 100%;
			width: 100%;
		}
	}

	.swiper-container {
		height: 100%;

		&-horizontal {
			& > .swiper-pagination-bullets {
				bottom: 25px;

				.swiper-pagination-bullet {
					margin: 0 8px;
				}

				.up(@md;{
					bottom: 85px;
				});
			}
		}
	}

	.swiper-slide {
		display: flex;
		justify-content: center;
		overflow: hidden;

		.image {
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;
			background-image: url('../../assets/img/ship.jpg');
			background-position: center;
			background-size: cover;

			h6 {
				position: absolute;
				bottom: 60px;
				width: 100%;
				text-align: center;
				pointer-events: none;
				user-select: none;

				.up(@md;{
					bottom: 170px;
				});

				.up(@lg;{
					bottom: 80px;
				});
			}
		}

		img {
			/*
			width: 100%;
			height: 100%;
			object-fit: cover;

			min-height: 100%;
			min-width: 100%;
			max-width: none;
			*/
			/*
			position: absolute;
			top: -9999px;
			right: -9999px;
			bottom: -9999px;
			left: -9999px;
			margin: auto;
			min-width: 100%;
			min-height: 100%;
			*/

			height: 100%;
			max-width: none;

			.up(@md;{
    			max-width: none;
			});
		}

		&::after {
			content: "";
			display: block;
			width: 100%;
			padding-top: 100%;

			.up(@md;{
				padding-top: 65.71%;
			});
		}



		&:nth-child(2) {
			.image {
				background-image: url('../../assets/img/gallery2.jpg');
			}
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
		display: none;
		justify-content: center;
		align-items: center;
		height: 100%;
		top: 0;
		margin: 0;
		width: 190px;
		background-size: 20px;
		background-repeat: no-repeat;
		transition: .4s;
		background-image: url('../../assets/icons/arrow_gallery.svg');
		opacity: .5;

		&::before {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			background: linear-gradient(270deg, @active 0%, rgba(0, 69, 160, 0) 100%);
			transition: .4s;
			opacity: 0;
		}

		&:hover {
			opacity: 1;

			&::before {
				opacity: .5;
			}
		}

		.up(@lg;{
			display: flex;
		});
	}

	.swiper-button-prev {
		left: 0;
		transform: rotate(180deg);
	}

	.swiper-button-next {
		right: 0;
	}

	.swiper-pagination-bullets {
		.swiper-pagination-bullet {
			width: 14px;
			height: 14px;
			background: @white;
			opacity: .25;
			transition: .3s;

			&-active {
				opacity: 1;
			}
		}

		.up(@lg;{
			display: none;
		});
	}

</style>
