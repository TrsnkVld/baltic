<template>
<main class="home">
    <header-section />
    <about-section data-aos="fade-right" data-aos-offset="0"/>
    <why-us-section data-aos="fade-left" />
    <our-services-section data-aos="fade-right" />
    <partners-section data-aos="fade-left" />
    <news-rows :title="true" :items="lastNews" data-aos="fade-right" />
    <map-section data-aos="fade-left" />
	<background-image />
</main>
</template>

<script>
import headerSection from './home/header-section';
import partnersSection from './home/partners-section';
import whyUsSection from './home/why-us-section';
import ourServicesSection from './home/our-services-section';
import aboutSection from './home/about-section';
import newsRows from './news/news-rows';
import mapSection from './home/map-section';
import backgroundImage from './common/background-image';

export default {
    name: 'app',
    components: {
        headerSection,
        partnersSection,
        whyUsSection,
        ourServicesSection,
        aboutSection,
        newsRows,
		mapSection,
		backgroundImage
	},
	data: () => ({

	}),

    computed: {
        pageData() {
            if (!this.$store.getters.page || !this.$store.getters.page.Home) return null;
            return this.$store.getters.page.Home;
        },

        lastNews() {
            if (!this.pageData) return null;
            return this.pageData.lastNews;
        },
    },

    mounted() {
    }
}
</script>

<style lang="less">
@import '../less/variables.less';

main {
	&.home .background-image{
		background-image: url('../assets/img/bg2.jpg');
		background-color: @colorDark;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center -180px;
		background-size: 576px;

		background-position: center -90px;

		&::after {
			display: none;
		}

		.up(@sm; {
			background-size: 768px;
			background-position-y: -300px;

			background-position-y: -220px;
		});
		.up(@md; {
			background-size: 992px;
			background-position-x: center;
			background-position-y: -340px;

			background-position-y: -160px;
		});
		.up(@lg; {
			background-size: 1600px;
			background-position: center -710px;

			background-position: center -480px;
		});
		.up(@xl;{
			background-position-y: -850px;
			background-size: 2000px;

			background-position-y: -550px;

		});
		.up(@xxl;{
			background-position-y: -1120px;
			background-size: 2500px;

			background-position-y: -800px;
		});
		.up(@3xl;{
			background-position-y: -1400px;
			background-size: 3000px;

			background-position-y: -1050px;
		});
		.up(@4xl;{
			background-position-y: -1650px;
			background-size: 3500px;

			background-position-y: -1300px;
		});
		.up(@5xl;{
			background-position-y: -1950px;
			background-size: 4000px;

			background-position-y: -1600px;
		});
	}
}

</style>
