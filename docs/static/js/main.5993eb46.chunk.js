(this["webpackJsonpwefox-challenge-junior"]=this["webpackJsonpwefox-challenge-junior"]||[]).push([[0],{32:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(18),i=c.n(a),l=(c(40),c(11)),n=c(2),s=(c(41),c.p+"static/media/logo-1.a029c0b9.png"),r=c(0);var o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("img",{className:"header__logo",src:s,alt:"logo wefox travel"})}),Object(r.jsx)("nav",{className:"header__navbar",children:Object(r.jsxs)("div",{className:"header__navbar--list",children:[Object(r.jsx)("li",{className:"header__navbar--item",children:Object(r.jsx)(l.b,{to:"/cities",className:"navbar__item--link",children:"Cities"})}),Object(r.jsx)("li",{className:"navbar__item",children:Object(r.jsx)(l.b,{to:"/add",className:"navbar__item--link",children:"Add City"})})]})})]})},j=c(14),d=c(9),u=c(4),b=c(1),m=c(34),h=c.n(m).a.create({baseURL:"http://localhost:3001/api/v1",headers:{"Content-type":"application/json"}}),x={getAll:function(){return h.get("/posts")},get:function(e){return h.get("/posts/".concat(e))},create:function(e){return h.post("/posts",e)},update:function(e,t){return h.put("/posts/".concat(e),t)},remove:function(e){return h.delete("posts/".concat(e))},removeAll:function(){return h.delete("/posts")},findByTitle:function(e){return h.get("/posts?title=".concat(e))}},O=(c(69),function(){var e={title:"",content:"",image_url:"",lat:0,long:0},t=Object(b.useState)(e),c=Object(u.a)(t,2),a=c[0],i=c[1],l=Object(b.useState)(!1),n=Object(u.a)(l,2),s=n[0],o=n[1],m=function(e){var t=e.target,c=t.name,l=t.value;i(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},c,l)))};return Object(r.jsx)("section",{className:"addCity",children:s?Object(r.jsxs)("div",{className:"citySubmitted",children:[Object(r.jsx)("div",{className:"citySubmitted__hero"}),Object(r.jsx)("h4",{className:"citySubmitted__title",children:"Your next destination successfully!"}),Object(r.jsx)("button",{className:"citySubmitted__button",onClick:function(){i(e),o(!1)},children:"Add new city"}),Object(r.jsx)("a",{className:"citySubmitted__go",href:"/cities",type:"button",children:"Go back"})]}):Object(r.jsxs)("div",{className:"upground",children:[Object(r.jsx)("h2",{className:"upground__title",children:"Add your next city"}),Object(r.jsxs)("form",{className:"upground__form",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("label",{className:"title__title",htmlFor:"title",children:"City name*"}),Object(r.jsx)("input",{type:"text",className:"title__input",id:"title",name:"title",placeholder:"Bariloche",value:a.title,onChange:m,required:!0})]}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("label",{className:"description__title",htmlFor:"content",children:"Description*"}),Object(r.jsx)("textarea",{className:"description__input",id:"content",name:"content",placeholder:"Bariloche is a beautiful city in Patagonia...",value:a.content,onChange:m,required:!0})]}),Object(r.jsxs)("div",{className:"image",children:[Object(r.jsx)("label",{className:"image__title",htmlFor:"image_url",children:"Image link*"}),Object(r.jsx)("input",{type:"text",className:"image__input",id:"image_url",name:"image_url",placeholder:"Image link",value:a.image_url,onChange:m,required:!0})]}),Object(r.jsxs)("div",{className:"lat",children:[Object(r.jsx)("label",{className:"lat__title",htmlFor:"lat",children:"Latitude*"}),Object(r.jsx)("input",{type:"text",className:"lat__input",id:"lat",name:"lat",placeholder:"48.865572",value:a.lat,onChange:m,required:!0})]}),Object(r.jsxs)("div",{className:"long",children:[Object(r.jsx)("label",{className:"long__title",htmlFor:"lat",children:"Longitude*"}),Object(r.jsx)("input",{type:"text",className:"long__input",id:"long",name:"long",placeholder:"2.283523",value:a.long,onChange:m,required:!0})]}),Object(r.jsx)("button",{className:"button__add",type:"submit",onClick:function(e){e.preventDefault();var t={id:null,title:a.title,content:a.content,image_url:a.image_url,lat:a.lat,long:a.long};x.create(t).then((function(e){i({id:e.data.id,title:e.data.title,content:e.data.content,image_url:e.data.image_url,lat:e.data.lat,long:e.data.long}),o(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},children:"Submit"})]})]})})}),g=(c(32),function(e){var t=Object(b.useState)({id:null,title:"",content:"",image_url:"",published:!1,lat:0,long:0}),c=Object(u.a)(t,2),a=c[0],i=c[1],l=Object(b.useState)(""),n=Object(u.a)(l,2),s=n[0],o=n[1];Object(b.useEffect)((function(){var t;t=e.match.params.id,x.get(t).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var m=function(e){var t=e.target,c=t.name,l=t.value;i(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},c,l)))};return Object(r.jsx)("div",{children:a?Object(r.jsxs)("div",{className:"upground",children:[Object(r.jsx)("h2",{className:"upground__title",children:"City"}),Object(r.jsxs)("form",{className:"upground__form",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("label",{className:"title__title",htmlFor:"title",children:"City name*"}),Object(r.jsx)("input",{type:"text",className:"title__input",id:"title",name:"title",placeholder:"Bariloche",value:a.title,onChange:m})]}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("label",{className:"description__title",htmlFor:"content",children:"Description*"}),Object(r.jsx)("textarea",{className:"description__input",id:"content",name:"content",placeholder:"Bariloche is a beautiful city in Patagonia...",value:a.content,onChange:m})]}),Object(r.jsxs)("div",{className:"image",children:[Object(r.jsx)("label",{className:"image__title",htmlFor:"image_url",children:"Image link*"}),Object(r.jsx)("input",{type:"text",className:"image__input",id:"image_url",name:"image_url",placeholder:"Image link",value:a.image_url,onChange:m})]}),Object(r.jsxs)("div",{className:"lat",children:[Object(r.jsx)("label",{className:"lat__title",htmlFor:"lat",children:"Latitude*"}),Object(r.jsx)("input",{type:"text",className:"lat__input",id:"lat",name:"lat",placeholder:"48.865572",value:a.lat,onChange:m,required:!0})]}),Object(r.jsxs)("div",{className:"long",children:[Object(r.jsx)("label",{className:"long__title",htmlFor:"lat",children:"Longitude*"}),Object(r.jsx)("input",{type:"text",className:"long__input",id:"long",name:"long",placeholder:"2.283523",value:a.long,onChange:m,required:!0})]})]}),Object(r.jsx)("button",{className:"button__edit",onClick:function(){x.remove(a.id).then((function(t){console.log(t.data),e.history.push("/cities")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(r.jsx)("button",{type:"submit",className:"button__edit",onClick:function(){x.update(a.id,a).then((function(e){o("Your city was updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update"}),Object(r.jsx)("p",{children:s})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("p",{className:"message",children:"Please, click on a city..."})]})})}),A=c(73),p=c(76),N=c(74),f=c(75),v=[48.865572,2.283523],w=function(){var e=Object(b.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(b.useEffect)((function(){x.getAll().then((function(e){a(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsxs)(A.a,{id:"mapId",center:v,zoom:4,children:[Object(r.jsx)(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),c.map((function(e){return Object(r.jsx)(N.a,{position:[e.lat,e.long],children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)("h4",{children:e.title}),Object(r.jsxs)("p",{children:["Latitude: ",e.lat]}),Object(r.jsxs)("p",{children:["Longitude: ",e.long]})]})},e.id)}))]})},C=function(){var e=Object(b.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(b.useState)(null),n=Object(u.a)(i,2),s=n[0],o=n[1],j=Object(b.useState)(-1),d=Object(u.a)(j,2),m=d[0],h=d[1];Object(b.useEffect)((function(){O()}),[]);var O=function(){x.getAll().then((function(e){a(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"box-title",children:[Object(r.jsx)("h1",{className:"box-title__title",children:" Wefox travel challenge"}),Object(r.jsx)("img",{className:"box-title__icon",src:"data:image/png;base64,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",alt:"camper"})]}),Object(r.jsx)("h3",{className:"subtitle",children:"Travel with us. Create your favorite itinerary. Do we start with Madrid, Barcelona and Berlin ... or not? You decide, we travel with you."}),Object(r.jsxs)("div",{className:"cities",children:[Object(r.jsx)(w,{}),Object(r.jsxs)("div",{className:"cities__list",children:[Object(r.jsx)("h4",{className:"cities__list--title",children:"Your cities list"}),Object(r.jsx)("ul",{className:"cities__list--contain list-group",children:c&&c.map((function(e){return Object(r.jsx)("li",{className:"cities__list__item"+(e.id===m?"active":""),onClick:function(){return function(e){o(e),h(e.id)}(e)},children:e.title},e.id)}))})]}),Object(r.jsx)("div",{className:"city",children:s?Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"city__title",children:"City"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:Object(r.jsx)("strong",{children:"Title: "})}),"",s.title]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:Object(r.jsx)("strong",{children:"Description:"})}),Object(r.jsx)("p",{children:s.content})]}),Object(r.jsx)("label",{children:Object(r.jsx)("strong",{children:"Image:"})}),Object(r.jsx)("img",{className:"city__image",src:s.image_url,alt:s.title}),Object(r.jsx)("div",{className:"button",children:Object(r.jsx)(l.b,{to:"/cities/"+s.id,className:"link",children:"Edit"})})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"Please, click on a city..."})]})})]})]})},y=(c(70),c.p+"static/media/wefox.38ad7d74.jpg");var _=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("a",{href:"https://www.wefox.com/en-de",target:"_blank",children:Object(r.jsx)("img",{className:"footer__logo",src:y,alt:"logo wefox"})}),Object(r.jsx)("small",{children:"\xa9 Lorena P\xe9rez Mart\xednez 2021"})]})},q=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"container mt-3",children:Object(r.jsxs)(n.c,{children:[Object(r.jsx)(n.a,{exact:!0,path:["/","/cities"],component:C}),Object(r.jsx)(n.a,{exact:!0,path:"/add",component:O}),Object(r.jsx)(n.a,{path:"/cities/:id",component:g})]})}),Object(r.jsx)(_,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),l(e),n(e)}))};i.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.5993eb46.chunk.js.map