import React, {Component} from "react"
import {Route, Link, Redirect} from "react-router-dom"

import { Layout, Menu} from 'antd';

const {
  Sider,  Content
} = Layout;

import MovieList from "./movieList"
export default class MovieComponent extends Component {
    render(){
        return <div>
            <Layout style={{position: "absolute", height: "100%"}}>
                <Sider
                    style={{padding: "20px 0 0 0"}}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span className="nav-text"><Link to="/movie/in_theaters">热映</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span className="nav-text"><Link to="/movie/coming_soon">即将上映</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span className="nav-text"><Link to="/movie/top250">Top 250</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
                        <Route path="/movie/:type" exact component={ MovieList }></Route>
                        {/* <Redirect to="/movie/hot"></Redirect> */}
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}