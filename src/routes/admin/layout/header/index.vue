<template>
    <el-header>
        <el-button round @click="login" v-if="!adminInfo.id">登录</el-button>
        <div class="person" v-if="adminInfo.id">
                <div class="avatar"><img :src="avatar_url" alt=""></div>
                <div class="person-info">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{ adminInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="logout"><i class="el-icon-switch-button"></i>退出
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
    </el-header>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>