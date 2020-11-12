<template>
  <div class="home">
    这是主页
    <div class="button-container">
      <button class="enter-button" v-for="item in list" :key="item.id" @click="goChat">
        进入聊天室{{ item.value }}
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.button-container {
  width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Home',
  setup() {
    let list = ref([
      { id: 1, value: '一' },
      { id: 2, value: '二' },
      { id: 3, value: '三' },
    ]);
    const $router = useRouter();
    function goChat(id: number) {
      $router.push('/chat');
    }
    return {
      list,
      goChat,
    };
  },
});
</script>
