(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{37:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(3);t.a=function(){return Object(a.jsx)("img",{src:n,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},38:function(e,t,c){"use strict";var n=c(4),a=c.n(n),r=c(6),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=d0cba7230807643ac1c3837fafb40afd",j=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?limit=").concat(t,"&offset=").concat(n,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(d));case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",d(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{id:e.id,name:e.name,description:e.description?e.description:"Not info about this character !",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:0===e.comics.items.length?[{name:"Not comics about this character !"}]:e.comics.items.slice(0,10)}},O=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,getAllCharacters:j,getCharacter:b,clearError:o,getAllComics:h,getComic:m}}},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),r=c(38),s=c(22),i=c(37),o=(c(39),c(3)),l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(o.jsxs)("div",{className:"skeleton",children:[Object(o.jsxs)("div",{className:"pulse skeleton__header",children:[Object(o.jsx)("div",{className:"pulse skeleton__circle"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"})]})]})};c(40);var u=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?{objectFit:"contain"}:null;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:a,style:l,alt:"abyss"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:c}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:n}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsx)("ul",{className:"char__comics-list",children:i.map((function(e,t){return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})},j=function(e){var t=e.charId,c=Object(a.useState)(null),j=Object(n.a)(c,2),b=j[0],h=j[1],m=Object(r.a)(),d=m.loading,O=m.error,f=m.getCharacter,p=m.clearError;Object(a.useEffect)((function(){v()}),[t]);var v=function(){t&&(p(),f(t).then(x))},x=function(e){h(e)},_=b||d||O?null:Object(o.jsx)(l,{}),g=O?Object(o.jsx)(i.a,{}):null,N=d?Object(o.jsx)(s.a,{}):null,k=d||O||!b?null:Object(o.jsx)(u,{char:b});return Object(o.jsxs)("div",{className:"char__info",children:[_,g,N,k]})},b=c(7);c(41),c.p;var h=function(e){var t=e.onCharSelected,c=Object(a.useState)([]),l=Object(n.a)(c,2),u=l[0],j=l[1],h=Object(a.useState)(1),m=Object(n.a)(h,2),d=m[0],O=m[1],f=Object(a.useState)(210),p=Object(n.a)(f,2),v=p[0],x=p[1],_=Object(r.a)(),g=_.loading,N=_.error,k=_.getAllCharacters;Object(a.useEffect)((function(){w()}),[]);var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;k(e,v).then((function(e){return e.map((function(e){return y(e)}))})),x(v+e)},y=function(e){var t={name:e.name,thumbnail:e.thumbnail,id:e.id};j((function(e){return[].concat(Object(b.a)(e),[t])}))},C=N?Object(o.jsx)(i.a,{}):null,E=g?Object(o.jsx)(s.a,{}):null,S=function(e){var c=e.map((function(e,c){var n=e.name,a=e.thumbnail,r=e.id,s="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?{objectFit:"contain"}:null;return Object(o.jsxs)("li",{onClick:function(){t(r),O(c)},onFocus:function(){O(c)},onKeyDown:function(e){"Enter"!==e.key&&"Space"!==e.key||t(r)},tabIndex:"0",className:"char__item ".concat(c===d?"char__item_selected":""),children:[Object(o.jsx)("img",{src:a,alt:n||"No img",style:s}),Object(o.jsx)("div",{className:"char__name",children:n||"No name"})]},r)}));return Object(o.jsx)("ul",{className:"char__grid",children:c})}(u);return Object(o.jsxs)("div",{className:"char__list",children:[C,S,E,Object(o.jsx)("button",{className:"button button__main button__long",onClick:function(){w(3),x(v+3)},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})};var m=function(e){var t=Object(a.useState)(!1),c=Object(n.a)(t,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(e,t){console.log(e,t),s(!0)};return window.addEventListener("error",e),function(){window.removeEventListener("error",e)}}),[]),r?Object(o.jsx)(i.a,{}):e.children},d=(c(42),c.p+"static/media/mjolnir.61f31e18.png");var O=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?{objectFit:"contain"}:null;return Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:a,alt:"Random character",style:i,className:"randomchar__img"}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:c}),Object(o.jsx)("p",{className:"randomchar__descr",children:n}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},f=function(){Object(a.useEffect)((function(){p()}),[]);var e=Object(a.useState)({}),t=Object(n.a)(e,2),c=t[0],l=t[1],u=Object(r.a)(),j=u.loading,b=u.error,h=u.getCharacter,m=u.clearError,f=function(e){l(e)},p=function(){m();var e=Math.floor(400*Math.random()+1011e3);h(e).then(f)},v=b?Object(o.jsx)(i.a,{}):null,x=j?Object(o.jsx)(s.a,{}):null,_=j||b?null:Object(o.jsx)(O,{char:c});return Object(o.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{className:"button button__main",children:Object(o.jsx)("div",{className:"inner",onClick:p,children:"try it"})}),Object(o.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})},p=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{children:Object(o.jsx)(f,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(m,{children:Object(o.jsx)(h,{onCharSelected:function(e){r(e)}})}),Object(o.jsx)(m,{children:Object(o.jsx)(j,{charId:c})})]}),Object(o.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.6174d9af.chunk.js.map