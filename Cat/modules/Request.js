Cat.define('Jquery',function (e) {
   var $=Cat.Jquery,i='Request',Obj=(function (options) {
       //如果有success就返回执行过程触发
       let headers={Accept: "application/json; charset=utf-8"};
        options.hasOwnProperty('access_token') && (headers['access-token']=options.access_token);
        options.hasOwnProperty('mark')&& (headers['mark']=options.mark);
        $.ajax({
            type: options.hasOwnProperty('Type') ?  options.Type:'POST',
            url: options.Url, //提交地址
            headers:headers,
            dataType: 'json',
            data: JSON.stringify(options.Data),
            contentType:'application/json'
        }).done(function(data){
            if (data.code==3000){
                if (data.hasOwnProperty('url')){
                    if (window != top){//二次登陆判断 防止二次登陆 内层刷新
                        top.location.replace(data['url']);
                    }else {
                        window.location.replace(data['url']);
                    }
                }
            }else{
                options.hasOwnProperty('success') && options.success(data);
            }
        }).fail(function(a, b, c){
            options.hasOwnProperty('success') && options.success({code:a.status,msg:a.statusText});
        });
   });
   e(i,Obj);
});
