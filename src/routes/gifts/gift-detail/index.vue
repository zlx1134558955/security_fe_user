<template>
  <div>
    <Tip :title="title" :content="desc" :points="points"></Tip>
    <div class="main">
      <div class="content">
        <el-button type="primary" size="mini" @click="back" class="back">返回</el-button>
        <div class="big-box">
          <div class="gift-box">
            <div class="gift-img-box">
              <img :src="gift.image" alt="礼品图片" class="gift-img">
            </div>
            <div class="gift-detail-box">
              <h2>{{ gift.title }}</h2>
              <div class="address" v-show="is_login">
                <div @click="openSelect">
                  <el-card class="box-card address-item" shadow="hover">
                    <p>{{ defaultAddress.realname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ defaultAddress.mobile }}</p>
                    <p>{{ defaultAddress.adetail }}</p>
                  </el-card>
                </div>
              </div>
              <p>礼品价格：<span class="gift-price">{{ gift.price }}</span> 安全点</p>
              <p>礼品类型：{{ giftCateList[gift.type] }}</p>
              <p>礼品库存：{{ gift.stock }}</p>
              <div><span class="num">兑换数量：</span>
                <el-input-number v-model="num" :min="1" :max="gift.stock" label="礼品价格" size="small"></el-input-number>
              </div>
              <p>需要安全点：<span class="gift-price">{{ gift.price * num }}</span></p>
              <el-button type="primary" size="small" class="exchange-btn" @click="exchangeGift">兑换</el-button>
              </el-input-number>
            </div>
          </div>
          <div class="scroll-box">
            <el-collapse accordion>
              <el-collapse-item title="展示礼品详情">
                <el-scrollbar style="height: 250px; padding-bottom: 10px;">
                  <pre>{{ gift.detail }}</pre>
                </el-scrollbar>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>

      </div>
    </div>
    <SelectAddress :showSelectAddress="showSelectAddress" @close="closeSelect" @setDefaultAddress="setDefaultAddress"
      v-if="is_login">
    </SelectAddress>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>