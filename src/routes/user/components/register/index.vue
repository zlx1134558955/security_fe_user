<template>
    <el-dialog title="注册" width="600px" :visible="showRegister" :before-close="handleClose">
        <div class="company-abbrev">L<span class="other-color">x</span>SMP</div>
        <el-form label-width="80px" :model="form" :rules="rules" ref="formName">
            <el-form-item label="账号" placeholder="请输入账号" prop="account">
                <el-input v-model="form.account"></el-input>
                <p class="tip">请输入11位手机号码</p>
            </el-form-item>
            <el-form-item label="密码" placeholder="请输入密码" prop="password">
                <el-input v-model="form.password" show-password></el-input>
                <p class="tip">请输入8-16位字母数字组合</p>
            </el-form-item>
            <el-form-item label="确认密码" placeholder="请再次输入密码" prop="checkPassword">
                <el-input v-model="form.checkPassword" show-password></el-input>
                <p class="tip">请输入8-16位字母数字组合</p>
            </el-form-item>
        </el-form>
        <p class="err">{{ err }}</p>
        <div class="register-bottom">
            <el-button type="primary" @click="register"  v-loading.fullscreen.lock="fullscreenLoading">立即注册</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
        </span>
    </el-dialog>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>