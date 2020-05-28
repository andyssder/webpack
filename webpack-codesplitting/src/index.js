// 防止重复导入的代码

/* import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('buttton');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里, 然后弹出提示, 控制台有输出';

    element.appendChild(btn);

    return element;
  }

document.body.appendChild(component()); */

// 动态导入的代码
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})

// 动态导入的代码优化

// async function getComponent() {
//   var element = document.createElement('div');
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });