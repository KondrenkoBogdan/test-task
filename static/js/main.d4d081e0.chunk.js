(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{113:function(e,t,a){e.exports=a(233)},118:function(e,t,a){},119:function(e,t,a){},16:function(e,t,a){e.exports={menu:"menu_menu__3_8O_",headerOfMenu:"menu_headerOfMenu__83MgT",icon:"menu_icon__2gqE2",orders:"menu_orders__3pv2U",menuItem:"menu_menuItem__3RHQK"}},233:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(45),u=a.n(s),o=(a(118),a(119),a(7)),c=a(15),m=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.b,{to:"/first"},"TO FIRST PAGE"),i.a.createElement("br",null),i.a.createElement(c.b,{to:"/second"},"TO SECOND PAGE"))},r=a(48),l=a(99),d=a.n(l),p=a(103),h=a.n(p),y=a(104),f=a.n(y),w=a(101),D=a.n(w),g=a(102),T=a.n(g),B=a(100),W=a.n(B),E=a(16),_=a.n(E),q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:_.a.menu,style:{background:"#006D75"}},i.a.createElement("div",{className:_.a.headerOfMenu},i.a.createElement("span",{className:_.a.icon},i.a.createElement(W.a,null)),"Balance"),i.a.createElement(c.b,{to:"/"},i.a.createElement("div",{className:_.a.menuItem},i.a.createElement("span",{className:_.a.icon},i.a.createElement(D.a,null)),"Orders",i.a.createElement("span",{className:_.a.orders},i.a.createElement(T.a,null)))),i.a.createElement(c.b,{to:"/"},i.a.createElement("div",{className:_.a.menuItem},i.a.createElement("span",{className:_.a.icon},i.a.createElement(h.a,null)),"My info")),i.a.createElement(c.b,{to:"/"},i.a.createElement("div",{className:_.a.menuItem},i.a.createElement("span",{className:_.a.icon},i.a.createElement(f.a,null)),"Schedule"))))},A=a(3),O=a.n(A),F=a(107),x=a.n(F),P=a(106),I=a.n(P),C=a(105),b=a.n(C),N=function(e){var t=e.items,a=e.pageSelected,n=e.paginatorArray,s=e.pageChanger,u=e.pagePortion,o=e.portionsCount,m=e.portionChange,r=e.isMenu,l=e.toggleMenu,d=e.pageCountArray;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:O.a.mainPanel,style:{background:"#ccc"}},i.a.createElement("div",{className:O.a.myBalanceDiv,style:{background:"#00292E"}},i.a.createElement("span",{className:O.a.balanceTitle},"MY BALANCE",i.a.createElement("span",{style:{fontSize:"50px",marginLeft:"35px",position:"relative",top:"3px"}},"$"),i.a.createElement("span",{style:{fontSize:"60px",marginLeft:"10px",position:"relative",top:"3px"}},"708"),i.a.createElement("span",{style:{fontSize:"34px",color:"#667F82"}},",83"),i.a.createElement(c.b,{className:O.a.makeDeposit,to:"/"},i.a.createElement("span",{className:O.a.makeDeposit},"Make up deposit")))),i.a.createElement("div",{className:O.a.tabel,style:{background:"#00474F"}},i.a.createElement("div",{className:O.a.tabelRow},i.a.createElement("span",{className:O.a.hash},i.a.createElement("b",null,"#")),i.a.createElement("span",{className:O.a.dateTime},i.a.createElement("b",null,"Date & Time")),i.a.createElement("span",{className:O.a.info},i.a.createElement("b",null,"Info")),i.a.createElement("span",{className:O.a.type},i.a.createElement("b",null,"Type")),i.a.createElement("span",{className:O.a.cash},i.a.createElement("b",null,"Cash")),i.a.createElement("span",{className:O.a.status},i.a.createElement("b",null,"Status")))),t.map((function(e){return i.a.createElement("div",{key:e.id,className:O.a.tabelRow+" "+O.a.row},i.a.createElement("span",{className:O.a.hash+" "+O.a.rowItem},e.id),i.a.createElement("span",{className:O.a.dateTime+" "+O.a.rowItem},new Intl.DateTimeFormat("en-AU",{month:"short",year:"numeric",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1}).format(e.dateTime)),i.a.createElement("span",{className:O.a.info+" "+O.a.rowItem},e.info),i.a.createElement("span",{className:O.a.type+" "+O.a.rowItem},e.type),i.a.createElement("span",{className:O.a.cash+" "+O.a.rowItem},i.a.createElement("b",null,"$ ",e.cash)),i.a.createElement("span",{className:O.a.status+" "+O.a.rowItem+" "+("Error"===e.status?O.a.red:null)},e.status))})),i.a.createElement("div",{className:O.a.paginatorDiv},i.a.createElement("div",{className:O.a.paginator},i.a.createElement("span",{className:O.a.showOnPage},"Show on page: ",i.a.createElement("span",{onClick:function(){l()},className:O.a.showSelectedPage},r?i.a.createElement("div",{className:O.a.menu},d.map((function(e){return i.a.createElement("div",{className:O.a.menuItem,onClick:function(){s(e)}},e)}))):null,a,i.a.createElement("span",{className:O.a.bottomArch},i.a.createElement(b.a,{className:(r?O.a.rotated:null)+" "+O.a.arrow})))),i.a.createElement("span",{className:O.a.paginator},u>1?i.a.createElement("span",{onClick:function(){return m("minus")},className:O.a.paginatorArch},i.a.createElement(I.a,null)):null,n.map((function(e){return i.a.createElement("span",{onClick:function(){s(e)},className:(a===e?O.a.active:null)+" "+O.a.paginatorNum},e)})),u<o?i.a.createElement("span",{onClick:function(){return m("plus")},className:O.a.paginatorArch},i.a.createElement(x.a,null)):null)))))},k=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:d.a.mainScreen},i.a.createElement(q,null),i.a.createElement(N,e)))},v=a(22),K=a(49),S="Sale",M="Buy",G="Deposit",$="Done",L="Cancel",H="Error",U={items:[{id:1,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:2,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:3,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:4,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:5,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:6,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:7,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:8,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:9,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:10,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:11,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:12,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:13,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:14,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:15,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:16,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:17,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:18,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:19,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:20,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:21,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:22,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:24,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:25,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:26,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:27,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:28,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:29,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:30,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:31,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:32,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:33,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:34,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:35,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:36,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:37,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:38,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:39,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:40,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:41,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:42,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:43,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:44,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:45,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:46,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:47,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:48,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:49,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:50,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:51,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:52,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:53,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:54,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:55,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:56,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:57,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:58,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:59,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:60,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:61,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:62,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:63,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:64,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:65,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:66,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:67,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:68,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:69,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:70,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:71,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:72,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:73,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:74,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:75,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:76,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:77,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:78,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:79,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:80,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:81,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:82,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:83,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:84,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:85,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:86,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:87,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:88,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:89,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:90,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:91,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:92,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:93,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:94,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:95,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:96,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:97,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:98,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:99,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:100,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:101,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:102,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:103,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:104,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:105,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:106,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:107,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:108,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:109,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:110,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:111,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:112,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:113,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:114,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:115,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:116,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:117,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:118,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:119,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:120,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:121,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:122,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:123,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:124,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:125,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:126,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:127,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:128,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:129,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:130,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:131,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:132,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:133,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:134,dateTime:new Date(2021,4,27,11,44),info:"Buy in Fortnite the unique item, Golden Pickaxe",type:M,cash:2.25,status:$},{id:135,dateTime:new Date(2020,9,26,9,51),info:"Buy in WOW BFA the unique item, Axe of Ice King",type:G,cash:65,status:L},{id:136,dateTime:new Date(2019,11,27,14,46),info:"Buy in Fortnite the unique user, Happy 8 ball",type:M,cash:43,status:H},{id:137,dateTime:new Date(2018,11,14,4,52),info:"\xa0Make up deposit $ 5,000.00 to  your account.",type:S,cash:5000.25,status:$},{id:138,dateTime:new Date(2017,10,27,11,44),info:"Buy in Fortnite the unique user, Golden fish of enemy",type:S,cash:2.25,status:$},{id:139,dateTime:new Date(2016,9,27,11,44),info:"Buy in Fortnite the unique user, Death Unikorn ",type:S,cash:2.25,status:$},{id:140,dateTime:new Date(2015,8,27,11,44),info:"Buy in WOW BFA the unique item, Axe of Fire",type:S,cash:2.25,status:$},{id:141,dateTime:new Date(2014,7,27,11,44),info:"Buy in WOW Classic the unique game area, Dream of Life",type:S,cash:2.25,status:$},{id:142,dateTime:new Date(2013,6,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:143,dateTime:new Date(2012,5,27,11,44),info:"\xa0Make up deposit $ 1,500.00 to  your account.",type:S,cash:2.25,status:$},{id:144,dateTime:new Date(2011,4,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:145,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:146,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:147,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$},{id:148,dateTime:new Date(2010,3,27,11,44),info:"Buy in WOW Classic the unique item, Axe of Ice King",type:S,cash:2.25,status:$}],pagePortion:1,pagePortionCount:5,pageSelected:1,pageSize:12},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,a=Object(K.a)({},e);switch(t.type){case"SET_NEW_PORTION":return"plus"===t.e?a.pagePortion=a.pagePortion+1:a.pagePortion=a.pagePortion-1,a;case"SET_NEW_PAGE_SELECTED":return a.pageSelected=t.num,a;default:return a}},R=function(e){for(var t=e.firstPage.pageSelected,a=e.firstPage.pageSize,n=[],i=0;i<=e.firstPage.items.length;i++)i>=(t-1)*a&&i<=a*t-1&&i<e.firstPage.items.length&&n.push(e.firstPage.items[i]);return n},z=function(e){return e.firstPage.pageSelected},Z=function(e){return Math.ceil(e.firstPage.items.length/e.firstPage.pageSize)},Q=Object(v.b)((function(e){return{items:R(e),pageSelected:z(e),pagesCount:Z(e),pagePortion:e.firstPage.pagePortion,pagePortionCount:e.firstPage.pagePortionCount}}),{setNewPageSelected:function(e){return{type:"SET_NEW_PAGE_SELECTED",num:e}},setNewPortion:function(e){return{type:"SET_NEW_PORTION",e:e}}})((function(e){for(var t=Math.ceil(e.pagesCount/e.pagePortionCount),a=(e.pagePortion-1)*e.pagePortionCount,s=[],u=[],o=1;o<=e.pagesCount;o++)u.unshift(o);for(var c=a;c<=a+e.pagePortionCount;c++)c>0&&c<=e.pagesCount&&s.push(c);var m=Object(n.useState)(!1),l=Object(r.a)(m,2),d=l[0],p=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{portionChange:function(t){e.setNewPortion(t)},pageSelected:e.pageSelected,items:e.items,paginatorArray:s,pageChanger:function(t){e.setNewPageSelected(t)},portionsCount:t,pagePortion:e.pagePortion,isMenu:d,toggleMenu:function(){p(!1===d)},pageCountArray:u}))})),V=a(8),X={name:"Ksenia"},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=Object(K.a)({},e);switch(t.type){case"DAUN":default:return a}},Y=a(237),ee=Object(V.b)({firstPage:j,secondPage:J,form:Y.a}),te=Object(V.c)(ee),ae=a(73),ne=a.n(ae),ie=a(235),se=a(234),ue=a(110),oe=a(36),ce=a.n(oe),me=a(236),re=function(e){var t=e.meta,a=e.input,n=Object(ue.a)(e,["meta","input"]),s=t.touched&&t.error,u=t.active;return i.a.createElement("div",null,i.a.createElement("input",Object.assign({},a,n,{className:ce.a.myInfoInput+" "+(u?ce.a.selected:null)+" "+(s?ce.a.error:null)})),"password"===n.atribute||"text"===n.atribute?i.a.createElement("span",{className:ce.a.toggleButton,onClick:function(){n.toggleVisible()}},i.a.createElement(me.a,{style:{color:"white"}})):null,s?i.a.createElement("div",{style:{color:"rgba(255, 0, 0, 0.5)",fontWeight:"700",fontSize:"15px"}},t.error):null)},le=function(e){if(!e)return"This field can't be empty"},de=function(e){if(!/^[a-zA-Z]{2,15}$/.test(e))return"Invalid User Name"},pe=function(e){if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(e))return"Invalid email"},he=function(e){if(!/^(?=.*[0-9])(?=.*[a-zA-Z]).{3,}$/.test(e))return"Invalid password"},ye=function(e,t){if(e!==t.password)return"Password mismatch"},fe=function(e){var t=e.handleSubmit,a=Object(n.useState)("password"),s=Object(r.a)(a,2),u=s[0],o=s[1],c=function(){o("password"===u?"text":"password")};return i.a.createElement("div",{className:ne.a.formDiv},i.a.createElement("form",{onSubmit:t,className:ne.a.form},i.a.createElement(ie.a,{name:"userName",type:"text",placeholder:"USER NAME",validate:[le,de],component:re}),i.a.createElement(ie.a,{name:"email",type:"text",placeholder:"EMAIL",validate:[le,pe],component:re}),i.a.createElement(ie.a,{name:"firstName",type:"text",placeholder:"FIRST NAME",component:re}),i.a.createElement(ie.a,{name:"lastName",type:"text",placeholder:"LAST NAME",component:re}),i.a.createElement(ie.a,{toggleVisible:c,atribute:u,name:"password",type:u,placeholder:"PASSWORD",validate:[le,he],component:re}),i.a.createElement(ie.a,{toggleVisible:c,name:"repeatPassword",atribute:u,type:u,placeholder:"REPEAT PASSWORD",validate:[le,ye],component:re}),i.a.createElement("button",null,"Submit")))},we=fe=Object(se.a)({form:"MY-INFO"})(fe),De=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(we,null))};function ge(){return i.a.createElement("div",{className:"App"},i.a.createElement(o.a,{exact:!0,path:"/",render:m}),i.a.createElement(o.a,{path:"/first",component:Q}),i.a.createElement(o.a,{path:"/second",render:De}))}var Te=function(){return i.a.createElement(c.a,null,i.a.createElement(v.a,{store:te},i.a.createElement(ge,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={mainPanel:"mainPanel_mainPanel__1Fa1n",red:"mainPanel_red__2Tgfh",myBalanceDiv:"mainPanel_myBalanceDiv__ay993",balanceTitle:"mainPanel_balanceTitle__2yGin",makeDeposit:"mainPanel_makeDeposit__3XrN3",tabel:"mainPanel_tabel__28EMM",tabelRow:"mainPanel_tabelRow__3rYKF",hash:"mainPanel_hash__LmNkz",dateTime:"mainPanel_dateTime__nlvK1",info:"mainPanel_info__1nG3c",type:"mainPanel_type__3s0HX",cash:"mainPanel_cash__3X6pe",status:"mainPanel_status__2GnCa",rowItem:"mainPanel_rowItem__2emqw",row:"mainPanel_row__3e0M-",paginatorDiv:"mainPanel_paginatorDiv__2BQOE",paginator:"mainPanel_paginator__2sXMH",active:"mainPanel_active__1aAo8",paginatorNum:"mainPanel_paginatorNum__2n57H",paginatorArch:"mainPanel_paginatorArch__39JyQ",showOnPage:"mainPanel_showOnPage__34chy",showSelectedPage:"mainPanel_showSelectedPage__25Zh3",bottomArch:"mainPanel_bottomArch__26Jy3",menuItem:"mainPanel_menuItem__1ZUS2",menu:"mainPanel_menu__2BFb-",rotated:"mainPanel_rotated__2zY6F",arrow:"mainPanel_arrow__1GiGE"}},36:function(e,t,a){e.exports={myInfoInput:"formControl_myInfoInput__2QHev",selected:"formControl_selected__FXAAQ",error:"formControl_error__39G1j",toggleButton:"formControl_toggleButton__1Hb7y"}},73:function(e,t,a){e.exports={formDiv:"secondPart_formDiv__1InSb",form:"secondPart_form__qMV-I"}},99:function(e,t,a){e.exports={mainScreen:"FirstPage_mainScreen__3FqVT"}}},[[113,1,2]]]);
//# sourceMappingURL=main.d4d081e0.chunk.js.map