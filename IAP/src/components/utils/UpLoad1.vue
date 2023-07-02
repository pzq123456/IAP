<template>
    <h1>图片上传测试组件</h1>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="picture"
    >
      <el-button type="primary"> 点我上传 </el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png 格式的图片 大小需小于 500kb
        </div>
      </template>
    </el-upload>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  import type { UploadProps, UploadUserFile } from 'element-plus'
  
  const fileList = ref<UploadUserFile[]>([])
  
  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
  }
  
  const handlePreview: UploadProps['onPreview'] = (file) => {
    console.log(file)
  }
  </script>