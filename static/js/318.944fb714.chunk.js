"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{475:function(n,e,r){r.d(e,{D:function(){return c}});var t,i=r(168),o=r(6444),a=r(3329),u=o.ZP.button(t||(t=(0,i.Z)(["\n  display: block;\n  width: ",";\n  padding: "," 0;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  text-align: center;\n  border: none;\n  outline: none;\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  &:disabled {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.width}),(function(n){return n.theme.spaces.xxs}),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.borderRadius.s}),(function(n){return n.theme.colors.brand.white}),(function(n){return n.theme.colors.brand.green}),(function(n){return n.theme.colors.grayScale.gray40}),(function(n){return n.theme.colors.grayScale.gray10})),c=function(n){var e=n.type,r=n.disabled,t=n.title,i=n.width,o=n.onClick;return(0,a.jsx)(u,{type:e,disabled:r,width:i,onClick:o,children:t})}},7384:function(n,e,r){r.d(e,{Y:function(){return j}});var t,i,o,a,u,c=r(9439),l=r(168),s=r(6444),d=r(2791),h=r(6948).r.colors,f=function(n,e,r){return e&&n?h.support.error:e||n!==r?h.grayScale.gray20:h.brand.green},m=r(7377),p=r(8820),g=r(3329),x=s.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n"])),(function(n){return n.theme.fontWeight.light}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.colors.grayScale.gray30})),b=(0,s.ZP)(p.ocf)(i||(i=(0,l.Z)(["\n  margin: 0 5px 0 0;\n  color: ",";\n"])),(function(n){return n.theme.colors.support.error})),y=function(n){var e=n.error;return(0,g.jsxs)(x,{children:[(0,g.jsx)(b,{size:"15"}),(0,g.jsx)("p",{children:e})]})},v=s.ZP.div(o||(o=(0,l.Z)(["\n  display: block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 "," 0;\n  color: ",";\n"])),(function(n){return n.theme.spaces.xs}),(function(n){return n.color})),w=s.ZP.label(a||(a=(0,l.Z)(["\n  position: absolute;\n  left: ",";\n  top: 50%;\n  transform: translateY(-50%);\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: inherit;\n  background-color:  ",";\n"])),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.colors.brand.white})),Z=s.ZP.input(u||(u=(0,l.Z)(["\n  width: 100%;\n  border: none;\n  margin: 0 0 3px 0;\n  padding: ",";\n  outline: 1px solid ",";\n  border-radius: ",";\n  &::placeholder {\n    opacity: 0;\n  }\n  &:focus + label, &:not(:placeholder-shown) + label {\n    top: 0;\n    padding: 0 3px;\n    font-size: 10px;\n  }\n"])),(function(n){return n.theme.spaces.xxs}),(function(n){return n.color}),(function(n){return n.theme.borderRadius.s})),j=function(n){var e=n.input,r=n.type,t=n.value,i=n.onChange,o=n.error,a=(0,d.useState)(null),u=(0,c.Z)(a,2),l=u[0],s=u[1];return(0,g.jsxs)(v,{color:f(l,o,e),children:[(0,g.jsx)(Z,{id:e,name:e,type:r,value:t,placeholder:"placeholder",onFocus:function(n){return s(n.target.name)},color:f(l,o,e),onChange:i}),(0,g.jsx)(w,{htmlFor:e,children:(0,m.l)(e)}),o&&l===e&&(0,g.jsx)(y,{error:o})]})}},7377:function(n,e,r){r.d(e,{l:function(){return t}});var t=function(n){return n[0].toUpperCase()+n.slice(1)}},9318:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t,i,o,a=r(168),u=r(6444),c=r(9434),l=r(6727),s=l.Ry().shape({name:l.Z_().min(2).required("Name is required"),email:l.Z_().email("invalid email address format").required("Email is required")}),d=r(5705),h=r(475),f=r(7384),m=r(3329),p=(0,u.ZP)(d.l0)(t||(t=(0,a.Z)(["\n  @media screen and (min-width: ",") {\n    width: 400px;\n  }\n"])),(function(n){return n.theme.breakpoints.desktop})),g={email:"",name:""},x=function(){return(0,m.jsx)(d.J9,{initialValues:g,validationSchema:s,onSubmit:function(n){console.log(n)},children:function(n){var e=n.values,r=n.handleChange,t=n.errors,i=n.isValid,o=n.dirty;return(0,m.jsxs)(p,{children:[(0,m.jsx)(f.Y,{id:"name",input:"name",type:"text",value:e.name,onChange:r,error:t.name}),(0,m.jsx)(f.Y,{id:"email",input:"email",type:"email",value:e.email,onChange:r,error:t.email}),(0,m.jsx)(h.D,{type:"submit",disabled:!i||!o,title:"Update profile",width:"100%"})]})}})},b=u.ZP.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=u.ZP.img(o||(o=(0,a.Z)(["\n  width: 164px;\n  margin: 0 auto "," auto;\n  border-radius: 50%;\n  @media screen and (min-width: ",") {\n    margin: 0 auto "," auto;\n  }\n"])),(function(n){return n.theme.spaces.xs}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.spaces.m})),v=function(){var n=(0,c.v9)((function(n){return n.auth}));return(0,m.jsxs)(b,{children:[(0,m.jsx)(y,{src:n.avatar,alt:""}),(0,m.jsx)(x,{})]})}}}]);
//# sourceMappingURL=318.944fb714.chunk.js.map