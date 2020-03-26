<template>
  <div class="content">
    <div>
      <div class="num-box">
        <div class="logo"><i class="el-icon-document"></i></div>
        <p class="info">我提交的漏洞<span class="num">{{ num }}</span>个</p>
      </div>
      <el-divider></el-divider>
      <div class="post-select">
        <h2 class="title">提交记录</h2>
      </div>
      <div class="table">
        <el-table :data="list" style="width: 99%" border v-my_table_scroll="{height:400}">
          <el-table-column prop="time" label="提交时间" width="180">
            <template slot-scope="scoped">
              <span>{{ scoped.row.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="漏洞名称">
            <template slot-scope="scoped">
              <span class="post-title" @click="jumpDetail(scoped.row.id)">{{ scoped.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="提交状态" width="100">
            <template slot-scope="scoped">
              <span>{{ map.post_status[scoped.row.status] }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>