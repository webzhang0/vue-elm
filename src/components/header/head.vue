<template>
	<header id="head_top">
		<!-- 这块怎么布局？ -->
		<slot name="logo"></slot>
		<!-- <slot name="sign" class="sign" v-if="!userInfo"></slot> -->
		<router-link :to="userInfo ? '/profile' : '/login'" class="head_login">
			<span class="login_span">登录|注册</span>
		</router-link>
	</header>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState([
				'userInfo'
			])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin.scss';
	
	#head_top {
		background-color: $blue;
		position: fixed;
		z-index: 100;
		left: 0;
	}
</style>