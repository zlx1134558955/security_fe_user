<template>
  <div>
    <Tip :title="pageTitle" :content="desc"></Tip>
    <div class="main">
      <div class="content">
        <div>
          <el-table :data="list" style="width: 99%" height="600">
            <el-table-column type="index" width="200" label="排名" align="center">
            </el-table-column>
            <el-table-column prop="username" label="用户" width="300">
              <template slot-scope="user">
                <HeadName :avatar="env.headerDIR + user.row.avatar" :name="user.row.username"></HeadName>
              </template>
            </el-table-column>
            <el-table-column prop="team" label="团队" width="300">
            </el-table-column>
            <el-table-column prop="score" label="等级" width="200" align="center">
              <template slot-scope="user">
                <span>{{ getLevel(user.row.score) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="score" label="积分" align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>