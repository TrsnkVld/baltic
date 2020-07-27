<template>
<b-col cols="12" md="6" xl="3" class="singleArticle">
    <b-link :to="{path: `/news/${id}`}">
        <div class="singleArticle__img"><img :src="articleImg" :alt="articleTitle"></div>
        <div class="singleArticle__date">{{ articleDate }}</div>
        <h3 class="singleArticle__title">{{ articleTitle }}</h3>
    </b-link>
</b-col>
</template>

<script>
export default {
    name: 'single-article',
    props: [
        'articleImg',
        'articleDate',
        'articleTitle',
        'id',
    ],
}
</script>

<style lang="less">
@import '../../less/variables.less';

.singleArticle {
    //margin-bottom: 70px;
	display: none;
	padding: 15px 20px;

    &:nth-child(-n+2) {
        display: block;
	}

	a {
		display: block;
	}

    &__img {
        border: 1px solid #E9ECEF;
        //height: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        &::after {
            display: block;
            content: "";
            width: 100%;
            padding-top: 65.38%;
            //position: absolute;
            top: 0;
            left: 0;
        }

        img {
            position: absolute;
            top: 50%;
            left: 50%;
			transform: translate(-50%, -50%);

			max-width: none;
			height: 105%;
			min-width: 100%;
			width: auto;
        }

    }

    &__date {
        color: #333B45;
        opacity: 0.5;
        font-weight: 300;
        font-size: 13px;
        margin-top: 14px;

        .up(@md; {
                font-size: 16px;
            }

        );
    }

    &__title {
        margin-top: 10px;
        //font-size: 15px;
        //color: @colorDarkBg;
        //line-height: 25px;
        display: block;
        transition: .2s;

        .up(@xl; {
                //font-size: 20px;
            }

        );
    }

	&:hover {
		color: @btnHover;
	}

    .up(@md; {
		padding: 15px 30px;
		display: block;
	});

    .up(@lg; {
		padding: 30px 35px;
	});
}
</style>
