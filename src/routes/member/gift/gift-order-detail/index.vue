<template>
  <div class="content">
    <el-button type="primary" size="mini" @click="back" class="back">返回</el-button>
    <div class="top-box">
      <div>
        <img :src="detail.gift.image" alt="礼品图片" class="gift-image">
      </div>
      <div class="right-box">
        <h2>{{ detail.gift.title }}</h2>
        <div>
          <el-collapse accordion>
            <el-collapse-item title="展示礼品详情">
              <pre>{{ detail.gift.detail }}</pre>
            </el-collapse-item>
          </el-collapse>
          <p>礼品兑换数量：{{ detail.num }}</p>
          <p>订单类型：{{ map.gift_type[detail.type] }}</p>
          <p>订单创建时间：{{ detail.create_time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</p>
          <p>订单状态：{{ map.gift_status[detail.status] }}</p>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div>
      <p class="little-title">收货地址</p>
      <p>收货人：{{ detail.name }}</p>
      <p>手机号码：{{ detail.tel }}</p>
      <p>详细地址：{{ detail.address }}</p>
    </div>
    <el-divider></el-divider>
    <div>
      <p class="little-title">订单信息</p>
      <p>快递公司：{{ map.tracking[detail.company] }}</p>
      <p>快递单号：{{ detail.tracking_number }}</p>
      <div class="order-info">订单说明：
        <pre>{{ detail.content }}</pre>
      </div>
    </div>
    <el-divider></el-divider>
    <div>
      <p class="little-title">处理进度</p>
      <el-timeline>
        <el-timeline-item v-for="(step, index) in steps" :key="index" :color="step.color" :timestamp="step.timestamp">
          {{step.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>