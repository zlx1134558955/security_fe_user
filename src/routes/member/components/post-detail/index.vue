<template>
  <div class="content">
    <h2>{{ detail.title }}</h2>
    <div>
      <p class="little-title">基本信息</p>
      <p>提交时间：{{ detail.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</p>
      <p>当前状态：{{ map.post_status[detail.status] }}</p>
      <p>漏洞类型：{{ getCateName(detail.cate_id) }}</p>
      <p>危害等级：{{ map.rankLevel[detail.rank] }}</p>
      <p>获得安全点：{{ detail.points }}</p>
      <p>获得积分：{{ detail.score }}</p>
    </div>
    <el-divider></el-divider>
    <div>
      <p class="little-title">漏洞详情</p>
      <div v-html="detail.content">
      </div>
    </div>
    <el-divider v-if="detail.attachment"></el-divider>
    <div v-if="detail.attachment">
      <p class="little-title">漏洞附件</p>
      <p class="attach-name">{{ detail.attachment }}</p>
      <el-button type="primary" size="mini" @click="getAttachment" class="download-attach">下载附件</el-button>
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