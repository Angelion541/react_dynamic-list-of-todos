(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=(c(13),c(14),c(8)),i=c(2),o=c(1),r=c(6),d=c.n(r),j=c(0),u=function(e){var t=e.todos,c=e.setSelectedTodo;return Object(j.jsx)("table",{"data-cy":"listOfTodos",className:"table is-narrow is-fullwidth",children:Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{className:d()({"has-background-danger-light has-text-danger":!e.completed},{"has-background-success-light has-text-success":e.completed}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon is-size-5",children:Object(j.jsx)("i",{className:d()("fas",{"fa-square-xmark":!e.completed},{"fa-check-square":e.completed})})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:e.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{className:"button is-warning",type:"button",onClick:function(){c(e)},children:"Show #".concat(e.id)})})]},e.id)}))})})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var b=function(e){var t=e.setSort,c=e.setQuery,a=e.query;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{onChange:function(e){t(e.target.value)},children:[Object(j.jsx)("option",{value:s.all,children:"All"}),Object(j.jsx)("option",{value:s.active,children:"Active"}),Object(j.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"filterByTitle",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a.length>0&&Object(j.jsx)("button",{type:"button",className:"delete has-text",onClick:function(){return c("")}})})]})]})};function h(e){return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate.academy/students-api"+e)})).then((function(e){return e.json()}));var t}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.setSelectedTodo,c=e.todo,s=Object(o.useState)(),a=Object(i.a)(s,2),n=a[0],l=a[1];return Object(o.useEffect)((function(){var e;(e=c.userId,h("/users/".concat(e))).then((function(e){l(e)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium",children:"Todo #".concat(c.id)}),Object(j.jsx)("a",{href:"#close",className:"delete",onClick:function(){return t(null)},children:"Close"})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block",children:c.title}),Object(j.jsxs)("p",{className:"block",children:[c.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(j.jsx)(m,{})]})},x=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(null),r=Object(i.a)(n,2),d=r[0],x=r[1],f=Object(o.useState)(""),p=Object(i.a)(f,2),v=p[0],N=p[1],g=Object(o.useState)(!0),y=Object(i.a)(g,2),k=y[0],S=y[1],T=Object(o.useState)(s.all),w=Object(i.a)(T,2),C=w[0],q=w[1],E=Object(l.a)(c);return Object(o.useEffect)((function(){h("/todos").then((function(e){a(e),S(!1)}))}),[]),C!==s.all&&(E=C===s.completed?c.filter((function(e){return!0===e.completed})):c.filter((function(e){return!1===e.completed}))),E=E.filter((function(e){return e.title.includes(v)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{setSort:q,setQuery:N,query:v})}),Object(j.jsxs)("div",{className:"block",children:[k&&Object(j.jsx)(m,{}),Object(j.jsx)(u,{todos:E,setSelectedTodo:x})]})]})})}),d&&Object(j.jsx)(O,{setSelectedTodo:x,todo:d})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ca473da8.chunk.js.map