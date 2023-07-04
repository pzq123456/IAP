<template>
    <el-row>
      <el-col
        v-for="(o, index) in 1"
        :key="o"
        :span="8"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-header">
            <span>{{place}}</span>
          </div>
          <img
            src="https://th.bing.com/th/id/R.f880a74659d2d19b6b41f79d540ada7e?rik=Cs%2bV2Eu6M2JbWw&riu=http%3a%2f%2fcn.best-wallpaper.net%2fwallpaper%2f2560x1440%2f1212%2fWinter-snow-capped-mountains-thick-snow-white-world_2560x1440.jpg&ehk=fWbdryLfpuR%2fnDvbKMKVO04k25eX17Xkk6d2FLylMqg%3d&risl=&pid=ImgRaw&r=0"
            class="image"
          />
          <div style="padding: 14px">
            
            <div class="bottom">
              <div id="introduction">{{introduction}}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>

  const place="景点名称";
  const introduction="XX山是一座位于XX省XX市XX县的XX级AAAAA景区，景区面积XX平方公里，海拔XX米，主峰XX米，是XX省最高的山峰。年人流量XX万人次，是XX省最受欢迎的景区之一。本系统将为您提供XX山的天气预报、景区介绍、景区地图、景区相册等服务。欢迎您的到来！";
  </script>
  
  <style>
.card-header {
  display: flex;
  justify-content: space-between;
  height: 30px;
  color: rgb(66, 102, 117);
  letter-spacing:2px;
  text-indent:10px;
  padding: 5px;
  line-height: 30px;
}

  #introduction{
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   
  .image {
    width: 100%;
    display: block;
  }
  </style>
  