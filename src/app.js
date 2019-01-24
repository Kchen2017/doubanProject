import React,{Component} from "react"
import {HashRouter as Router, Route, Link} from "react-router-dom"
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
const {
    Header, Footer,  Content,
  } = Layout;

import IndexComponent from "./components/indexComponent.js"
import MovieComponent from "./components/movieComponent.js"
import TVserieComponent from "./components/tvSeriesComponent.js"

export default class App extends Component {
    render(){
        return <Router>
            <Layout  style={{height: "100%"}}>
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', margin: "0 0 0 20px" }} >
                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/TVseries">电视剧</Link></Menu.Item>
                </Menu>
                </Header>
                <Content style={{ backgroundColor: "#fff", position: "relative", height:"100%"}}>
                    <Route path="/" exact component={IndexComponent}></Route>
                    <Route path="/movie" component={MovieComponent}></Route>
                    <Route path="/TVseries" component={TVserieComponent}></Route>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                        北京组个局科技有限公司 ©2019 Created by Kchen
                </Footer>
            </Layout>
        </Router>
    }
}