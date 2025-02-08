<template>
  <div class="file-list">
    <h3>我的文件</h3>
    <ul v-if="files.length > 0">
      <li v-for="file in files" :key="file.id">
        <span>{{ file.name }} ({{ file.size }} KB)</span>
        <button @click="deleteFile(file.id)">删除</button>
      </li>
    </ul>
    <p v-else>没有文件</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { apiRequest } from '@/utils/api';
import { useLoading } from '@/composables/useLoading';
const files = ref([]);
const { loading } = useLoading();

const fetchFiles = async () => {
  const data = await apiRequest('http://127.0.0.1:10005/api/files');
  if (data) files.value = data;
};
const deleteFile = async (fileId) => {
  await apiRequest(`http://127.0.0.1:10005/api/files/${fileId}`, { method: 'DELETE' });
  files.value = files.value.filter(file => file.id !== fileId);
};
onMounted(fetchFiles);
</script>

<style scoped>
.file-list {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #eef;
}

button {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darkred;
}
</style>
