<template>
    <div>
        <div class="submit-box">
            <div class="computer">
                <h1 class="name">{{ site_abbrev }}</h1>
                <el-button type="primary" plain class="submit-btn" @click="jump">提交漏洞</el-button>
            </div>
            <div class="circle-border"></div>
        </div>
        <div class="notice"></div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>