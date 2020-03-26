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
        <div>
          <el-table :data="list" style="width: 99%" :show-header="false" height="672">
            <el-table-column prop="title" label="标题">
              <template slot-scope="notice">
                <div class="notice-title-box" @click="lookDetail(notice.row.id)">
                  <HeadName :avatar="env.noticeCoverDIR + notice.row.picture" :name="notice.row.title" :w="20" :h="20">
                  </HeadName>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="update_time" label="更新时间" width="180">
              <template slot-scope="notice">
                <span>{{ notice.row.update_time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
          layout="total, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>