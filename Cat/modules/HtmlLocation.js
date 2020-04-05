Cat.define(['Jquery','GPS'],function (e) {
    let $=Cat.Jquery,GPS=Cat.GPS,i='HtmlLocation',callback = null,Obj=(function(){MsObj.startLocation();}),MsObj={
        startLocation:function () {
            let that=this;
            if (that.isWeiXin()){
                alert('检测到微信环境，需启动微信环境支持及权限验证！')
            }else {
                alert('非微信内置浏览器即将检测是否支持H5定位')
                if(navigator.geolocation){
                    alert('启动HTml GPS 成功')
                    navigator.geolocation.getCurrentPosition(that.onSuccess , that.onError);
                }else{
                    alert("您的浏览器不支持使用HTML 5来获取地理位置服务");
                }
            }
        },
        isWeiXin:function () {
            let ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            }else {
                return false;
            }
        },
        onSuccess:function (position) {
            alert('纬度: '          + position.coords.latitude          + '\n' +
                '经度: '         + position.coords.longitude         + '\n' +
                '海拔: '          + position.coords.altitude          + '\n' +
                '水平精度: '          + position.coords.accuracy          + '\n' +
                '垂直精度: ' + position.coords.altitudeAccura)
        },
        onError:function () {
            switch(error.code)
            {
                case error.PERMISSION_DENIED:
                    alert("您拒绝对获取地理位置的请求");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("位置信息是不可用的");
                    break;
                case error.TIMEOUT:
                    alert("请求您的地理位置超时");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("未知错误");
                    break;
            }
        }
    };
    e(i,Obj);
});