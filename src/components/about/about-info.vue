<template>
<div class="aboutInfo">
	<b-container fluid>
		<b-row>
			<b-col cols="12" xl="6" v-for="(item, index) in advantagesList" :key="`aboutItem-${index}`">
				<div class="aboutItem" :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'">
					<div class="aboutItem__icon icon-shipBig" :style="`background-image: url('${item.image}')`"></div>

					<h6><span class="aboutItem__number">{{ item.title }}</span>
						{{ item.describe }}
					</h6>
				</div>
			</b-col>
		</b-row>
	</b-container>
	<div ref="mapWrap" class="aboutMap" data-aos="fade-in" >
		<img ref="mapImg" src="@/assets/img/map_about.png" draggable="false" alt="location">
	</div>
</div>
</template>

<script>
import mapAbout from './map-about';
import { dragscroll } from 'vue-dragscroll';

export default {
	name: 'about-info',
	components: {
		mapAbout
	},
	directives: {
		'dragscroll': dragscroll,
	},
	methods: {

		test(e) {
			if (e.touches.length < 2) {
				e.stopImmediatePropagation(); 
				return false;
			}
		},
	},
	created() {
		setTimeout(() => {
			this.$refs.mapWrap.scrollTo({
				top: 0,
				left: (document.documentElement.clientWidth < 768) ? this.$refs.mapImg.clientWidth/2 - this.$refs.mapWrap.clientWidth/2 - 80 : this.$refs.mapImg.clientWidth/2 - this.$refs.mapWrap.clientWidth/2 - 150,
				behavior: 'smooth'
			});
		}, 1500);
	},
	computed: {
		pageData() {
			return this.$store.getters.page.About
		},

		advantagesList() {
			if (!this.pageData ||
				!this.pageData.advantagesTitle ||
				!this.pageData.advantagesDescribe ||
				!this.pageData.advantagesImages
			) return [];

			const images = this.pageData.advantagesImages;
			const describe = this.pageData.advantagesDescribe;

			return this.pageData.advantagesTitle.reduce((acc, item, index) => {
				return [...acc, {
					title: item,
					describe: describe[index],
					image: images[index],
				}]
			}, []);
		}
	},
}
</script>

<style lang="less">
@import '../../less/variables.less';

.about {
	&Info {
		margin-bottom: 35px;

		.up(@md;{
			margin-bottom: 90px;
		});

		.up(@lg;{
			margin-bottom: 150px;
			padding-top: 40px;
		});
	}

	&Item {
		color: @white;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: flex-start;
		margin: 0 auto;
		margin-bottom: 40px;
		max-width: 800px;


		&__icon {
			width: 60px;
			height: 70px;
			margin-right: 20px;
			flex-shrink: 0;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;

			.up(@md;{
				width: 140px;
				height: 150px;
				margin-right: 60px;
			});

			.up(@lg;{
				max-height: 460px;
			});
		}

		&__number {
			font-weight: bold;
			font-size: 23px;
			line-height: 33px;

			.up(@md;{
				font-size: 35px;
				line-height: 45px;
			});

			.up(@lg;{
				font-size: 55px;
				line-height: 65px;
			});
		}

		&__text {
			font-weight: 300;
			font-size: 30px;
			line-height: 35px;
			letter-spacing: -1px;
			display: flex;

			.up(@md;{
				padding-top: 20px;
				font-size: 40px;
				line-height: 47px;
			});

			.up(@lg;{
    			padding-top: 45px;
				font-size: 50px;
				line-height: 59px;
			});
		}

		.up(@md;{
    		margin-bottom: 80px;
		});

		.up(@lg;{
		});
	}

	&Map {
		position: relative;
		width: 100%;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 40px;

		img {
			max-width: none;
			height: 100%;
			width: 100%;
		}
/*
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(calc(-50% - 70px), -50%);
			transform: translate(-55%, -50%);
			z-index: -1;
			height: 100%;
			max-width: none;

			.up(@md;{
				//height: 685px;
			});

			.up(@lg;{
				//height: auto;
			});
		}
*/
		&__text {
			margin-bottom: 20px;

			p {
				color: @white;
				text-align: center;
				margin: 0;

				&:first-child {
					font-size: 34px;
					line-height: 20px;
					font-weight: bold;
					margin-bottom: 10px;

					.up(@lg;{
						font-size: 50px;
    					margin-bottom: 30px;
					});
				}

				&:last-child {
					font-weight: 300;
					font-size: 23px;
					line-height: 33px;


					.up(@lg;{
						font-size: 20px;
						line-height: 20px;
						font-weight: normal;
					});
				}
			}

			.up(@md;{
				margin-bottom: 70px;
			});

			.up(@lg;{
				margin-bottom: 135px;
			});
		}

		.up(@md;{
			margin-top: 80px;
		});

		.up(@lg;{
			margin-top: 110px;
			margin-top: 80px;
		});
	}
}

</style>
