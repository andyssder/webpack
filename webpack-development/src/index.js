import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('buttton');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里, 然后弹出提示, 控制台有输出';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}