<template>
  <div>
    <el-dialog title="请选择收件地址" :visible.sync="showSelectAddress" width="600" :before-close="handleClose">
      <el-scrollbar style="height: 300px">
        <div class="address-box">
          <ul class="address-ul">
            <li v-for="(item, index) in addressList" :key="index">
              <el-card shadow="hover" class="edit-address">
                <div class="edit-btn-box">
                  <el-tag v-if="item.id === defaultId" size="mini">默认地址</el-tag>
                  <i class="el-icon-edit edit-btn" @click="editAddress(item)" title="编辑"></i>
                </div>
                <div @click="setDefaultAddress(item)" class="detail-item">
                  <div class="accept">
                    <p>收件人：{{ item.realname }}</p>
                    <p>手机号：{{ item.mobile }}</p>
                  </div>
                  <p>邮编：{{ item.zipcode }}</p>
                  <p class="detail">详细地址：{{ item.detail }}</p>
                </div>
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
      </el-scrollbar>
    </el-dialog>
    <AddressForm :showAdd="showAddressForm" @close="closeAddressForm" :userid='user_id' @getList="getAddressList"
      :address="address"></AddressForm>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>