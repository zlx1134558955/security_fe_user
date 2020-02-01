<template>
    <div>
        <Tip :title="title" :content="desc"></Tip>
        <div class="main">
            <el-tabs tab-position="left">
                <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="个人信息"><Person></Person></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>