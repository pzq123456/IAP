<template>
<div class="container">
    <div class="header-text">
        <h1>Login</h1>
    </div>
    <el-form :model="form"> 
        <el-form-item>
            <el-input v-model="form.username" placeholder="UserName" type="UserName" class="input"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.password" placeholder="Password" type="Password" class="input" show-password></el-input>
        </el-form-item>
        <el-form-item class="submit">
            <el-button type="primary" class="submit-button" @click="onSubmit">Login</el-button>
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
.container {
    border: 1px solid rgba(92, 93, 150, 0.789);
    border-radius: 8px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 560px;
    width: 400px;
    background-color: #e2e2e2;
  }
.header-text {
  font-size: 40px;
  text-align: center;
  color: rgb(94, 108, 125);
  width: 400px;
  height: 200px;
}
.input{

}
.submit {
  padding: 20px 30px 10px 30px;
}
.submit-button:active,
.submit-button:hover {
  border-radius: 20px;
  background-color: #6072be;
}
.submit-button {
    height: 40px;
    width: 100%;
    padding: 10px;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    transition: border 0.6s ease,
    border-radius 0.6s ease,
    background-color 0.2s linear;
    outline: none;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #7486cf;
    background-color: #7486cf;
    display: block;
}
</style>