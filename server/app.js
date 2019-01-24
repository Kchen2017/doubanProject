var express = require('express');
var request = require('request');

var app = express();

// 在Node.js中设置允许跨域请求数据
app.use('*', function (req, res, next) {
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});

// 监听 /getmovielist 这个地址，当用户请求这个地址的时候，就表示用户想要获取电影列表数据！
// 规定，用户请求 /getmovielist 地址的时候，需要传递一个参数，表示要请求数据的类型
// 所以，标准的请求URL地址类似于这样：    /getmovielist?type=in_theaters
// 问题？如何接收URL请求路径中的参数？？？    req.query.****
app.get('/getmovielist', function (req, res) {
    // 获取客户端想要请求的数据类型
    var type = req.query.type;
    // 拼接豆瓣电影数据真实的URL请求地址
    var url = 'https://api.douban.com/v2/movie/' + type;

    // 使用第三方模块 request，来进行数据的请求
    // request(url, function (error, response, body) {
    //     // body 中存放的，就是我们要获取的真实数据
    //     // console.log(body);
    //     res.send(body);
    // });
    
    var jsonObj = require('./datas/' + type + '.js');
    console.log(jsonObj)
    res.send(jsonObj);

    // res.send(type);
});

// 获取电影详细
app.get('/getditail', function (req, res) {
    var id = req.query.id;
    var url = 'https://api.douban.com/v2/movie/subject/' + id;
    request(url, function (error, response, body) {
        // body 中存放的，就是我们要获取的真实数据
        // console.log(body);
        res.send(body);
    });
});

app.listen(3090, function () {
    console.log('server运行在 http://127.0.0.1:3090');
});