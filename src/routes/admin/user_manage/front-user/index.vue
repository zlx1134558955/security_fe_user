<template>
    <div>
        <div class="filt">
            <span>用户状态：</span>
            <el-select v-model="status" placeholder="请选择用户状态" @change="getFrontUsers">
                <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span class="filt-label">用户账号：</span>
            <el-input v-model="account" placeholder="请输入账号" @change="getFrontUsers"></el-input>
            <span class="filt-label">用户名：</span>
            <el-input v-model="username" placeholder="请输入用户名" @change="getFrontUsers"></el-input>
            <el-button type="primary" @click="getFrontUsers">查询</el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="list" height="800" style="width: 99%" border>
            <el-table-column prop="pid" label="账号" width="180">
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="400">
            </el-table-column>
            <el-table-column prop="points" label="安全点">
            </el-table-column>
            <el-table-column prop="score" label="积分">
            </el-table-column>
            <el-table-column prop="status" label="用户状态">
                <template slot-scope="scoped">
                    <span>{{ map.user_status[scoped.row.status] }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="操作" width="180">
                <template slot-scope="scoped">
                    <el-button type="primary" size="mini" v-if="scoped.row.status === 0"
                        @click="unfreezeFrontUser(scoped.row.id)">解禁</el-button>
                    <el-button type="warning" size="mini" v-if="scoped.row.status === 1"
                        @click="forbidFrontUser(scoped.row.id)">禁用</el-button>
                    <el-button type="danger" size="mini" @click="openDelete(scoped.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination @size-change="getFrontUsers" @current-change="getFrontUsers" :current-page="currentPage"
            :page-sizes="pageList" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
        <el-dialog title="提示" :visible.sync="showDelete" width="400px" center>
            <span>确定要删除该用户吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showDelete = false">取 消</el-button>
                <el-button type="primary" @click="deleteUser">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>