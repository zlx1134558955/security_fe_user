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
                <el-table :data="list" max-height="400" style="width: 99%" border>
                    <el-table-column prop="time" label="提交时间" width="180">
                        <template slot-scope="scoped">
                            <span>{{ scoped.row.time | timeFormat('yyyy-MM-dd') }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="漏洞名称" width="400">
                        <template slot-scope="scoped">
                            <span class="post-title" @click="jumpDetail(scoped.row.id)">{{ scoped.row.title }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="type" label="提交状态">
                        <template slot-scope="scoped">
                            <span>{{ map.post_status[scoped.row.type] }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="score" label="积分">
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>