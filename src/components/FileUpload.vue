<template>
  <div class="file-upload">
    <h3>上传文件</h3>
    <label class="upload-btn">
      选择文件
      <input type="file" @change="handleFileUpload" />
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoading } from '@/composables/useLoading';
const { loading } = useLoading();
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);
  loading.value = true;
  try {
    const response = await fetch('http://127.0.0.1:10005/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert(`文件 ${file.name} 上传成功！`);
    } else {
      alert(`上传失败：${await response.text()}`);
    }
  } catch (error) {
    alert(`上传出错：${error.message}`);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.upload-btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.upload-btn input {
  display: none;
}
</style>
