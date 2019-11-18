<template>
	<div>
		<head-top>
			<span slot="logo" class="head_logo">ele.me</span>
		</head-top>
		<nav class="city_nav">
			<div class="city_tip">
				<span class="city_tip_name">当前定位城市：</span>
				<span class="city_tip_text">定位不准时，请在城市列表中选择</span>
			</div>
			<router-link class="guess_city" :to="'/city/'+guessCityid">
				<span class="guess_city_name">{{guessCity}}</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	import headTop from '../../components/header/head'
	export default {
		data() {
			return {
				guessCity: '北京',	//当前城市
            	guessCityid: '1', //当前城市id
			}
		},
		components: {
			headTop
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../style/mixin.scss';
	.city_nav {
		padding-top: 2.35rem;
		margin-bottom: .4rem;
        border-top: 1px solid $bc;
        background-color: #fff;
		.city_tip {
			display: flex;
			justify-content: space-between;
			align-items: center;
		    line-height: 1.45rem;
			padding: 0 0.45rem;
			.city_tip_name {
				font-size: .55rem;
			    color: #666;
			}
			.city_tip_text {
				font-size: .475rem;
				font-weight: 900;
				color: #9f9f9f;
			}
		}
		.guess_city {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 1.8rem;
			line-height: 1.8rem;
			padding: 0 .45rem;
			border-top: 1px solid #e4e4e4;
			border-bottom: 2px solid #e4e4e4;
			font-size: 0.75rem;
			.guess_city_name {
				color: #3190e8;
			}
		}
	}
</style>