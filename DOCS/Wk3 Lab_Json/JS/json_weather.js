var dataI ='{"created":"2014-10-17T14:42:39Z","lang":"en-US","location":{"city":"Orlando","country":"United States","reigon":"FL"},"results":{"units":{"distance":"mi","pressure":"ins","speed":"mph","temperature":"F"},"wind":{"chill":76,"direction":360,"speed":5},"atmosphere":{"humidity":48,"pressure":29.65,"rising":0,"visibility":10},"astronomy":{"sunrise":"7:26 am","sunset":"6:51 pm"},"condition":{"code":33,"date":"Fri, 17 Oct 2014 5:53 am EST","temp":76,"text":"Fair"},"forcast":[{"code":30,"date":"17 Oct 2014","day":"Fri","high":80,"low":62,"text":"Sunny"},{"code":30,"date":"18 Oct 2014","day":"Sat","high":82,"low":63,"text":"Partly Cloudy"},{"code":30,"date":"9 Oct 2014","day":"Sun","high":85,"low":65,"text":"Partly Cloudy"}]}}'



window.addEventListener("load",function(){


var data = JSON.parse(dataI);

console.log(data.results.forcast[2].day);

 var b = data.results.forcast;
 for(i=0; i < b.length; i++){
 
 console.log("Today is " + b[i].day +" The high is "+ b[i].high + " The low is " + b[i].low + " It will be " + b[i].text + ".");
 
 }
});


