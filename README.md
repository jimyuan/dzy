# 大智运
利用 vuejs 重构。

## Build Setup

``` bash
# install dependencies
# 安装依赖（仅首次运行需执行）
cnpm install

# serve with hot reload at localhost:8080
# 默认在 8080 端口开启热加载 web server
npm start

# build for production with minification
# 编译成生成环境所需代码
npm run build

# build for production and view the bundle analyzer report
# 生成编译打包分析报告
npm run build --report
```

## Additional
本项目若要完整运行，需在后台独立开启 API Server，这里写了一个简单的 Mock，供模拟测试用；Mock 项目地址：`ssh://git@10.66.1.168:10022/fe/api-mocker.git`，运行：

``` bash
# install dependencies
# 安装依赖（仅首次运行需执行）
cnpm install

# 启动 Mock Server
node mock/demo
```

## Browse
在开发状态下，当你用 `npm start` 命令启动项目时，就可以在 <http://0.0.0.0:8080/> 下浏览及调试项目了。

在执行完 `npm run build` 后，webpack 在 dist 目录下编译生成了一个生产环境下的最终代码，此时也可以利用启动的 webserver 在 <http://0.0.0.0:8080/dist> 下对编译完的代码进行查看检测。
