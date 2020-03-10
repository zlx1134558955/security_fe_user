<template>
  <div>
    <!-- 图片上传组件辅助-->
    <el-upload class="avatar-uploader" action="/" :http-request="insertImg" name="img" :show-file-list="false"
      accept=".jpg,.jpeg,.png,.gif,.bmp,.webp"></el-upload>

    <quill-editor class="editor" v-model="content" ref="myQuillEditor" :options="editorOption"
      @change="onEditorChange($event)"></quill-editor>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.scss"></style>