(this["webpackJsonpcomponent-incubator"]=this["webpackJsonpcomponent-incubator"]||[]).push([[0],{108:function(e,a,t){e.exports=t(122)},113:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),o=t.n(r),c=(t(113),t(7)),m=t(62),i=(t(114),t(133)),u=t(106),s=t(90),E=t(127),d=t(95),h=t(131),p=t(128),b=t(130),g=t(132),v=function(e){var a=e.options,t=(e.initialValue,Object(n.useState)(["Red","Orange"])),r=Object(s.a)(t,2),o=r[0],c=r[1],m=Object(n.useState)(!1),i=Object(s.a)(m,2),v=i[0],f=i[1];return l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(h.a,{as:p.a,show:v,onToggle:function(e,a,t){var n=t.source;(e||"select"!==n)&&f(e),a&&a.persist()},onSelect:function(e){o.includes(a[e])?c(o.filter((function(t){return t!==a[e]}))):c([].concat(Object(u.a)(o),[a[e]]))},value:o},l.a.createElement(h.a.Toggle,{variant:"outline-dark"},o.length<1?"Bitte ausw\xe4hlen...":o.length>4?"Mehr als 4 ausgew\xe4hlt":o.join(", ")),l.a.createElement(h.a.Menu,null,a.map((function(e,a){return l.a.createElement(h.a.Item,{eventKey:a,key:a},l.a.createElement(b.a.Check,{custom:!0,label:e,type:"checkbox",readOnly:!0,checked:o.includes(e)}))}))))),l.a.createElement(d.a,null,l.a.createElement(g.a,{variant:"primary"},l.a.createElement("pre",null,l.a.createElement("b",null,"value: "),JSON.stringify(o,null,2)))))},f=t(99),w=t(24),x=t(102),S=t(40),k=S.b().shape({name:S.c().min(2,"Names must have at least 2 characters").max(100,"Names can't be longer than 100 characters").required("Name is required"),email:S.c().email("Must be a valid email address").max(100,"Email must be less than 100 characters").required("Email is required"),phone:S.c().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number is not valid").required("Phone number required"),blog:S.c().url("Must enter URL in http://www.example.com format").required("URL required"),color:S.c().required("Color is required!"),switch:S.a().oneOf([!0],"The terms and conditions must be accepted.")}),y=function(){return l.a.createElement(w.b,{initialValues:{name:"",email:"",phone:"",blog:"",color:"",switch:!1},validationSchema:k,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;t(!0),setTimeout((function(){alert(JSON.stringify(e,null,2)),n(),t(!1)}),500)}},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleBlur,c=e.handleSubmit,m=e.isSubmitting;return l.a.createElement(b.a,{onSubmit:c,className:"mx-auto"},l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formName"},l.a.createElement(b.a.Label,null,"Name:"),l.a.createElement(b.a.Control,{type:"text",name:"name",placeholder:"Full Name",onChange:r,onBlur:o,value:a.name,isInvalid:n.name&&t.name,isValid:n.name&&!t.name}),l.a.createElement(w.a,{name:"name",component:b.a.Text,className:"text-danger"}))),l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formEmail"},l.a.createElement(b.a.Label,null,"Email:"),l.a.createElement(b.a.Control,{type:"text",name:"email",placeholder:"Email",onChange:r,onBlur:o,value:a.email,isInvalid:n.email&&t.email,isValid:n.email&&!t.email}),l.a.createElement(w.a,{name:"email",component:b.a.Text,className:"text-danger"})))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formPhone"},l.a.createElement(b.a.Label,null,"Phone:"),l.a.createElement(b.a.Control,{type:"text",name:"phone",placeholder:"Phone",onChange:r,onBlur:o,value:a.phone,isInvalid:n.phone&&t.phone,isValid:n.phone&&!t.phone}),l.a.createElement(w.a,{name:"phone",component:b.a.Text,className:"text-danger"}))),l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formBlog"},l.a.createElement(b.a.Label,null,"Blog:"),l.a.createElement(b.a.Control,{type:"text",name:"blog",placeholder:"Blog URL",onChange:r,onBlur:o,value:a.blog,isInvalid:n.blog&&t.blog,isValid:n.blog&&!t.blog}),l.a.createElement(w.a,{name:"blog",component:b.a.Text,className:"text-danger"})))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formColor"},l.a.createElement(b.a.Label,null,"Color:"),l.a.createElement(b.a.Control,{as:"select",name:"color",onChange:r,onBlur:o,value:a.color,isInvalid:n.color&&t.color,isValid:n.color&&!t.color},l.a.createElement("option",{value:"",label:"Select a color"}),l.a.createElement("option",{value:"red",label:"red"}),l.a.createElement("option",{value:"blue",label:"blue"}),l.a.createElement("option",{value:"green",label:"green"})),l.a.createElement(w.a,{name:"color",component:b.a.Text,className:"text-danger"}))),l.a.createElement(d.a,null,l.a.createElement(b.a.Group,{controlId:"formSwitch"},l.a.createElement(b.a.Label,null,"Switch:"),l.a.createElement(b.a.Switch,{name:"switch",label:"I Agree",onChange:r,onBlur:o,value:a.switch,isInvalid:n.switch&&t.switch,isValid:n.switch&&!t.switch}),l.a.createElement(w.a,{name:"switch",component:b.a.Text,className:"text-danger"})))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{variant:"primary",type:"submit",disabled:m},"Submit"))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(g.a,{variant:"primary",style:{marginTop:40}},l.a.createElement("pre",null,l.a.createElement("b",null,"values: "),JSON.stringify(a,null,2))))),l.a.createElement(x.a,{name:"signup-form"}))}))},B=t(129),I={Default:function(e){var a=e.headline,t=e.description,n=e.content;return l.a.createElement(B.a,null,l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",null,a))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("p",null,t))),n)}},C=function(){var e=Object(c.f)();return l.a.createElement(i.a,{variant:"tabs",style:{margin:"40px 0"}},l.a.createElement(i.a.Item,null,l.a.createElement(i.a.Link,{as:m.b,to:"/",active:"/"===e.pathname},"Home")),l.a.createElement(i.a.Item,null,l.a.createElement(i.a.Link,{as:m.b,to:"/formik-validation",active:"/formik-validation"===e.pathname},"Formik Validation")),l.a.createElement(i.a.Item,null,l.a.createElement(i.a.Link,{as:m.b,to:"/multi-select",active:"/multi-select"===e.pathname},"Multi Select")))};function N(){return l.a.createElement(I.Default,{headline:"Test2",description:"Lorem",content:"..."})}function L(){return l.a.createElement(I.Default,{headline:"Minimal React Bootstrap Multiselect",description:"A dropdown component that offers multiple selection of values.",content:l.a.createElement(v,{options:["Red","Blue","Orange","Pink","Gold","Banana"],initialValue:["Red","Blue"]})})}function O(){return l.a.createElement(I.Default,{headline:"Simple React Bootstrap Form Validation with Formik",description:"Uses Yup for form validation. Uses formik-persist to store form input values in local storage.",content:l.a.createElement(y,null)})}var T=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/formik-validation"},l.a.createElement(O,null)),l.a.createElement(c.a,{path:"/multi-select"},l.a.createElement(L,null)),l.a.createElement(c.a,{path:"/"},l.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.2ec44a42.chunk.js.map