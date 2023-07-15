<template>
	<div id="app">
		<div>
			<!-- 顶部导航栏 -->
			<van-nav-bar :title="str" left-text="返回" left-arrow>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div>
			<!-- 内容区 -->
			<router-view></router-view>

		</div>
		
		<div>
			<!-- 底部导航 -->
			<!-- 添加route表示支持路由 -->
			<van-tabbar v-model="active" route @change="onchange">
				
				
				<van-tabbar-item badge="3" to='/message' name='消息' icon="expand-o">
					<span>消息</span>
					<template #icon="props">
						<img :src="props.active ? icon.active : icon.inactive" />
					</template>
				</van-tabbar-item>
		
				<van-tabbar-item icon="friends-o" to='/friend' name='通讯录'>通讯录</van-tabbar-item>
				<van-tabbar-item icon="expand-o" to='/discover' name='发现'>发现</van-tabbar-item>
				<van-tabbar-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png" to='/own' name='我的'>我的</van-tabbar-item>
				
				
			</van-tabbar>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				str: '消息',
				active: 0,
				icon: {
					active: 'https://img01.yzcdn.cn/vant/user-active.png',
					inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
				},
			};
		},
		methods: {
			onchange(val) {
				this.str = val
				
			}
		}
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}
</style>