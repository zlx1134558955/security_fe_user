<template>
  <div class="header">
    <div class="header-content">
      <div class="company">
        <div class="logo">
          <div class="logo-img"></div>
        </div>
        <div class="company-name">
          <h3 class="company-name-cn">{{ $store.state.site.site_name_cn }}安全漏洞管理平台</h3>
          <p class="company-name-en">{{ $store.state.site.site_name_en }} security manage platform</p>
        </div>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="submit">提交漏洞</el-menu-item>
        <el-menu-item index="gift">礼品兑换</el-menu-item>
        <el-menu-item index="notice">网站公告</el-menu-item>
        <el-menu-item index="ranking">排行榜</el-menu-item>
      </el-menu>
      <div class="btn-box" v-if="!userInfo.id">
        <el-button round @click="login">登录</el-button>
        <el-button round @click="register">注册</el-button>
      </div>
      <div class="person" v-if="userInfo.id">
        <div class="avatar" :style="avatarStyle"></div>
        <div class="person-info">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="member"><i class="el-icon-user"></i>个人主页</el-dropdown-item>
              <el-dropdown-item command="logout"><i class="el-icon-switch-button"></i>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>