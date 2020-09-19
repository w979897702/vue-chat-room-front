<template>
  <form class="login-form" @submit.prevent="handleRegister">
    <div>注册</div>
    <div class="input-wrapper">
      <label for="name">用户名：</label><input v-model="name" type="text" required autocomplete="off" />
    </div>
    <div class="input-wrapper">
      <label for="password">密码：</label><input required v-model="password" type="password" />
    </div>
    <div class="button-wrapper">
      <button type="submit">注册</button>
      <router-link to="/login">
        <button>去登录</button>
      </router-link>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Axios from 'axios';
export default defineComponent({
  name: 'Register',
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    async handleRegister(e: any) {
      let obj = { name: this.name, password: this.password };
      let res = await Axios.post('user/register', obj);
      if (!res.data.err) {
        alert('注册成功');
      } else {
        alert(res.data.err);
      }
    },
  },
});
</script>
<style lang="scss">
.login-form {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .input-wrapper {
    display: flex;
    justify-content: space-around;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
