<template>
    <el-dialog title="登录(管理员)" width="600px" :visible="showLogin" :before-close="handleClose" :close-on-click-modal="false">
        <div class="company-abbrev">L<span class="other-color">x</span>SMP</div>
        <el-form label-width="80px" :model="form" :rules="rules" ref="formName">
            <el-form-item label="账号" prop="account">
                <el-input v-model="form.account" placeholder="请输入账号"></el-input>
                <p class="tip">请输入11位手机号码</p>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
                <p class="tip">请输入8-16位字母数字组合</p>
            </el-form-item>
        </el-form>
        <p class="err">{{ err }}</p>
        <div class="login-bottom">
            <el-button type="primary" @click="login" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
        </span>
    </el-dialog>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>