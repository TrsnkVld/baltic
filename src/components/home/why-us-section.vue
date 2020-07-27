<template>
	<section class="infoSection">
		<b-container fluid>
			<div class="wrap wrap-dark">
				<b-row>
					<h2
						class="infoSection__title h1"
						v-html=" $t('homePage.whyChooseUs.title')"
					></h2>
					<b-col cols="12" class="infoSection__content">
						<b-row class="infoList">
							<b-col
								cols="12"
								md="6"
								class="infoList__item"
								v-for="({text, img}, index) in $t('homePage.whyChooseUs.list')"
								:key="index"
							>
								<i class="icon" :style="`background-image:url('${setImage(img)}')`"></i>
								<h4 class="infoList__item-desc">{{ text }}</h4>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</div>
		</b-container>
	</section>
</template>

<script>
export default {
	name: "whyUsSection",

	methods: {
		setImage(src) {
			return src ? require(`@/assets/${src}`) : "";
		}
	},

	mounted() {
		//console.log(this.$t('homePage.whyChooseUs.list'));
	}
};
</script>

<style lang="less">
@import "../../less/variables.less";
</style>

<style lang="less" scoped>
@import "../../less/variables.less";

h2 {
}

.infoList {
	&__item {
		display: flex;
		align-items: flex-start;

		.icon {
			height: 40px;
			width: 40px;
			margin-right: 20px;

			.up(@md; {height: 60px; width: 60px;});
		}
	}
}
</style>
