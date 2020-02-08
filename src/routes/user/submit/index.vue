<template>
    <div>
        <Tip :title="title" :content="desc"></Tip>
        <div class="main">
            <div class="submit-form">
                <el-form :model="form" :rules="rules" label-width="100px" class="demo-ruleForm" ref="form">
                    <el-form-item label="漏洞名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="漏洞类型" prop="type">
                        <el-cascader v-model="form.type" :options="category" :props="{ expandTrigger: 'hover' }"></el-cascader>
                    </el-form-item>
                    <el-form-item label="漏洞详情" prop="content" class="bug-detail">
                        <Editor v-model="form.content"></Editor>
                    </el-form-item>
                    <el-form-item label="上传附件" prop="content" class="upload-attach">
                        <el-upload class="upload-demo" action="/" :http-request="upload"
                            :limit="1" accept=".zip,.rar,.doc,.docx,.7z,.gz,.bz2">
                            <el-button size="small">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">支持.doc、.docx、.zip、.rar、.7z、.gz、.bz2文件，最多同时上传一份</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="用户协议" prop="agree">
                        <el-checkbox-group v-model="form.agree">
                            <el-checkbox label="同意" name="agree">同意<a href="javascript:void(0);" class="agreement"><<理想安全漏洞管理平台使用协议>></a></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="submit">
                        <p class="tip">在漏洞修复之前，请勿向外界传播。</p>
                        <el-button type="primary" size="small" class="submit-btn" @click="submit">提交漏洞</el-button>
                    </div>
                </el-form>
            </div>
            <div class="standards">
                <p class="standards-title">评判标准</p>
                <ul class="standard-list">
                    <li>
                        <p>1.低危漏洞</p>
                        <p>积分1-5，理想币10-50</p>
                    </li>
                    <li>
                        <p>2.中危漏洞</p>
                        <p>积分10-20，理想币100-200</p>
                    </li>
                    <li>
                        <p>3.高危漏洞</p>
                        <p>积分40-80，理想币300-1000</p>
                    </li>
                    <li>
                        <p>4.超危漏洞</p>
                        <p>积分100-300，理想币2000-10000</p>
                    </li>
                    <li>
                        <p>5.更多详情</p>
                        <p>请查看-----</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>