<template>
  <div>
    <Tip :title="title" :content="desc"></Tip>
    <div class="main">
      <div class="member-menu">
        <el-menu :default-active="active" class="el-menu-vertical-demo">
          <el-menu-item index="homepage" @click="jump('homepage')">
            <i class="el-icon-s-home"></i>
            <span slot="title">个人主页</span>
          </el-menu-item>
          <el-menu-item index="account" @click="jump('account')">
            <i class="el-icon-s-finance"></i>
            <span slot="title">安全账户</span>
          </el-menu-item>
          <el-menu-item index="mypost" @click="jump('mypost')">
            <i class="el-icon-document"></i>
            <span slot="title">提交记录</span>
          </el-menu-item>
          <el-menu-item index="gift-order" @click="jump('gift-order')">
            <i class="el-icon-goods"></i>
            <span slot="title">礼品订单</span>
          </el-menu-item>
          <el-menu-item index="person" @click="jump('person')">
            <i class="el-icon-user"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>