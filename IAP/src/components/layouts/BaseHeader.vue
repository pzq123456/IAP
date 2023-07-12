<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">智慧景区管理系统</el-menu-item>
    <el-sub-menu index="2">
      <template #title>功能视图</template>
      <el-menu-item index="2-1">二维地图编辑视图</el-menu-item>
      <el-menu-item index="2-2">三维地图查看</el-menu-item>
      <el-menu-item index="2-3">数据图标视图</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>分析视图</template>
        <el-menu-item index="2-4-1">一般矢量分析</el-menu-item>
        <el-menu-item index="2-4-2">DEM 底形分析</el-menu-item>
        <el-menu-item index="2-4-3">统计信息可视化与分析</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
