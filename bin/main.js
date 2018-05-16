#!/usr/bin/env node

const program = require('commander');  
const inquirer = require('inquirer');
const create = require('./create.js');
const json = require('../package.json');

console.log('😄😄😄');
program
    .version('V'+json.version)
    .option('-c, create', '创建项目')
    .parse(process.argv)

if (program.create) main();
/**
 * antor ：吴志祥
 * 主函数
 */
function main(){
    console.log('让我来帮你做这些事情吧😄😄😄');
    let questions = {
        type: 'input',
        name: 'componentsName',
        message: '请您输入要创建的vue组件包的名称（name）'
    }
    inquirer.prompt(questions).then(answers => {
        if(answers.componentsName){
            console.log('这个名字真不错，Beautiful gril');
        }else{
            console.log('这个人很懒')
        }
        componentsName = answers.componentsName ? '/'+answers.componentsName :'/vue-package';
        creatArr(componentsName);
    });
}
/**
 * 创建文件夹路径数组
 * 
 * @param {String} path 
 */
function creatArr(path){
    var dirObj = {dirPath:path,type:'dir',child:[
        {dirPath:path+'/dist',type:'dir',child:[]},
        {dirPath:path+'/src',type:'dir',child:[
            {dirPath:path+'/src/static',type:'dir',child:[
                {dirPath:path+'/src/static/style',type:'dir',child:[]},
                {dirPath:path+'/src/static/image',type:'dir',child:[]},
            ]},
            {dirPath:path+'/src/app.vue',type:'app.vue',child:[]},
            {dirPath:path+'/src/main.js',type:'main.js',child:[]},
        ]},
        {dirPath:path+'/.babelrc',type:'.babelrc',child:[]},
        {dirPath:path+'/index.html',type:'index.html',child:[]},
        {dirPath:path+'/.gitignore',type:'.gitignore',child:[]},
        {dirPath:path+'/.npmignore',type:'.npmignore',child:[]},
        {dirPath:path+'/README.md',type:'README.md',child:[]},
        {dirPath:path+'/webpack.config.js',type:'webpack.config.js',child:[]}
    ]}
    create(dirObj);
}
