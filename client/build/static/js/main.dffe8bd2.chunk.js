(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(25),s=n.n(i),r=(n(49),n(3)),o=(n(50),n(5)),l=n(11),j=(n(51),n.p+"static/media/22.94c1cb81.jpg"),u=n.p+"static/media/flecha.52d6b436.png",b=(n(52),n(1));function d(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:" "}),Object(b.jsx)("div",{className:"spinner",children:" "})]})}function O(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1];return setTimeout((function(){a(!1)}),1e3),n?Object(b.jsx)(d,{}):Object(b.jsxs)("div",{className:"coco",children:[Object(b.jsx)("img",{className:"img-1",src:j,alt:"ss"}),Object(b.jsxs)("div",{className:"text-landing",children:[Object(b.jsx)("h5",{children:"EXPLORING"}),Object(b.jsx)("h1",{children:" THE WORLD"})]}),Object(b.jsx)("h6",{className:"description",children:"The world is a big place, conformed by countries with such incredible cultures and full of activities that make them unique in every way. Let's get together and see what it's got to show us."}),Object(b.jsx)("img",{className:"flecha",src:u,alt:"aaas"}),Object(b.jsx)(l.b,{to:"/Home",children:Object(b.jsx)("button",{className:"boton-landing",children:" EXPLORE DESTINATION"})})]})}var h=n(9),v=n(12),x=n(4),m=n(8),p=n(23),f=n.n(p),g="GET_ALL_COUNTRIES",N="GET_ALL_COUNTRIE_ID",C="SET_SORT",y="FILTER_BY_CONTINENT",A="GET_TOURIST_ACTIVITIES",T="FILTER_BY_ACTIVITIES";function S(){return function(){var e=Object(m.a)(Object(x.a)().mark((function e(t){var n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("http://localhost:3001/countries");case 3:n=e.sent,t({type:g,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function E(e){return{type:C,payload:e}}n(81);function I(e){return Object(b.jsxs)("div",{className:"container-card",children:[Object(b.jsx)(l.b,{to:"/Home/CountrieDetail/".concat(e.id),children:Object(b.jsx)("img",{className:"imagen",src:e.image,alt:"Flag Countrie"})}),Object(b.jsxs)("div",{className:"container-text",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsxs)("h5",{children:["Continent: ",e.continent]})]})]})}n(82),n(41);function _(){return Object(b.jsx)("div",{className:"navbar-container ",children:Object(b.jsx)(l.b,{to:"/Home/CreateActivity",children:Object(b.jsx)("button",{className:"boton-createActividad",children:"Create Activity"})})})}n(83);function P(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container-buttons",children:[Object(b.jsx)("h3",{className:"botonPrevNext",onClick:e.prevHandler,disabled:e.currentPage<=1&&!0,children:"\u2190"}),Object(b.jsxs)("h4",{children:["PAGE ",e.currentPage+1]}),Object(b.jsx)("h3",{className:"botonPrevNext",onClick:e.nextHandler,children:"\u2192"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"container-cards",children:e.items})})]})}var D=n.p+"static/media/icon.35f6f4c4.png";function w(){var e,t=Object(v.c)((function(e){return e.countries})),n=Object(v.c)((function(e){return e.allCountries})),a=Object(v.c)((function(e){return e.allActivities})),i=Object(c.useState)(0),s=Object(o.a)(i,2),r=s[0],l=s[1],j=Object(c.useState)([]),u=Object(o.a)(j,2),O=u[0],x=u[1],m=Object(c.useState)([]),p=Object(o.a)(m,2),g=p[0],N=p[1],C=Object(v.b)(),w=0===r?9:10;function H(e){var t;"none"===e.target.value?C(S()):C((t=e.target.value,{type:T,payload:t})),l(0)}Object(c.useEffect)((function(){C(S()),C((function(e){f.a.get("http://localhost:3001/activities").then((function(t){return e({type:A,payload:t.data})})).catch((function(e){return console.log(e)}))}))}),[C]),Object(c.useEffect)((function(){t.length&&!O.length&&x(t),N(O.slice(r*w,r*w+w))}),[C,r,O,t,w]);var L=Object(c.useState)(""),k=Object(o.a)(L,2),F=k[0],R=k[1];Object(c.useEffect)((function(){F.length?x(null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(F.toLowerCase())?e:null}))):x(t)}),[F,t]);var U=g.map((function(e){return Object(b.jsx)(I,{id:e.id,name:e.name,image:e.flag,continent:e.continent},e.id)}));return t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsxs)("div",{className:"container_filtros",children:[Object(b.jsxs)("div",{className:"buscador_and_image",children:[Object(b.jsx)("img",{className:"img_buscador",src:D,alt:"fotito"}),Object(b.jsx)("input",{className:"input",type:"text",placeholder:"Search country...",value:F,onChange:function(e){return function(e){R(e.target.value),l(0)}(e)}})]}),Object(b.jsxs)("div",{className:"filter_alpgh",children:["Alphabetical filtering",Object(b.jsxs)("select",{onClick:function(e){C(E(e.target.value))},onChange:function(){return l(0)},children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"DESC",children:"A-Z"}),Object(b.jsx)("option",{value:"ASC",children:"Z-A"})]})]}),Object(b.jsxs)("div",{className:"filter_pop",children:["Population Filtering",Object(b.jsxs)("select",{onClick:function(e){C(E(e.target.value))},onChange:function(){return l(0)},children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"POPULATION_ASC",children:"Population \u21a5"}),Object(b.jsx)("option",{value:"POPULATION_DESC",children:"Population \u21a7"})]})]}),Object(b.jsxs)("div",{className:"filter_continents",children:["Filtered continents",Object(b.jsxs)("select",{onClick:function(e){var t;C((t=e.target.value,{type:y,payload:t}))},onChange:function(){return l(0)},children:[Object(b.jsx)("option",{value:"All"}),null===(e=function(){var e=[];return n.map((function(t){return e.includes(t.continent)?null:e.push(t.continent)})),e}())||void 0===e?void 0:e.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]}),Object(b.jsxs)("div",{className:"filter_continents",children:["Filter by activity",Object(b.jsxs)("select",{onChange:function(e){return H(e)},children:[Object(b.jsx)("option",{value:"Todos"}),0===a.length?Object(b.jsx)("option",{value:"none",children:"No activity"}):null===a||void 0===a?void 0:a.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})]}),Object(b.jsx)("div",{className:"container-cards",children:Object(b.jsx)(P,{items:U,currentPage:r,nextHandler:function(){var e=r+1,t=e*w;g.length<10&&0!==r||(N(Object(h.a)(O).slice(t,t+w)),l(e))},prevHandler:function(){var e=r-1;if(!(e<0)){var t=e*w;N(Object(h.a)(O).slice(t,t+w)),l(e)}}})})]}):Object(b.jsx)(d,{})}n(84);var H=n.p+"static/media/icon1.169fb091.png";function L(){return Object(b.jsx)("div",{className:"navbar-container ",children:Object(b.jsx)("img",{className:"logo-nav2",src:H,alt:"Logo NavBar"})})}function k(){var e,t,n,a,i,s,j,u,O=Object(r.n)().id,h=Object(v.c)((function(e){return e.countrieDetail})),p=Object(v.b)(),g=Object(c.useState)(!0),C=Object(o.a)(g,2),y=C[0],A=C[1];return Object(c.useEffect)((function(){p(function(e){return function(){var t=Object(m.a)(Object(x.a)().mark((function t(n){var c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("http://localhost:3001/countries/"+e);case 3:c=t.sent,n({type:N,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(O))}),[p,O]),setTimeout((function(){A(!1)}),1e3),y?Object(b.jsx)(d,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(L,{}),Object(b.jsx)(l.b,{to:"/Home",children:Object(b.jsx)("button",{className:"button-back",children:"BACK"})}),Object(b.jsxs)("div",{className:"container-card-detail",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"name-detail",children:null===(e=h[0])||void 0===e?void 0:e.name}),Object(b.jsx)("img",{className:"imagen-detail",src:null===(t=h[0])||void 0===t?void 0:t.flag,alt:"llamado detalle im"}),Object(b.jsxs)("h4",{className:"datos-pais",children:["Capital: ",null===(n=h[0])||void 0===n?void 0:n.capital]}),Object(b.jsxs)("h4",{className:"datos-pais",children:["Subregion: ",null===(a=h[0])||void 0===a?void 0:a.subregion]}),Object(b.jsxs)("h4",{className:"datos-pais",children:["Area: ",null===(i=h[0])||void 0===i?void 0:i.area]}),Object(b.jsxs)("h4",{className:"datos-pais",children:["Population: ",null===(s=h[0])||void 0===s?void 0:s.population]})]}),Object(b.jsxs)("div",{className:"container-detail",children:[Object(b.jsx)("h3",{children:"TOURIST ACTIVITIES:"}),Object(b.jsx)("section",{className:"contenedor-general",children:null!==(j=h[0])&&void 0!==j&&j.Activities.length?null===(u=h[0])||void 0===u?void 0:u.Activities.map((function(e){return Object(b.jsxs)("div",{className:"activities-container",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsxs)("p",{children:["Difficulty: ",e.difficulty]}),Object(b.jsxs)("p",{children:["Duration: ",e.duration," horas"]}),Object(b.jsxs)("p",{children:["Season: ",e.season]})]})})):Object(b.jsx)("h3",{className:"activities-container",children:"There are no tourist activities in this country."})})]}),Object(b.jsx)(l.b,{to:"/Home/CreateActivity",children:Object(b.jsx)("div",{className:"button",children:Object(b.jsx)("h6",{className:"name-add-activity",children:"ADD ACTIVITY"})})})]})]})}var F=n(6),R=n(7);n(85);function U(){var e=Object(v.c)((function(e){return e.countries})),t=Object(v.b)(),n=Object(c.useState)({}),a=Object(o.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)({name:"",difficulty:"",duration:"",season:"",countries:[]}),j=Object(o.a)(r,2),u=j[0],O=j[1];var p=function(e){O((function(t){return"countries"===e.target.name?Object(R.a)(Object(R.a)({},t),{},{countries:[].concat(Object(h.a)(t.countries),[e.target.value])}):Object(R.a)(Object(R.a)({},t),{},Object(F.a)({},e.target.name,e.target.value))}))};return Object(c.useEffect)((function(){t(S())}),[t]),e.length?Object(b.jsxs)("div",{children:[Object(b.jsx)(L,{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(l.b,{to:"/Home",children:Object(b.jsx)("button",{className:"button-back2",children:"BACK"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"container-form",onSubmit:function(e){return e.preventDefault(),u.name&&u.difficulty&&u.duration&&u.season&&u.countries?i.name?alert("\u274cNo characters are allowed in 'NAME'."):(t((n=u,Object(m.a)(Object(x.a)().mark((function e(){var t;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("http://localhost:3001/activities",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))),alert("\u2714\ufe0fActivity created successfully"),void O({name:"",difficulty:"",duration:"",season:"",countries:[]})):alert("\u274cPlease complete all fields. ");var n},children:[Object(b.jsx)("label",{children:"Activity Name: "}),Object(b.jsx)("input",{type:"text",name:"name",value:u.name,onChange:function(e){return function(e){O(Object(R.a)(Object(R.a)({},u),{},Object(F.a)({},e.target.name,e.target.value))),s(function(e){var t={};return/[^A-Za-z0-9 ]+/g.test(e.name)&&(t.name="* Name cannot have special characters or accents."),t}(Object(R.a)(Object(R.a)({},u),{},Object(F.a)({},e.target.name,e.target.value))))}(e)},placeholder:"Name..."}),i.name&&Object(b.jsx)("p",{className:"errores",children:i.name}),Object(b.jsx)("label",{children:"Difficulty"}),Object(b.jsxs)("select",{className:"content-select-difficulty",name:"difficulty",onChange:function(e){return p(e)},children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:1,children:"1"}),Object(b.jsx)("option",{value:2,children:"2"}),Object(b.jsx)("option",{value:3,children:"3"}),Object(b.jsx)("option",{value:4,children:"4"}),Object(b.jsx)("option",{value:5,children:"5"})]}),Object(b.jsx)("label",{children:"Duration"}),Object(b.jsxs)("select",{className:"content-select-duration",name:"duration",onChange:function(e){return p(e)},children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:1,children:"1 Hr"}),Object(b.jsx)("option",{value:2,children:"2 Hrs"}),Object(b.jsx)("option",{value:3,children:"3 Hrs"}),Object(b.jsx)("option",{value:4,children:"4 Hrs"}),Object(b.jsx)("option",{value:5,children:"5 Hrs"})]}),Object(b.jsx)("label",{children:"Season"}),Object(b.jsxs)("select",{className:"content-select-season",name:"season",onChange:function(e){return p(e)},children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"winter",children:"Winter"}),Object(b.jsx)("option",{value:"summer",children:"Summer"}),Object(b.jsx)("option",{value:"spring",children:"Spring"}),Object(b.jsx)("option",{value:"autumn",children:"Autumn"})]}),Object(b.jsx)("label",{children:"Countries"}),Object(b.jsxs)("select",{className:"content-select",name:"countries",id:"countries",onChange:function(e){return p(e)},children:[Object(b.jsx)("option",{}),null===e||void 0===e?void 0:e.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(b.jsx)("div",{className:"div-paises-select",children:u.countries.map((function(e){return Object(b.jsxs)("div",{className:"container-countries-select",children:[Object(b.jsxs)("p",{children:[" ",e," "]},e.id),Object(b.jsxs)("h6",{className:"x-delete",onClick:function(){return function(e){O(Object(R.a)(Object(R.a)({},u),{},{countries:u.countries.filter((function(t){return t!==e}))}))}(e)},children:["x"," "]})]})}))}),Object(b.jsx)("button",{className:"button-back1",children:"CREATE ACTIVITY"})]})})]}):Object(b.jsx)(d,{})}var B=function(){return Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",element:Object(b.jsx)(O,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/Home",element:Object(b.jsx)(w,{})}),Object(b.jsx)(r.a,{path:"/Home/CountrieDetail/:id",element:Object(b.jsx)(k,{})}),Object(b.jsx)(r.a,{path:"Home/CreateActivity",element:Object(b.jsx)(U,{})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},V=n(28),Y=n(43),M=n(44),W={countries:[],countrieDetail:[],allCountries:[],allActivities:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(R.a)(Object(R.a)({},e),{},{countries:t.payload,allCountries:t.payload});case A:return Object(R.a)(Object(R.a)({},e),{},{allActivities:t.payload});case N:return Object(R.a)(Object(R.a)({},e),{},{countrieDetail:t.payload});case C:var n="ASC"===t.payload?e.countries.sort((function(e,t){return t.name.localeCompare(e.name)})):"DESC"===t.payload?e.countries.sort((function(e,t){return e.name.localeCompare(t.name)})):"POPULATION_ASC"===t.payload?e.countries.sort((function(e,t){return t.population-e.population})):"POPULATION_DESC"===t.payload?e.countries.sort((function(e,t){return e.population-t.population})):e.countries;return Object(R.a)(Object(R.a)({},e),{},{countries:Object(h.a)(n)});case y:var c=e.allCountries,a="All"===t.payload?c:null===c||void 0===c?void 0:c.filter((function(e){return e.continent===t.payload}));return Object(R.a)(Object(R.a)({},e),{},{countries:a});case T:for(var i=e.allCountries,s=i.filter((function(e){return e.Activities.length>0})),r=[],o=0;o<s.length;o++)for(var l=0;l<s[o].Activities.length;l++)s[o].Activities[l].name===t.payload&&r.push(s[o]);var j="Todos"===t.payload?i:r;return Object(R.a)(Object(R.a)({},e),{},{countries:j});default:return e}},J=Object(V.createStore)(Z,Object(Y.composeWithDevTools)(Object(V.applyMiddleware)(M.a)));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v.a,{store:J,children:Object(b.jsx)(l.a,{children:Object(b.jsx)(B,{})})})}),document.getElementById("root")),G()}},[[86,1,2]]]);
//# sourceMappingURL=main.dffe8bd2.chunk.js.map