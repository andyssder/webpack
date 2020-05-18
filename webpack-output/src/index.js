import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('buttton');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里, 然后弹出提示, 控制台有输出';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

document.body.appendChild(component());