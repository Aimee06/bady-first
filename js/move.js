function move(dom,target,attr,callback){
    clearInterval(dom.timer);
    dom.timer=setInterval(function(){
        var INOW=parseInt(getComputedStyle(dom,null)[attr]);
        var speed=(target-INOW)/10;
        speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
       
        if(target==INOW){
            clearInterval(dom.timer);
            if(callback){
                callback();
            }
        }else{
            dom.style[attr]=INOW+speed+"px";
        }
    },50)

}