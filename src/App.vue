<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
@import './style/common';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
