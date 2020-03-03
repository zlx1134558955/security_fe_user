<template>
    <el-dialog :title="title" width="600px" :visible="dialogShow" :before-close="handleClose"
        :close-on-click-modal="false">
        <el-scrollbar style="height: 500px">
            <el-form label-width="220px" :model="form" :rules="rules" ref="formName">
                <el-form-item label="礼品名称" prop="title" class="gift-name">
                    <el-input v-model="form.title" placeholder="请输入礼品名称"></el-input>
                </el-form-item>
                <el-form-item label="礼品价格" prop="title">
                    <el-input-number v-model="form.price" :min="1" label="安全点"></el-input-number>
                </el-form-item>
                <el-form-item label="礼品库存" prop="stock">
                    <el-input-number v-model="form.stock" :min="1" label="个"></el-input-number>
                </el-form-item>
                <el-form-item label="礼品类别" prop="gift_category">
                    <el-select v-model="form.gift_category" placeholder="请选择是否上架">
                        <el-option v-for="item in cateList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否上架" prop="visible">
                    <el-select v-model="form.visible" placeholder="请选择是否上架">
                        <el-option label="上架" :value="1"></el-option>
                        <el-option label="下架" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="礼品图片">
                    <div>
                        <img :src="image_url" alt="礼品图片" class="gift-img">
                        <el-upload class="upload-demo" action="/" :http-request="uploadImage" :show-file-list="false"
                            accept=".jpg,.jpeg,.png,.gif,.bmp,.webp">
                            <el-button size="small">上传礼品图片</el-button>
                            <div slot="tip" class="el-upload__tip">支持.jpg、.jpeg、.png、.gif、.bmp、.webp文件，限制大小为2M以内</div>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item label="礼品详情">
                    <el-input type="textarea" v-model="form.detail" :rows="5"></el-input>
                </el-form-item>
            </el-form>
        </el-scrollbar>
        <p class="err">{{ err }}</p>
        <div class="login-bottom">
            <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" size="mini" @click="saveGift">保存
            </el-button>
        </div>
        <span slot="footer" class="dialog-footer">
        </span>
    </el-dialog>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>