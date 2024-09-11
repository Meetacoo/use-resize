
# use-resize


### 描述

当ref容器size发生变化时触发callback的react hooks


### 安装

```shell
npm i --save @kne/use-resize
```

### 示例


#### 示例样式

```scss
.container {
  width: 500px;
  background: var(--primary-color-1);
  text-align: center;
  padding: 20px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _UseResize(@kne/current-lib_use-resize),antd(antd)

```jsx
const {default: useResize} = _UseResize;
const {Button} = antd;
const {useState} = React;

const BaseExample = () => {
    const [height, setHeight] = useState(0);
    const ref = useResize((el) => {
        console.log('容器大小发生改变', el);
    });
    return <div className="container" ref={ref}>
        <div style={{
            marginBottom: height
        }}>我是一个容器
        </div>
        <Button onClick={() => {
            setHeight((height) => height + 10);
        }}>增加容器高度</Button>
    </div>;
};

render(<BaseExample/>);

```


### API

### API

const ref = useResize(callback, dom);

注意：返回的ref必须传给一个dom的ref

| 属性名      | 说明                                                           | 类型       | 默认值                              |
|----------|--------------------------------------------------------------|----------|----------------------------------|
| callback | 页面尺寸发生变化时执行的回调                                               | function |                                  |
| options  | 选填参数，isDebounce是否使用防抖函数，否则使用节流，在 time 毫秒内最多执行 callback 一次的函数 | object   | { time: 500, isDebounce: false } |

