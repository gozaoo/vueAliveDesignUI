import { createApp } from 'vue'
import App from './App.vue'
import registerComponents from './components';

const app = createApp(App);

// 注册所有组件
registerComponents(app).then(() => {
  // 所有组件注册完毕后，挂载根实例
  app.mount('#app');
});
