
<script setup  lang="ts">

import { ref } from 'vue'
import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'
const title = ref<string>('Hello')
const uniBadge2Text = ref<number>(2)

const bindClick = () => {
  uniBadge2Text.value ++
}

const login = () => {
  uni.login({
    provider: "weixin", //使用微信登录
    success: async function (loginRes) {
      console.log(loginRes);
      uni.request({
      url: "http://127.0.0.1:5000/api/auth/login_wechat_mini_program",
        method: "POST",
        data: {
        "code":loginRes.code,
      }
      }).then((res)=>{
        console.log(res);
        
      })
    },
  });
};

</script>


<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area w-1/2">
      <text class="title">{{ title }}</text>
    </view>
      <uni-badge text="13322222211" type="error"></uni-badge>
      <uni-badge :text="uniBadge2Text" type="success" @click="bindClick"></uni-badge>
      <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
    <view class="bg-blue-500 text-white p-4" @click="login">
        login
    </view>

    <view class="bg-blue-500 text-white p-4">
        This is a UniApp component with Tailwind CSS!
    </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
