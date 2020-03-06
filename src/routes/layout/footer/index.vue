<template>
    <div class="footer">
        <div class="footer-content">
            <div class="contact">
                <div class="item">
                    <img src="Public/svg/email.svg" alt="email" height="20" width="20">
                    <el-tooltip effect="dark" :content="email" placement="top">
                        <p>专用邮箱</p>
                    </el-tooltip>
                </div>
                <div class="item">
                    <img src="Public/svg/qq.svg" alt="qq" height="20" width="20">
                    <el-tooltip effect="dark" :content="qq" placement="top">
                        <p>企鹅QQ</p>
                    </el-tooltip>
                </div>
                <div class="item">
                    <img src="Public/svg/weibo.svg" alt="weibo" height="20" width="20">
                    <el-tooltip effect="dark" :content="weibo" placement="top">
                        <p>新浪微博</p>
                    </el-tooltip>
                </div>
                <div class="item weixin">
                    <img src="Public/svg/weixin.svg" alt="weixin" height="20" width="20">
                    <el-popover placement="top" width="150" trigger="hover">
                        <div>
                            <img :src="wechat_url" alt="公众号" width="150">
                            <p>扫一扫关注公众号</p>
                        </div>
                        <p slot="reference">微信公众号</p>
                    </el-popover>
                </div>
            </div>
            <ul>
                <li>关于我们</li>
                <li>加入我们</li>
                <li>广告服务</li>
                <li>联系方式</li>
                <li>服务条款</li>
                <li>相关社区</li>
                <li>更多讨论</li>
            </ul>
            <p>Copyright © 2020 Lixiang All Rights Reserved. 理想版权所有</p>
        </div>
    </div>
</template>
<style scoped lang="scss" src='./index.scss'></style>
<script src="./index.js"></script>