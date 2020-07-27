<template>
	<div class="background-image"></div>
</template>

<script>
export default {
	name: 'background-image',
	props: [
		"src"
	]
}
</script>

<style lang="less">
.background-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	&::after {
		background-color: rgba(0, 69, 160, 0.9);
		display: block;
		content: "";
		height: 100%;
		width: 100%;
	}
}
</style>