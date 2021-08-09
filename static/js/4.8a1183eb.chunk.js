(this["webpackJsonpfind-recipes"]=this["webpackJsonpfind-recipes"]||[]).push([[4],{80:function(e,t,a){"use strict";var n=a(3),r=a(1),i=a(5),c=a.n(i),s=a(0),o=a.n(s),l=a(19),d=a(6),u=Object(l.a)("input-group-append"),p=Object(l.a)("input-group-prepend"),b=Object(l.a)("input-group-text",{Component:"span"}),f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,s=e.hasValidation,l=e.className,u=e.as,p=void 0===u?"div":u,b=Object(n.a)(e,["bsPrefix","size","hasValidation","className","as"]);return a=Object(d.a)(a,"input-group"),o.a.createElement(p,Object(r.a)({ref:t},b,{className:c()(l,a,i&&a+"-"+i,s&&"has-validation")}))}));f.displayName="InputGroup";var j=Object(r.a)({},f,{Text:b,Radio:function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(r.a)({type:"radio"},e)))},Checkbox:function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},Append:u,Prepend:p});t.a=j},83:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(5),c=a.n(i),s=(a(51),a(0)),o=a.n(s),l=(a(28),a(4)),d=a.n(l),u={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},p=o.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,s=e.className,l=e.type,d=void 0===l?"valid":l,u=e.tooltip,p=void 0!==u&&u,b=Object(r.a)(e,["as","className","type","tooltip"]);return o.a.createElement(i,Object(n.a)({},b,{ref:t,className:c()(s,d+"-"+(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=u;var b=p,f=o.a.createContext({controlId:void 0}),j=a(6),h=o.a.forwardRef((function(e,t){var a,i,l=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,p=e.size,b=e.htmlSize,h=e.id,m=e.className,O=e.isValid,v=void 0!==O&&O,g=e.isInvalid,x=void 0!==g&&g,y=e.plaintext,w=e.readOnly,N=e.custom,C=e.as,P=void 0===C?"input":C,k=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),z=Object(s.useContext)(f).controlId,S=N?[d,"custom"]:[l,"form-control"],E=S[0],I=S[1];if(l=Object(j.a)(E,I),y)(i={})[l+"-plaintext"]=!0,a=i;else if("file"===u){var R;(R={})[l+"-file"]=!0,a=R}else if("range"===u){var T;(T={})[l+"-range"]=!0,a=T}else if("select"===P&&N){var D;(D={})[l+"-select"]=!0,D[l+"-select-"+p]=p,a=D}else{var F;(F={})[l]=!0,F[l+"-"+p]=p,a=F}return o.a.createElement(P,Object(n.a)({},k,{type:u,size:b,ref:t,readOnly:w,id:h||z,className:c()(m,a,v&&"is-valid",x&&"is-invalid")}))}));h.displayName="FormControl";t.a=Object.assign(h,{Feedback:b})},84:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return i}))},87:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(84),r=a(38),i=(a(87),a(80)),c=a(83),s=a(43),o=a(0),l=a.p+"static/media/recipe.62c3910e.png",d=a(2);t.default=function(e){var t=e.user,a=e.loadUser,u=e.isLogin,p=Object(o.useState)(""),b=Object(r.a)(p,2),f=b[0],j=b[1],h=Object(o.useState)([]),m=Object(r.a)(h,2),O=m[0],v=m[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"searhBar",children:[Object(d.jsxs)("div",{className:"title flex",children:[Object(d.jsx)("img",{src:l,alt:"recipe",style:{width:"100px",border:"none"}}),Object(d.jsx)("h2",{children:"Check Recipes"})]}),Object(d.jsxs)(i.a,{className:"mb-3 w-70 center",children:[Object(d.jsx)(i.a.Prepend,{children:Object(d.jsx)(i.a.Text,{id:"inputGroup-sizing-default",children:"Food Name"})}),Object(d.jsx)(c.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){j(e.target.value)}}),Object(d.jsx)(i.a.Append,{children:Object(d.jsx)(s.a,{onClick:function(){u?fetch("https://warm-reef-43761.herokuapp.com/recipes",{method:"post",headers:{"Content-Type":"application/json",authorization:window.localStorage.getItem("token")},body:JSON.stringify({foodName:f})}).then((function(e){return e.json()})).then((function(e){e.results.length>0?v(e.results):v([])})).catch((function(e){return console.log(e)})):alert("Please log in to use this function")},variant:"outline-secondary",children:"Check"})})]})]}),O.length>0&&O.map((function(e){return Object(d.jsx)("div",{className:"box",children:Object(d.jsx)("div",{className:"responsive",children:Object(d.jsxs)("div",{className:"gallery",children:[Object(d.jsx)("a",{target:"_blank",href:e.sourceUrl,rel:"noreferrer",children:Object(d.jsx)("img",{src:e.image,rel:"noreferrer",alt:"Recipes ",width:"600",height:"auto"})}),Object(d.jsx)("div",{className:"desc",children:e.title}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{type:"button",className:"btn btn-outline-danger mb2",name:"favorite",onClick:function(){return function(e){fetch("https://warm-reef-43761.herokuapp.com/saved_recipes/".concat(t.user_id),{method:"post",headers:{"Content-Type":"application/json",authorization:window.localStorage.getItem("token")},body:JSON.stringify({recipe_id:e.id,url:e.sourceUrl,title:e.title,image:e.image})}).then((function(e){return e.json()})).then((function(e){"exist"===e&&alert("reciped added"),a(Object(n.a)(Object(n.a)({},t),e))})).catch(console.log)}(e)},children:["Add to facorite",Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-heart ml2",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})]})})]})})},e.id)}))]})}}}]);
//# sourceMappingURL=4.8a1183eb.chunk.js.map