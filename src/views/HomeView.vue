<template>
  <div class="home-container">
    <h2>欢迎来到云存储系统</h2>
    <button @click="logout">退出登录</button>

    <FileUpload />
    <FileList />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FileUpload from '@/components/FileUpload.vue';
import FileList from '@/components/FileList.vue';

const router = useRouter();

const logout = () => {
  router.push('/');
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 8px 15px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
