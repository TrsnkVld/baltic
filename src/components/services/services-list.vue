<template>
	<section class="servicesList">
		<b-container fluid>
			<b-row>
				<b-col
					class="servicesList__wrapper"
					cols="12"
					lg="4"
					data-aos="fade-in"
					:data-aos-delay="index * 300"
					v-for="(item, index) in servisesList"
					:key="`item-${index}`"
				>
					<router-link :to="{path: `services/${item.code}`}" class="servicesList__item">
						<span
							:style="`background-image: url('${item.previewImage}')`"
							class="servicesList__item--before"
						></span>
						<div class="servicesList__item-icon">
							<i class="icon" :style="`background-image: url('${item.previewImage}')`"></i>
						</div>
						<h2 class="servicesList__item-title">{{item.title}}</h2>
						<h4 class="servicesList__item-desc">{{item.previewText}}</h4>
					</router-link>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
export default {
	name: "services-list",
	components: {},
	data() {
		return {};
	},
	props: [],

	computed: {
		pageData() {
			return this.$store.getters.page && this.$store.getters.page.Services;
		},
		servisesList() {
			return this.pageData.list;
		}
	},
	mounted() {
		//console.log(this.pageData);
		//console.log(this.servisesList);
	}
};
</script>

<style lang="less">
@import "../../less/variables.less";

.servicesList {
	//margin-top: 20px;
	margin-bottom: 0;

	&__wrapper {
		margin-bottom: 20px;

		.up(@xl;{margin-bottom: 80px;});
	}

	&__item {
		color: @active;
		//height: 400px;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		flex-flow: column;
		padding: 40px 20px 40px;
		background-color: @white;
		position: relative;
		z-index: 1;
		overflow: hidden;

		&-icon {
			padding: 0 0 40px;

			.icon {
				margin: 0 auto;
				width: 140px;
				height: 110px;
				max-width: 100%;
				background-size: contain;

				.up(@xl;{height: 140px;});
			}
			.up(@lg;{padding: 0 0 50px;});

			.up(@xl;{padding: 0 0 30px;});
		}

		&-title {
			color: @active;
			margin-bottom: 40px;

			.up(@lg;{font-size: 35px; line-height: 45px;});

			.up(@xl;{font-size: 55px; line-height: 65px;});
		}

		&-desc {
			color: @navyBlue;
			/*min-height: 100px;*/
			margin: 0;
			max-width: 370px;
			padding: 0 15px;

			.up(@md;{//min-height: 80px;
			}) ;

			.up(@lg;{
				max-width: none; 
				max-width: none; 
				font-size: 15px; 
				line-height: 20px;
			});

			.up(@xl;{//min-height: 150px;
				font-size: 20px; 
				line-height: 25px;
			});
		}

		&::after {
			//background: linear-gradient(144.46deg, #ff6262 -15%, rgba(0, 69, 160, 0) 60%);
			background: linear-gradient(144.46deg, rgba(255, 255, 255, 0) 0%, rgba(0, 98, 204, 0.25) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF);
			display: block;
			content: "";
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			opacity: 0;
			visibility: hidden;
			transition: 0.3s;
		}

		&::before,
		&--before {
			display: block;
			content: "";
			height: 90%;
			width: 200%;
			position: absolute;
			top: 50%;
			left: 100%;
			transform: translate(-50%, -50%);
			z-index: 0;
			opacity: 0;
			visibility: hidden;
			transition: 0.5s;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
		}

		&:hover {
			&::after {
				opacity: 1;
				visibility: visible;
			}

			&::before,
			.servicesList__item--before {
				opacity: 0.03;
				visibility: visible;
			}
		}

		&.lifebuoy {
			&::before {
				background-image: url("../../assets/icons/lifebuoy_white.svg");
			}
		}

		&.wheel {
			&::before {
				background-image: url("../../assets/icons/wheel_white.svg");
			}
		}

		&.ship {
			&::before {
				background-image: url("../../assets/icons/ship_white.svg");
			}
		}

		&:last-child {
			//margin-bottom: 0;
		}

		.up(@md;{
			padding: 50px 20px 50px;
		});

		.up(@xl;{
			padding: 80px 50px 80px;
		});
	}

	& > .container-fluid {
		& > .row {
			margin-left: -10px;
			margin-right: -10px;

			& > div {
				padding: 0 10px;
			}
		}
	}
}
</style>
