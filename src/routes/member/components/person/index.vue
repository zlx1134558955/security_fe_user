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
      <div class="address-box">
        <div class="top">
          <h3 class="title">地址管理</h3>
        </div>
        <ul class="address-ul">
          <li v-for="(item, index) in addressList" :key="index">
            <el-card shadow="hover" class="edit-address">
              <div class="edit-btn-box">
                <el-tag v-if="item.id === defaultId" size="mini">默认地址</el-tag>
                <i class="el-icon-edit edit-btn" @click="editAddress(item)" title="编辑"></i>
                <i class="el-icon-delete delete-btn" @click="openDelete(item.id)" title="删除"></i>
              </div>
              <div class="accept">
                <p>收件人：{{ item.realname }}</p>
                <p>手机号：{{ item.mobile }}</p>
              </div>
              <p>邮编：{{ item.zipcode }}</p>
              <p class="adetail">详细地址：{{ item.adetail }}</p>
            </el-card>
          </li>
          <li @click="editAddress()">
            <el-card shadow="hover" class="add-address-card">
              <i class="el-icon-circle-plus-outline"></i>
              <span>添加收件地址</span>
            </el-card>
          </li>
        </ul>
      </div>
    </div>
    <div class="update-baseInfo" v-show="!show">
      <div class="top">
        <h3 class="title">修改基本信息</h3>
        <el-button plain @click="saveInfo">保存个人信息</el-button>
      </div>
      <el-form :model="userInfo" label-width="80px" :rules="rules" ref="userInfo">
        <el-form-item label="头像" class="avatar-item">
          <img :src="avatar_url" alt="头像" class="avatar-img">
          <el-upload class="upload-demo" action="/" :http-request="setAvatar" :file-list="file" :show-file-list="false"
            :on-change="handleChange" accept=".jpg,.jpeg,.png,.gif,.bmp,.webp">
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">支持.jpg、.jpeg、.png、.gif、.bmp、.webp文件，限制大小为2M以内</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" prop="username">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="userInfo.realname"></el-input>
        </el-form-item>
        <el-form-item label="团队" prop="team">
          <el-input v-model="userInfo.team"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="QQ号" prop="qqnumber">
          <el-input v-model="userInfo.qqnumber"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="wechat">
          <el-input v-model="userInfo.wechat"></el-input>
        </el-form-item>
        <el-form-item label="移动电话" prop="tel">
          <el-input v-model="userInfo.tel"></el-input>
        </el-form-item>
        <el-form-item label="个人网站" prop="website">
          <el-input v-model="userInfo.website"></el-input>
        </el-form-item>
        <el-form-item label="个性签名" prop="description">
          <el-input type="textarea" v-model="userInfo.description" resize="none"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <AddressForm :showAdd="showAddressForm" @close="closeAddressForm" :userid='userInfo.id' @getList="getAddressList"
      :address="address"></AddressForm>
    <el-dialog title="提示" :visible.sync="showDelete" width="400px" center>
      <span>确定要删除该地址吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDelete = false">取 消</el-button>
        <el-button type="primary" @click="deleteAddress">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>