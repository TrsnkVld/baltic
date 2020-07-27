<template>
<b-col tag="li" cols="12" md="6" xl="4" class="singleService">
	<b-link v-if="this.$route.name == 'home'"  :to="{name: link}" class="singleService__title">
        <i class="icon" :class="serviceIcon"></i>
        <h3>{{ serviceTitle }}</h3>
	</b-link>
    <div v-else class="singleService__title">
        <i class="icon" :class="serviceIcon"></i>
        <h3>{{ serviceTitle }}</h3>
    </div>
    <h5 class="singleService__desc">{{ serviceDesc }}</h5>
</b-col>
</template>

<script>
export default {
    name: 'single-service',
	props: 
	[
        'serviceTitle',
        'serviceDesc',
		'serviceIcon',
		'link'
    ],
}
</script>

<style lang="less">
@import '../../less/variables.less';

.singleService {
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
	padding: 15px 20px 30px;

	a {
		&:hover {
			color: @active;
		}
	}

    &__title {
        display: flex;
        border-bottom: 1px solid @underline;
        align-items: center;
        padding-bottom: 20px;
        color: #333B45;
        font-weight: normal;

        .icon {
			height: 65px;
			width: 65px;
			max-width: none;
			background-size: contain;
    		margin-right: 25px;
			
			.up(@md;{
				//background-size: 100% 65px;
			});

            .up(@lg; {
				height: 85px;
				width: 85px;
    			margin-right: 35px;
			});

			.up(@xl;{
				background-size: contain;
			});
        }

        .up(@xl; {
			padding-bottom: 50px;
		});
    }

    &__desc {
		margin-top: 25px;

        .up(@md;{
			//min-height: 70px;
		});

        .up(@xl;{
			margin-top: 45px;
			//min-height: 120px;
		});
	}
	
	&:nth-child(odd) {
		.up(@md;{
			padding-right: 30px;
		});

		.up(@lg;{
			padding-right: 35px;
		});
	}
	
	&:nth-child(even) {
		.up(@md;{
			padding-left: 30px;
		});

		.up(@lg;{
			padding-left: 35px;
		});
	}
	
	.up(@md;{
		padding: 20px 60px;
	});
	
	.up(@lg;{
		padding: 15px 35px;
	    padding-bottom: 60px;
	});
}
</style>
