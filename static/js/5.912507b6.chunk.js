(this["webpackJsonpfind-recipes"]=this["webpackJsonpfind-recipes"]||[]).push([[5],{81:function(e,s,t){"use strict";s.a=t.p+"static/media/pink-mug.148409de.png"},82:function(e,s,t){"use strict";s.a=t.p+"static/media/laurel-wreath.72b63e55.png"},88:function(e,s,t){},92:function(e,s,t){"use strict";t.r(s);var c=t(38),a=(t(88),t(81)),n=t(82),l=t(0),r=t(7),i=t(2);s.default=function(e){var s=e.loadUser,t=Object(l.useState)(""),d=Object(c.a)(t,2),m=d[0],o=d[1],j=Object(l.useState)(""),b=Object(c.a)(j,2),x=b[0],h=b[1],p=Object(l.useState)(""),u=Object(c.a)(p,2),O=u[0],N=u[1],g=Object(r.f)();return Object(i.jsx)("div",{className:"container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto",children:Object(i.jsx)("div",{className:"card card0 border-0",children:Object(i.jsxs)("div",{className:"row d-flex",children:[Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"card1 pb-5",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("img",{alt:"logo",src:n.a,className:"logo",style:{border:"none"}})}),Object(i.jsx)("div",{className:"row px-3 justify-content-center mt-4 mb-5 border-line",children:Object(i.jsx)("img",{alt:"coverphoto",src:a.a,className:"image",style:{border:"none"}})})]})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"card2 card border-0 px-4 py-5 ",style:{alignContent:"center"},children:[Object(i.jsx)("div",{className:"row mb-4 px-3",children:Object(i.jsx)("h6",{className:"mb-0 mr-4 mt-2",children:"Register"})}),Object(i.jsxs)("div",{className:"row px-3 mb-4",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"line"})]}),Object(i.jsxs)("div",{className:"row px-3",children:[Object(i.jsx)("label",{className:"mb-1",children:Object(i.jsx)("h6",{className:"mb-0 text-sm tl",children:"User Name"})}),Object(i.jsx)("input",{onChange:function(e){return N(e.target.value)},className:"mb-4",type:"text",name:"username",placeholder:"Enter username"})]}),Object(i.jsxs)("div",{className:"row px-3",children:[Object(i.jsx)("label",{className:"mb-1",children:Object(i.jsx)("h6",{className:"mb-0 text-sm tl",children:"Email Address"})}),Object(i.jsx)("input",{onChange:function(e){return o(e.target.value)},className:"mb-4",type:"text",name:"email",placeholder:"Enter a valid email address"})]}),Object(i.jsxs)("div",{className:"row px-3",children:[Object(i.jsx)("label",{className:"mb-1",children:Object(i.jsx)("h6",{className:"mb-0 text-sm tl",children:"Password"})}),Object(i.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"password",name:"password",placeholder:"Enter password"})]}),Object(i.jsx)("div",{className:"row mb-3 px-3 mt-3",children:Object(i.jsx)("button",{onClick:function(e){m.length>0&&x.length>0&&O.length>0&&fetch("https://warm-reef-43761.herokuapp.com/register",{method:"post",headers:{"Content-Type":"Application/json"},body:JSON.stringify({email:m,password:x,username:O})}).then((function(e){return e.json()})).then((function(e){e[0].user_id&&(window.localStorage.setItem("token",e[1]),s(e[0]),g.push("/"))})).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-blue text-center",children:"Register"})}),Object(i.jsx)("div",{className:"row mb-4 px-3",children:Object(i.jsxs)("small",{className:"font-weight-bold d-flex justify-content-start ",children:["Already have an account?",Object(i.jsx)("a",{href:"/signin",className:"text-danger ",children:"Sign In"})]})})]})})]})})})}}}]);
//# sourceMappingURL=5.912507b6.chunk.js.map