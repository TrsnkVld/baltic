<template>
<main class="news">
	<header-title  :headerTitle="headerTitle" />
    <news-rows :items="pageData" :title="false"/>
	<background-image />
</main>
</template>

<script>
import newsRows from './news/news-rows';
import headerTitle from './common/header-title';
import backgroundImage from './common/background-image';

export default {
    name: 'news',
    components: {
		newsRows,
		headerTitle,
		backgroundImage
    },
    data: () => ({
		headerTitle: 'Новости',
	}),
    props: [],

	computed: {
		pageData() {
			if (!this.$store.getters.page || !this.$store.getters.page.News) return null;
			return this.$store.getters.page.News;
		},
	}
}
</script>

<style lang="less" >
main {
	&.news .background-image {
		background-image: url('../assets/img/news_bg.jpg');
	}
}
</style>
