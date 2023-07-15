<template>
	<div>
		<div>
		<van-cell-group>
		  <van-cell title="朋友圈" is-link to='friendquan':icon="require('../assets/friend.png')" style="text-align: left;"/>
		  <van-divider></van-divider>
		  <van-cell title="视频号" is-link :icon="require('../assets/shipinhaoguanli.png')" style="text-align: left;"/>
		  <van-cell title="直播" is-link :icon="require('../assets/zhibo.png')" style="text-align: left;"/>
		  <van-cell title="扫一扫" is-link :icon="require('../assets/saoyisao.png')" style="text-align: left;"/>
		  <van-cell title="摇一摇" is-link :icon="require('../assets/kanyikan.png')" style="text-align: left;"/>
		  <van-cell title="搜一搜" is-link :icon="require('../assets/souyisou.png')" style="text-align: left;"/>
		  <van-divider></van-divider>
		  <van-cell title="购物" is-link :icon="require('../assets/gouwu.png')" style="text-align: left;"/>
		  <van-cell title="小程序" is-link :icon="require('../assets/xiaochengxu.png')" style="text-align: left;"/>
		</van-cell-group>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				msg:'发现组件'
			}
		}
	}
</script>

<style>
	
	.van-cell {
	    position: relative;
	    display: flex;
	    box-sizing: border-box;
	    width: 100%;
	    padding: 28px 16px;
	    overflow: hidden;
	    color: #323233;
	    font-size: 21px;
	    line-height: 20px;
	    background-color: #fff;
	}
	.van-icon__image {
	    display: block;
	    width: 40px;
	    height: 31px;
	    -o-object-fit: contain;
	    object-fit: contain;
	}
</style>