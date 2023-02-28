"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{4166:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r,o,i,a,s,c,u,l,d,m=t(9439),h=t(2791),p=t(9434),f=t(7649),g=t(6727),b=g.Ry().shape({name:g.Z_().min(2).required("Name is required"),email:g.Z_().email("invalid email address format").required("Email is required"),password:g.Z_().min(8).matches(/^\S+$/,"must not contain spaces").required("Password is required"),acceptedTerms:g.O7().required("Required").oneOf([!0],"You must accept the terms and conditions."),confirm:g.Z_().oneOf([g.iH("password")],"Dont match with password").required("Confirm password is required")}),x=t(5705),y=t(5247),w=t(9036),v=t(168),k=t(6444),j=k.ZP.label(r||(r=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 "," 0;\n  font-weight: ",";\n  font-size: ",";;\n  text-align: center;\n  color: ",";\n"])),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.colors.grayScale.gray30})),C=k.ZP.input(o||(o=(0,v.Z)(['\n  appearance: none;\n  position: absolute;\n\n  &:checked + span {\n    background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>\');\n    background-size: contain;\n    background-color: ',";\n    border: 2px solid ",";\n  }\n"])),(function(e){return e.theme.colors.brand.green}),(function(e){return e.theme.colors.brand.green})),Z=k.ZP.span(i||(i=(0,v.Z)(["\n  display: block;\n  width: 14px;\n  height: 14px;\n  margin: 0 "," 0 0;\n  border: 1px solid ",";\n  border-radius: 2px;\n"])),(function(e){return e.theme.spaces.xxs}),(function(e){return e.theme.colors.grayScale.gray30})),q=t(3329),L=function(e){var n=e.name,t=e.onChange,r=e.setShowModal;return(0,q.jsxs)(j,{children:[(0,q.jsx)(C,{type:"checkbox",name:n,onChange:t}),(0,q.jsx)(Z,{}),(0,q.jsxs)("p",{children:["I agree to the ",(0,q.jsx)("span",{style:{color:"green"},onClick:r,children:"terms, conditions and Privacy Policy "})]})]})},I=t(475),S=t(860),P=k.ZP.div(a||(a=(0,v.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 20;\n  padding: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.colors.brand.white})),T=k.ZP.button(s||(s=(0,v.Z)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  color: ",";\n"])),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.colors.grayScale.gray50})),z=function(e){var n=e.children,t=e.onClick;return(0,q.jsxs)(P,{children:[(0,q.jsx)(T,{type:"button",onClick:t,children:(0,q.jsx)(S.u5Z,{size:"16"})}),(0,q.jsx)("div",{children:n})]})},_=k.ZP.button(c||(c=(0,v.Z)(["\n  display: block;\n  width: ",";\n  padding: "," 0;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  text-align: center;\n  border: none;\n  outline: 1px solid ",";\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n\n  &:disabled {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.spaces.xxs}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.colors.brand.green}),(function(e){return e.theme.borderRadius.s}),(function(e){return e.theme.colors.brand.green}),(function(e){return e.theme.colors.brand.white}),(function(e){return e.theme.colors.grayScale.gray40}),(function(e){return e.theme.colors.grayScale.gray10})),M=function(e){var n=e.type,t=e.disabled,r=e.title,o=e.width,i=e.onClick;return(0,q.jsx)(_,{type:n,disabled:t,width:o,onClick:i,children:r})},D=k.ZP.h2(u||(u=(0,v.Z)(["\n  margin: 0 0 "," 0;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  color: ",";\n"])),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.grayScale.gray50})),R=k.ZP.div(l||(l=(0,v.Z)(["\n  width: 100%;\n  height: 450px;\n  overflow: scroll;\n  margin: 0 0 "," 0;\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.spaces.xs}),(function(e){return e.theme.fontWeight.light}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.colors.grayScale.gray50})),B=k.ZP.div(d||(d=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),E=function(e){var n=e.onAgree,t=e.onDecline;return(0,q.jsxs)("div",{children:[(0,q.jsx)(D,{children:"The terms, conditions and Privacy Policy"}),(0,q.jsx)(R,{children:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis   harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid...... Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to'}),(0,q.jsxs)(B,{children:[(0,q.jsx)(M,{type:"button",disabled:!1,title:"Decline",width:"130px",onClick:t}),(0,q.jsx)(I.D,{type:"button",disabled:!1,title:"Accept",width:"130px",onClick:n})]})]})},A={email:"",name:"",password:"",confirm:"",acceptedTerms:!1},V=function(){var e=(0,h.useState)(!1),n=(0,m.Z)(e,2),t=n[0],r=n[1],o=(0,p.I0)();return(0,q.jsx)(x.J9,{initialValues:A,validationSchema:b,onSubmit:function(e){var n={email:e.email,name:e.name,password:e.password};o((0,f.EL)(n))},children:function(e){var n=e.values,o=e.handleChange,i=e.errors,a=e.isValid,s=e.dirty;return(0,q.jsxs)(y.y,{children:[(0,q.jsx)(w.t,{input:"email",type:"email",value:n.email,onChange:o,error:i.email}),(0,q.jsx)(w.t,{input:"name",type:"text",value:n.name,onChange:o,error:i.name}),(0,q.jsx)(w.t,{input:"password",type:"password",value:n.password,onChange:o,error:i.password}),(0,q.jsx)(w.t,{input:"confirm",type:"password",value:n.confirm,onChange:o,error:i.confirm}),(0,q.jsx)(L,{value:n.acceptedTerms,name:"acceptedTerms",onChange:o,setShowModal:function(){return r(!0)}}),(0,q.jsx)(I.D,{type:"submit",disabled:!a||!s,title:"Create an account",width:"100%"}),t&&(0,q.jsx)(z,{onClick:function(){return r(!1)},children:(0,q.jsx)(E,{onAgree:function(){n.acceptedTerms=!0,r(!1)},onDecline:function(){return r(!1)}})})]})}})},W=t(9741),H=function(){return(0,q.jsx)(W.c,{navTitle:"You have an account?",navLink:"/login",navTo:"Login",children:(0,q.jsx)(V,{})})}}}]);
//# sourceMappingURL=166.d1af2039.chunk.js.map