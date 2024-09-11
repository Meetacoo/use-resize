const {default: useResize} = _UseResize;
const {Button} = antd;
const {useState} = React;

const BaseExample = () => {
    const [height, setHeight] = useState(0);
    const ref = useResize((el) => {
        console.log('容器大小发生改变');
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
