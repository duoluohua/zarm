(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{352:function(n,e,o){"use strict";o.r(e);var l=o(3),t=o.n(l),a=o(4),i=o.n(a),s=o(2),d=o.n(s),r=o(5),m=o.n(r),c=function(n){function e(){var n,l,a,s;i()(this,e);for(var r=arguments.length,m=Array(r),c=0;c<r;c++)m[c]=arguments[c];return l=a=d()(this,(n=e.__proto__||t()(e)).call.apply(n,[this].concat(m))),a.document=function(){return{document:o(430),className:"modal-page"}},s=l,d()(a,s)}return m()(e,n),e}(o(403).a);e.default=c},430:function(n,e){n.exports="## 模态框 Modal\n\n\n\n### 基本用法\n```jsx\nimport { Modal, Cell, Button, Select } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      modal1: false,\n      modal2: false,\n      modal3: false,\n      modal4: false,\n      modal5: false,\n      animationType: 'fade',\n    };\n  }\n\n  open(key) {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close(key) {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    const { modal1, modal2, modal3, modal4, modal5, animationType } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal3')}>开启</Button>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal2')}>开启</Button>\n          }\n        >\n          遮罩层可关闭\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal4')}>开启</Button>\n          }\n        >\n          无头部\n        </Cell>\n\n        <Cell\n          title=\"动画效果\"\n          description={\n            <div>\n              <Button size=\"xs\" onClick={() => this.open('modal5')}>开启</Button>\n            </div>\n          }\n        >\n          <Select\n            value={animationType}\n            dataSource={[\n              { value: 'fade', label: '淡出淡入效果(fade)' },\n              { value: 'zoom', label: '缩放效果(zoom)' },\n              { value: 'rotate', label: '旋转效果(rotate)' },\n              { value: 'door', label: '开关门效果(door)' },\n              { value: 'flip', label: '翻转效果(flip)' },\n              { value: 'moveUp', label: '移出移入效果(moveUp)' },\n              { value: 'moveDown', label: '移出移入效果(moveDown)' },\n              { value: 'moveLeft', label: '移出移入效果(moveLeft)' },\n              { value: 'moveRight', label: '移出移入效果(moveRight)' },\n              { value: 'slideUp', label: '滑出滑入效果(slideUp)' },\n              { value: 'slideDown', label: '滑出滑入效果(slideDown)' },\n              { value: 'slideLeft', label: '滑出滑入效果(slideLeft)' },\n              { value: 'slideRight', label: '滑出滑入效果(slideRight)' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                animationType: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n\n        <Modal visible={modal1}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal1')} />\n          <Modal.Body>模态框内容</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal2} onMaskClick={() => this.close('modal2')}>\n          <Modal.Header title=\"标题\" />\n          <Modal.Body>点击遮罩层关闭</Modal.Body>\n        </Modal>\n\n        <Modal shape=\"radius\" visible={modal3}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal3')} />\n          <Modal.Body>模态框内容</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal4} onMaskClick={() => this.close('modal4')}>\n          <Modal.Body>无头部</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal5} animationType={animationType} onMaskClick={() => this.close('modal5')}>\n          <Modal.Body>\n            <div style={{ height: 100 }}>当前使用的动画类型animationType：'{animationType}'</div>\n          </Modal.Body>\n        </Modal>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 特定场景\n```jsx\nimport { Cell, Button, Alert, Confirm  } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      alert: false,\n      confirm: false,\n    };\n  }\n\n  open(key) {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close(key) {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    const { alert, confirm } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" theme=\"warning\" onClick={() => this.open('alert')}>开启</Button>\n          }\n        >\n          警告框 Alert\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" theme=\"warning\" onClick={() => this.open('confirm')}>开启</Button>\n          }\n        >\n          确认框 Confirm\n        </Cell>\n\n        <Alert\n          shape=\"radius\"\n          visible={alert}\n          title=\"警告\"\n          message=\"这里是警告信息\"\n          onCancel={() => this.close('alert')}\n        />\n\n        <Confirm\n          shape=\"radius\"\n          visible={confirm}\n          title=\"确认信息\"\n          message=\"你确定要这样做吗？\"\n          onOk={() => alert('click ok')}\n          onCancel={() => this.close('confirm')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| shape | string | 'rect' | 形状，可选值 `rect`、`radius` |\n| visible | boolean | false | 是否显示 |\n| animationType | string | 'fade' | 动画效果，可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间 |\n| width | string &#124; number | '70%' | 宽度 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n"}}]);