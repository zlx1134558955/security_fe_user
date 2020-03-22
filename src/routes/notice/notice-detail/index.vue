<template>
  <div>
    <Tip :title="pageTitle" :content="desc"></Tip>
    <div class="main">
      <div class="content">
        <el-button type="primary" size="mini" @click="back" class="back">返回</el-button>
        <h2 class="notice-title">{{ notice.title }}</h2>
        <p class="time">{{ notice.update_time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</p>
        <el-divider></el-divider>
        <div v-html="notice.content"></div>
        <el-divider></el-divider>
        <p v-if="notice.attachment">附件下载：<p class="attach-name" @click="getAttachment">{{ notice.attachment }}</p>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>