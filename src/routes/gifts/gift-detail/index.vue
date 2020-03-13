<template>
  <div>
    <Tip :title="title" :content="desc" :points="points"></Tip>
    <div class="main">
      <div class="content">
        <el-button type="primary" size="mini" @click="back" class="back">返回</el-button>
        <div class="gift-box">
          <div class="gift-img-box">
            <img :src="gift.image" alt="礼品图片" class="gift-img">
          </div>
          <div class="gift-detail-box">
            <h2>{{ gift.title }}</h2>
            <el-scrollbar style="height: 600px">
              <el-collapse accordion>
                <el-collapse-item title="展示礼品详情">
                  <pre>{{ gift.detail }}</pre>
                </el-collapse-item>
              </el-collapse>
              <p>礼品价格：<span class="gift-price">{{ gift.price }}</span> 安全点</p>
              <p>礼品类型：{{ gift.type }}</p>
              <p>礼品库存：{{ gift.stock }}</p>
              <div><span class="num">兑换数量：</span>
                <el-input-number v-model="num" :min="1" :max="gift.stock" label="礼品价格" size="small"></el-input-number>
              </div>
              <p>需要安全点：<span class="gift-price">{{ gift.price * num }}</span></p>
              <el-button type="primary" size="small" class="exchange-btn" @click="exchangeGift">兑换</el-button>
              </el-input-number>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>