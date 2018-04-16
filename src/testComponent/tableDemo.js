import React, {Component} from 'react'
import { Table, Icon } from 'antd';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
        <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider"></span>
      <a href="#">操作二</a>
      <span className="ant-divider"></span>
      <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
      </a>
    </span>
    )
}];
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: "2222"
    });
}

class TableDemo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Table columns={columns} dataSource={data}  pagination={false}/>
    }
}
export default  TableDemo