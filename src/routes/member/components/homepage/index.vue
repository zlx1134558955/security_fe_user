<template>
  <div class="content">
    <div class="userinfo-box">
      <div class="avatar-box">
        <img :src="avatar_url" heigth="100" width="100" alt="头像">
      </div>
      <div class="userInfo-detail">
        <h2>{{ userInfo.username }}</h2>
        <p>积分：{{ userInfo.score }}</p>
        <p>安全点：{{ userInfo.points }}</p>
        <p>团队：{{ userInfo.team }}</p>
        <p>个性签名：{{ userInfo.description }}</p>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>