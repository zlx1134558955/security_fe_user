<template>
    <el-dialog :title="title" width="600px" :visible="showUpdate" :before-close="handleClose"
        :close-on-click-modal="false">
        <el-form label-width="80px" :model="form" :rules="rules" ref="formName">
            <el-form-item label="漏洞名称" prop="name">
                <el-input v-model="form.name" placeholder="请输入漏洞名称"></el-input>
            </el-form-item>
            <el-form-item label="父级分类" prop="pid">
                <el-select v-model="form.pid" placeholder="请选择父级分类">
                    <el-option v-for="item in parentList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <p class="err">{{ err }}</p>
        <div class="login-bottom">
            <el-button type="primary" @click="login" v-loading.fullscreen.lock="fullscreenLoading">保存</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
        </span>
    </el-dialog>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>