<template>
	<div class="app-container">
		<!-- 顶部 header 区域 -->
			<!-- <mt-header fixed title="爱凡之家"></mt-header> -->
			<mt-header fixed title="爱凡之家">
			  <span slot="left">
			    <mt-button v-show="showBack" @click="goBack" class="mui-icon mui-icon-back">返回</mt-button>
			  </span>
			</mt-header>

		<!-- 低部 tabBar 区域 -->
		<!-- mui-active: 高亮类名 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/number">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span id="badge" class="mui-badge">{{ $store.getters.getAllCount }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

		<!-- 中间部分 router-view 区域 -->
		<!-- 动画切换 -->
		<transition>
			<router-view style="margin: auto;"></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	data () {
		return {
			showBack: false
		}
	},
	created () {
		this.showBack = this.$route.path === "/home"? false:true;
	},
	methods: {
		// 返回上个页面
		goBack () {
			this.$router.go(-1);
		}
	},
	watch: {
		"$route.path": function (newValue, oldValue) {
			// console.log(newValue + " ---- " + oldValue)
			if(newValue == "/home" || newValue == "/number" || newValue == "/shopCar" || newValue == "/search") {
				this.showBack = false;
			} else {
				this.showBack = true;
			}
		}
	}
}
</script>

<style scoped lang="scss">
.mint-header.is-fixed {
	font-size: 15px;
	box-shadow: 0 0 3px #999;
  z-index: 999;
}
.mint-header .mint-button{
	font-size: 14px;
} 

.app-container {
	position: relative;
	padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	position: absolute;
	opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
.mui-bar{
	box-shadow: 0 0 3px #999;
}
.mui-bar-tab .mui-tab-item-llb.mui-active {
	color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
