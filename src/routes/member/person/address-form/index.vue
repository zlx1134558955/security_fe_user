<template>
  <el-dialog :title="title" width="600px" :visible="showAdd" :before-close="handleClose">
    <el-form label-width="140px" :model="addressForm" :rules="rules" ref="addressForm">
      <el-form-item label="收件人姓名" prop="realname">
        <el-input v-model="addressForm.realname" placeholder="请输入收件人"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="addressForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="邮编" prop="zipcode">
        <el-input v-model="addressForm.zipcode" placeholder="请输入邮编"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="detail">
        <el-input v-model="addressForm.detail" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="是否设为默认地址" prop="default">
        <el-radio v-model="addressForm.default" :label="1">是</el-radio>
        <el-radio v-model="addressForm.default" :label="0">否</el-radio>
      </el-form-item>
    </el-form>
    <p class="err">{{ err }}</p>
    <div class="add-address-bottom">
      <el-button type="primary" @click="addAddress" v-if="!this.addressForm.id">添加</el-button>
      <el-button type="primary" @click="editAddress" v-if="this.addressForm.id">保存</el-button>
      <el-button @click="handleClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>