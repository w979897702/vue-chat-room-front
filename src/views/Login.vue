<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <div>登录</div>
    <div class="input-wrapper">
      <label for="username">用户名：</label><input required v-model="name" type="text" autocomplete="off" />
    </div>
    <div class="input-wrapper">
      <label for="password">密码：</label><input required v-model="password" type="password" />
    </div>
    <div class="button-wrapper">
      <button type="submit">登录</button>
      <router-link to="/register">
        <button>去注册</button>
      </router-link>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { setCookie } from '../utils/cookies';
import Axios from 'axios';
export default defineComponent({
  name: 'Login',
  setup() {
    let name = ref('');
    let password = ref('');
    const $router = useRouter();
    async function handleLogin() {
      let obj = { name: name.value, password: password.value };
      let res = await Axios.post('user/login', obj);
      if (!res.data.err) {
        alert('登录成功');
        setCookie('currentUser', name.value);
        $router.push('/home');
      } else {
        alert(res.data.err);
      }
    }
    return {
      name,
      password,
      handleLogin,
    };
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
