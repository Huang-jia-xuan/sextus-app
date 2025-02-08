<template>
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="用户名" required />
        <input type="password" v-model="password" placeholder="密码" required />
        <button type="submit">登录</button>
      </form>
      <p>还没有账号？<router-link to="/register">立即注册</router-link></p>

    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  const test = async () => {
    const response = await fetch('http://127.0.0.1:10004/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username: username.value, password: password.value }),
    });
    const data = await response.json();
  }
  const login = async () => {
  try {
    const response = await fetch('http://127.0.0.1:10004/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // 存储 Token
      alert('登录成功！');
      router.push('/home'); // 跳转到文件列表
    } else {
      
      alert('登录失败，请检查用户名或密码');
    }
  } catch (error) {
    alert(`登录出错：${error.message}`);
  }
};
</script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
  }
  button {
    width: 100%;
    padding: 8px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  