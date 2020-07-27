<template>
	<div class="marker_popup">
		<h3>{{ feature.properties.title }}</h3>
		<h5>{{ feature.properties.description }}</h5>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	props: {
		feature: {
			required: true,
			type: Object,
		},
	},
})
</script>

<style lang="less">
	@import '../../less/variables.less';
	
	.mapboxgl-popup {
		max-width: 300px !important;
		padding: 30px 0;
    	box-sizing: content-box;
		z-index: 1;
		
		&-anchor-bottom  {
			.mapboxgl-popup-tip {
				border-top-color: #ff6261;
			}
		}

		&-content {
			padding: 0;
		}

		&-close-button {
			display: none;
		}

		&-anchor-left,
		&-anchor-right {
			padding: 30px;
		}
	}


	.marker_popup {
		background-color: #FF6262;
		color: @white;
		padding: 40px;

		h3 {
			margin-bottom: 20px;
		}
	}
</style>