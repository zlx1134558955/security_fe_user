<template>
    <div class="header">
        <div class="header-content">
            <div class="company">
                <div class="logo">
                    <img src="Public/images/lixiang.png" alt="lixiang" width="50" height="50">
                </div>
                <div class="company-name">
                    <h3 class="company-name-cn">{{ siteNameCN }}安全漏洞管理平台</h3>
                    <p class="company-name-en">{{ siteNameEN }} security manage platform</p>
                </div>
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="home">首页</el-menu-item>
                <el-menu-item index="submit">提交漏洞</el-menu-item>
                <el-menu-item index="hero" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="btn-box" v-if="!userInfo.pid">
                <el-button round @click="login">登录</el-button>
                <el-button round @click="register">注册</el-button>
            </div>
            <div class="person" v-if="userInfo.pid">
                <div class="avatar"><img :src="avatar_url" alt=""></div>
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