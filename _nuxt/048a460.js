(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8,9],{263:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},264:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("909ef8da",content,!0,{sourceMap:!1})},265:function(t,e,n){var o=n(12),r=Math.ceil,l=Math.floor;o({target:"Math",stat:!0},{trunc:function(t){return(t>0?l:r)(t)}})},266:function(t,e,n){"use strict";n(264)},267:function(t,e,n){var o=n(74),r=n(263),l=n(268),c=o(!1),d=r(l);c.push([t.i,".countdown[data-v-06212425]{background:linear-gradient(0deg,rgba(57,9,104,0),rgba(57,9,104,0)),url("+d+');background-repeat:no-repeat;background-size:100% 100%;background-position:50%;color:#faf6f6;padding:112px 70px 70px;width:665px;height:665px}.countdown.position-top[data-v-06212425]{width:418px;height:418px;padding:70px 34px 60px}h1[data-v-06212425]{font-size:28px;font-weight:500;margin-bottom:40px;padding:0 20px}.comma[data-v-06212425],.digit[data-v-06212425],h1[data-v-06212425]{line-height:1.3;text-align:center}.comma[data-v-06212425],.digit[data-v-06212425]{font-size:72px;font-weight:600;letter-spacing:.2em}.countdown.position-top .comma[data-v-06212425],.countdown.position-top .digit[data-v-06212425]{font-size:48px}.text[data-v-06212425]{font-size:18px;font-family:"Aldrich"}.bottom[data-v-06212425],.text[data-v-06212425]{line-height:1.3;text-align:center}.bottom[data-v-06212425]{font-weight:700;font-size:28px;margin-bottom:43px}.countdown.position-top .bottom[data-v-06212425]{margin-bottom:24px}.bottom span[data-v-06212425],.view-drop[data-v-06212425]{color:#ffe500;font-family:"Aldrich"}.view-drop[data-v-06212425]{background:#000;border:1px solid #ffe500;box-sizing:border-box;border-radius:99px;font-size:18px;line-height:1;padding:16px 52px}@media screen and (max-width:992px){.countdown[data-v-06212425]{width:288px!important;height:288px!important;padding:50px 20px 30px!important}.comma[data-v-06212425],.digit[data-v-06212425]{font-size:34px!important}.text[data-v-06212425]{font-size:12px}h1[data-v-06212425]{font-size:16px;margin-bottom:15px}.bottom[data-v-06212425]{font-size:20px}.view-drop[data-v-06212425]{font-size:12px;padding:12px 40px}}',""]),t.exports=c},268:function(t,e,n){t.exports=n.p+"img/bg5.ee2e685.png"},269:function(t,e,n){"use strict";n.r(e);n(36),n(265),n(2),n(1),n(37);var o=n(9),r=o.default.extend({mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:{date:{type:String},position:{type:String}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3)}},computed:{dateInMilliseconds:function(){return Math.trunc(Date.parse(this.date)/1e3)},seconds:function(){return(this.dateInMilliseconds-this.now)%60},minutes:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60)%60},hours:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60)%24},days:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60/24)}}});o.default.filter("two_digits",(function(t){return t<0?"00":t.toString().length<=1?"0".concat(t):t}));var l=r,c=(n(266),n(62)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"countdown position-"+t.position},["bottom"==t.position?n("div",[n("h1",[t._v("\n      Don't Miss Your Chance To Own A Rare Historical Selfie Of The Multiverse\n    ")])]):t._e(),t._v(" "),"top"==t.position?n("div",{staticClass:"bottom"},[n("span",[t._v("Exclusively on")]),n("br"),t._v("\n    **site**\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"d-flex justify-content-center mb-4 mb-lg-5"},[n("div",{staticClass:"block"},[n("div",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.days)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Days")])]),t._v(" "),n("div",{staticClass:"comma"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.hours)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Hours")])]),t._v(" "),n("div",{staticClass:"comma"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.minutes)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Minutes")])]),t._v(" "),n("div",{staticClass:"comma"},[t._v(":")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.seconds)))]),t._v(" "),n("div",{staticClass:"text"},[t._v("Seconds")])])]),t._v(" "),"bottom"==t.position?n("div",{staticClass:"bottom"},[n("span",[t._v("Exclusively on")]),n("br"),t._v("\n    **site**\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"d-flex justify-content-center"},[n("b-button",{attrs:{variant:"warning view-drop",href:"https://crypto.com/nft",target:"_blank"}},[t._v("\n      View Drop\n    ")])],1)])}),[],!1,null,"06212425",null);e.default=component.exports},270:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("6690348b",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("43a10cd2",content,!0,{sourceMap:!1})},272:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("6c59402a",content,!0,{sourceMap:!1})},273:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("6780bd82",content,!0,{sourceMap:!1})},274:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("8a9d03de",content,!0,{sourceMap:!1})},275:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("2971be19",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("5c30b205",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(270)},278:function(t,e,n){var o=n(74)(!1);o.push([t.i,".header[data-v-171943e2]{padding-top:20px;padding-bottom:20px}.logo[data-v-171943e2]{width:180px;height:55px}.navbar[data-v-171943e2]{padding-top:0;padding-bottom:0}.navbar-brand[data-v-171943e2]{padding:0}.nav-link[data-v-171943e2]{color:#faf6f6!important;font-weight:400;font-size:18px;line-height:21.6px}.nav-link[data-v-171943e2]:hover{color:#ffe500!important}@media screen and (max-width:992px){.navbar[data-v-171943e2]{position:fixed;width:100%;left:0;top:0;z-index:10;background-color:hsla(0,0%,100%,.05882)}.open-navbar.navbar[data-v-171943e2]{background:rgba(17,25,46,.7);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.navbar-collapse[data-v-171943e2]{height:100vh}.nav-item[data-v-171943e2]{display:flex;justify-content:center;margin:0!important;border-bottom:1px solid #ffe500}.nav-item[data-v-171943e2]:first-child{border-top:1px solid #ffe500}.nav-link[data-v-171943e2]{padding:15px 0;font-weight:600;font-size:28px;line-height:35px}.navbar-toggler[data-v-171943e2]{border:none}}",""]),t.exports=o},279:function(t,e,n){"use strict";n(271)},280:function(t,e,n){var o=n(74)(!1);o.push([t.i,'.background[data-v-15b51b7c]{padding-top:80px;padding-bottom:130px}h1[data-v-15b51b7c]{color:#ffe500;font-size:46px;line-height:1.3;font-family:"Aldrich";margin-bottom:50px;text-align:center}@media screen and (max-width:992px){.background[data-v-15b51b7c]{padding-top:140px;padding-bottom:50px;background-size:auto 100%}h1[data-v-15b51b7c]{font-size:24px}}',""]),t.exports=o},281:function(t,e,n){"use strict";n(272)},282:function(t,e,n){var o=n(74),r=n(263),l=n(283),c=o(!1),d=r(l);c.push([t.i,".background[data-v-2805a1af]{padding:100px 0;background:linear-gradient(0deg,rgba(57,9,104,0),rgba(57,9,104,0)),url("+d+");background-repeat:no-repeat;background-size:100% 100%;background-position:50%}.description[data-v-2805a1af]{color:#faf6f6;font-size:24px;line-height:1.3}img[data-v-2805a1af]{width:100%}@media screen and (max-width:992px){.background[data-v-2805a1af]{padding:50px 0;background-size:auto 100%}.description[data-v-2805a1af]{font-size:20px}}",""]),t.exports=c},283:function(t,e,n){t.exports=n.p+"img/bg2.68872dd.png"},284:function(t,e,n){"use strict";n(273)},285:function(t,e,n){var o=n(74)(!1);o.push([t.i,'.background[data-v-db5770c8]{padding:100px 0}img[data-v-db5770c8]{width:100%}h1[data-v-db5770c8]{font-size:36px;line-height:1.7;color:#ffe500;font-family:"Aldrich";margin-bottom:25px}.description[data-v-db5770c8]{color:#faf6f6}.description[data-v-db5770c8],.name-container[data-v-db5770c8]{font-size:18px;line-height:1.3}.name-container[data-v-db5770c8]{position:absolute;bottom:18%;left:0;color:#ffe500;width:100%;text-align:center;font-family:"Aldrich"}@media screen and (max-width:992px){.background[data-v-db5770c8]{text-align:center;padding:50px 0}h1[data-v-db5770c8]{font-size:22px;margin-bottom:25px}.description[data-v-db5770c8]{font-size:16px}}',""]),t.exports=o},286:function(t,e,n){"use strict";n(274)},287:function(t,e,n){var o=n(74),r=n(263),l=n(288),c=o(!1),d=r(l);c.push([t.i,".background[data-v-08a5da2c]{color:#faf6f6;background:linear-gradient(0deg,rgba(57,9,104,0),rgba(57,9,104,0)),url("+d+');background-repeat:no-repeat;background-size:100% 100%;background-position:50%;padding:100px 0}h1[data-v-08a5da2c]{font-family:"Aldrich";font-size:36px;line-height:1.3;margin-bottom:50px;color:#ffe500}.description[data-v-08a5da2c]{font-weight:500;font-size:20px;line-height:1.3}img[data-v-08a5da2c]{width:100%}@media screen and (max-width:992px){.background[data-v-08a5da2c]{padding:50px 0;background-size:auto 100%}h1[data-v-08a5da2c]{font-size:22px}.container[data-v-08a5da2c]{font-size:14px;text-align:center}}',""]),t.exports=c},288:function(t,e,n){t.exports=n.p+"img/bg3.9ab5699.png"},289:function(t,e,n){"use strict";n(275)},290:function(t,e,n){var o=n(74),r=n(263),l=n(291),c=o(!1),d=r(l);c.push([t.i,".background[data-v-56437cb2]{background:linear-gradient(180deg,transparent,transparent),url("+d+");background-size:contain,cover;background-position:50%;padding:100px 0;overflow:hidden}@media screen and (max-width:992px){.background[data-v-56437cb2]{padding:50px 0 110px;background-size:auto 100%}}",""]),t.exports=c},291:function(t,e,n){t.exports=n.p+"img/bg4.4e6b04e.png"},292:function(t,e,n){"use strict";n(276)},293:function(t,e,n){var o=n(74)(!1);o.push([t.i,".footer[data-v-7e10db09]{font-size:16px;line-height:18px;color:#faf6f6;padding:50px 0;text-align:center}@media screen and (max-width:992px){.footer[data-v-7e10db09]{font-size:12px;line-height:14px;padding:25px 0}}",""]),t.exports=o},294:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("1b7833da",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({data:function(){return{visible:!1}}}),r=(n(277),n(62)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{class:{"open-navbar":t.visible},attrs:{toggleable:"lg",type:"dark"}},[n("b-container",{staticClass:"header"},[n("div",{staticClass:"d-flex justify-content-between w-100"},[n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{staticClass:"logo",attrs:{src:"img/logo.png"}})]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1),t._v(" "),n("b-collapse",{staticClass:"mt-5 mt-lg-0",attrs:{id:"nav-collapse","is-nav":""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"body",offset:-50},expression:"{ el: 'body', offset: -50 }"}],staticClass:"mr-4",attrs:{href:"#"}},[t._v("Home")]),t._v(" "),n("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#story"},expression:"{ el: '#story' }"}],staticClass:"mr-4",attrs:{href:"#"}},[t._v("Story")]),t._v(" "),n("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about"},expression:"{ el: '#about' }"}],staticClass:"mr-4",attrs:{href:"#"}},[t._v("About")]),t._v(" "),n("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#artist"},expression:"{ el: '#artist' }"}],attrs:{href:"#"}},[t._v("Artist")])],1)],1)],1)],1)}),[],!1,null,"171943e2",null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({}),r=(n(279),n(62)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("b-container",[n("h1",{attrs:{"data-aos":"fade-up"}},[t._v("\n      What If You Could Take A Snapshot Of One Moment In Time Across All Possible Universes?\n    ")]),t._v(" "),n("div",{staticClass:"row justify-content-center",attrs:{"data-aos":"zoom-in"}},[n("div",{staticClass:"col-12 col-lg-5 d-flex justify-content-center pb-5 pb-lg-0"},[n("Counterdown",{attrs:{date:"November 12 2021 20:00 GMT+0200",position:"top"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-lg-7"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"img/4.png"}})])])])],1)}),[],!1,null,"15b51b7c",null);e.default=component.exports;installComponents(component,{Counterdown:n(269).default})},297:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({data:function(){return{open:!1}}}),r=(n(281),n(62)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("b-container",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-6 pr-lg-4"},[n("div",{staticClass:"description d-lg-none pb-4"},[n("span",{staticStyle:{color:"#ffe500","font-family":"'Aldrich'"}},[t._v('"Selfies Of The Multiverse"')]),t._v("\n          features alternative realities where the evolution of matter,\n          biological life and language took a completely different route than\n          we are able to experience today. "),n("br"),n("br"),t._v("\n          With this collection the artist invites you to an exploratory\n          journey through space and time featuring breathtaking landscapes,\n          magical galaxy formations and unique species.\n        ")]),t._v(" "),n("img",{attrs:{src:"img/1.png"}}),t._v(" "),n("div",{staticClass:"description pt-lg-5 pt-4"},[t._v('\n          “Everything that we see today is the result of probabilistic\n          combinations guided by laws of physics, psychology and other rules\n          of the universe applied over time. Some call it random, some call it\n          destiny. But it was enough to inspire me to go and imagine a time so\n          far in the past where even the smallest of diversions could produce\n          an unimaginable change to the world we see today," said the artist.\n        ')]),t._v(" "),n("img",{staticClass:"pt-lg-5 pt-4 d-none d-lg-block",attrs:{src:"img/3.png"}})]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6 pl-lg-4"},[n("div",{staticClass:"description d-none d-lg-block"},[n("span",{staticStyle:{color:"#ffe500","font-family":"'Aldrich'"}},[t._v('"Selfies Of The Multiverse"')]),t._v("\n          features alternative realities where the evolution of matter,\n          biological life and language took a completely different route than\n          we are able to experience today. "),n("br"),n("br"),t._v("\n          With this collection the artist invites you to an exploratory\n          journey through space and time featuring breathtaking landscapes,\n          magical galaxy formations and unique species.\n        ")]),t._v(" "),n("img",{staticClass:"pt-lg-5 pt-4",attrs:{src:"img/2.png"}}),t._v(" "),n("div",{staticClass:"description pt-lg-5 pt-4"},[t._v("\n          He adds:\n          "),n("span",{staticStyle:{color:"#ffe500","font-family":"'Aldrich'"}},[t._v('\n            "What makes this even more exciting is the fact that not all\n            planets, galaxies and characters in my collection are created\n            equal. Just like in nature, we purposefully made some variants\n            rarer then others to create the path and probability towards\n            exceptional outcomes."\n          ')])]),t._v(" "),n("img",{staticClass:"pt-lg-5 pt-4 d-lg-none",attrs:{src:"img/3.png"}})])])])],1)}),[],!1,null,"2805a1af",null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({}),r=(n(289),n(62)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background"},[e("b-container",[e("div",{staticClass:"d-flex justify-content-center",attrs:{"data-aos":"zoom-in"}},[e("Counterdown",{attrs:{date:"November 12 2021 20:00 GMT+0200",position:"bottom"}})],1)])],1)}),[],!1,null,"56437cb2",null);e.default=component.exports;installComponents(component,{Counterdown:n(269).default})},299:function(t,e,n){"use strict";n.r(e);n(284);var o=n(62),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("b-container",[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-12 col-lg-6 pr-lg-4",attrs:{"data-aos":"fade-right"}},[n("div",{staticClass:"position-relative"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"img/5.png"}}),t._v(" "),n("a",{staticClass:"name-container",attrs:{href:"https://www.instagram.com/cabotcove.bg/",target:"_blank"}},[t._v("@cabotcove.bg")])])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6 pl-lg-4 pt-5 pt-lg-0",attrs:{"data-aos":"fade-left"}},[n("h1",[t._v("Artist")]),t._v(" "),n("div",{staticClass:"description"},[t._v("\n          Born in 1978, "),n("span",{staticStyle:{color:"#ffe500","font-family":"'Aldrich'"}},[t._v("Cabot Cove")]),t._v(' has always lived in Bergamo, a small town\n          in Northern Italy. His name is a tribute to the TV series "Murder\n          She Wrote" by Angela Lansbury.\n          '),n("br"),n("br"),t._v("\n          Cabot Cover is a self-taught collagist with an intense interest in\n          parallel universes and different developments in the space-time of\n          history.\n          "),n("br"),n("br"),t._v("\n          At the start of his career in the early 1990s Cabot assembled\n          concert fanzines and flyers. In high school, he got the opportunity\n          to create graphic design for local clubs and small venues.\n          "),n("br"),n("br"),t._v("\n          Fast forward to today, Cabot Cove collaborates with two of the best\n          venues in Bergamo called Ink Club and Edonè and one of the biggest\n          reggae festivals in Italy called BergamoReggae Sunfest that over the\n          years has hosted artists like The Gladiators, Dawn Penn, Johhny\n          Osbourne, Ken Boothe and Agent Sasco, Arpioni and Cornoltis.\n          "),n("br"),n("br"),t._v("\n          Cabot Cove has also worked with the Municipality of Bergamo and\n          helped take care of graphics for a museum exhibition at the Liceo\n          Classico P. Sarpi.\n          "),n("br"),n("br"),t._v("\n          Among his many talents, Cabot is also active as a street artist. One\n          of his works dedicated to football made both to local and European\n          media outlets.\n        ")])])])])],1)}),[],!1,null,"db5770c8",null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(286);var o=n(62),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("b-container",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 pr-lg-3",attrs:{"data-aos":"fade-right"}},[n("h1",[t._v('What are "Selfies Of The Multiverse"?')]),t._v(" "),n("div",{staticClass:"description"},[t._v('\n          "Selfies Of The Multiverse" are 10,000 unique, algorithmically\n          generated selfies taken from across alternative universes at the\n          same point in time. No two "Selfies Of The Multiverse" are exactly\n          alike, and each one of them can be officially owned by a single\n          person on the blockchain.\n        ')])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 pl-lg-5 mt-5 mt-lg-0",attrs:{"data-aos":"fade-left"}},[n("img",{staticClass:"img",attrs:{src:"img/6.png"}})])]),t._v(" "),n("div",{staticClass:"row py-5 flex-column-reverse flex-lg-row"},[n("div",{staticClass:"col-12 col-lg-4 pr-lg-5 mt-5 mt-lg-0",attrs:{"data-aos":"fade-right"}},[n("img",{staticClass:"img",attrs:{src:"img/7.png"}})]),t._v(" "),n("div",{staticClass:"col-12 col-lg-8 pl-lg-3",attrs:{"data-aos":"fade-left"}},[n("h1",[t._v("Are some Selfies rarer then others?")]),t._v(" "),n("div",{staticClass:"description"},[t._v("\n          Yes. In each of three categories (planets, galaxies, characters)\n          there are different rarity levels assigned to each object.\n          "),n("br"),n("br"),t._v("\n          The rarest objects have the lowest % chance of being found within\n          the collection and each object has a corresponding rarity score.\n          "),n("br"),n("br"),t._v("\n          The sum of all the object scores within one Selfie marks the total\n          score for the image in our overall Ranking Table.\n        ")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 pr-lg-3",attrs:{"data-aos":"fade-right"}},[n("h1",[t._v('How can I get "Selfie Of The Multiverse"?')]),t._v(" "),n("div",{staticClass:"description"},[t._v('\n          "Selfies Of The Multiverse" can be exclusively purchased on\n          crypto.com platform. To navigate to the Featured Drop simply click\n          on "View Drop" in the first section of this page.\n          '),n("br"),n("br"),t._v("\n          The timer on this page will represent the correct date of the\n          Featured Drop and once the timer runs out on Crypto.com website,\n          simply refresh the page and grab your Mystery Selfie!\n          "),n("br"),n("br"),t._v('\n          The Featured Drop will happen via Mystery Packs. Each pack has a\n          fixed fee and contains 1 random "Selfie Of The Multiverse".\n        ')])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 pl-lg-5 mt-5 mt-lg-0",attrs:{"data-aos":"fade-left"}},[n("img",{staticClass:"img",attrs:{src:"img/8.png"}})])])])],1)}),[],!1,null,"08a5da2c",null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);n(292);var o=n(62),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer d-flex justify-content-center flex-column flex-lg-row"},[n("div",{staticClass:"mr-lg-2"},[t._v("2021 Copyrights © Selfies Of The Multiverse.")]),t._v(" "),n("div",[t._v("All rights reserved.")])])}],!1,null,"7e10db09",null);e.default=component.exports},302:function(t,e,n){"use strict";n(294)},303:function(t,e,n){var o=n(74),r=n(263),l=n(304),c=n(305),d=n(306),f=o(!1),v=r(l),h=r(c),m=r(d);f.push([t.i,'#app{background-color:#11192e;width:100%;min-height:100vh;font-family:"Ubuntu",sans-serif;overflow-y:hidden}.top-section{background:linear-gradient(0deg,rgba(57,9,104,0),rgba(57,9,104,0)),url('+v+");background-repeat:no-repeat;background-size:100% 100%;background-position:50%}.collapsed .navbar-toggler-icon{background-image:url("+h+")}.not-collapsed .navbar-toggler-icon{background-image:url("+m+")}",""]),t.exports=f},304:function(t,e,n){t.exports=n.p+"img/bg1.58a5e97.png"},305:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABvSURBVHgB7dSxCYBADEbhF3EAR3AEndxVHEFBbb0BlBgHOLS4gEi+6uCKvwkPwgPRhQ6lwcPBJLqy29NnAFJNRW9LLR6ERPg/0Y0BvzMda05mOyefAXE6//AtkvsokvE719mBMhm3XOeUyHjk+o0Ll/wbuHujeJ8AAAAASUVORK5CYII="},306:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBxZa9EcIwDEafU0CbEWADRoARmJQRMgJsEBqoqaEwskPFJWBH0sV3Oefk0/v8J1kh3uiBB08OYSu9QYs9LWtORDYNgavYdqzo8oAFXFgC35MmngyyirN8MfcKkUmWhchfhkak2HeOSLVPjcPsVZc4qs/tF8Ds5o2BauGhRCQHTgpGuHzMw79V9H/NumpbGpzbsltkcchV8JIxNVwt4poqXJOda7p2fXDMrt0Uywo+KnKnC7lsiVJZvDiali1D9LdvNCXSS/tcL84AAAAASUVORK5CYII="},307:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({}),r=(n(302),n(62)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"top-section"},[n("Header"),t._v(" "),n("Timer")],1),t._v(" "),n("Story",{attrs:{id:"story"}}),t._v(" "),n("Artist",{attrs:{id:"artist"}}),t._v(" "),n("About",{attrs:{id:"about"}}),t._v(" "),n("BottomTimer"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(295).default,Timer:n(296).default,Story:n(297).default,Artist:n(299).default,About:n(300).default,BottomTimer:n(298).default,Footer:n(301).default})}}]);