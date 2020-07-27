<template>
<main class="gallery">
	<image-gallery
		:big="true"
		:gallery="normalizeData"
		type="gallery"
		data-aos="fade-in"
	/>
	<background-image />
</main>
</template>

<script>
import imageGallery from './common/image-gallery';
import backgroundImage from './common/background-image';

export default {
	name: 'gallery',
	components: {
		imageGallery,
		backgroundImage
	},
	data: () => ({
        images: [
			{
				id: 1,
				src: '0A5A1301A-min.jpg',
				name: 'Baltic Hollyhock',
			},
			{
				id: 2,
				src: '6-min.jpg',
				name: 'Baltic Heather',
			},
			{
				id: 3,
				src: 'gallery2.jpg',
				name: 'Baltic Heather',
			},
			{
				id: 4,
				src: 'ship.jpg',
				name: 'Baltic Heather',
			}
		],
	}),

	computed: {
		pageData() {
			return this.$store.getters.page.Gallery
		},

		normalizeData() {
			if (!this.pageData) return [];
			const description  = this.pageData.description;
			return this.pageData.images.reduce((acc, src, index) => [...acc, {
				src,
				name: description[index],
			}], []);
		},
	},
}
</script>

<style lang="less">
@import '../less/variables.less';

main {
	&.gallery {
		//transition: 0s;
		padding-top: 0;

		& .background-image {
			background-color: #002250;
		}
	}
}

.gallery {
	height: 100vh;
	.swiper-wrapper {
		/*
		&::after {
			display: block;
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
		*/
		.swiper-slide::after {
			display: none;
		}

		.image {
			background-blend-mode: darken;
			background-color: rgba(0, 0, 0, .1);
		}
	}

	.swiper-slide {
		width: 100% !important;
		//width: calc(100% - 5px) !important;
	}
}
</style>
