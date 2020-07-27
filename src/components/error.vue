<template>
<main class="error">
	<b-container fluid>
		<div class="error_wrap">
			<img src="@/assets/icons/pirate_flag.svg" alt="pirate_flag">
			<h1>Страница не найдена</h1>
			<h6>Возможно она была удалена, или Вы набрали неверный адрес</h6>
			<b-link :to="{name: 'home'}" class="btn">Вернуться</b-link>
		</div>
	</b-container>
	<background-image />
</main>
</template>

<script>
import backgroundImage from './common/background-image';

export default {
	name: 'error',
	components: {
		backgroundImage
	}
}
</script>

<style lang="less">
@import '../less/variables.less';

main {
	&.error .background-image {
		background-image: url('../assets/img/404.jpg');
		
		.header {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 2;
		}
		.footer {
			display: none;
		}
	}
}

.error {
	min-height: 540px;
	text-align: center;
	height: 100vh;

	.container-fluid {
		height: 100%;
	}

	
	&_wrap {
		display: flex;
		flex-flow: column;
		align-items: center;
		//height: 100vh;
		//justify-content: flex-start;
		//padding-top: 100px;


		
		height: 100%;
		padding-top: 0;
		justify-content: center;

		img {
			width: 100px;
			margin-bottom: 30px;
			
			.up(@md;{
				width: 200px;
			});

			.up(@xl;{
				width: auto;
				margin-bottom: 40px;
			});
		}

		h6 {
			max-width: 320px;
			
			.up(@md;{
				max-width: 450px;
			});
			
			.up(@lg;{
				max-width: 800px;
			});
		}

		.up(@md;{
			//padding-top: 210px;
		});
		.up(@xl;{
			justify-content: center;
			padding-top: 0;
		});

	}

	.btn {
		background-color: @active;
		color: @white;
		font-weight: 300;
		width: auto;
		padding: 0 35px;
		margin-top: 30px;

		.up(@xl;{
			margin-top: 40px;
		});
	}

	h1 {
		margin-bottom: 30px;

		.up(@md;{
			font-size: 43px;
			line-height: 50px;
		});

		.up(@lg;{
			font-size: 65px;
			line-height: 76px;
		});

		.up(@xl;{
			font-size: 100px;
			line-height: 117px;
			margin-bottom: 40px;
		});
	}

	h6 {

		.up(@md;{
			font-size: 20px;
			line-height: 28px;
		});

		.up(@lg;{
			font-size: 22px;
			line-height: 32px;
		});

		.up(@xl;{
			font-size: 35px;
			line-height: 45px;
		});
	}

	h3 {
		font-weight: 500;
		letter-spacing: -0.02em;
		color: @white;
		font-size: 100px;
		line-height: 150px;

		.up(@lg;{
			font-size: 150px;
			line-height: 200px;
		});

		.up(@xl;{
			font-size: 300px;
			line-height: 352px;
		});
	}

	&::before {
		display: none;
		width: 100%;
		height: 100%;
		content: "";
		background-image: url('../assets/img/flag.svg');
		background-repeat: no-repeat;
		background-position: center;
	}	

	.up(@md;{
		min-height: 830px;
	});

	.up(@lg;{
		min-height: 650px;
	});
}
</style>
