<template>
    <div class="content">
        <div>
            <p class="little-title">基本信息</p>
            <p>漏洞名称：{{ detail.title }}</p>
            <p>提交时间：{{ detail.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</p>
            <p>漏洞类型：{{ getCateName(detail.cate_id) }}</p>
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
            <p class="little-title">审核状态</p>
            <p>当前状态：{{ map.post_status[detail.status] }}</p>
            <el-button v-if="detail.status===3" type="primary" size="mini" @click.once="reviewPost(4)" class="button-top">标记为已修复</el-button>
            <el-button v-if="detail.status===4" type="primary" size="mini" @click.once="reviewPost(5)" class="button-top">标记为已完成</el-button>
        </div>
        <el-divider v-if="detail.status===1"></el-divider>
        <div v-if="detail.status===1">
            <p class="little-title">审批</p>
            <div class="advise-box">
                <span>审批意见：</span>
                <el-radio v-model="advise" :label="2">忽略该报告</el-radio>
                <el-radio v-model="advise" :label="3">确认为漏洞</el-radio>
            </div>
            <div class="rank-box" v-show="advise===3">
                <span>漏洞等级：</span>
                <el-radio v-model="detail.rank" :label="1">无影响</el-radio>
                <el-radio v-model="detail.rank" :label="2">低危</el-radio>
                <el-radio v-model="detail.rank" :label="3">中危</el-radio>
                <el-radio v-model="detail.rank" :label="4">高危</el-radio>
            </div>
            <div class="rank-box" v-show="advise===3">
                <span>奖励积分：</span>
                <el-input-number v-model="detail.score" :step="1" size="mini"></el-input-number>
            </div>
            <div class="rank-box" v-show="advise===3">
                <span>奖励安全点：</span>
                <el-input-number v-model="detail.points" :step="1" size="mini"></el-input-number>
            </div>
            <div class="reason-box">
                <span>审批理由：</span>
                <el-input type="textarea" :rows="3" placeholder="请输入理由" v-model="reason" class="reason">
                </el-input>
            </div>
            <el-button type="primary" size="mini" @click.once="reviewPost(advise)">提交审核意见</el-button>
        </div>
        <div v-if="detail.status!==1">
            <el-divider></el-divider>
            <div>
                <p class="little-title">危害等级</p>
                <p>危害等级：{{ map.rankLevel[detail.rank] }}</p>
            </div>
            <el-divider></el-divider>
            <div>
                <p class="little-title">奖励评定</p>
                <p>获得安全点：{{ detail.points }}</p>
                <p>获得积分：{{ detail.score }}</p>
            </div>
        </div>
        <el-divider></el-divider>
        <div>
            <p class="little-title">状态变更详情</p>
            <div class="table">
                <el-table :data="postState" style="width: 400px" border>
                    <el-table-column prop="time" label="变更时间" width="200">
                        <template slot-scope="scoped">
                            <span>{{ scoped.row.time | timeFormat('yyyy-MM-dd hh:mm:ss') }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="变更状态">
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