(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{18:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var o=e(12),c=e.n(o),i=e(3),r=e(0),a=(e(18),e(36)),u=e(1),d=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",children:t.name},t.id)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){var t=Object(r.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1],c=Object(r.useState)(""),f=Object(i.a)(c,2),l=f[0],j=f[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)(a.a,{variant:"outlined",type:"button","data-cy":"all-button",onClick:function(){s().then((function(t){return"five"!==l?(j("five"),o(t)):(j(""),o([]))}))},children:"Load all goods"}),Object(u.jsx)(a.a,{type:"button","data-cy":"first-five-button",variant:"outlined",onClick:function(){s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,6)})).then((function(t){return"five"!==l?(j("five"),o(t)):(j(""),o([]))}))},children:"Load 5 first goods"}),Object(u.jsx)(a.a,{variant:"outlined",type:"button","data-cy":"red-button",onClick:function(){s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return"red"!==l?(j("red"),o(t)):(j(""),o([]))}))},children:"Load red goods"}),Object(u.jsx)(d,{goods:e})]})};c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e5f01dc0.chunk.js.map