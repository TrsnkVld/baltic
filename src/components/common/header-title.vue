<template>
	<section class="header-title" data-aos="fade-in">
		<b-container fluid>
			<h1 v-if="headerTitle">{{ headerTitle }}</h1>
			<h6 v-if="headerDesc" data-aos="fade-down"><div v-html="headerDesc"></div></h6>
		</b-container>
	</section>
</template>

<script>
export default {
	name: 'header-title',
	props: [
        'headerTitle',
        'headerDesc',
	]
}
</script>

<style lang="less">
@import '../../less/variables.less';

.header-title {
    h1,
    h6 {
        text-align: center;
    }

    h1 {
        padding-top: 90px;

        .up(@lg; {
			padding-top: 80px;
		});
    }

    h6 {
		padding-top: 30px;
		margin: 0 auto;

        .up(@md;{
			max-width: 700px;
		});

        .up(@lg; {
			padding-top: 60px;
			max-width: 1150px;
		});
    }

    &>.container-fluid {
        padding-bottom: 30px;

        .up(@md; {
			padding-bottom: 80px;
		});
    }
}

</style>
