<template>
	<div>
	
		<van-index-bar style="text-align: left;">
		  <van-index-anchor index="A" style="background-color: antiquewhite;" />
		  <van-cell :icon="require('../assets/mao.jpeg')" title="阿猫" />
		  <van-cell :icon="require('../assets/jige.jpeg')" title="阿坤" />
		  <van-cell  :icon="require('../assets/gou.jpg')" title="阿狗" />
		
		  <van-index-anchor index="B" style="background-color: antiquewhite;" />
		  <van-cell :icon="require('../assets/father.png')" title="爸" />
		  <van-cell :icon="require('../assets/baixiao.jpg')" title="白晓"/>
		  <van-cell :icon="require('../assets/beixiao.png')" title="贝晓"/>
		
		  <van-index-anchor index="C" style="background-color: antiquewhite;" />
		  <van-cell :icon="require('../assets/chenchen.jpeg')" title="陈陈" />
		  <van-cell :icon="require('../assets/chenxiao.jpeg')" title="陈晓"/>
		  <van-cell :icon="require('../assets/chenyu.jpg')" title="陈雨"/>
		</van-index-bar>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				msg:'通讯录组件'
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