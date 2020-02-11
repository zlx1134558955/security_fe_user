<template>
    <div>
        <Tip :title="title" :content="desc"></Tip>
        <div class="main">
            <div class="member-menu">
                <el-menu :default-active="active" class="el-menu-vertical-demo">
                    <el-menu-item index="mypost" @click="jump('mypost')">
                        <i class="el-icon-document"></i>
                        <span slot="title">我提交的</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
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
            <!-- <el-tabs tab-position="left" v-model="active">
                <el-tab-pane label="个人中心" name="center">个人中心</el-tab-pane>
                <el-tab-pane label="我的提交" name="mypost"><Mypost></Mypost></el-tab-pane>
                <el-tab-pane label="角色管理" name="role">角色管理</el-tab-pane>
                <el-tab-pane label="个人信息" name="person"><Person></Person></el-tab-pane>
            </el-tabs> -->
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>