<template>
    <BMap @initd="handleInitd" :zoom="zoom">
      <BControl style="display: flex;" :offset="{ x: 0, y: 0 }">

        <el-button @click="handleZoomOut" type="primary">缩小</el-button>
        <el-button @click="handleZoomIn" type="primary">放大</el-button>

      </BControl>
    </BMap>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    const zoom = ref(10)
    let _map: { getZoom: () => number; }
    function handleInitd({ map }) {
      _map = map
    }
    function handleZoomOut() {
      zoom.value = _map.getZoom() - 1
    }
    function handleZoomIn() {
      zoom.value = _map.getZoom() + 1
    }
  </script>
  
  <style scoped>
  </style>