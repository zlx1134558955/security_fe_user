<template>
    <div>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<style scoped lang="scss">
    .el-header,
    .el-footer {
        width: 100%;
        color: #303133;
        text-align: center;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #303133;
        text-align: center;
        line-height: 160px;
    }

    body>.el-container {
        margin-bottom: 40px;
    }
</style>
<script>
    import Header from '@/routes/user/layout/header/index.vue'
    export default {
        components: {
            Header
        }
    }
</script>