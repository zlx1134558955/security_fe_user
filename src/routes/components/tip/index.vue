<template>
  <div class="box">
    <div class="main">
      <div class="left-box">
        <p class="title">{{ title }}</p>
        <p class="content">{{ content }}</p>
      </div>
      <p v-show="points !== undefined" class="account">当前账户共有 <span class="points">{{ points }}</span> 安全点</p>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>