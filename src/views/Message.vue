<template>
<div>
	<van-swipe :autoplay="3000">
	  <van-swipe-item v-for="(image, index) in images" :key="index">
	    <img v-lazy="image" />
	  </van-swipe-item>
	</van-swipe>
	<van-divider>轮播图</van-divider>
	<div>
		<van-cell-group >
		  <van-cell title="瘤子和他的五个父亲" :value="getDate()" label="牛超群:[动画表情]" :icon="require('../assets/qun.png')" style="text-align: left;"/>
		  <van-cell title="爸" value="13:13" label="[转账]已收款" :icon="require('../assets/father.png')" style="text-align: left;"/>
		  <van-cell title="鸡哥" value="20:40" label="你干嘛" :icon="require('../assets/jige.jpeg')" style="text-align: left;"/>
		  <van-cell title="好友a" value="12:51" label="好的" :icon="require('../assets/haoyoua.png')" style="text-align: left;"/>
		</van-cell-group>
	</div>
	
</div>	
	
</template>

<script>
	export default{
		data() {
			return{
				msg:'消息组件',
				images: [
				        require('../assets/xiaomao1.jpeg'),
						require('../assets/xiaomao.jpeg')
				      ],
			}
		},
		methods:{
			getDate(){
				const t=new Date
				return t.getHours()+':'+t.getMinutes()
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