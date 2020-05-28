// 防止重复,解决的问题：
// 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。
/* import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
); */