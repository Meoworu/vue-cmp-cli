var path = require('path'); 
var fs = require('fs');
var stat = fs.stat;
/**
 * 
 * 吴志祥
 * @param {Object} obj 
 */
function mackfile(obj){
    switch(obj.type) {
        case 'dir':
            fs.mkdirSync(process.cwd()+obj.dirPath);
            break;
        case 'app.vue':
            copy(joinPath('../templates/app.vue'), process.cwd()+obj.dirPath);
            break;
        case 'main.js':
            copy(joinPath('../templates/main.js'), process.cwd()+obj.dirPath);
            break;
        case 'index.html':
            copy(joinPath('../templates/index.html'), process.cwd()+obj.dirPath);
            break;
        case 'webpack.config.js':
            copy(joinPath('../templates/webpack.config.js'), process.cwd()+obj.dirPath);
            break;
        case '.babelrc':
            copy(joinPath('../templates/.babelrc'), process.cwd()+obj.dirPath);
            break;
            
        case '.npmignore':
            copy(joinPath('../templates/.npmignore'), process.cwd()+obj.dirPath);
            break;
        case '.gitignore':
            copy(joinPath('../templates/.gitignore'), process.cwd()+obj.dirPath);
            break;
        case 'README.md':
            copy(joinPath('../templates/README.md'), process.cwd()+obj.dirPath);
            break;
    }
    if(obj.child.length<=0){
        return ;
    }else{
        for(let i = 0; i < obj.child.length; i++){
            mackfile(obj.child[i]);
        }
    }
    
}
function joinPath(str){
    return path.join(__dirname, str);
}
function copy( _src, _dst ){
    var  readable, writable;
    stat( _src, function( err, st ){
        if( err ){
            throw err;
        }
        // 判断是否为文件
        if( st.isFile() ){
            // 创建读取流
            readable = fs.createReadStream( _src );
            // 创建写入流
            writable = fs.createWriteStream( _dst );
            // 通过管道来传输流
            readable.pipe( writable );
        }
        
    });
};

module.exports =  mackfile ;