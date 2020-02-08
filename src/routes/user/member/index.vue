<template>
    <div>
        <Tip :title="title" :content="desc"></Tip>
        <div class="main">
            <el-tabs tab-position="left" v-model="active">
                <el-tab-pane label="个人中心" name="center">个人中心</el-tab-pane>
                <el-tab-pane label="我提交的漏洞" name="mypost">我提交的漏洞</el-tab-pane>
                <el-tab-pane label="角色管理" name="role">角色管理</el-tab-pane>
                <el-tab-pane label="个人信息" name="person"><Person></Person></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>