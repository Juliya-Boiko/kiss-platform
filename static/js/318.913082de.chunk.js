"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{290:function(n,e,t){t.d(e,{$:function(){return c}});var r,o=t(168),i=t(6444),a=t(3329),u=i.ZP.button(r||(r=(0,o.Z)(["\n  padding: ",";\n  font-weight: ",";\n  font-size: ",";\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.spaces.xxs}),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.colors.support.error})),c=function(n){var e=n.title,t=n.onClick;return(0,a.jsx)(u,{type:"button",onClick:t,children:e})}},475:function(n,e,t){t.d(e,{D:function(){return c}});var r,o=t(168),i=t(6444),a=t(3329),u=i.ZP.button(r||(r=(0,o.Z)(["\n  display: block;\n  width: ",";\n  padding: "," 0;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  text-align: center;\n  border: none;\n  outline: none;\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  &:disabled {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.width}),(function(n){return n.theme.spaces.xxs}),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.borderRadius.s}),(function(n){return n.theme.colors.brand.white}),(function(n){return n.theme.colors.brand.green}),(function(n){return n.theme.colors.grayScale.gray40}),(function(n){return n.theme.colors.grayScale.gray10})),c=function(n){var e=n.type,t=n.disabled,r=n.title,o=n.width,i=n.onClick;return(0,a.jsx)(u,{type:e,disabled:t,width:o,onClick:i,children:r})}},133:function(n,e,t){t.d(e,{l:function(){return d}});var r,o,i=t(168),a=t(6444),u=t(8820),c=t(3329),l=a.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n"])),(function(n){return n.theme.fontWeight.light}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.colors.grayScale.gray30})),s=(0,a.ZP)(u.ocf)(o||(o=(0,i.Z)(["\n  margin: 0 5px 0 0;\n  color: ",";\n"])),(function(n){return n.theme.colors.support.error})),d=function(n){var e=n.error;return(0,c.jsxs)(l,{children:[(0,c.jsx)(s,{size:"15"}),(0,c.jsx)("p",{children:e})]})}},9628:function(n,e,t){t.d(e,{Y:function(){return x}});var r,o,i,a=t(9439),u=t(168),c=t(6444),l=t(2791),s=t(6218),d=t(7377),f=t(133),h=t(3329),m=c.ZP.div(r||(r=(0,u.Z)(["\n  display: block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 "," 0;\n  color: ",";\n"])),(function(n){return n.theme.spaces.xs}),(function(n){return n.color})),p=c.ZP.label(o||(o=(0,u.Z)(["\n  position: absolute;\n  left: ",";\n  top: 50%;\n  transform: translateY(-50%);\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: inherit;\n  background-color:  ",";\n"])),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSize.xs}),(function(n){return n.theme.colors.brand.white})),g=c.ZP.input(i||(i=(0,u.Z)(["\n  width: 100%;\n  border: none;\n  margin: 0 0 3px 0;\n  padding: ",";\n  outline: 1px solid ",";\n  border-radius: ",";\n  &::placeholder {\n    opacity: 0;\n  }\n  &:focus + label, &:not(:placeholder-shown) + label {\n    top: 0;\n    padding: 0 3px;\n    font-size: 10px;\n  }\n"])),(function(n){return n.theme.spaces.xxs}),(function(n){return n.color}),(function(n){return n.theme.borderRadius.s})),x=function(n){var e=n.input,t=n.type,r=n.value,o=n.onChange,i=n.error,u=(0,l.useState)(null),c=(0,a.Z)(u,2),x=c[0],b=c[1];return(0,h.jsxs)(m,{color:(0,s.w)(x,i,e),children:[(0,h.jsx)(g,{id:e,name:e,type:t,value:r,placeholder:"placeholder",onFocus:function(n){return b(n.target.name)},color:(0,s.w)(x,i,e),onChange:o}),(0,h.jsx)(p,{htmlFor:e,children:(0,d.l)(e)}),i&&x===e&&(0,h.jsx)(f.l,{error:i})]})}},6218:function(n,e,t){t.d(e,{w:function(){return o}});var r=t(6948).r.colors,o=function(n,e,t){return e&&n?r.support.error:e||n!==t?r.grayScale.gray20:r.brand.green}},7377:function(n,e,t){t.d(e,{l:function(){return r}});var r=function(n){return n[0].toUpperCase()+n.slice(1)}},9318:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,i,a,u=t(168),c=t(6444),l=t(9434),s=t(1413),d=t(6727),f=d.Ry().shape({name:d.Z_().min(2).required("Name is required"),email:d.Z_().email("invalid email address format").required("Email is required")}),h=t(5705),m=t(475),p=t(9628),g=t(5822),x=t(7689),b=t(3329),v=(0,c.ZP)(h.l0)(r||(r=(0,u.Z)(["\n  margin-bottom: ",";\n  @media screen and (min-width: ",") {\n    width: 400px;\n  }\n"])),(function(n){return n.theme.spaces.m}),(function(n){return n.theme.breakpoints.desktop})),w={email:"",name:""},y=function(){var n=(0,l.v9)((function(n){return n.auth.token})),e=(0,x.s0)(),t=(0,l.I0)();return(0,b.jsx)(h.J9,{initialValues:w,validationSchema:f,onSubmit:function(r){var o=(0,s.Z)({token:n},r);t((0,g.Nq)(o)),e("/homepage/statistic")},children:function(n){var e=n.values,t=n.handleChange,r=n.errors,o=n.isValid,i=n.dirty;return(0,b.jsxs)(v,{children:[(0,b.jsx)(p.Y,{id:"name",input:"name",type:"text",value:e.name,onChange:t,error:r.name}),(0,b.jsx)(p.Y,{id:"email",input:"email",type:"email",value:e.email,onChange:t,error:r.email}),(0,b.jsx)(m.D,{type:"submit",disabled:!o||!i,title:"Update profile",width:"100%"})]})}})},Z=t(6856),k=t(290),j=c.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=c.ZP.div(i||(i=(0,u.Z)(["\n  position: relative;\n  margin: 0 auto "," auto;\n  border-radius: 50%;\n  overflow: hidden;\n  &:hover {\n    div {\n      transform: translateY(0);\n    }\n  }\n\n  div {\n    position: absolute;\n    width: 100%;\n    height: 50%;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    padding: 10px 0 0 0;\n    text-align: center;\n    color: #FFFFFF;\n    background-color: rgba(21, 21, 21, 0.79);\n    transform: translateY(100%);\n  }\n"])),(function(n){return n.theme.spaces.xs})),z=c.ZP.img(a||(a=(0,u.Z)(["\ndisplay: block;\n  width: 164px;\n  @media screen and (min-width: ",") {\n    margin: 0 auto "," auto;\n  }\n"])),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.spaces.m})),S=function(){var n=(0,l.v9)((function(n){return n.auth}));return(0,b.jsxs)(j,{children:[(0,b.jsxs)(C,{children:[(0,b.jsx)(z,{src:n.avatar,alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)(Z.iOE,{size:20})," Change avatar"]})]}),(0,b.jsx)(y,{}),(0,b.jsx)(k.$,{title:"Delete account",onClick:function(){return console.log("Delete account")}})]})}}}]);
//# sourceMappingURL=318.913082de.chunk.js.map