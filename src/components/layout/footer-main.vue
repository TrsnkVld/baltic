<template>
	<footer class="footer">
		<div class="container-fluid" data-aos="fade-up" data-aos-offset="0" data-aos-once="false">
			<div class="wrap">
				<div class="row">
					<b-col cols="12" xl="3">
                        <router-link :class="{ inactive:!internal }" :to="{ name: 'home' }" class="footer__logo">
                            <img alt="logo" src="@/assets/icons/logo_white.svg" />
                        </router-link>
					</b-col>
					<b-col cols="12" xl="9">
						<div class="row footerInfo">
							<a class="col-12 col-md-6 col-lg-4 footerInfo__item order-lg-1" :href="`tel:${phone}`">
								<i class="icon icon-phone"></i>
								<div>
									<h5>{{phone}}</h5>
								</div>
							</a>
							<div class="col-12 col-md-6 col-lg-4 footerInfo__item  order-lg-3">
								<i class="icon icon-map"></i>
								<div>
									<h5>{{address}}</h5>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-4 footerInfo__item  order-lg-2">
								<i class="icon icon-calendar"></i>
								<div>
									<h5>{{workTime}}</h5>
								</div>
							</div>
						</div>
					</b-col>
                    <b-col cols="12" md="6">
                        <h4>© {{year}} {{copyright}}</h4>
                    </b-col>
                    <b-col cols="12" md="6" class="d-flex">
						<a class="pn_logo" href="https://playnext.ru/" target="_blank"></a>
                    </b-col>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "footerMain",
	props: ["internal"],

	computed: {
		common() {
			return this.$store.getters.common.contacts;
		},

		phone() {
			return this.common.phone;
		},

		email() {
			return this.common.email;
		},

		address() {
			return this.common.address;
		},

		copyright() {
			return this.common.copyright;
		},

		workTime() {
			return this.common.workTime;
		},

		year() {
			return new Date().getFullYear();
		}
	}
};
</script>

<style lang="less">
@import "../../less/variables.less";
.footer {
	padding-bottom: 20px;
	position: relative;
	z-index: 1;

	.row {
		position: relative;
	}

	.wrap {
		padding: 40px 20px 35px;
		background-color: #002250;
		color: #ffffff;
		font-weight: 300;

		.up(@md; {padding: 40px 60px;});

		.up(@lg; {padding: 80px 70px;});
	}

	&Info {
        margin-bottom: 40px;
		&__item {
			display: flex;
			align-items: flex-start;
			margin-bottom: 20px;

			h5 {
				position: relative;
			}

			div {
				min-height: 40px;
				display: flex;
				align-items: center;
				max-width: 350px;
				position: relative;

				.up(@md; {min-height: 60px; max-width: 450px;});
			}

			.icon {
				height: 40px;
				width: 40px;
				flex-shrink: 0;
				margin-right: 5%;

				.up(@md; {height: 60px; width: 60px;});
			}

			&:last-child {
				margin-bottom: 0;
			}

			.up(@md; {margin-bottom: 40px;});

			.up(@lg; {margin-bottom: 40px;});
		}
	}

	&__text {
		margin: 35px 0 45px;

		.up(@md; {margin: 30px 0 40px;});

		.up(@lg; {margin: 80px 0 0;});
	}

	&__logo {
        display: block;
        margin-bottom: 40px;
		&.inactive {
			cursor: default;
		}

		img {
			height: 40px;

			.up(@md; {height: 53px;});

			.up(@lg; {height: auto;});
		}
	}

	.up(@md; {padding-bottom: 80px;});
}

a.footerInfo__item {
	h5 {
		&::after {
			content: "";
			display: block;
			width: 0;
			height: 1px;
			background-color: @white;
			position: absolute;
			bottom: -5px;
			left: 0;
			transition: 0.2s;

		}
	}

	&:hover {
		h5 {
			&::after {
				width: 100%;
			}
		}
	}
}

.pn_logo {
	width: 110px;
    height: 26px;
    margin-top: 40px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: block;
	background-image: url("../../assets/icons/pn_logo.svg");
	transition: 0.2s;

	&:hover {
		background-image: url("../../assets/icons/pn_logo_hover.svg");
    }
    
    .up(@md;{
        margin-top: auto;
        margin-left: auto;
    });

}
</style>
