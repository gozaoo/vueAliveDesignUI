// components/index.js
// 使用import.meta.glob批量导入同一目录下的所有.vue组件
const components = import.meta.glob('../components/**/*.vue');

// 创建一个函数来注册所有组件
export default async function registerComponents(app) {
  for (const path in components) {
    const component = await components[path]();
    // 获取组件名，通常我们使用文件名作为组件名
    const componentName = path.split('/').pop().replace(/\.\w+$/, '');
    // 全局注册组件
    app.component(componentName, component.default || component);
  }
}

