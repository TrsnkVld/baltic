<template>
	<main class="services">
		<header-title :headerTitle="title" />
		<services-list />
		<background-image />
	</main>
</template>

<script>
import servicesList from "./services/services-list";
import headerTitle from "./common/header-title";
import backgroundImage from "./common/background-image";

export default {
	name: "services",
	components: {
		servicesList,
		headerTitle,
		backgroundImage
	},
	computed: {
		title() {
			return (
				this.$store.getters.page &&
				this.$store.getters.page.Services &&
				this.$store.getters.page.Services.title
			);
		}
	}
};
</script>

<style lang="less">
@import "../less/variables.less";

main {
	&.services .background-image {
		background-image: url("../assets/img/services_bg.jpg");
	}
}

.services {
	.servicesList {
		margin-top: 10px;

		.up(@md; {margin-top: 50px;});

		.up(@lg; {margin-top: 20px;});
	}
}
</style>
