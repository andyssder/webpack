// import { file, parse } from './globals.js';
// import _ from 'lodash';
import 'babel-polyfill';

function component() {
    let element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' '); //用到 _ 变量的模块实例，webpach会将 lodash package 引入进来
    
    // element.innerHTML = join(['Hello', 'webpack'], ' '); // 通过webpack配置，只会获取到 lodash 中提供的 join 方法。

    // 细粒度shim
    // 我们处于 `window` 上下文
    // 当模块运行在 CommonJS 上下文中，这将会变成一个问题，也就是说此时的 this 指向的是 module.exports
    // 通过使用 imports-loader 覆盖 this 指向
    // this.alert('Hmmm, this probably isn\'t a great idea...')

    // globals没有export parse和file通过exports-loader实现
    // parse();
    // alert(file);

    return element;
  }

document.body.appendChild(component());
