# vue-cmp-cli
###### 一个可以创建规范的，可以提交npm官网，基于vue的，创建组件模块的脚手架工具

## 安装

```
npm install -g vue-cmp-cli
```
###### 下载完成之后打开命令行执行：
    vcc -V   //输出版本号即安装成功
###### 可以执行vcc --help查看方法

    -V, --version  output the version number
    -c, create     创建项目
    -h, --help     output usage information
    
## 使用
###### 打开想要创建项目的文件夹执行

```
vcc create //即可生成项目
```

生成项目之后将
进入创建出的项目根目录执行

```
npm init   //初始化完成项目名称以及各个项目
```

初始化项目之后将README.md文件中的json内容剪切到根目录下的package.json中


然后执行

```
npm install
```
一切完成之后就可以在src文件夹下的app.vue中谢您的功能了


您可以执行：

```
npm run dev 

打开http://localhost:8080 测试查看您的组件功能
```

```
npm run build 

打包您的vue组件
```

```
npm publish

//发布您的组件到npm官网，注意：前提是你需要有一个npm账号