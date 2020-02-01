<template>
    <div class="content">
        <div class="baseInfo" v-show="show">
            <div class="base-box">
                <div class="top">
                    <h3 class="title">基本信息</h3>
                    <el-button plain @click="toUpdate">修改个人信息</el-button>
                </div>
                <div class="info-box">
                    <div class="avatar">
                        <p>头像</p>
                        <img :src="avatar_url" alt="头像" class="avatar-img">
                    </div>
                    <ul class="info-ul">
                        <li>昵称：{{ userInfo.username }}</li>
                        <li>真实姓名: {{ userInfo.realname }}</li>
                        <li>团队：{{ userInfo.team }}</li>
                        <li>邮箱：{{ userInfo.email }}</li>
                        <li>QQ号：{{ userInfo.qqnumber }}</li>
                        <li>微信：{{ userInfo.wechat }}</li>
                        <li>移动电话：{{ userInfo.tel }}</li>
                        <li>个人网站：{{ userInfo.website }}</li>
                        <li>个性签名：{{ userInfo.description }}</li>
                    </ul>
                </div>
                <el-divider></el-divider>
            </div>
        </div>
        <div class="update-baseInfo" v-show="!show">
            <div class="top">
                <h3 class="title">修改基本信息</h3>
                <el-button plain @click="saveInfo">保存个人信息</el-button>
            </div>
            <el-form :model="userInfo" label-width="80px">
                <el-form-item label="头像" class="avatar-item">
                    <img :src="avatar_url" alt="头像" class="avatar-img">
                    <el-upload class="upload-demo" action="/" :http-request="setAvatar" :file-list="file"
                            :limit="1" accept=".jpg,.jpeg,.png,.gif,.bmp,.webp">
                            <el-button size="small">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">支持.jpg、.jpeg、.png、.gif、.bmp、.webp文件</div>
                        </el-upload>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="userInfo.realname"></el-input>
                </el-form-item>
                <el-form-item label="团队">
                    <el-input v-model="userInfo.team"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="userInfo.email"></el-input>
                </el-form-item>
                <el-form-item label="QQ号">
                    <el-input v-model="userInfo.qqnumber"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input v-model="userInfo.wechat"></el-input>
                </el-form-item>
                <el-form-item label="移动电话">
                    <el-input v-model="userInfo.tel"></el-input>
                </el-form-item>
                <el-form-item label="个人网站">
                    <el-input v-model="userInfo.website"></el-input>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input type="textarea" v-model="userInfo.description" resize="none"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>