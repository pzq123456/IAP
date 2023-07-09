<template>
<div class="container">
    <el-form :model="form" label-width="50px">
        <el-form-item label="username">
            <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">login</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.container{
    position: relative;
    width: 400px;
    height: 470px;
    background: #eaeaea;
    padding: 50px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
}
</style>