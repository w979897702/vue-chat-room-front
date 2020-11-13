<template>
  <div class="chat-room">
    <div class="chat-box" ref="chatBox">
      <div
        v-for="item in msgList"
        :key="item.time"
        :class="item.type == 'join' ? 'join-msg' : item.type == 'right' ? 'right-msg' : 'left-msg'"
      >
        <div v-if="item.type == 'join'">{{ `${item.stringTime}${item.user}加入了聊天室` }}</div>
        <div v-else-if="item.type == 'right'">
          <div>{{ item.msg }}</div>
          <div class="user">{{ item.user }}</div>
        </div>
        <div v-else-if="item.type == 'left'">
          <div class="user">{{ item.user }}</div>
          <div>{{ item.msg }}</div>
        </div>
      </div>
    </div>
    <div class="chat-input-container">
      <textarea type="textarea" rows="8" cols="20" v-model="text" @keyup.enter="sendMsg" />
      <button @click="sendMsg">发送</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive, nextTick } from 'vue';
import { getCookie } from '../utils/cookies';
import { parseDate } from '../utils/Date';
import { url } from '../config/socket';
export default defineComponent({
  name: 'ChatRoom',
  setup() {
    let ws: WebSocket;
    // 发送消息
    let currentUser: string = getCookie('currentUser');
    let text = ref('');
    function sendMsg() {
      if (!text.value) return;
      ws.send(text.value);
      text.value = '';
    }
    //更新视图
    let arr: SocketData[] = [];
    let msgList: any = reactive(arr);
    let chatBox: any = ref(null);
    let addMsg = async (data: SocketData): Promise<void> => {
      msgList.push(data);
      await nextTick();
      chatBox.value.scrollTop = chatBox.value.scrollHeight;
    };
    onMounted(() => {
      ws = new WebSocket(url);
      // 响应onmessage事件:
      ws.onmessage = function(msg: MessageEvent) {
        let data: SocketData = JSON.parse(msg.data);
        data.stringTime = parseDate(data.time);
        if (data.type !== 'join') {
          if (data.user === currentUser) {
            data.type = 'right';
          } else {
            data.type = 'left';
          }
        }
        addMsg(data);
      };
    });
    return {
      text,
      sendMsg,
      msgList,
      currentUser,
      chatBox,
    };
  },
});
</script>
<style lang="scss">
.chat-room {
  width: 500px;
  margin: auto;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
}
.chat-box {
  height: 400px;
  background: #f1f1f1;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  > div {
    height: 50px;
    line-height: 50px;
    margin: 5px;
  }
  .user {
    width: 50px;
    justify-content: center;
    border: 1px solid #000;
    margin: 0 5px;
  }
  .left-msg {
    align-self: flex-start;
    div {
      display: flex;
    }
  }
  .right-msg {
    align-self: flex-end;
    div {
      display: flex;
    }
  }
}
.chat-input-container {
  display: flex;
  height: 100px;
  textarea {
    width: 400px;
    resize: none;
  }
  button {
    flex: 1;
  }
}
</style>
