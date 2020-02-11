<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="网站中文名称">
                <el-input v-model="form.site_name_cn"></el-input>
            </el-form-item>
            <el-form-item label="网站英文名称">
                <el-input v-model="form.site_name_en"></el-input>
            </el-form-item>
            <el-form-item label="网站介绍">
                <el-input type="textarea" v-model="form.site_intro" resize="none" :rows="5"></el-input>
            </el-form-item>
            <el-form-item label="网站简称">
                <el-input v-model="form.site_abbrev"></el-input>
            </el-form-item>
            <el-form-item label="关于我们链接">
                <el-input v-model="form.site_about"></el-input>
            </el-form-item>
            <el-form-item label="加入我们链接">
                <el-input v-model="form.site_career"></el-input>
            </el-form-item>
            <el-form-item label="专用邮箱">
                <el-input v-model="form.site_email"></el-input>
            </el-form-item>
            <el-form-item label="企鹅qq">
                <el-input v-model="form.site_qq"></el-input>
            </el-form-item>
            <el-form-item label="新浪微博">
                <el-input v-model="form.site_weibo"></el-input>
            </el-form-item>
            <el-form-item label="微信公众号">
                 <div>
                     <img :src="site_wechat_img" alt="公众号" class="wechat">
                     <el-upload class="upload-demo" action="/" :http-request="setWechat"
                        :show-file-list="false" accept=".jpg,.jpeg,.png,.gif,.bmp,.webp">
                        <el-button size="small">上传公众号二维码</el-button>
                        <div slot="tip" class="el-upload__tip">支持.jpg、.jpeg、.png、.gif、.bmp、.webp文件</div>
                    </el-upload>
                 </div>
            </el-form-item>
        </el-form>
        <el-button type="primary" size="small" class="save-btn" @click="submitSetting">保存设置</el-button>
    </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>