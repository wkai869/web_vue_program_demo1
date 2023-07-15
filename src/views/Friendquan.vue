<template>
<div>
	<van-image
  width="400"
  height="300"
  lazy-load
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<van-divider></van-divider>
<van-cell title="鸡哥" value="" label="唱跳 rap 篮球" :icon="require('../assets/jige.jpeg')" style="text-align: left;"/>
<van-grid square column-num="3" gutter="3" style="padding-left: 50px; padding-right: 50px;">
<van-grid-item v-for="value in 9" :key="value" :icon="require('../assets/sing.jpeg')" />
</van-grid>
<van-divider></van-divider>
<van-cell title="小猫" value="" label="分享图片" :icon="require('../assets/mao.jpeg')" style="text-align: left;"/>
<van-grid square column-num="3" gutter="3" style="padding-left: 50px; padding-right: 50px;">
   <van-grid-item>
      <van-image :src="require('../assets/sing.jpeg')" />
    </van-grid-item>
    <van-grid-item>
      <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
    </van-grid-item>
    <van-grid-item>
      <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
    </van-grid-item>
</van-grid>
<van-divider></van-divider>
<van-cell title="小狗" value="" label="今日分享" :icon="require('../assets/gou.jpg')" style="text-align: left;"/>
<van-grid square column-num="3" gutter="3" style="padding-left: 50px; padding-right: 50px;">
 <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>

</div>

</template>

<script>
</script>

<style>
	.van-icon__image {
	    display: block;
	    width: 49px;
	    height: 43px;
	    -o-object-fit: contain;
	    object-fit: contain;
	}
.van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 16px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 21px;
    line-height: 20px;
    background-color: #fff;
}
.van-cell__label {
    margin-top: 15px;
    color: black;
    font-size: 18px;
    line-height: 18px;
}
</style>