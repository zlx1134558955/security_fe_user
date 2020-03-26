<template>
  <div class="content">
    <div>
      <div class="num-box">
        <div class="logo"><i class="el-icon-s-finance"></i></div>
        <p class="info">当前账户：<span class="num">{{ points }}</span>安全点&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="score">{{ score }}</span>积分</p>
      </div>
      <el-divider></el-divider>
      <div class="post-select">
        <el-radio-group v-model="type">
          <el-radio-button :label="1">安全点明细</el-radio-button>
          <el-radio-button :label="2">积分明细</el-radio-button>
        </el-radio-group>
      </div>
      <div class="table">
        <el-table v-show="type===1" :data="points_list" style="width: 99%" border v-my_table_scroll="{height:400}">
          <el-table-column prop="time" label="变动时间" width="180">
            <template slot-scope="scoped">
              <span>{{ scoped.row.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="明细事项">
            <template slot-scope="scoped">
              <span class="post-title">{{ map.points_type[scoped.row.type] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="points" label="安全点数额" width="100" align="center">
            <template slot-scope="scoped">
              <span>{{ map.points_status[scoped.row.status] + scoped.row.points }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-table v-show="type===2" :data="score_list" style="width: 99%" border v-my_table_scroll="{height:400}">
          <el-table-column prop="time" label="变动时间" width="180">
            <template slot-scope="scoped">
              <span>{{ scoped.row.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="明细事项">
            <template slot-scope="scoped">
              <span class="post-title">{{ map.points_type[scoped.row.type] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="points" label="积分数额" width="100" align="center">
            <template slot-scope="scoped">
              <span>+{{ scoped.row.score }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>