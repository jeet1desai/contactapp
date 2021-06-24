(this["webpackJsonpredux-contact"]=this["webpackJsonpredux-contact"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(12),r=n.n(a),s=(n(29),n(30),n(5)),l=n(10),i=n(1);var o=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark py-3",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(l.b,{to:"/",className:"navbar-brand ml-5",children:"React-Redux Contact"})})})},j=n(3),b=n(9);var d=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)();return Object(i.jsxs)("div",{className:"container my-5",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsx)("h3",{children:"Home"}),Object(i.jsx)(l.b,{to:"/add",className:"btn btn-outline-dark",children:"Add User"})]}),Object(i.jsxs)("table",{className:"table table-hover mt-4 border text-center",children:[Object(i.jsx)("thead",{className:"bg-dark text-white",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Name"}),Object(i.jsx)("th",{scope:"col",children:"Email"}),Object(i.jsx)("th",{scope:"col",children:"phone"}),Object(i.jsx)("th",{scope:"col",children:"Action"})]})}),Object(i.jsx)("tbody",{children:0===e.length?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:"5",children:"No Contact Found"})}):e.map((function(e,n){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n+1}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsxs)("td",{children:[Object(i.jsx)(l.b,{to:"/edit/".concat(e.id),className:"btn btn-outline-warning me-1 py-0",children:"Edit"}),Object(i.jsx)("button",{onClick:function(){return function(e){t(function(e){return{type:"DELETE_CONTACT",payload:e}}(e)),s.b.success("User successfully Deleted!!")}(e.id)},className:"btn btn-danger ms-1 py-0",children:"Delete"})]})]})}))})]})]})},h=n(11);var u=function(){var e=Object(j.f)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(""),o=Object(h.a)(l,2),d=o[0],u=o[1],m=Object(c.useState)(""),O=Object(h.a)(m,2),p=O[0],x=O[1],f=Object(b.c)((function(e){return e})),v=Object(b.b)();return Object(i.jsx)("div",{className:"container my-5",children:Object(i.jsxs)("div",{className:"shadow py-4 px-5",children:[Object(i.jsx)("h3",{children:"Add User"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=f.find((function(e){return e.email===d&&d})),c=f.find((function(e){return e.phone===parseInt(p)}));if(!a||!d||!p)return s.b.warning("Please fill empty field!!");if(n)return s.b.error("This email already exist!!");if(c)return s.b.error("This phone already exist!!");var r={id:f.length,name:a,email:d,phone:p};v({type:"ADD_CONTACT",payload:r}),s.b.success("User successfully Added!!"),e.push("/")},children:[Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"name",class:"form-label",children:"Name *"}),Object(i.jsx)("input",{type:"text",class:"form-control",id:"name",placeholder:"Enter Name",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"email",class:"form-label",children:"Email *"}),Object(i.jsx)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter Email",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"phone",class:"form-label",children:"Phone No *"}),Object(i.jsx)("input",{type:"number",class:"form-control",id:"phone",placeholder:"Enter Phone No",value:p,onChange:function(e){return x(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",class:"btn btn-success",children:"Submit"})]})]})})};var m=function(){var e=Object(j.f)(),t=Object(j.g)().id,n=Object(c.useState)(""),a=Object(h.a)(n,2),r=a[0],o=a[1],d=Object(c.useState)(""),u=Object(h.a)(d,2),m=u[0],O=u[1],p=Object(c.useState)(""),x=Object(h.a)(p,2),f=x[0],v=x[1],y=Object(b.c)((function(e){return e})),g=y.find((function(e){return e.id===parseInt(t)})),N=Object(b.b)();return Object(c.useEffect)((function(){o(g.name),O(g.email),v(g.phone)}),[g]),Object(i.jsx)("div",{className:"container my-5",children:Object(i.jsx)("div",{className:"shadow py-4 px-5",children:g?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h3",{children:["Edit User ",t]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=y.find((function(e){return e.id!==parseInt(t)&&e.email===m})),a=y.find((function(e){return e.id!==parseInt(t)&&e.phone===parseInt(f)}));if(!r||!m||!f)return s.b.warning("Please fill empty field!!");if(c)return s.b.error("This email already exist!!");if(a)return s.b.error("This phone already exist!!");var l={id:parseInt(t),name:r,email:m,phone:f};N({type:"UPDATE_CONTACT",payload:l}),s.b.success("User successfully Updated!!"),e.push("/")},children:[Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"name",class:"form-label",children:"Name *"}),Object(i.jsx)("input",{type:"text",class:"form-control",id:"name",placeholder:"Enter Name",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"email",class:"form-label",children:"Email *"}),Object(i.jsx)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter Email",value:m,onChange:function(e){return O(e.target.value)}})]}),Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"phone",class:"form-label",children:"Phone No *"}),Object(i.jsx)("input",{type:"number",class:"form-control",id:"phone",placeholder:"Enter Phone No",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(i.jsx)("button",{type:"submit",class:"btn btn-warning me-2",children:"Update"}),Object(i.jsx)(l.b,{to:"/",className:"btn btn-outline-danger",children:"Cancel"})]})]}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("h3",{children:["Edit User with Id ",t," is not present!!"]})})})})};var O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.a,{}),Object(i.jsx)(o,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",component:d}),Object(i.jsx)(j.a,{exact:!0,path:"/add",component:u}),Object(i.jsx)(j.a,{exact:!0,path:"/edit/:id",component:m})]})]})},p=(n(37),n(38),n(20)),x=n(24),f=[{id:0,name:"desai jeet",email:"jeet@gmail.com",phone:1111111111},{id:1,name:"desai jeet2",email:"jeet2@gmail.com",phone:2222222222}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return e=[].concat(Object(x.a)(e),[t.payload]);case"UPDATE_CONTACT":var n=e.map((function(e){return e.id===t.payload.id?t.payload:e}));return e=n;case"DELETE_CONTACT":var c=e.filter((function(e){return e.id!==t.payload&&e}));return e=c;default:return e}},y=n(23),g=Object(p.createStore)(v,Object(y.composeWithDevTools)());r.a.render(Object(i.jsx)(b.a,{store:g,children:Object(i.jsx)(l.a,{children:Object(i.jsx)(O,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ead32af1.chunk.js.map