import{r,h as t}from"./p-bf140d43.js";var n,e,o,i=(function(r){var t=function(){var r=function(r,t){var n=r,e=f[t],o=null,i=0,a=null,v=[],s={},y=function(r,t){o=function(r){for(var t=new Array(r),n=0;n<r;n+=1){t[n]=new Array(r);for(var e=0;e<r;e+=1)t[n][e]=null}return t}(i=4*n+17),b(0,0),b(i-7,0),b(0,i-7),x(),M(),k(r,t),n>=7&&A(r),null==a&&(a=S(n,e,v)),L(a,t)},b=function(r,t){for(var n=-1;n<=7;n+=1)if(!(r+n<=-1||i<=r+n))for(var e=-1;e<=7;e+=1)t+e<=-1||i<=t+e||(o[r+n][t+e]=0<=n&&n<=6&&(0==e||6==e)||0<=e&&e<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=e&&e<=4)},M=function(){for(var r=8;r<i-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<i-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},x=function(){for(var r=u.getPatternPosition(n),t=0;t<r.length;t+=1)for(var e=0;e<r.length;e+=1){var i=r[t],f=r[e];if(null==o[i][f])for(var a=-2;a<=2;a+=1)for(var c=-2;c<=2;c+=1)o[i+a][f+c]=-2==a||2==a||-2==c||2==c||0==a&&0==c}},A=function(r){for(var t=u.getBCHTypeNumber(n),e=0;e<18;e+=1){var f=!r&&1==(t>>e&1);o[Math.floor(e/3)][e%3+i-8-3]=f}for(e=0;e<18;e+=1)f=!r&&1==(t>>e&1),o[e%3+i-8-3][Math.floor(e/3)]=f},k=function(r,t){for(var n=u.getBCHTypeInfo(e<<3|t),f=0;f<15;f+=1){var a=!r&&1==(n>>f&1);f<6?o[f][8]=a:f<8?o[f+1][8]=a:o[i-15+f][8]=a}for(f=0;f<15;f+=1)a=!r&&1==(n>>f&1),f<8?o[8][i-f-1]=a:f<9?o[8][15-f-1+1]=a:o[8][15-f-1]=a;o[i-8][8]=!r},L=function(r,t){for(var n=-1,e=i-1,f=7,a=0,c=u.getMaskFunction(t),v=i-1;v>0;v-=2)for(6==v&&(v-=1);;){for(var s=0;s<2;s+=1)if(null==o[e][v-s]){var h=!1;a<r.length&&(h=1==(r[a]>>>f&1)),c(e,v-s)&&(h=!h),o[e][v-s]=h,-1==(f-=1)&&(a+=1,f=7)}if((e+=n)<0||i<=e){e-=n,n=-n;break}}},S=function(r,t,n){for(var e=h.getRSBlocks(r,t),o=l(),i=0;i<n.length;i+=1){var f=n[i];o.put(f.getMode(),4),o.put(f.getLength(),u.getLengthInBits(f.getMode(),r)),f.write(o)}var a=0;for(i=0;i<e.length;i+=1)a+=e[i].dataCount;if(o.getLengthInBits()>8*a)throw"code length overflow. ("+o.getLengthInBits()+">"+8*a+")";for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a||(o.put(236,8),o.getLengthInBits()>=8*a));)o.put(17,8);return function(r,t){for(var n=0,e=0,o=0,i=new Array(t.length),f=new Array(t.length),a=0;a<t.length;a+=1){var v=t[a].dataCount,s=t[a].totalCount-v;e=Math.max(e,v),o=Math.max(o,s),i[a]=new Array(v);for(var h=0;h<i[a].length;h+=1)i[a][h]=255&r.getBuffer()[h+n];n+=v;var l=u.getErrorCorrectPolynomial(s),d=c(i[a],l.getLength()-1).mod(l);for(f[a]=new Array(l.getLength()-1),h=0;h<f[a].length;h+=1){var g=h+d.getLength()-f[a].length;f[a][h]=g>=0?d.getAt(g):0}}var w=0;for(h=0;h<t.length;h+=1)w+=t[h].totalCount;var p=new Array(w),y=0;for(h=0;h<e;h+=1)for(a=0;a<t.length;a+=1)h<i[a].length&&(p[y]=i[a][h],y+=1);for(h=0;h<o;h+=1)for(a=0;a<t.length;a+=1)h<f[a].length&&(p[y]=f[a][h],y+=1);return p}(o,e)};s.addData=function(r,t){var n=null;switch(t=t||"Byte"){case"Numeric":n=d(r);break;case"Alphanumeric":n=g(r);break;case"Byte":n=w(r);break;case"Kanji":n=p(r);break;default:throw"mode:"+t}v.push(n),a=null},s.isDark=function(r,t){if(r<0||i<=r||t<0||i<=t)throw r+","+t;return o[r][t]},s.getModuleCount=function(){return i},s.make=function(){if(n<1){for(var r=1;r<40;r++){for(var t=h.getRSBlocks(r,e),o=l(),i=0;i<v.length;i++){var f=v[i];o.put(f.getMode(),4),o.put(f.getLength(),u.getLengthInBits(f.getMode(),r)),f.write(o)}var a=0;for(i=0;i<t.length;i++)a+=t[i].dataCount;if(o.getLengthInBits()<=8*a)break}n=r}y(!1,function(){for(var r=0,t=0,n=0;n<8;n+=1){y(!0,n);var e=u.getLostPoint(s);(0==n||r>e)&&(r=e,t=n)}return t}())},s.createTableTag=function(r,t){r=r||2;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",n+='">',n+="<tbody>";for(var e=0;e<s.getModuleCount();e+=1){n+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+r+"px;",n+=" height: "+r+"px;",n+=" background-color: ",n+=s.isDark(e,o)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return(n+="</tbody>")+"</table>"},s.createSvgTag=function(r,t,n,e){var o={};"object"==typeof arguments[0]&&(r=(o=arguments[0]).cellSize,t=o.margin,n=o.alt,e=o.title),r=r||2,t=void 0===t?4*r:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-title":null;var i,f,u,a,c=s.getModuleCount()*r+2*t,v="";for(a="l"+r+",0 0,"+r+" -"+r+",0 0,-"+r+"z ",v+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',v+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',v+=' viewBox="0 0 '+c+" "+c+'" ',v+=' preserveAspectRatio="xMinYMin meet"',v+=e.text||n.text?' role="img" aria-labelledby="'+B([e.id,n.id].join(" ").trim())+'"':"",v+=">",v+=e.text?'<title id="'+B(e.id)+'">'+B(e.text)+"</title>":"",v+=n.text?'<description id="'+B(n.id)+'">'+B(n.text)+"</description>":"",v+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',v+='<path d="',f=0;f<s.getModuleCount();f+=1)for(u=f*r+t,i=0;i<s.getModuleCount();i+=1)s.isDark(f,i)&&(v+="M"+(i*r+t)+","+u+a);return(v+='" stroke="transparent" fill="black"/>')+"</svg>"},s.createDataURL=function(r,t){r=r||2,t=void 0===t?4*r:t;var n=s.getModuleCount()*r+2*t,e=t,o=n-t;return m(n,n,(function(t,n){if(e<=t&&t<o&&e<=n&&n<o){var i=Math.floor((t-e)/r),f=Math.floor((n-e)/r);return s.isDark(f,i)?0:1}return 1}))},s.createImgTag=function(r,t,n){r=r||2,t=void 0===t?4*r:t;var e=s.getModuleCount()*r+2*t,o="";return o+="<img",o+=' src="',o+=s.createDataURL(r,t),o+='"',o+=' width="',o+=e,o+='"',o+=' height="',o+=e,o+='"',n&&(o+=' alt="',o+=B(n),o+='"'),o+"/>"};var B=function(r){for(var t="",n=0;n<r.length;n+=1){var e=r.charAt(n);switch(e){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=e}}return t};return s.createASCII=function(r,t){if((r=r||1)<2)return function(r){r=void 0===r?2:r;var t,n,e,o,i,f=1*s.getModuleCount()+2*r,u=r,a=f-r,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},v={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(t=0;t<f;t+=2){for(e=Math.floor((t-u)/1),o=Math.floor((t+1-u)/1),n=0;n<f;n+=1)i="█",u<=n&&n<a&&u<=t&&t<a&&s.isDark(e,Math.floor((n-u)/1))&&(i=" "),u<=n&&n<a&&u<=t+1&&t+1<a&&s.isDark(o,Math.floor((n-u)/1))?i+=" ":i+="█",h+=r<1&&t+1>=a?v[i]:c[i];h+="\n"}return f%2&&r>0?h.substring(0,h.length-f-1)+Array(f+1).join("▀"):h.substring(0,h.length-1)}(t);r-=1,t=void 0===t?2*r:t;var n,e,o,i,f=s.getModuleCount()*r+2*t,u=t,a=f-t,c=Array(r+1).join("██"),v=Array(r+1).join("  "),h="",l="";for(n=0;n<f;n+=1){for(o=Math.floor((n-u)/r),l="",e=0;e<f;e+=1)i=1,u<=e&&e<a&&u<=n&&n<a&&s.isDark(o,Math.floor((e-u)/r))&&(i=0),l+=i?c:v;for(o=0;o<r;o+=1)h+=l+"\n"}return h.substring(0,h.length-1)},s.renderTo2dContext=function(r,t){t=t||2;for(var n=s.getModuleCount(),e=0;e<n;e++)for(var o=0;o<n;o++)r.fillStyle=s.isDark(e,o)?"black":"white",r.fillRect(e*t,o*t,t,t)},s};r.stringToBytes=(r.stringToBytesFuncs={default:function(r){for(var t=[],n=0;n<r.length;n+=1){var e=r.charCodeAt(n);t.push(255&e)}return t}}).default,r.createStringToBytes=function(r,t){var n=function(){for(var n=b(r),e=function(){var r=n.read();if(-1==r)throw"eof";return r},o=0,i={};;){var f=n.read();if(-1==f)break;var u=e(),a=e(),c=e();i[String.fromCharCode(f<<8|u)]=a<<8|c,o+=1}if(o!=t)throw o+" != "+t;return i}(),e="?".charCodeAt(0);return function(r){for(var t=[],o=0;o<r.length;o+=1){var i=r.charCodeAt(o);if(i<128)t.push(i);else{var f=n[r.charAt(o)];"number"==typeof f?(255&f)==f?t.push(f):(t.push(f>>>8),t.push(255&f)):t.push(e)}}return t}};var t,n,e,o,i,f={L:1,M:0,Q:3,H:2},u=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,e=7973,i=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(o={}).getBCHTypeInfo=function(r){for(var t=r<<10;i(t)-i(n)>=0;)t^=n<<i(t)-i(n);return 21522^(r<<10|t)},o.getBCHTypeNumber=function(r){for(var t=r<<12;i(t)-i(e)>=0;)t^=e<<i(t)-i(e);return r<<12|t},o.getPatternPosition=function(r){return t[r-1]},o.getMaskFunction=function(r){switch(r){case 0:return function(r,t){return(r+t)%2==0};case 1:return function(r){return r%2==0};case 2:return function(r,t){return t%3==0};case 3:return function(r,t){return(r+t)%3==0};case 4:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case 5:return function(r,t){return r*t%2+r*t%3==0};case 6:return function(r,t){return(r*t%2+r*t%3)%2==0};case 7:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw"bad maskPattern:"+r}},o.getErrorCorrectPolynomial=function(r){for(var t=c([1],0),n=0;n<r;n+=1)t=t.multiply(c([1,a.gexp(n)],0));return t},o.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+r}else if(t<27)switch(r){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+r}else{if(!(t<41))throw"type:"+t;switch(r){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+r}}},o.getLostPoint=function(r){for(var t=r.getModuleCount(),n=0,e=0;e<t;e+=1)for(var o=0;o<t;o+=1){for(var i=0,f=r.isDark(e,o),u=-1;u<=1;u+=1)if(!(e+u<0||t<=e+u))for(var a=-1;a<=1;a+=1)o+a<0||t<=o+a||0==u&&0==a||f==r.isDark(e+u,o+a)&&(i+=1);i>5&&(n+=3+i-5)}for(e=0;e<t-1;e+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(e,o)&&(c+=1),r.isDark(e+1,o)&&(c+=1),r.isDark(e,o+1)&&(c+=1),r.isDark(e+1,o+1)&&(c+=1),0!=c&&4!=c||(n+=3)}for(e=0;e<t;e+=1)for(o=0;o<t-6;o+=1)r.isDark(e,o)&&!r.isDark(e,o+1)&&r.isDark(e,o+2)&&r.isDark(e,o+3)&&r.isDark(e,o+4)&&!r.isDark(e,o+5)&&r.isDark(e,o+6)&&(n+=40);for(o=0;o<t;o+=1)for(e=0;e<t-6;e+=1)r.isDark(e,o)&&!r.isDark(e+1,o)&&r.isDark(e+2,o)&&r.isDark(e+3,o)&&r.isDark(e+4,o)&&!r.isDark(e+5,o)&&r.isDark(e+6,o)&&(n+=40);var v=0;for(o=0;o<t;o+=1)for(e=0;e<t;e+=1)r.isDark(e,o)&&(v+=1);return n+Math.abs(100*v/t/t-50)/5*10},o),a=function(){for(var r=new Array(256),t=new Array(256),n=0;n<8;n+=1)r[n]=1<<n;for(n=8;n<256;n+=1)r[n]=r[n-4]^r[n-5]^r[n-6]^r[n-8];for(n=0;n<255;n+=1)t[r[n]]=n;return{glog:function(r){if(r<1)throw"glog("+r+")";return t[r]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}}}();function c(r,t){if(void 0===r.length)throw r.length+"/"+t;var n=function(){for(var n=0;n<r.length&&0==r[n];)n+=1;for(var e=new Array(r.length-n+t),o=0;o<r.length-n;o+=1)e[o]=r[o+n];return e}(),e={getAt:function(r){return n[r]},getLength:function(){return n.length},multiply:function(r){for(var t=new Array(e.getLength()+r.getLength()-1),n=0;n<e.getLength();n+=1)for(var o=0;o<r.getLength();o+=1)t[n+o]^=a.gexp(a.glog(e.getAt(n))+a.glog(r.getAt(o)));return c(t,0)},mod:function(r){if(e.getLength()-r.getLength()<0)return e;for(var t=a.glog(e.getAt(0))-a.glog(r.getAt(0)),n=new Array(e.getLength()),o=0;o<e.getLength();o+=1)n[o]=e.getAt(o);for(o=0;o<r.getLength();o+=1)n[o]^=a.gexp(a.glog(r.getAt(o))+t);return c(n,0).mod(r)}};return e}var v,s,h=(v=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],s=function(r,t){var n={};return n.totalCount=r,n.dataCount=t,n},{getRSBlocks:function(r,t){var n=function(r,t){switch(t){case f.L:return v[4*(r-1)+0];case f.M:return v[4*(r-1)+1];case f.Q:return v[4*(r-1)+2];case f.H:return v[4*(r-1)+3];default:return}}(r,t);if(void 0===n)throw"bad rs block @ typeNumber:"+r+"/errorCorrectionLevel:"+t;for(var e=n.length/3,o=[],i=0;i<e;i+=1)for(var u=n[3*i+0],a=n[3*i+1],c=n[3*i+2],h=0;h<u;h+=1)o.push(s(a,c));return o}}),l=function(){var r=[],t=0,n={getBuffer:function(){return r},getAt:function(t){var n=Math.floor(t/8);return 1==(r[n]>>>7-t%8&1)},put:function(r,t){for(var e=0;e<t;e+=1)n.putBit(1==(r>>>t-e-1&1))},getLengthInBits:function(){return t},putBit:function(n){var e=Math.floor(t/8);r.length<=e&&r.push(0),n&&(r[e]|=128>>>t%8),t+=1}};return n},d=function(r){var t=r,n={getMode:function(){return 1},getLength:function(){return t.length},write:function(r){for(var n=t,o=0;o+2<n.length;)r.put(e(n.substring(o,o+3)),10),o+=3;o<n.length&&(n.length-o==1?r.put(e(n.substring(o,o+1)),4):n.length-o==2&&r.put(e(n.substring(o,o+2)),7))}},e=function(r){for(var t=0,n=0;n<r.length;n+=1)t=10*t+o(r.charAt(n));return t},o=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+r};return n},g=function(r){var t=r,n={getMode:function(){return 2},getLength:function(){return t.length},write:function(r){for(var n=t,o=0;o+1<n.length;)r.put(45*e(n.charAt(o))+e(n.charAt(o+1)),11),o+=2;o<n.length&&r.put(e(n.charAt(o)),6)}},e=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);if("A"<=r&&r<="Z")return r.charCodeAt(0)-"A".charCodeAt(0)+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},w=function(t){var n=r.stringToBytes(t);return{getMode:function(){return 4},getLength:function(){return n.length},write:function(r){for(var t=0;t<n.length;t+=1)r.put(n[t],8)}}},p=function(t){var n=r.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var r=n("友");if(2!=r.length||38726!=(r[0]<<8|r[1]))throw"sjis not supported."}();var e=n(t);return{getMode:function(){return 8},getLength:function(){return~~(e.length/2)},write:function(r){for(var t=e,n=0;n+1<t.length;){var o=(255&t[n])<<8|255&t[n+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(n+1)+"/"+o;o-=49472}r.put(o=192*(o>>>8&255)+(255&o),13),n+=2}if(n<t.length)throw"illegal char at "+(n+1)}}},y=function(){var r=[],t={writeByte:function(t){r.push(255&t)},writeShort:function(r){t.writeByte(r),t.writeByte(r>>>8)},writeBytes:function(r,n,e){n=n||0,e=e||r.length;for(var o=0;o<e;o+=1)t.writeByte(r[o+n])},writeString:function(r){for(var n=0;n<r.length;n+=1)t.writeByte(r.charCodeAt(n))},toByteArray:function(){return r},toString:function(){var t="";t+="[";for(var n=0;n<r.length;n+=1)n>0&&(t+=","),t+=r[n];return t+"]"}};return t},b=function(r){var t=r,n=0,e=0,o=0,i={read:function(){for(;o<8;){if(n>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var r=t.charAt(n);if(n+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(e=e<<6|f(r.charCodeAt(0)),o+=6)}var i=e>>>o-8&255;return o-=8,i}},f=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw"c:"+r};return i},m=function(r,t,n){for(var e=function(r,t){var n=r,e=t,o=new Array(r*t),i={setPixel:function(r,t,e){o[t*n+r]=e},write:function(r){r.writeString("GIF87a"),r.writeShort(n),r.writeShort(e),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(n),r.writeShort(e),r.writeByte(0);var t=f(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")}},f=function(r){for(var t=1<<r,n=1+(1<<r),e=r+1,i=u(),f=0;f<t;f+=1)i.add(String.fromCharCode(f));i.add(String.fromCharCode(t)),i.add(String.fromCharCode(n));var a,c,v,s=y(),h=(a=s,c=0,v=0,{write:function(r,t){if(r>>>t!=0)throw"length over";for(;c+t>=8;)a.writeByte(255&(r<<c|v)),t-=8-c,r>>>=8-c,v=0,c=0;v|=r<<c,c+=t},flush:function(){c>0&&a.writeByte(v)}});h.write(t,e);var l=0,d=String.fromCharCode(o[l]);for(l+=1;l<o.length;){var g=String.fromCharCode(o[l]);l+=1,i.contains(d+g)?d+=g:(h.write(i.indexOf(d),e),i.size()<4095&&(i.size()==1<<e&&(e+=1),i.add(d+g)),d=g)}return h.write(i.indexOf(d),e),h.write(n,e),h.flush(),s.toByteArray()},u=function(){var r={},t=0,n={add:function(e){if(n.contains(e))throw"dup key:"+e;r[e]=t,t+=1},size:function(){return t},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return i}(r,t),o=0;o<t;o+=1)for(var i=0;i<r;i+=1)e.setPixel(i,o,n(i,o));var f=y();e.write(f);for(var u=function(){var r=0,t=0,n=0,e="",o={},i=function(r){e+=String.fromCharCode(f(63&r))},f=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw"n:"+r};return o.writeByte=function(e){for(r=r<<8|255&e,t+=8,n+=1;t>=6;)i(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(i(r<<6-t),r=0,t=0),n%3!=0)for(var o=3-n%3,f=0;f<o;f+=1)e+="="},o.toString=function(){return e},o}(),a=f.toByteArray(),c=0;c<a.length;c+=1)u.writeByte(a[c]);return u.flush(),"data:image/gif;base64,"+u};return r}();t.stringToBytesFuncs["UTF-8"]=function(r){return function(r){for(var t=[],n=0;n<r.length;n++){var e=r.charCodeAt(n);e<128?t.push(e):e<2048?t.push(192|e>>6,128|63&e):e<55296||e>=57344?t.push(224|e>>12,128|e>>6&63,128|63&e):(n++,e=65536+((1023&e)<<10|1023&r.charCodeAt(n)),t.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|63&e))}return t}(r)},r.exports=t}(n={path:undefined,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports);!function(r){r.DataURI="DataURI",r.SVG="SVG",r.Table="Table"}(e||(e={})),function(r){r.Low="L",r.Medium="M",r.Quality="Q",r.High="H"}(o||(o={}));const f=class{constructor(t){r(this,t),this.contents="Hello World",this.errorCorrectionLevel=o.High,this.margin=4,this.scale=4,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.outputMode=e.DataURI}componentWillLoad(){this.computeAndSetData(this.contents,this.outputMode)}computeAndSetData(r,t){const n=i(0,this.errorCorrectionLevel);n.addData(r),n.make(),"DataURI"===t?(this.data=n.createImgTag(),this.data=this.data.replace(">",` alt="${("QR Code Image for "+r).replace('"',"'")}" >`)):this.data="SVG"===t?n.createSvgTag():"Table"===t?n.createTableTag():null}changeOutputModeHandler(r){this.computeAndSetData(this.contents,r)}changeContentsHandler(r){console.log("contents changed",r),this.computeAndSetData(r,this.outputMode)}changeErrorCorrectionLevelHandler(){this.computeAndSetData(this.contents,this.outputMode)}render(){return t("div",{innerHTML:this.data})}static get watchers(){return{outputMode:["changeOutputModeHandler"],contents:["changeContentsHandler"],errorCorrectionLevel:["changeErrorCorrectionLevelHandler"]}}};f.style=":host{background:transparent;display:flex;align-items:center;justify-content:center}:host div,:host img{width:100%;height:100%;max-width:100%}:host div svg,:host img svg{width:100%;height:100%;max-width:100%}";export{f as qr_code}