import React,{ Component } from 'react';
import { Radio,Input,Button,Row, Col,Select ,DatePicker,Layout, Menu, Breadcrumb, Icon ,Table, Divider, Tag} from 'antd';
const { SubMenu } = Menu;
class AntdDEmo extends Component {
	constructor(props){
		super(props)
		this.state={
			loading:false,
			selectedRowKeys:['1'],
			sortedInfo:null
		}
		this.loading=this.loading.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}
	componentWillMount(){
	}
	loading(){
		this.setState({
			loading:true
		})
	}
	handleChange(pagination, filters, sorter){
		console.log(pagination)
		console.log(filters)
		console.log(sorter)
		this.setState({
			sortedInfo:sorter
		})
	}
	render(){
		const ButtonGroup = Button.Group;
		const { Header, Content, Footer, Sider } = Layout;
		const {selectedRowKeys} = this.state
		let { sortedInfo } = this.state
			sortedInfo = sortedInfo || {}
const columns = [{
  title: 'Name',
	dataIndex: 'name',
  key: 'name',
	render: (text,record,index) =>{console.log(text,index) 
		if(index===3){
			return {
				children: text,
				props:{
					colSpan:2,
					className:'red'
				}
			}
		}
	return {
					children: <a style={{textDecoration:'none'}} href="javascript:void(0)">{text}</a>,
					props:{
						className:index !=1&&'red'
					}
					}
// 	return (
// {
// 			children: <a style={{textDecoration:'none'}} href="javascript:void(0)">{text}</a>,
// 			props:{}
// 		})
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  sorter: (a,b)=>a.age-b.age,
//   defaultSortOrder: 'ascend',
// sortOrder为false时，表示不能进行排序，此时table上的onchenge事件的参数sorted的order初始值是descend
sortOrder: sortedInfo.columnKey==='age'&&sortedInfo.order,
render:(text,record,index)=>{
	if(index===3){
		return {
			children:text,
			props:{
				colSpan:0
			}
	}
}
return  text
}
}
, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (record,index) => {
	  console.log(record)
	  return (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  )},
}];

const data = [{
  key: '1',
  name: '1111John Brown',
	age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
  description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},
{
  key: '4',
  name: 'ggggg',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
const rowSelection = {
	// selectedRowKeys:['1'],
	selectedRowKeys,
	onChange: (selectedRowKeys, selectedRows) => {
		const a = selectedRowKeys;
		this.setState({
			selectedRowKeys:a
		})
		console.log(selectedRowKeys)
	  console.log( 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		// checkbox默认的一些属性可以在这设置
	//   disabled: record.name === 'Joe Black', // Column configuration not to be checked
		name:record.name
	}),
  };
		return (
				<div>
				
					<Button type="primary" shape="circle" icon="search" />
					<Button ghost>Ghost</Button>
					<Button onClick={this.loading} type="primary" icon="poweroff" loading={this.state.loading}>
					Loading
					</Button>
					<ButtonGroup>
						<Button>Cancel</Button>
						<Button>OK</Button>
					</ButtonGroup>
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed" ghost>Dashed</Button>
					<Button type="danger" ghost>Danger</Button>
					<Button type="danger">Danger</Button>
					<Row type="flex" >
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={1} lg={{span:3,offset:2}} xl={6} offset="4">
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
					</Row>
					<Layout>
						<Header className="header">
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={['2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
							<Menu.Item key="3">nav 3</Menu.Item>
						</Menu>
						</Header>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
							Content
							</Content>
						</Layout>
  					</Layout>
					  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  <Table rowClassName={(record,index)=>{return index===1&&'green' }} onChange={this.handleChange} expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>} rowSelection={rowSelection} columns={columns} dataSource={data} />
				</div>
			)
	}
}
export default AntdDEmo