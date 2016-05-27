var ConstServerInfo = {};
ConstServerInfo.World_1          = "http://203.104.209.71/";
ConstServerInfo.World_2          = "http://203.104.209.87/";
ConstServerInfo.World_3          = "http://125.6.184.16/";
ConstServerInfo.World_4          = "http://125.6.187.205/";
ConstServerInfo.World_5          = "http://125.6.187.229/";
ConstServerInfo.World_6          = "http://125.6.187.253/";
ConstServerInfo.World_7          = "http://125.6.188.25/";
ConstServerInfo.World_8          = "http://203.104.248.135/";
ConstServerInfo.World_9          = "http://125.6.189.7/";
ConstServerInfo.World_10         = "http://125.6.189.39/";
ConstServerInfo.World_11         = "http://125.6.189.71/";
ConstServerInfo.World_12         = "http://125.6.189.103/";
ConstServerInfo.World_13         = "http://125.6.189.135/";
ConstServerInfo.World_14         = "http://125.6.189.167/";
ConstServerInfo.World_15         = "http://125.6.189.215/";
ConstServerInfo.World_16         = "http://125.6.189.247/";
ConstServerInfo.World_17         = "http://203.104.209.23/";
ConstServerInfo.World_18         = "http://203.104.209.39/";
ConstServerInfo.World_19         = "http://203.104.209.55/";
ConstServerInfo.World_20         = "http://203.104.209.102/";

var strfactory = function (ip, id){
return "<li>\n" +
  "<p>" + id + " in " + ip + "</p>\n" +
  "<img src=\"" + ip + "kcs/resources/image/slotitem/card/" + id + ".png\" />\n" +
"</li>"
}

var str = "";
var IDF = 177, IDE = 181;
for(var i = IDF; i <= IDE; i++){
  str += "<ul>";
  str += strfactory(ConstServerInfo.World_2, i);
  str += strfactory(ConstServerInfo.World_9, i);
  str += strfactory(ConstServerInfo.World_17, i);
  str += "</ul>"
}

document.getElementById("main").innerHTML=str;