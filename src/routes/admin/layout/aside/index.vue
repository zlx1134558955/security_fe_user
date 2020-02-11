<template>
    <el-aside width="200px">
        <el-menu :default-active="active" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">漏洞管理</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-submenu index="user">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="user" @click="jump('/admin/front-user')">前台用户</el-menu-item>
                    <el-menu-item index="1-2">管理员</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="setting" @click="jump('/admin/setting')">
                <i class="el-icon-setting"></i>
                <span slot="title">站点管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>