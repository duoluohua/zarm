(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{371:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),a=t(5),l=t.n(a),u=t(2),i=t.n(u),s=t(6),c=t.n(s),d=function(n){function e(){var n,o,a,u;l()(this,e);for(var s=arguments.length,c=Array(s),d=0;d<s;d++)c[d]=arguments[d];return o=a=i()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(c))),a.document=function(){return{document:t(424),className:"input-page"}},u=o,i()(a,u)}return c()(e,n),e}(t(398).a);e.default=d},396:function(n,e,t){},398:function(n,e,t){"use strict";var o=t(390),r=t.n(o),a=t(391),l=t.n(a),u=t(392),i=t.n(u),s=t(4),c=t.n(s),d=t(5),m=t.n(d),p=t(7),h=t.n(p),f=t(2),v=t.n(f),g=t(6),C=t.n(g),y=t(0),x=t.n(y),I=t(55),D=t.n(I),b=t(393),_=t.n(b),N=t(394),w=t(1),M=t.n(w),E=t(400),k=t.n(E),O=(t(405),t(406),t(407),t(408),t(396),function(n){function e(){return m()(this,e),v()(this,(e.__proto__||c()(e)).apply(this,arguments))}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=k()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return x.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(y.Component)),R=O;O.propTypes={onChange:M.a.func,value:M.a.string},O.defaultProps={onChange:function(){},value:""};t(395);var L=function(n){function e(n){m()(this,e);var t=v()(this,(e.__proto__||c()(e)).call(this,n));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&D.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(6),t.e(7),t.e(72)]).then(t.bind(null,549)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,x.a,D.a,n]}}).then(function(t){var o=t.args;t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var r=Object(N.transform)(n,{presets:["es2015","react"]}).code;o.push(r),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return x.a.createElement("div",null,x.a.createElement("h3",null,this.title),x.a.createElement("div",{className:"demo"},x.a.createElement("div",{className:"demo-code"},x.a.createElement("div",{className:"demo-code-editor",ref:function(e){n.code=e},dangerouslySetInnerHTML:{__html:this.description}}),x.a.createElement(R,{value:this.source[2],onChange:function(e){return n.renderSource(e)}}))))}}]),e}(y.Component),S=function(n){function e(n){m()(this,e);var t=v()(this,(e.__proto__||c()(e)).call(this,n));return t.nodeList=[],t.components=new i.a,t.renderer=new _.a.Renderer,t}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){D.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,a=r()(this.components);!(n=(o=a.next()).done);n=!0){var u=o.value,i=l()(u,2),s=i[0],c=i[1],d=document.getElementById(s);this.nodeList.push(d),d instanceof HTMLElement&&D.a.render(c,d)}}catch(n){e=!0,t=n}finally{try{!n&&a.return&&a.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var r=_()(t.replace(/:::\s?api\s?([^]+?):::/g,function(n,e){return e}).replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var r=o.toString(36);return n.components.set(r,x.a.createElement(L,n.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return x.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:r}})}return x.a.createElement("span",null)}}]),e}(x.a.Component);e.a=S},424:function(n,e){n.exports='## 文本框 Input\n\n:::demo 基本用法\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      inputValue: \'\',\n    }\n  }\n  handleInputChange(value) {\n    this.setState({\n      inputValue: value,\n    })\n  }\n  render() {\n    return (\n      <div>\n        <Cell title="单行文本">\n          <Input\n            type="text"\n            placeholder="请输入"\n            value={this.state.inputValue}\n            onChange={this.handleInputChange.bind(this)}\n            />\n        </Cell>\n        <Cell title="多行文本"><Input type="text" rows={3} placeholder="请输入" /></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 输入类型\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      focused: false,\n      number: \'\',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell title="数字">\n          <Input\n            ref={(ref) => { this.manualFocus = ref; }}\n            type="number"\n            placeholder="type is number"\n            value={this.state.number}\n            focused={this.state.focused}\n            onFocus={value => console.log(`onFocus: ${value}`)}\n            onBlur={value => console.log(`onBlur: ${value}`)}\n          />\n        </Cell>\n\n        <Cell title="金额">\n          <Input type="price" placeholder="type is price" />\n        </Cell>\n\n        <Cell title="身份证">\n          <Input type="idcard" placeholder="type is idcard" />\n        </Cell>\n\n        <Cell>\n          <button onClick={() => this.manualFocus.focus()}>click to focus the first input</button>\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 高度自适应\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="多行文本"><Input autoHeight type="text" rows={3} placeholder="写点啥..." /></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 无标签栏\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Input type="text" placeholder="标题" /></Cell>\n        <Cell><Input autoHeight type="text" rows={4} maxLength={200} placeholder="摘要" /></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 显示输入字数\n```jsx\nimport { Input, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Input autoHeight showLength type="text" rows={4} maxLength={200} placeholder="摘要" /></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-input | | 类名前缀 |\n| className | string | | | 追加类名 |\n| type | string | `text` | `text`, `textarea` | 类型 |\n| value | string |  | | 值 |\n| defaultValue | string |  | | 初始值 |\n| disabled | boolean | false | | 是否禁用 |\n| rows | number | | | 多行文本时的显示行数。type为textarea类型时有效。 |\n| autoHeight | boolean | false | | 是否高度自适应 |\n| maxLength | number | | | 输入字数上限 |\n| showLength | boolean | false | | 是否显示输入字数。type为textarea类型时有效。 |\n| clearable | boolean | true | | 是否显示清除按钮。type不为textarea类型时有效。必须为受控组件（属性包含value、onChange）时方可生效。 |\n| onChange | <code>(value: string) => void</code> | noop | \\(value: string\\) | 值变化时触发的回调函数 |\n\n:::\n'}}]);