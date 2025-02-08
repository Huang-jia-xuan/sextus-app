<template>
    <div class="register-container">
      <h2>用户注册</h2>
      <input v-model="username" placeholder="请输入用户名" />
      <input v-model="password" type="password" placeholder="请输入密码" />
      <button @click="register">注册</button>
      <p>已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const register = async () => {
    if (!username.value || !password.value) {
      alert('用户名和密码不能为空');
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:10005/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.value, password: password.value }),
      });
  
      if (response.ok) {
        alert('注册成功！请登录');
        router.push('/login'); // 注册成功后跳转到登录页
      } else {
        alert('注册失败，请换个用户名再试');
      }
    } catch (error) {
      alert(`注册出错：${error.message}`);
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin: 5px;
    padding: 8px;
  }
  button {
    margin-top: 10px;
  }
  </style>
  