<template>
  <el-config-provider namespace="ep" >
      <div class="common-layout">
      <el-container style="height: 920px" >
        <el-header>
          <BaseHeader />
        </el-header>
        <el-container style="height: 100%">
          
            <BaseSide />

          <el-main style="height: 100%">
            <router-view />
          </el-main>
        </el-container>
        
      </el-container>
  </div>

  </el-config-provider>
</template>

<script setup lang="ts">

</script>



<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

</style>
