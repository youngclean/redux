# redux

###动机
背景：SPA开发
原因：管理不断变化的state，如服务器响应，缓存数据，本地生成尚未持久化到服务器的数据，UI状态如是否显示加载动效或分页器，搜索关键词，被选中的标签等
###三大原则
>* 单一数据源
state被储存在一棵object tree,object tree只存在于唯一一个store中
>* state是只读的
唯一改变state的方法是触发action,action是一个用于描述已发生事件的普通对象
>* 使用纯函数来执行修改
需要编写reducers，Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。
###和Flux的关系
相似点：将模型的更新逻辑全部集中于一个特定的层（Flux中的store，Redux里的reducer）,不允许程序直接修改数据，通过一个叫“action”的普通对象来对更改进行描述
不同点：
>* Redux并没有dispatcher的概念，它依赖纯函数来替代事件处理器。
>* Redux设想你永远不会变动你的数据，可以很好的使用普通对象和数组来管理state，而不是在多个reducer里变动数据，应该在reducer中返回一个新对象来更新state，同时配合object spread或一些库如immutable
