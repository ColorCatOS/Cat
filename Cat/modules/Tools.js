Cat.define('Jquery',function (e){
    var $=Cat.Jquery,i='Tools',Obj={
        MousePointerDown:function(options){
            var isDown=false,startPageX=null,startPageY=null,stopPageX=null,stopPageY=null,info ={},Obj =  typeof options.elem =='object'? options.elem:$(options.elem),
                maxPageX,minPageX,maxPageY,minPageY;
            if (Obj[0].addEventListener) { //兼容ie8以上浏览器
                Obj[0].addEventListener('mousedown',  MouseDown, false);
            } else if (Obj[0].attachEvent) { //兼容ie8以下浏览器
                Obj[0].attachEvent('onmousedown',MouseDown,false);
            }
            function MouseDown(event){ //鼠标按下执行
                var event = event || window.event;
                event.preventDefault();event.stopPropagation();//防止默认拖动事件等事件干扰
                if (document.addEventListener) { //兼容ie8以上浏览器
                    document.addEventListener('mousemove',MouseMove,false);
                } else if (document.attachEvent) { //兼容ie8以下浏览器
                    document.attachEvent('onmousemove',MouseMove,false);
                }
                maxPageX = Obj.width()+Obj.offset().left,
                minPageX = Obj.offset().left,
                maxPageY= Obj.height()+Obj.offset().top,
                minPageY = Obj.offset().top,
                startPageX = event.pageX,
                startPageY= event.pageY;
                isDown=true;//开始滑动
                info['status'] = 'start';
                SuccessInfo();
            }
            function MouseMove(event){//鼠标滑动执行
                var event = event || window.event;
                stopPageX = event.pageX,stopPageY= event.pageY;
                info['status'] = 'process';
                //判断指针是否在元素区域内
                if (event.pageX > minPageX && event.pageY >  minPageY && event.pageX < maxPageX && event.pageY < maxPageY ){
                    if (document.addEventListener) { //兼容ie8以上浏览器
                        Obj[0].addEventListener('mouseup', MouseUp, false);
                        document.removeEventListener('mouseup',MouseUp,false);
                    } else if (document.attachEvent) { //兼容ie8以下浏览器
                        Obj[0].attachEvent('onmouseup',MouseUp,false);
                        document.detachEvent("onmouseup", MouseUp,false);
                    }
                    info['info'] = 'stay';
                }else { //不在区域内需要给 document 添加mouseup事件绑定 并删除 当前对象的mouseup事件绑定
                    if (document.addEventListener) { //兼容ie8以上浏览器
                        document.addEventListener('mouseup', MouseUp, false);
                        Obj[0].removeEventListener('mouseup',MouseUp,false);
                    } else if (document.attachEvent) { //兼容ie8以下浏览器
                        document.attachEvent('onmouseup',MouseUp,false);
                        Obj[0].detachEvent("onmouseup", MouseUp,false);
                    }
                    info['info'] = 'out';
                }
                SuccessInfo();
            }
            function MouseUp(event) { //鼠标松开执行
                var event = event || window.event;
                if (document.removeEventListener){ //兼容ie8以上浏览器
                    document.removeEventListener('mousemove',MouseMove,false);
                } else if (document.detachEvent) { //兼容ie8以下浏览器
                    document.detachEvent("onmousemove", MouseMove,false);
                }
                isDown=false;//停止滑动
                info['status'] = 'stop';
                SuccessInfo();
                //停止后初始化初始值
                startPageX=null,startPageY=null,stopPageX=null,stopPageY=null;
            }
            function SuccessInfo() {
                if (stopPageX==null||stopPageY==null){
                    info['left'] = 0;
                    info['top'] = 0;
                }else {
                    info['left'] = stopPageX-startPageX;
                    info['top'] = stopPageY-startPageY;
                }
                options.hasOwnProperty('success') && options.success(info);
            }
        },
        TouchSlide:function(options){
            var startPoint = null,state = {},Obj =  typeof options.elem =='object' ? options.elem:$(options.elem);
            Obj[0].addEventListener('touchstart', touch, true);
            Obj[0].addEventListener('touchmove', touch, true);
            Obj[0].addEventListener('touchend', touch, true);
            function touch(event){
                var event = event || window.event;
                switch (event.type) {
                    case "touchstart":
                        //event.preventDefault();//防止默认拖动事件等事件干扰
                        startPoint = event.changedTouches[0];
                        break;
                    case "touchend":
                        //计算终点与起点的差值
                        var endPoint = event.changedTouches[0];
                        var x = endPoint.clientX - startPoint.clientX;
                        var y = endPoint.clientY - startPoint.clientY;
                        //设置滑动距离的参考值
                        if (Math.abs(x)>Math.abs(y)){//左右
                            if(x>0){
                                state['direction'] = 'right';
                                if(event.changedTouches[0].pageX>Obj.width()+Obj.offset().left){
                                    state['info'] = 'out';
                                }else {
                                    state['info'] = 'stay';
                                }
                                options.hasOwnProperty('success') && options.success(state);
                            }else if(x<0){
                                state['direction'] = 'left';
                                if(event.changedTouches[0].pageX<Obj.offset().left){
                                    state['info'] = 'out';
                                }else {
                                    state['info'] = 'stay';
                                }
                                options.hasOwnProperty('success') && options.success(state);
                            }
                        }else {//上下
                            if(y>0){
                                state['direction'] = 'down';
                                if(event.changedTouches[0].pageY>Obj.height()+Obj.offset().top){
                                    state['info'] = 'out';
                                }else if (event.changedTouches[0].pageY<Obj.height()+Obj.offset().top) {
                                    state['info'] = 'stay';
                                }
                                options.hasOwnProperty('success') && options.success(state);
                            }else if (y<0) {
                                state['direction'] = 'up';
                                if(event.changedTouches[0].pageY<Obj.offset().top){
                                    state['info'] = 'out';
                                }else if (event.changedTouches[0].pageY>Obj.offset().top) {
                                    state['info'] = 'stay';
                                }
                                options.hasOwnProperty('success') && options.success(state);
                            }
                        }
                        break;
                    case "touchmove":
                        break;
                }
            }
        },
        MouseWheel:function(options){
            var state = {},moveWheel1 = true,moveWheel2 = false,wheelClock,count=0,Obj =  typeof options.elem =='object'? options.elem:$(options.elem);
            function stopWheel(){
                if(moveWheel2 == true){
                    options.hasOwnProperty('success') && options.success(state);
                    count=0;moveWheel2 = false;moveWheel1 = true;
                };
            }
            function moveWheel(event){
                var event = event || window.event;
                event.preventDefault();event.stopPropagation();
                if (event.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
                    if (event.wheelDelta > 0) { //当滑轮向上滚动时
                        state['direction'] = 'up';
                        movetime();
                    }
                    if (event.wheelDelta < 0) { //当滑轮向下滚动时
                        state['direction'] = 'down';
                        movetime();
                    }
                }else if (event.detail){  //Firefox滑轮事件
                    if (event.detail > 0) { //当滑轮向上滚动时
                        state['direction'] = 'up';
                        movetime();
                    }
                    if (event.detail < 0) { //当滑轮向下滚动时
                        state['direction'] = 'down';
                        movetime();
                    }
                }
                function movetime () {
                    if(moveWheel1==true){
                        count=count+1;
                        state['count'] = count;
                        moveWheel1 = false;
                        moveWheel2 = true;
                        //这里写开始滚动时调用的方法
                        wheelClock = setTimeout(stopWheel,200);
                    }else{
                        clearTimeout(wheelClock);
                        wheelClock = setTimeout(stopWheel,options.hasOwnProperty('delay')? options.delay:800);
                    }
                }
            }
            if(Obj[0].addEventListener){ //火狐使用DOMMouseScroll绑定
                Obj[0].addEventListener('DOMMouseScroll', moveWheel, false);
            }
            Obj[0].addEventListener('wheel', moveWheel, false);
        },
        AutoTextarea:function(options){
                let elem = typeof options.elem =='object' ? options.elem:$(options.elem),extra= options.hasOwnProperty('extra') ? options.extra:0;
                let isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
                    isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                    addEvent = function(type, callback) {
                        elem[0].addEventListener ?
                            elem[0].addEventListener(type, callback, false) :
                            elem[0].attachEvent('on' + type, callback);
                    },
                    getStyle = elem[0].currentStyle ? function(name) {
                        let val = elem[0].currentStyle[name];
                        if (name === 'height' && val.search(/px/i) !== 1) {
                            var rect = elem[0].getBoundingClientRect();
                            return rect.bottom - rect.top -
                                parseFloat(getStyle('paddingTop')) -
                                parseFloat(getStyle('paddingBottom')) + 'px';
                        };
                        return val;
                    } : function(name) {
                        return getComputedStyle(elem[0], null)[name];
                    },
                    minHeight = parseFloat(getStyle('height'));
                elem[0].style.resize = 'none';
                let change = function() {
                    let scrollTop, height,
                        padding = 0,
                        style = elem[0].style;
                    if (elem[0]._length === elem[0].value.length) return;
                    elem[0]._length = elem[0].value.length;
                    if (!isFirefox && !isOpera) {
                        padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                    };
                    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    elem[0].style.height = minHeight + 'px';
                    if (elem[0].scrollHeight > minHeight) {
                        if (options.maxHeight && elem[0].scrollHeight > options.maxHeight) {
                            height = options.maxHeight - padding;
                            style.overflowY = 'auto';
                        } else {
                            height = elem[0].scrollHeight - padding;
                            style.overflowY = 'hidden';
                        };
                        style.height = height + extra + 'px';
                        scrollTop += parseInt(style.height) - elem[0].currHeight;
                        document.body.scrollTop = scrollTop;
                        document.documentElement.scrollTop = scrollTop;
                        elem[0].currHeight = parseInt(style.height);
                    };
                    options.hasOwnProperty('success') && options.success(elem);
                };
                addEvent('propertychange', change);
                addEvent('input', change);
                addEvent('focus', change);
                change();
        },
        EachData:function(options){
            let  data ={};
            if (options.hasOwnProperty('elem')) {
                let Obj =  typeof options.elem =='object' ? options.elem:$(options.elem);
                Obj.each(function(){
                    let FileName = $(this).attr('name');
                    if($(this).hasClass('switch')){//.is(':checked')
                        if($(this).is(':checked')){
                            data["" + FileName + ""] ="on";
                        }else{
                            data["" + FileName + ""] ="off";
                        }
                    }else{
                        if(data.hasOwnProperty(FileName)){
                            data["" + FileName + ""] = data["" + FileName + ""] + ',' + $(this).val();
                        }else {
                            data["" + FileName + ""] = $(this).val();
                        }
                    }
                });
            }
            if(options.hasOwnProperty('editor')){
                let editor = options.editor;
                if(isArray(editor)){
                    for (var i=0;i<editor.length;i++){
                        data["" + $(editor[i].toolbarSelector).attr('name') + ""] = editor[i].txt.html();//将富文本编辑器html数据押入数组中
                    }
                }else{
                    data["" + $(editor.toolbarSelector).attr('name') + ""] = editor.txt.html();//将富文本编辑器html数据押入数组中
                }
            }
            function isArray(o){
                return Object.prototype.toString.call(o)== '[object Array]';
            }
            return data;
        }
    };
    e(i,Obj);
});