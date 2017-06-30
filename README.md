# redux

### 安装
`npm install`

### 编译
`npm run build`或 `webpack`

### 启动
`npm run start`

### 动机
**背景**：SPA开发

**原因**：管理不断变化的state，如服务器响应，缓存数据，本地生成尚未持久化到服务器的数据，UI状态如是否显示加载动效或分页器，搜索关键词，被选中的标签等

### 三大原则
* 单一数据源

state被储存在一棵object tree,object tree只存在于唯一一个store中
* state是只读的

唯一改变state的方法是触发action,action是一个用于描述已发生事件的普通对象
* 使用纯函数来执行修改

需要编写reducers，Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。

### 和Flux的关系

**相似点**

将模型的更新逻辑全部集中于一个特定的层（Flux中的store，Redux里的reducer）,不允许程序直接修改数据，通过一个叫“action”的普通对象来对更改进行描述

**不同点**
* Redux并没有dispatcher的概念，它依赖纯函数来替代事件处理器。
* Redux设想你永远不会变动你的数据，可以很好的使用普通对象和数组来管理state，而不是在多个reducer里变动数据，应该在reducer中返回一个新对象来更新state，同时配合object spread或一些库如immutable

### 不需要的场景
* 用户的使用方式非常简单
* 用户之间没有协作
* 不需要与服务器大量交互，也没有使用 WebSocket
* 视图层（View）只从单一来源获取数据

### 需要的场景
* 用户的使用方式复杂
* 不同身份的用户有不同的使用方式（比如普通用户和管理员）
* 多个用户之间可以协作
* 与服务器大量交互，或者使用了WebSocket
* View要从多个来源获取数据

### 考虑的场景
* 某个组件的状态，需要共享
* 某个状态需要在任何地方都可以拿到
* 一个组件需要改变全局状态
* 一个组件需要改变另一个组件的状态
