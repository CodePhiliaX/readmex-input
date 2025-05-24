import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts', // 入口文件
      name: 'ReadmexInput', // 库的全局变量名
      fileName: (format) => `readmex-input.${format}.js`, // 输出文件名
      formats: ['es', 'umd'], // 输出格式
    },
    rollupOptions: {
      external: [], // 指定外部依赖
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist', // 修改为 dist 目录
      include: ['src/**/*.ts'], // 包含所有 TypeScript 文件
    }),
  ],
});
