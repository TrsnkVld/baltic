<template>
  <section class="headerSection">
    <div class="container-fluid">
      <h1 class="headerSection__title">{{ $t('homePage.title') }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'headerSection',

}
</script>

<style lang="less">
@import '../../less/variables.less';

.headerSection {
	height: 290px;

	h1 {
		text-align: left;
	}

	&__title {
		font-weight: 300;
		font-size: 23px;
		line-height: 30px;
    	text-align: center;
		color: #0045A0;
		margin: 0 auto;
		padding-top: 30px;
		max-width: 425px;

		span {
			background-color: #bad3e978;
		}

		.up(@md; {
			font-size: 35px;
			line-height: 45px;
			padding-top: 70px;
			max-width: 640px;
		});

		.up(@xl; {
			font-size: 55px;
			line-height: 65px;
			padding-top: 140px;
			max-width: 1000px;
		});
	}

	.up(@sm; {
		height: 350px;
	});

	.up(@md; {
		height: 450px;
	});

	.up(@lg; {
		height: 600px;
	});

	.up(@xl;{
		height: 820px;
	});

	.up(@xxl;{
		height: 930px;
	});

	.up(@3xl;{
		height: 1050px;
	});

	.up(@4xl;{
		height: 1170px;
	});

	.up(@5xl;{
		height: 1250px;
	});
}
</style>
