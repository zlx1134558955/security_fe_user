<template>
    <div>
        <div class="btn-box">
            <el-button type="primary" size="mini" class="add-btn" @click="addCate">添加礼品</el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="giftsList" height="780" style="width: 100%" border>
            <el-table-column prop="title" label="礼品名称" width="250">
            </el-table-column>
            <el-table-column prop="price" label="礼品图片" width="160">
                <template slot-scope="gift">
                    <img :src="env.giftDIR + gift.row.image" alt="礼品图片" width="150">
                </template>
            </el-table-column>
            <el-table-column prop="detail" label="礼品详情" width="400">
                <template slot-scope="gift">
                    <div class="gift-detail">{{ gift.row.detail }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="礼品价格" width="150">
            </el-table-column>
            <el-table-column prop="stock" label="礼品库存" width="150">
            </el-table-column>
            <el-table-column prop="redeemed" label="已兑数量" width="150">
            </el-table-column>
            <el-table-column prop="visible" label="上架状态" width="150">
                <template slot-scope="gift">
                    <el-tag type="success" v-if="gift.row.visible === 1">已上架</el-tag>
                    <el-tag type="info" v-if="gift.row.visible === 2">已下架</el-tag>
                </template>
            </el-table-column>
        </el-table>
        <EditGift :dialogShow="dialogShow" @close="closeUpdate" :id="currentId" :currentTitle="currentTitle"></EditGift>
    </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>