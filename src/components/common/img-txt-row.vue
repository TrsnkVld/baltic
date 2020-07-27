<template>
<b-row class="textRow">
	<b-col class="textRow__img" cols="12" :lg="type=='slider' ? '5' : '4' ">
		<!--
			<img v-for="image in rowImages" :key="image.id" :src="require(`@/assets/img/${image.src}`)" alt="image">
		-->
		<image-gallery :gallery="gallery" v-if="type=='slider'"/>
		<img v-else v-for="(item, index) in rowImages"  :src="setImage(item.src)" :key="`img-text-row-index-${index}`" alt="image">
	</b-col>
	<b-col class="textRow__content" cols="12" :lg="type=='slider' ? '7' : '8' ">
		<div v-if="rowText">
			<h6 v-if="rowTitle">{{ rowTitle }}</h6>
			<p v-for="(item, index) in rowText" :key="`row-text-index-${index}`" v-html="item"></p>
			<div v-if="rowPhone" class="contact-links">
				<p><a :href="`tel:${tel()}`">{{ rowPhone }}</a></p>
				<p><a :href="`mailto:${rowMail}`">{{ rowMail }}</a></p>
			</div>
			<b-button class="test_btn" v-if="rowBtn">Подробнее</b-button>
		</div>
		<ul v-if="listText">
			<li v-for="(item, index) in listText" :key="`list-text-index-${index}`">{{ item }}</li>
		</ul>
	</b-col>
</b-row>
</template>

<script>
import imageGallery from './image-gallery';
// TODO ПЕРЕПИСАТЬ COMPONENT СЛИШКОМ МНОГО V-iF и PROPS
export default {
	name: 'img-txt-row',
	components: {
		imageGallery,
	},
	props: [
		"rowTitle",
		"rowDate",
		"rowText",
		"rowBtn",
		"rowPhone",
		"rowMail",
		"listText",
		"rowImages",
		"order",
		"gallery",
		"type",
		"text",
		"blue",
		"xl"
	],
	data: () => ({
		img: 'image1.jpg',
		//gallery: this.gallery
	}),
	methods: {
		tel() {
			let phoneNumber = this.rowPhone.replace(/\s/g, '');
			return phoneNumber
		},

		setImage(src) {
			if (src.includes('upload')) return src;
			return require(`@/assets/img/${src}`);
		}
	},
}
</script>

<style lang="less">
@import '../../less/variables.less';

.test_btn {
	margin-top: auto;
    margin-right: unset;
}

.textRow {
	min-height: 420px;
	margin: 0 0 20px;

	&__img {
		overflow: hidden;
		position: relative;
		min-height: 180px;

		img {
			//height: 100%;
			max-width: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
    		min-width: 101%;

			max-width: 120%;
			min-height: 100%;

			.up(@md;{
				max-width: 101%;
			});

			.up(@lg;{
				min-width: 100%;
				max-width: none;
			});

			.up(@xl;{
				max-width: none;
				max-height: 101%;
			});
		}

		.image-gallery {
			margin: 0 -15px;
			flex-shrink: 0;

			img {
				height: 101%;
				width: auto;

				.up(@md;{
					height: auto;
					width: 101%;
				});
			}
		}

		&::after {
			padding-top: 54.55%;
			content: "";
			display: block;
			width: 100%;

			.up(@md;{
				padding-top: 42.86%;
			});

			.up(@md;{
				padding-top: 42.86%;
			});

			.up(@xl;{
				display: none;
			});
		}

		.up(@md;{
			min-height: 300px;
		});
	}

	&__content {
		padding: 40px 20px;
		font-size: 15px;
		font-weight: 300;
		line-height: 20px;
		background-color: @white;

		& > div {
			display: flex;
			flex-flow: column;
			align-items: flex-start;
			height: 100%;
		}

		.contact-links {
			margin-top: auto;

			p {
				margin: 0;

				&:hover {
					color: @btnHover;
				}
			}
		}

		h6 {
			color: @black;
			margin-bottom: 20px;
		}

		ul {
			margin: 0;
			li {
				display: flex;
				margin-bottom: 20px;

				&::before {
					content: "—";
					margin-right: 12px;

					.up(@md;{
						margin-right: 25px;
					});
				}

				&:last-child {
					margin-bottom: 0;
				}

				.up(@lg;{
					margin-bottom: 25px;
				});
			}
		}

		p {
			&:last-child {
				margin-bottom: 0;
			}
		}

		a {
			margin-top: auto;
		}

		.up(@md;{
			padding: 40px 60px;
		});

		.up(@lg;{
			font-size: 20px;
			line-height: 25px;
			padding: 60px 65px;
		});

	}

	&.blue {
		color: @white;

		.textRow__content {
			background-color: @btnHover;
		}

		h6 {
			color: @white;
		}

		.test_btn {
			background-color: @softblue;
			color: @active;
			font-weight: normal;
			margin-left: unset;
    		margin-right: auto;

			&:hover {
				background-color: @btnHover;
				color: @white;
			}
		}
	}

	&.articleRow {

		.image-gallery {
			height: auto;
		}

		.textRow__img {
			.up(@xl;{
				flex: 0 0 calc(50% - 40px);
				max-width: calc(50% - 40px);
				margin-right: 40px;
				position: sticky;
				top: 80px;
			});
		}
		.textRow__content {
			margin-bottom: 20px;
			min-height: 479px;

			.up(@md;{
				margin-bottom: 40px;
			});

			.up(@lg;{
				margin-bottom: 80px;
			});

			.up(@xl;{
				flex: 0 0 calc(50% - 40px);
				max-width: calc(50% - 40px);
				margin-left: 40px;
				margin-bottom: 0;
			});
		}

		.up(@xl;{
			align-items: flex-start;
		});
	}

	&.order {
		.up(@lg;{
			flex-flow: row-reverse;
		});
	}

	.up(@md;{
		margin-bottom: 40px;
	});

	.up(@lg;{
		margin-bottom: 80px;
	});
}
</style>
