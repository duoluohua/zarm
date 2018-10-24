(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{382:function(n,e,r){"use strict";r.r(e);var a=r(3),t=r.n(a),s=r(4),o=r.n(s),c=r(2),i=r.n(c),l=r(5),u=r.n(l),d=function(n){function e(){var n,a,s,c;o()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return a=s=i()(this,(n=e.__proto__||t()(e)).call.apply(n,[this].concat(u))),s.document=function(){return{document:r(429),className:"message-page"}},c=a,i()(s,c)}return u()(e,n),e}(r(399).a);e.default=d},399:function(n,e,r){"use strict";var a=r(3),t=r.n(a),s=r(4),o=r.n(s),c=r(6),i=r.n(c),l=r(2),u=r.n(l),d=r(5),m=r.n(d),g=r(0),p=r.n(g),h=r(400),f=r.n(h),v=r(401),M=r.n(v),b=(r(402),function(n){function e(){return o()(this,e),u()(this,(e.__proto__||t()(e)).apply(this,arguments))}return m()(e,n),i()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,r=n.className;if("string"==typeof e){var a=new f.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},a.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!M.a.getLanguage(e))?M.a.highlight(e,n).value:n)+"</code></pre>"};var t=f()(e,{renderer:a});return p.a.createElement("div",{className:r,dangerouslySetInnerHTML:{__html:t}})}return p.a.createElement("span",null)}}]),e}(g.Component));e.a=b},429:function(n,e){n.exports="## 消息 Message\n\n\n\n### 基本用法\n```jsx\nimport { Message, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message>普通</Message>\n        <Message theme=\"error\">自定义主题</Message>\n        <Message icon={<Icon type=\"wrong-round\" />}>自定义图标</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 可操作\n```jsx\nimport { Message } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message hasArrow onClick={() => alert('click this message!')}>链接样式的</Message>\n        <Message hasClosable>可关闭的</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'primary' | 主题，可选值 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| icon | ReactNode | - | 设置图标 |\n| hasClosable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"}}]);