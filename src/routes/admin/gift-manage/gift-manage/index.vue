<template>
    <div>
        <!-- 顶部过滤栏 -->
        <div class="btn-box">
            <div class="select-box">
                <div class="category-box">
                    <span>礼品类别：</span>
                    <el-select v-model="form.gift_category" placeholder="请选择礼品类别" size="mini" @change="getGiftsList">
                        <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="visible-box">
                    <span>上架状态：</span>
                    <el-select v-model="form.visible" placeholder="请选择上架状态" size="mini" @change="getGiftsList">
                        <el-option label="全部" :value="-1"></el-option>
                        <el-option label="已上架" :value="1"></el-option>
                        <el-option label="已下架" :value="2"></el-option>
                    </el-select>
                </div>
            </div>
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
            <el-table-column prop="detail" label="礼品详情" width="450">
                <template slot-scope="gift">
                    <div class="gift-detail">{{ gift.row.detail }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="礼品价格" width="160">
            </el-table-column>
            <el-table-column prop="stock" label="礼品库存" width="160">
            </el-table-column>
            <el-table-column prop="redeemed" label="已兑数量" width="160">
            </el-table-column>
            <el-table-column prop="visible" label="上架状态" width="160">
                <template slot-scope="gift">
                    <el-tag type="success" v-if="gift.row.visible === 1">已上架</el-tag>
                    <el-tag type="info" v-if="gift.row.visible === 2">已下架</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="操作">
                    <template slot-scope="gift">
                        <el-button type="primary" size="mini" class="add-btn" @click="editCate(gift.row)">编辑</el-button>
                    </template>
                </el-table-column>
        </el-table>
        <!-- 添加或者编辑礼品子组件 -->
        <EditGift :dialogShow="dialogShow" @close="closeUpdate" :currentGift="currentGift" @getGiftsList="getGiftsList"
            :cateList="cateList"></EditGift>
    </div>
</template>
<style scoped lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>