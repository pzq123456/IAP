<template>

      <BMap enableScrollWheelZoom height="100%">
        <BInfoWindow v-model:show="show1" :position="{ lng: 116.404, lat: 39.925 }" title="动态内容">
          <h2>count: {{ count }}</h2>
          <button @click="count += 1">count++</button>
        </BInfoWindow>
      </BMap>

  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    const show1 = ref<boolean>(true)
    const count = ref<number>(1)
  </script>
  
  <style scoped>
    button {
      border-radius: 6px;
      background: #ddd;
      outline: none;
      padding: 1px 5px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .infoWindow-content {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    .infoWindow-content p {
      margin: 0;
      line-height: initial;
    }
  </style>