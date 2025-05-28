# readmex-input

# 外部使用方法
- 引入两个资源

 1. ```<script src="https://cdn.chat2db-ai.com/readmex/readmex-input.umd.js"></script>```
 2. ```<link rel="stylesheet" href="https://cdn.chat2db-ai.com/readmex/readmex-input.css">```
- 初始化编辑框

  ```javascript
  ReadmexChat.initReadmexChat({
    token: 'cnblogs'
  });
  ```

# 完整 html 展示

```html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
    <script src="https://cdn.chat2db-ai.com/readmex/readmex-input.umd.js"></script>
    <link rel="stylesheet" href="https://cdn.chat2db-ai.com/readmex/readmex-input.css">
  </head>
  <body>
    <div id="app">
      博客园
    </div>
    <script>
      ReadmexChat.initReadmexChat({
        token: 'cnblogs'
      });
    </script>
  </body>
</html>


```

# 启动该项目浏览demo

1. pnpm i

2. pnpm dev
