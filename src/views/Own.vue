<template>
	<div><van-cell title="doogle" value="" label="微信号:wkai869" :icon="require('../assets/doogle.jpeg')" style="text-align: left;"/>
		<van-cell title="服务" is-link :icon="require('../assets/fuwu.png')" style="text-align: left;"/>
		<van-divider></van-divider>
		<van-cell title="收藏" is-link :icon="require('../assets/shoucang.png')" style="text-align: left;"/>
		<van-divider></van-divider>
		<van-cell title="朋友圈" is-link :icon="require('../assets/pengyouquan.png')" style="text-align: left;"/>
		<van-cell title="卡包" is-link :icon="require('../assets/kabao.png')" style="text-align: left;"/>
		<van-cell title="表情" is-link :icon="require('../assets/biaoqing.png')" style="text-align: left;"/>
		<van-divider></van-divider>
		<van-cell title="设置" is-link :icon="require('../assets/shezhi.png')" style="text-align: left;"/>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				msg:'我的组件'
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