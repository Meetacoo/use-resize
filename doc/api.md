const ref = useResize(callback, options);

注意：返回的ref必须传给一个dom的ref

| 属性名      | 说明                                                            | 类型       | 默认值                              |
|----------|---------------------------------------------------------------|----------|----------------------------------|
| callback | 页面尺寸发生变化时执行的回调                                                | function |                                  |
| options  | 选填参数，isDebounce 是否使用防抖函数，否则使用节流，在 time 毫秒内最多执行 callback 一次的函数 | object   | { time: 500, isDebounce: false } |
