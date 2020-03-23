<template>
  <div>
    <Tip :title="title" :content="desc" :points="points"></Tip>
    <div class="main">
      <el-tabs v-model="activeCate">
        <el-tab-pane v-for="item in giftCateList" :key="item.id" :label="item.name" :name="item.id.toString()">
          <el-scrollbar style="height: 630px">
            <div class="gift-list">
              <el-card :body-style="{ padding: '0px' }" v-for="item in giftList" :key="item.id" class="gift-card">
                <div class="img-box">
                  <img :src="env.giftDIR + item.image" class="image">
                </div>
                <p class="gift-title">{{ item.title }}</p>
                <p class="gift-price"><span>{{ item.price }}</span> 安全点</p>
                <el-button type="primary" size="mini" @click="lookDetail(item.id)">兑换</el-button>
              </el-card>
            </div>
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>