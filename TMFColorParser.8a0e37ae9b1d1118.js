class TMFColorParser{constructor(l=""){this.autoContrastColor(l),this.links=null,this.manialinks=null,this.background=null,this.forceDarken=!1,this.forceBrighten=!1,this.convert=null,this.alwaysDrawFontShadows=!0}replace(l,e,a){const c=new RegExp(l,"g");return a.replace(c,e)}getStyledString(l,{length:e},a,c,s,r,f,i){let o=l.substring(e).trim(),$="";if(r&&(o=o.toUpperCase()),(a||c||s||f)&&o){if(a&&!i){const h=this.get_rgb(`#${a}`),m=this.getContrastCorrectedColor(h);let n=this.get_hex(m);null!==this.convert&&null!==this.convert[0]&&(n=this.convertHex(n,this.convert[0],this.convert[1])),$+=`color:${n};`}f&&($+="font-style:italic;"),c&&($+="font-weight:bold;"),s&&($+="letter-spacing: -0.1em;font-size:smaller;")}return[o,$]}linkIsIP(l){return l.match(/\\A\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}.*\\z/)}fixWWWLinks(){for(const l in this.links){let e=this.links[l].trim();("www."===e.toLowerCase().substring(0,4)||this.linkIsIP(e))&&(e=`http://${e}`,this.links[l]=e)}}parseLinks(l,e=!0){let a=this.parseManialinks(l,e);a=this.replace("\\$L","$l",a),this.links={};let c=0;const s=a.split("$l");return s.forEach((r,f)=>{if(f%2==1){const i=`{LINK${c}}`;if(c+=1,r.match(/^\[(.*)\](.*)/)){let o=r.substring(r.indexOf("[")+1);o=o.substring(0,o.indexOf("]")),this.links[i]=o,s[f]=e?`$a${i}$x${r.substring(r.indexOf("]")+1)}$a{/LINK}$x`:r.substring(r.indexOf("]")+1)}else this.links[i]=r,e&&(s[f]=`$a${i}$x${r}$a{/LINK}$x`)}}),this.fixWWWLinks(),s.join("")}parseManialinks(l,e=!0){this.manialinks={};const c=this.replace("\\$H","$h",l).split("$h");let s=0,r=0;for(;r<c.length;r+=1){const f=c[r];if(r%2==1){const i=`{MLINK${s}}`;if(s+=1,f.match(/\A\[(.*)\](.*)\Z/)){let o=f.substring(f.indexOf("[")+1);o=o.substring(0,o.indexOf("]")),this.manialinks[i]=o,c[r]=e?`$a${i}$x${f.substring(f.indexOf("]")+1)}$a{/LINK}$x`:f.substring(f.indexOf("]")+1)}else this.manialinks[i]=f,e&&(c[r]=`$a${i}$x${f}$a{/LINK}$x`)}}return c.join("")}insertLinks(l){let e=l;for(const a in this.manialinks)e=this.replace(a,`<a href="tmtp:///:${this.manialinks[a]}">`,e);for(const a in this.links)e=this.replace(a,`<a href="${this.links[a]}">`,e);return e=this.replace("{/LINK}","</a>",e),e}getColorBrightness({r:l,g:e,b:a}){return(299*l+587*e+114*a)/1e3}getBrightnessDifference(l,e){return Math.abs(this.getColorBrightness(l)-this.getColorBrightness(e))}getColorDifference({r:l,g:e,b:a},{r2:c,g2:s,b2:r}){return(Math.abs(l-c)+Math.abs(e-s)+Math.abs(a-r))/768*100}autoContrastColor(l){this.background=this.get_rgb(l)}replaceHex(l,e){this.convert=[l,e]}convertHex(l,e,a){return this.replace(e,a,string)}getContrastCorrectedColor(l){if(!this.background)return l;const e=l,a=l,s=(this.getColorDifference(l,this.background),this.get_rgb("#ffffff")),r=this.get_rgb("#000000"),i=50;let o=255,$=255,h=1;for(;h<=i;h+=1){const t=this.getColorDifference(e,this.background),g=this.getColorDifference(a,this.background);t<15?(e.r=(i-h)/i*l.r+h/i*s.r,e.g=(i-h)/i*l.g+h/i*s.g,e.b=(i-h)/i*l.b+h/i*s.b):$=this.getColorDifference(e,l),g<15?(a.r=(i-h)/i*l.r+h/i*r.r,a.g=(i-h)/i*l.g+h/i*r.g,a.b=(i-h)/i*l.b+h/i*r.b):o=this.getColorDifference(a,l)}const m=Math.abs(15-this.getColorDifference(e,this.background)),n=Math.abs(15-this.getColorDifference(a,this.background));return this.forceDarken?a:this.forceBrighten||$<o?e:$>o||n<m?a:e}toHTML(l,e=!1,a=!0,c=""){let s=!1,r=!1,f=!1,i=!1,o=!1,$=!1,h=l,m=c;"all"===m.toLowerCase()&&(m="iwonstmgaxz"),m.split("").forEach((t,g)=>{const p=m.substring(g,parseInt(g+1,10));h=this.replace(`\\$${p}`,"",h)}),h=this.replace("\\$\\$","[DOLLAR]",h),h=this.replace(" ","&nbsp;",h),h=this.parseLinks(h,!a);const n=h.split("$");return n.forEach((t,g)=>{let p,b,S,u,x,d;(d=t.match(/^[0-9a-f]{2,3}/i))?(s=d[0],s.length<3&&(s+=8),s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2],n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(i)/i))?(o=!0,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(w)/i))||(d=t.match(/^(o)/i))?(f=!1,r=!0,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(n)/i))?(r=!1,f=!0,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(s)/i))?n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e):(d=t.match(/^(t)/i))?(i=!0,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(m)/i))?(r=!1,$=!1,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(g)/i))?(s=!1,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(a)/i))?(p=s,b=r,S=f,u=i,x=o,s=!1,r=!1,f=!1,i=!1,o=!1,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(x)/i))?(s=p,r=b,f=S,i=u,o=x,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e)):(d=t.match(/^(z)/i))&&(s=!1,r=!1,f=!1,i=!1,o=!1,n[g]=this.getStyledString(t,d[0],s,r,f,i,o,e))}),n[0]=[n[0]," "],n.forEach((t,g)=>{("string"==typeof n[g][0]||n[g][0]instanceof String)&&(n[g][0]=n[g][0].replace("[DOLLAR]+","$",t),n[g][0]=n[g][0].replace("&NBSP;","&nbsp;",t),n[g][0]=n[g][0].replaceAll(new RegExp("&nbsp;","g")," ",t))}),n.filter(t=>t.length||t)}toArray(l){let e=!1,a=!1,c=!1,s=!1,r=!1,f=!1;const o=this.parseLinks(this.replace("\\$\\$","[DOLLAR]",l),!1).split("$"),$=[];return o[0]&&($[0].text=this.replace("[DOLLAR]+","$",o[0])),o.forEach((h,m)=>{let t,n="";if((t=h.match(/^[0-9a-f]{2,3}/i))?(e=t[0],n=e,e.length<3&&(e+=9),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]):(t=h.match(/^(i)/i))?(n=t[0],r=!0):(t=h.match(/^(w)/i))||(t=h.match(/^(o)/i))?(n=t[0],c=!1,a=!0):(t=h.match(/^(n)/i))?(n=t[0],a=!1,c=!0):(t=h.match(/^(s)/i))?(n=t[0],f=!0):(t=h.match(/^(t)/i))?(n=t[0],s=!0):(t=h.match(/^(m)/i))?(n=t[0],a=!1,bold=!1):(t=h.match(/^(g)/i))?(n=t[0],e=!1):(t=h.match(/^(x)/i))?n=t[0]:(t=h.match(/^(z)/i))&&(n=t[0],f=!1,e=!1,a=!1,c=!1,s=!1,r=!1),h.substring(n.length)){const g=$.length;$[g].text=this.replace("[DOLLAR]+","$",h),$[g].italic=r,$[g].narrow=c,$[g].wide=a,$[g].caps=s,$[g].shadow=f,$[g].color=e}}),$}get_rgb(l){const e=l.replace("#",""),a={};return a.r=parseInt(e.substring(0,2),16),a.g=parseInt(e.substring(2,4),16),a.b=parseInt(e.substring(4,6),16),a}get_hex({r:l,g:e,b:a}){return`#${[l,e,a].map(c=>{const s=c.toString(16);return 1===s.length?`0${s}`:s}).join("")}`}forceDarkerColors(){this.forceDarken=!0,this.forceBrighten=!1}forceBrighterColors(){this.forceDarken=!1,this.forceBrighten=!0}forceAutomaticColorCorrection(){this.forceDarken=!1,this.forceBrighten=!1}}