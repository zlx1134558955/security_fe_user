<template>
  <div class="footer">
    <div class="footer-content">
      <div class="contact">
        <div class="item">
          <img :src="dir + '/email.svg'" alt="email" height="20" width="20">
          <a :href="'mailto:' + email" class="connect">专用邮箱</a>
        </div>
        <div class="item">
          <img :src="dir + '/qq.svg'" alt="qq" height="20" width="20">
          <a class="connect"
            :href="'tencent://message/?uin=' + qq +'&Menu=yes& Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45'">企鹅QQ</a>
        </div>
        <div class="item">
          <img :src="dir + '/weibo.svg'" alt="weibo" height="20" width="20">
          <p @click="toWeibo">新浪微博</p>
        </div>
        <div class="item weixin">
          <img :src="dir + '/weixin.svg'" alt="weixin" height="20" width="20">
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