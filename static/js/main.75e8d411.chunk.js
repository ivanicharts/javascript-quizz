(window["webpackJsonpjavascript-quizz"]=window["webpackJsonpjavascript-quizz"]||[]).push([[0],{430:function(n,e,t){},431:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(67),o=t.n(c),i=t(1),u=t(2),l=t(9),s=t(15),d=t.n(s),f=t(26),p=t(12),b=t(14),m=t.n(b),v=t(68),g=t.n(v),h=t(69),x=t.n(h),j=t(70),w=t(75);var O=function(n){var e,t=n.filter(function(n){return"inline"===n.type||"code"===n.tag||"hr"===n.type}),r=0,a=[],c=0;for(g(function(n){return"hr"!==n.tag||!(++c>=3)});r<t.length-1;){for(var o=++r,i=g(function(n){return"hr"!==n.tag}),u=t.slice(o,i),l=Object(w.a)(u),s=l[0],d=l.slice(1),f=[];d[0]&&"code"===d[0].tag;)f.push(d.shift().content);var p=d.findIndex(function(n){return n.content.includes("<details><summary><b>Answer")}),b=d.findIndex(function(n){return n.content.includes("</p>")}),m=d[p+1],v=b>-1?d.slice(p+2,b):d.slice(p+2);a.push({id:a.length,title:(e=s.content,(new DOMParser).parseFromString(e,"text/html").body.textContent||"Parse error"),code:f,answer:m.content,options:d.slice(0,p).map(function(n){return n.content}),answerIndex:m.content.slice(-1).charCodeAt(0)-65,description:v.map(function(n){return"code"===n.tag?n:n.content})})}function g(n){for(;n(t[r])&&r<t.length-1;)r++;return r}return a},E=function(n,e,t){return null===n?"":e===t?"correct":e===n?"wrong":void 0},y=function(){return window&&window.scrollTo(0,0)},k=Object(r.createContext)(),C=Object(r.createContext)(),I="questions/set",q="questions/answer/set",A="questions/clear",z="https://raw.githubusercontent.com/lydiahallie/javascript-questions/master/README.md",P="questions/original",Q="questions/in-progress",W=Object(j.a)(function(n,e){var t=e.type,r=e.payload;switch(t){case I:return r;case A:return[];case q:var a=n.find(function(n){return n.id===r.id});return a&&(a.userAnswerIndex=r.answerIndex),n;default:throw new Error("Unhandled action type: ".concat(t))}});function N(n){var e=n.children,t=Object(r.useReducer)(W,[]),c=Object(p.a)(t,2),o=c[0],i=c[1];return Object(r.useEffect)(function(){Object(f.a)(d.a.mark(function n(){var e,t,r,a,c,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([D().then(function(n){return i({type:I,payload:n}),!0}).catch(function(n){return console.error(n),!1}),x.a.get(z).then(function(n){return n.data}).catch(function(n){return console.error(n),!1})]);case 2:if(e=n.sent,t=Object(p.a)(e,2),r=t[0],a=t[1]){n.next=8;break}return n.abrupt("return");case 8:c=(new g.a).parse(a),o=O(c),r||i({type:I,payload:o}),m.a.setItem(P,o);case 12:case"end":return n.stop()}},n)}))()},[]),a.a.createElement(k.Provider,{value:o},a.a.createElement(C.Provider,{value:i},e))}function S(n){var e=Object(r.useContext)(k);if(void 0===e)throw new Error("useQuestionState must be used within a QuestionProvider");return e}function R(){var n=function(n){var e=Object(r.useContext)(C);if(void 0===e)throw new Error("useQuestionDispatch must be used within a QuestionProvider");return e}();return Object(r.useMemo)(function(){return{setQuestions:function(e){return n({type:I,payload:e})},setAnswer:function(e){return n({type:q,payload:e})},clear:function(e){return n({type:A})},init:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem(P);case 2:t=e.sent,n({type:I,payload:t});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}},[n])}function U(){return[S(),R()]}function D(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(d.a.mark(function n(){var e,t,r=arguments;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.length>0&&void 0!==r[0]?r[0]:[],n.next=3,m.a.getItem(Q);case 3:if(!(e=n.sent)){n.next=6;break}return n.abrupt("return",e);case 6:return n.next=8,m.a.getItem(P);case 8:if(!(t=n.sent)){n.next=11;break}return n.abrupt("return",t);case 11:throw new Error("No questions found in Cash storage");case 12:case"end":return n.stop()}},n)}))).apply(this,arguments)}function L(){var n=Object(i.a)(["\n  width: 100%;\n"]);return L=function(){return n},n}function M(){var n=Object(i.a)(["\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);\n  padding: 20px 15px;\n  width: 100%;\n"]);return M=function(){return n},n}var _=Object(u.a)("section")(M()),B=Object(u.a)("div")(L());function F(){var n=Object(i.a)(["\n  color: #fff;\n  background: #DC5454;\n\n  &:hover {\n    background: #b94141;\n  }\n"]);return F=function(){return n},n}function J(){var n=Object(i.a)(["\n  border: 0;\n  outline: 0;\n  background: #E7ECF3;\n  color: #566588;\n  padding: 10px 30px;\n  border-radius: 3px;\n  font-size: 16px;\n  cursor: pointer;\n  text-transform: capitalize;\n  transition: .2s background;\n\n  &:hover {\n    background: #b8c4d6;\n  }\n"]);return J=function(){return n},n}var H=Object(u.a)("button")(J()),V=Object(u.a)(H)(F());function $(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n  height: 100%;\n  flex: 1;\n  padding: 0 20px;\n  max-width: 1200px;\n  margin: 20px auto;\n"]);return $=function(){return n},n}var G=Object(u.a)("main")($());function K(){var n=Object(i.a)(["\n  color: #5a5b5e;\n "]);return K=function(){return n},n}function X(){var n=Object(i.a)(["\n  font-weight: 700;\n  font-size: 18px;\n  margin: 15px 0;\n"]);return X=function(){return n},n}function Y(){var n=Object(i.a)(["\n  padding: 0;\n"]);return Y=function(){return n},n}function Z(){var n=Object(i.a)(["\n  margin: 7px 10px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(i.a)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n  text-align: center;\n  margin: 15px 0;\n  color: #5a5b5e;\n  padding: 0;\n"]);return en=function(){return n},n}function tn(){var n=R().init;return a.a.createElement(B,null,a.a.createElement(rn,null,"Interactive list of JavaScript Questions"),a.a.createElement(_,null,a.a.createElement(on,null,a.a.createElement(un,null,"What is this ?"),a.a.createElement(ln,null,a.a.createElement("p",null,"This is the interactive representation of \xa0",a.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/lydiahallie/javascript-questions"},"javascript-questions"),"\xa0 repository. All questions are parsed from there."),a.a.createElement("p",null,"The source code of this app can be found \xa0",a.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/ivanicharts/javascript-quizz"},"here"),".")),a.a.createElement(an,null,a.a.createElement(cn,{to:"/progress"},a.a.createElement(H,null,"Continue")),a.a.createElement(cn,{to:"/questions"},a.a.createElement(H,{onClick:n},"Start new"))))))}var rn=Object(u.a)("h2")(en()),an=Object(u.a)("div")(nn()),cn=Object(u.a)(l.b)(Z()),on=Object(u.a)("div")(Y()),un=Object(u.a)("div")(X()),ln=Object(u.a)("div")(K()),sn=t(41),dn=t.n(sn),fn=t(42),pn=t.n(fn),bn=t(21),mn=t.n(bn),vn=t(13);t(429);function gn(){var n=Object(i.a)(["\n  p {\n    cursor: pointer;\n    background: #f6f8fa;\n    padding: 13px;\n    border-radius: 3px;\n    border: 1px solid rgba(0,0,0, .1);\n    margin: 0 0 15px;\n    \n    &:hover {\n      background: #e9ebec;\n    }\n  }\n\n  .correct p {\n    color: #155724;\n    background-color: #d4edda;\n    border-color: #c3e6cb;\n  }\n\n  .wrong p {\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n  }\n\n  .correct code {\n    background: #a5d6b1;\n  }\n\n  .wrong code {\n    background: #e4b4b8;\n  }\n\n  code {\n    background: #d6dade;\n    padding: 2px 3px 0;\n  }\n  \n"]);return gn=function(){return n},n}function hn(){var n=Object(i.a)(["\n  margin: 0 0 15px;\n\n  pre {\n    margin: 0;\n  }  \n"]);return hn=function(){return n},n}function xn(){var n=Object(i.a)(["\n  border-top: 1px solid rgba(0,0,0, .1);\n  /* margin-top: 27px;   */\n"]);return xn=function(){return n},n}function jn(){var n=Object(i.a)(["\n  margin: 15px 0;\n  line-height: 1;\n"]);return jn=function(){return n},n}function wn(){var n=Object(i.a)(["\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);\n  padding: 2px 15px;\n"]);return wn=function(){return n},n}function On(){var n=Object(i.a)(["\n  opacity: .3;\n  padding: 7px 0;\n  text-align: right;\n"]);return On=function(){return n},n}function En(){var n=Object(i.a)(["\n  margin-right: 10px;\n"]);return En=function(){return n},n}function yn(){var n=Object(i.a)(["\n  opacity: .3;\n  padding: 7px 0;\n"]);return yn=function(){return n},n}function kn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(i.a)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto 50px;\n"]);return Cn=function(){return n},n}function In(){var n=Object(i.a)(["\n  line-height: 23px;\n\n  p code {\n    background: #eaeef3;\n    padding: 2px 3px 0;\n  }\n"]);return In=function(){return n},n}function qn(){var n=Object(i.a)(["\n  margin-left: 0;\n"]);return qn=function(){return n},n}function An(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 25px 0 15px 20px;\n  \n  @media screen and (max-width: 616px) {\n    margin: 5px;\n  }\n"]);return An=function(){return n},n}function zn(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 616px) {\n    justify-content: center;\n    width: 100%;\n  }\n"]);return zn=function(){return n},n}function Pn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 616px) {\n    flex-direction: column-reverse;\n  }\n"]);return Pn=function(){return n},n}var Qn=Object(u.a)("div")(Pn()),Wn=Object(u.a)("div")(zn()),Nn=Object(u.a)("div")(An()),Sn=Object(u.a)(Nn)(qn()),Rn=Object(u.a)("div")(In()),Un=Object(u.a)("div")(Cn()),Dn=Object(u.a)("div")(kn()),Tn=Object(u.a)("div")(yn()),Ln=Object(u.a)("span")(En()),Mn=Object(u.a)("div")(On()),_n=Object(u.a)("div")(wn()),Bn=Object(u.a)("h3")(jn()),Fn=Object(u.a)("div")(xn()),Jn=Object(u.a)("div")(hn()),Hn=Object(u.a)("div")(gn()),Vn=Object(vn.f)(function(n){var e=n.history,t=n.match,c=U(),o=Object(p.a)(c,2),i=o[0],u=o[1],s=t.params.id?parseInt(t.params.id-1):0,d=i[s]||null,f=d&&!mn()(d.userAnswerIndex)?d.userAnswerIndex:null;Object(r.useEffect)(function(){m.a.setItem("questions/in-progress",i)},[i]);var b=Object(r.useCallback)(function(){var n=(s+1)%i.length;e.push("/questions/".concat(n+1)),y()},[s,e,i.length]),v=Object(r.useCallback)(function(){var n=(s-1)%i.length;e.push("/questions/".concat(n+1)),y()},[s,e,i.length]),g=Object(r.useCallback)(function(n){u.setAnswer({id:d.id,answerIndex:n})},[d,u]),h=Object(r.useMemo)(function(){var n=i.reduce(function(n,e){return mn()(e.userAnswerIndex)||n[+!(e.answerIndex===e.userAnswerIndex)]++,n},[0,0]),e=Object(p.a)(n,2);return{correctQuestionsCount:e[0],wrongQuestionsCount:e[1]}},[i]),x=h.correctQuestionsCount,j=h.wrongQuestionsCount;return a.a.createElement(B,null,null!==d&&a.a.createElement(Un,null,a.a.createElement(Dn,null,a.a.createElement(Tn,null,a.a.createElement(Ln,null,"Correct: ",x),a.a.createElement("span",null,"Wrong: ",j)),a.a.createElement(Mn,null,"Question: ",s+1," of ",i.length)),a.a.createElement(_n,null,a.a.createElement(Bn,null,d.title),!!d.code.length&&d.code.map(function(n,e){return a.a.createElement(Fn,{key:e},a.a.createElement(pn.a,{className:"javascript"},n))}),a.a.createElement(Hn,null,d.options.map(function(n,e){return a.a.createElement("div",{key:n,className:E(f,e,d.answerIndex),onClick:null===f?function(){return g(e)}:null},a.a.createElement(dn.a,{source:n}))})),null!==f&&a.a.createElement(Fn,null,a.a.createElement("h4",null,d.answer),a.a.createElement(Rn,null,d.description.map(function(n){return"string"===typeof n?a.a.createElement(dn.a,{key:n,source:n,escapeHtml:!1}):a.a.createElement(Jn,{key:n},a.a.createElement(pn.a,{className:"javascript"},n.content))}))),a.a.createElement(Qn,null,a.a.createElement(Wn,null,a.a.createElement(Sn,null,a.a.createElement(l.b,{to:"/"},a.a.createElement(V,null,"cancel"))),a.a.createElement(Nn,null,a.a.createElement(l.b,{to:"/progress"},a.a.createElement(H,null,"progress")))),a.a.createElement(Wn,null,s>0&&a.a.createElement(Nn,null,a.a.createElement(H,{onClick:v},"prev")),s<i.length-1&&a.a.createElement(Nn,null,a.a.createElement(H,{onClick:b},"next")))))))});function $n(){var n=Object(i.a)(["\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0 0 15px 0;\n"]);return $n=function(){return n},n}function Gn(){var n=Object(i.a)(["\n  padding: 0;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(i.a)(["\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  background: ",";\n  color: ",";\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(i.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(i.a)(["\n  margin: 20px 0 0;\n"]);return Yn=function(){return n},n}var Zn=function(n){var e=n.userAnswerIndex,t=n.answerIndex;return mn()(e)?null:e===t?"valid":"invalid"};function ne(){var n=U(),e=Object(p.a)(n,1)[0];return a.a.useEffect(function(){y()},[]),a.a.createElement(_,null,a.a.createElement(ae,null,a.a.createElement(ce,null,"Progress"),a.a.createElement(te,null,e.map(function(n){return a.a.createElement(l.b,{key:n.id,to:{pathname:"/questions/".concat(n.id+1)}},a.a.createElement(re,{status:Zn(n)},n.id+1))})),a.a.createElement(ee,null,a.a.createElement(l.b,{to:"/"},a.a.createElement(V,null,"cancel")))))}var ee=Object(u.a)("section")(Yn()),te=Object(u.a)("div")(Xn()),re=Object(u.a)(H)(Kn(),function(n){var e=n.status;return"valid"===e?"#65d68a":"invalid"===e?"#dc5454":"#E7ECF3"},function(n){return n.status?"#fff":"#566588"}),ae=Object(u.a)("div")(Gn()),ce=Object(u.a)("div")($n());function oe(){return a.a.createElement(l.a,{basename:"/"},a.a.createElement(vn.c,null,a.a.createElement(vn.a,{exact:!0,path:"/",component:tn}),a.a.createElement(vn.a,{path:"/questions/:id?",component:Vn}),a.a.createElement(vn.a,{path:"/progress",component:ne})))}var ie=function(){return a.a.createElement(N,null,a.a.createElement(G,null,a.a.createElement(oe,null)))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}t(430);o.a.render(a.a.createElement(ie,null),document.getElementById("root")),"development"===Object({NODE_ENV:"production",PUBLIC_URL:"/javascript-quizz"})?"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()}):function(n){if("serviceWorker"in navigator){if(new URL("/javascript-quizz",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/javascript-quizz","/service-worker.js");ue?(!function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):le(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):le(e,n)})}}()},78:function(n,e,t){n.exports=t(431)}},[[78,1,2]]]);
//# sourceMappingURL=main.75e8d411.chunk.js.map