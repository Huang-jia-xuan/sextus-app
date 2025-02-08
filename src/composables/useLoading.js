// src/composables/useLoading.js
import { ref } from 'vue';

const loading = ref(false);

export function useLoading() {
  return { loading };
}
