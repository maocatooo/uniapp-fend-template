<script setup  lang="ts">

const login = () => {
  console.log("login");
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
<view class="bg-blue-500 text-white p-4" @click="login">
 login 
</view>
</template>
<style scoped>

</style>
