function IsPC()  
{  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
} 

$(function  () {
  var times = 0;
  var onclickEvent = function() {
    times++;

    if (times >= 20000) {
      $('.result').text('恭喜你已完成，请截图带面板私聊发给主板');
    } else {
      $('.result').text('你已点击'+times+'次');

    }

  }

  if (IsPC()) {
    $('.test')[0].addEventListener("click", onclickEvent, false);
  }
})