<template>
  <div>
    <Tip :title="pageTitle" :content="desc"></Tip>
    <div class="main">
      <div class="content">
        <!-- 顶部过滤栏 -->
        <div class="filt">
          <span>公告标题：</span>
          <el-input v-model="title" placeholder="请输入公告标题" size="mini" @change="getNoticeList"></el-input>
        </div>
        <el-table :data="list" style="width: 99%" height="600">
          <el-table-column prop="title" label="标题" width="250">
          </el-table-column>
          <el-table-column prop="picture" label="封面图片" width="200">
            <template slot-scope="notice">
              <img :src="env.noticeCoverDIR + notice.row.picture" alt="封面图片" class="cover-img" width="100">
            </template>
          </el-table-column>
          <el-table-column prop="content" label="内容" width="350">
            <template slot-scope="notice">
              <p class="notice-detail">{{ notice.row.content }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="250">
            <template slot-scope="notice">
              <span>{{ notice.row.update_time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="操作">
            <template slot-scope="notice">
              <span type="primary" size="mini" class="look" @click="lookDetail(notice.row.id)">查看</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="pageList" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>