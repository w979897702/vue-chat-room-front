declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare interface SocketData {
  type: string;
  user: string;
  msg: string;
  time: number;
  stringTime?: string;
}
