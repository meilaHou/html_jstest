/**
 * Created by Administrator on 2016/6/24.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

        var body = "", jsonStr;
//req.body.data 为 undefined;
    //读取参数流结束后将转化的body字符串解析成 JSON 格式
    if(req.url&&req.url.indexOf("{")){//传送值为json字符串
        try {
            //截取url字符串
            //例:/jsontest?{"name":"servertestview","url":"dfdfdff"}
            body = req.url.split("?")[1];
            //进行url解码
            if(body.indexOf("%")){
                body = decodeURI(body);
            }
           // body = '{"name":"servertestview","url":"dfdfdff"}';//json字符串格式,内部必须为双引号;
            console.log("log::"+body);

            jsonStr = JSON.parse(body);
            console.log("jsonStr:"+jsonStr);
        } catch (err) {
            jsonStr = null;
            // jsonStr =  {'name':'servertestview'};
        }
    }else{//正常get url参数使用
        //var params = url.parse(req.url, true).query;//解释url参数部分name=zzl&email=zzl@sina.com
        jsonStr = {'name': req.query.name,'url':req.url};
    }

    jsonStr ? res.send({"status":"success", "name": jsonStr.name, "url": jsonStr.url}) : res.send({"status":"error"});

    next();
});
router.route('/')
    .post(function(req, res) {
        console.log("post请求");
        if (req.body.data) {
            console.log("能正确解析 json 格式的post参数");
            console.log(req.body.data.name);
            //能正确解析 json 格式的post参数
            res.send({"status": "success", "name": req.body.data.name, "url": req.body.data.url});
        } else {
            //不能正确解析json 格式的post参数
            console.log("不能正确解析json 格式的post参数")
            console.log(req.body);

            var body = '', jsonStr;
             // req.on('data', function (chunk) {
             //     body += chunk; //读取参数流转化为字符串
             //     console.log(body);
             // });
            //{ name: 'servertestview', url: 'helo' },得到的flash客户端请求值,客户端直接传送json格式的字符串;
            console.log( req.body.name);//这里拿到后,可以直接使用,不用再转换操作;

            //字符串转为json对象;
            // body = '{"name":"servertestview","url":"helo"}';
            // try {
            //     jsonStr = JSON.parse(body);
            // } catch (err) {
            //     jsonStr = null;
            // }
            //console.log("jsonStr::"+jsonStr);


             res.send({"status":"success", "name": req.body.name, "url": req.body.url});


            // req.on('end', function () {
            //     //读取参数流结束后将转化的body字符串解析成 JSON 格式
            //     try {
            //         jsonStr = JSON.parse(body);
            //     } catch (err) {
            //         jsonStr = null;
            //     }
            //     console.log("jsonStr::"+jsonStr);
            //     jsonStr ? res.send({"status":"success", "name": jsonStr.data.name, "url": jsonStr.data.url}) : res.send({"status":"error"});
            // });
        }
    })
    .get(function(req, res) {
    });
module.exports = router;
