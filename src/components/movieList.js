import React, {Component} from "react"

import { Spin, Rate } from 'antd';
import queryDataUtil from './queryDataUtil'

export default class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: props.match.params.type,
            loading: true,
            movieList: []
        }
    }
    componentWillMount(){
        console.log(this.props)
    }

    render(){
        return <div>
            { this.createMounted() }
        </div>
    }

    componentDidMount(){
        queryDataUtil.getMovieList(this.state.type).then((data)=>{
            console.log(data)
            this.setState({
                movieList: data.subjects,
                loading: false
            })
        })
    }

    createMounted=()=>{
        if(this.state.loading){
            return <Spin size="large" />
        }else{
           return <div>
               {  this.state.movieList.map((item, index)=>{
                        return <div className="movie-item" key={index}>
                            <img src={item.images.medium} alt="" width="100" height="140" />
                            <h5>{item.title}</h5>
                            <p><strong>电影类型：</strong>{item.genres.join(',')}</p>
                            <p><strong>上映年份：</strong>{item.year}年</p>
                            <div><strong>评分：</strong><Rate disabled defaultValue={item.rating.average / 2} /></div>
                        </div>
                    })}
           </div>
        }
    }
}