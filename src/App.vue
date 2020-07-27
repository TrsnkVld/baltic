<template>
<div id="app" :class="grandVar">
	<router-view/>
</div>
</template>

<script>
export default {
    name: 'app',
	props: {
		grandVar: {
			default: 'start'
		}
	},
}
</script>

<style lang="less">
@import './less/variables.less';

#app {
	position: relative;
	min-height: 100vh;
}
</style>
