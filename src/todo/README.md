### 搭配react-redux使用
#### 展示组件
只定义外观并不关心数据来源和如何改变

#### 容器组件
描述如何运行（数据获取、状态更新）
直接使用 Redux
监听 Redux state
向 Redux 派发 actions
通常由 React Redux 生成

#### connect()
用于从 UI 组件生成容器组件
```
import { connect } from 'react-redux'
const VisibleTodoList = connect(
  mapStateToProps, // 1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
  mapDispatchToProps // 2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
)(TodoList);
```

#### <Provider> 组件
让容器组件拿到state 利用ßcontext属性
