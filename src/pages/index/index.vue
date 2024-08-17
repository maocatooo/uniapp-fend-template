<script setup lang="ts">

import { ref } from 'vue'
import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'
import Header from "../../components/defineProps/index.vue"
import Login from "./login.vue"
const title = ref<string>('Hello')
const uniBadge2Text = ref<number>(98)

const bindClick = () => {
  uniBadge2Text.value++
}
</script>

<template>
  <Header title="i`m-title"></Header>
  <view class="content">
   
    <image class="logo" src="/static/logo.png" />
    <view class="text-area w-1/2">
      <text class="title">{{ title }}</text>
    </view>
    <uni-badge text="13322222211" type="error"></uni-badge>
    <uni-badge :text="uniBadge2Text" type="success" @click="bindClick"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
  <Login />

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
