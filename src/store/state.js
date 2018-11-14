let defaultCity = '上海';
//防止用户在浏览器上使用隐身模式或者关闭掉了localStorage功能而抛出异常
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e){ }

export default {
  city:defaultCity
}
