"use strict";(self.webpackChunkslim_mom_project=self.webpackChunkslim_mom_project||[]).push([[426],{5251:function(e,t,r){r.d(t,{E:function(){return d}});var n=r(9439),a=r(2791),o=r(3016),s={summaryContainer:"summary_summaryContainer__d8zkl",summarySection:"summary_summarySection__iDCeK",foodsNotRecommendedSection:"summary_foodsNotRecommendedSection__SmKK5"},i=r(9900),c=r(184);o.Z.defaults.baseURL="https://slim-mom-project.onrender.com";var d=function(e){var t,r,d,u,l,m,A,h,f,g,p,y,v,C=e.selectedDate,x=(0,a.useState)(null),P=(0,n.Z)(x,2),D=P[0],F=P[1],U=(0,a.useState)([]),Q=(0,n.Z)(U,2),j=Q[0],N=Q[1],S=(0,a.useState)(!0),b=(0,n.Z)(S,2),k=b[0],E=b[1],L=(0,a.useState)(null),K=(0,n.Z)(L,2),B=K[0],I=K[1],w=C.toISOString().slice(0,10);if((0,a.useEffect)((function(){var e=localStorage.getItem("token");e?(o.Z.defaults.headers.common.Authorization="Bearer ".concat(e),o.Z.get("/api/users/getUserData").then((function(e){var t=e.data;return F(t),o.Z.get("/api/products/getConsumedProduct/".concat(w))})).then((function(e){var t=e.data.dailyConsumedProducts;N(t||[])})).catch((function(e){console.error("Error fetching data:",e),I("Failed to fetch data. Please try again.")})).finally((function(){E(!1)}))):E(!1)}),[w]),k)return(0,c.jsx)(i.s5,{visible:!0,height:"24",width:"24",color:"white",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"});if(B)return(0,c.jsx)("div",{style:{color:"red"},children:B});var q=j.reduce((function(e,t){return e+(t.calories||0)}),0);return(0,c.jsxs)("div",{className:s.summaryContainer,children:[(0,c.jsxs)("div",{className:s.summarySection,children:[(0,c.jsxs)("h2",{className:s.summaryContainerHeader,children:["Summary for ",w]}),(0,c.jsxs)("p",{children:["Left"," ",isNaN((null===D||void 0===D||null===(t=D.user)||void 0===t||null===(r=t.usersInfo)||void 0===r?void 0:r.recommendedCalories)-q)?"000":String(Math.round((null===D||void 0===D||null===(d=D.user)||void 0===d||null===(u=d.usersInfo)||void 0===u?void 0:u.recommendedCalories)-q)).padStart(3,"0")," ","kcal"]}),(0,c.jsxs)("p",{children:["Consumed"," ",isNaN(q)?"000":String(Math.round(q)).padStart(3,"0")," ","kcal"]}),(0,c.jsxs)("p",{children:["Daily rate"," ",isNaN(null===D||void 0===D||null===(l=D.user)||void 0===l||null===(m=l.usersInfo)||void 0===m?void 0:m.recommendedCalories)?"000":String(Math.round((null===D||void 0===D||null===(A=D.user)||void 0===A||null===(h=A.usersInfo)||void 0===h?void 0:h.recommendedCalories)||0)).padStart(3,"0")," ","kcal"]}),(0,c.jsxs)("p",{children:["% of normal"," ",q>0&&(null===D||void 0===D||null===(f=D.user)||void 0===f||null===(g=f.usersInfo)||void 0===g?void 0:g.recommendedCalories)>0?String(Math.round(q/D.user.usersInfo.recommendedCalories*100)).padStart(3,"0"):"000"," ","kcal"]})]}),(0,c.jsxs)("div",{className:s.foodsNotRecommendedSection,children:[(0,c.jsx)("h3",{className:s.summaryContainerHeader,children:"Food not recommended"}),(null===D||void 0===D||null===(p=D.user)||void 0===p||null===(y=p.usersInfo)||void 0===y||null===(v=y.foodsNotRecommended)||void 0===v?void 0:v.length)>0?(0,c.jsx)("ul",{children:D.user.usersInfo.foodsNotRecommended.map((function(e,t){return(0,c.jsx)("li",{children:(r=e,r?r.charAt(0).toUpperCase()+r.slice(1):"")},t);var r}))}):(0,c.jsx)("li",{children:"Your diet will be displayed here"})]})]})}},8426:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n=r(9439),a=r(2791),o=r(5861),s=r(7757),i=r.n(s),c="DiaryAddProductForm_AddProductFormContainer__nNCcC",d="DiaryAddProductForm_inputContainer__UpEkf",u="DiaryAddProductForm_productNameContainer__AqC-R",l="DiaryAddProductForm_productNameInput__5VBDU",m="DiaryAddProductForm_gramsContainer__0PSwu",A="DiaryAddProductForm_gramsInput__8+FVD",h="DiaryAddProductForm_submitButton__c7XxS",f="DiaryAddProductForm_submitButtonImg__mwiNw",g="DiaryAddProductForm_AddMobileButton__wFYxL",p=r(3016),y="data:image/png;base64,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",v=r(184);p.Z.defaults.baseURL="https://slim-mom-project.onrender.com";var C=function(e){var t=e.selectedDate,r=(0,a.useState)(""),s=(0,n.Z)(r,2),C=s[0],x=s[1],P=(0,a.useState)(""),D=(0,n.Z)(P,2),F=D[0],U=D[1],Q=(0,a.useState)(!1),j=(0,n.Z)(Q,2),N=j[0],S=j[1],b=(0,a.useState)(null),k=(0,n.Z)(b,2),E=k[0],L=k[1],K=function(){var e=(0,o.Z)(i().mark((function e(r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),C&&F){e.next=4;break}return alert("Please fill out all fields"),e.abrupt("return");case 4:if(S(!0),L(null),e.prev=6,n=localStorage.getItem("token")){e.next=13;break}return console.log("Token not found"),L("Authorization token is missing. Please log in."),S(!1),e.abrupt("return");case 13:return console.log("Token:",n),e.next=16,p.Z.post("/api/products/addConsumedProduct",{consumedProduct:C,quantity:Number(F),date:t.toISOString().substring(0,10)},{headers:{Authorization:"Bearer ".concat(n)}});case 16:a=e.sent,console.log(a.data),201===a.status&&alert("Product added successfully!"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),e.t0.response&&e.t0.response.data.message?L(e.t0.response.data.message):L("Something went wrong. Please try again.");case 24:return e.prev=24,S(!1),e.finish(24);case 27:x(""),U("");case 29:case"end":return e.stop()}}),e,null,[[6,21,24,27]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)("main",{className:c,children:(0,v.jsxs)("form",{className:d,onSubmit:K,children:[(0,v.jsx)("div",{className:u,children:(0,v.jsx)("input",{type:"text",name:"consumedProduct",className:l,id:"consumedProduct",placeholder:"Enter product name",value:C,onChange:function(e){return x(e.target.value)},required:!0})}),(0,v.jsx)("div",{className:m,children:(0,v.jsx)("input",{type:"number",name:"quantity",id:"quantity",className:A,placeholder:"Grams",value:F,onChange:function(e){return U(e.target.value)},required:!0})}),E&&(0,v.jsx)("p",{style:{color:"red"},children:E}),(0,v.jsx)("button",{className:h,type:"submit",disabled:N,children:(0,v.jsx)("img",{className:f,loading:"lazy",src:y,alt:"Submit"})}),(0,v.jsx)("button",{className:g,type:"submit",disabled:N,children:"Add"})]})})},x={pageContainer:"DiaryPage_pageContainer__i3g+c",leftSideContainer:"DiaryPage_leftSideContainer__pFkG4",rightSideContainer:"DiaryPage_rightSideContainer__Q9HcM",headerContainer:"DiaryPage_headerContainer__KFeNK"},P=r(3433),D=r(9402),F="DiaryProductListItem_listItem__1zXaT",U="DiaryProductListItem_deleteButton__a29Oq",Q="DiaryProductListItem_info__mSZ1e",j="DiaryProductListItem_productList__JsCLl",N="DiaryProductListItem_quantityList__QG+Fk",S="DiaryProductListItem_calorieList__PXY1-",b="DiaryProductListItem_quantityListSpan__OqBqO",k="DiaryProductListItem_calorieListSpan__i1nWa",E=function(e){var t=e.product,r=e.isLoadingDeletedProd,n=e.onDelete,a=t.product,o=t.quantity,s=t.calories,i=t._id;return(0,v.jsxs)("li",{className:F,children:[(0,v.jsxs)("div",{className:Q,children:[(0,v.jsx)("div",{className:j,children:a}),(0,v.jsxs)("div",{className:N,children:[o," ",(0,v.jsx)("span",{className:b,children:"g"})]}),(0,v.jsxs)("div",{className:S,children:[Math.round(s)," ",(0,v.jsx)("span",{className:k,children:"kcal"})]})]}),(0,v.jsx)("button",{className:U,type:"button",onClick:function(){document.body.style.overflow="hidden",n&&n(i)},disabled:r,children:(0,v.jsx)(D.nfZ,{})})]})},L="DiaryProductList_text__BNqfg",K="DiaryProductList_boxProducts__FNVBS",B="DiaryProductList_productsList__FdmPj",I=function(e){var t=e.selectedDate,r=(0,a.useState)([]),s=(0,n.Z)(r,2),c=s[0],d=s[1],u=(0,a.useState)(!1),l=(0,n.Z)(u,2),m=l[0],A=l[1],h=(0,a.useState)(!1),f=(0,n.Z)(h,2),g=f[0],p=f[1],y=function(e){return e.toISOString().split("T")[0]},C=(0,a.useCallback)(function(){var e=(0,o.Z)(i().mark((function e(t){var r,n,a,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y(t),n=localStorage.getItem("token")){e.next=5;break}return console.error("No auth token found"),e.abrupt("return");case 5:return A(!0),e.prev=6,e.next=9,fetch("https://slim-mom-project.onrender.com/api/products/getConsumedProduct/".concat(r),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 9:if((a=e.sent).ok){e.next=15;break}return e.next=13,a.json();case 13:throw o=e.sent,new Error("Failed to fetch products, status: ".concat(a.status,", message: ").concat(o.message));case 15:return e.next=17,a.json();case 17:s=e.sent,d(s.dailyConsumedProducts||[]),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),console.error("Error fetching products:",e.t0);case 24:return e.prev=24,A(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[6,21,24,27]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,a.useEffect)((function(){t&&C(t)}),[t,C]);var x=function(){var e=(0,o.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token")){e.next=4;break}return console.error("No auth token found"),e.abrupt("return");case 4:return p(!0),e.prev=5,e.next=8,fetch("https://slim-mom-fullstack.onrender.com/api/products/deleteConsumedProduct/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 8:if((n=e.sent).ok){e.next=14;break}return e.next=12,n.json();case 12:throw a=e.sent,new Error("Failed to delete product, status: ".concat(n.status,", message: ").concat(a.message));case 14:d((function(e){return e.filter((function(e){return e._id!==t}))})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.error("Error deleting product:",e.t0);case 20:return e.prev=20,p(!1),document.body.style.overflow="unset",e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),D=c.length>0;return m?(0,v.jsx)("p",{className:L,children:"Loading..."}):D?(0,v.jsx)("div",{className:K,children:(0,v.jsx)("ul",{className:B,children:(0,P.Z)(c).reverse().map((function(e,r){return(0,v.jsx)(E,{product:e,date:t,onDelete:x,isLoadingDeletedProd:g},r)}))})}):(0,v.jsx)("p",{className:L,children:"The list in your diary is still empty."})},w="calendar_dateInputField__MDMBm",q=function(e){var t=e.selectedDate,r=e.onDateChange;return(0,v.jsx)("input",{type:"date",value:t.toISOString().substring(0,10),onChange:function(e){var t=new Date(e.target.value);console.log("Date input value:",e.target.value),r(t)},className:w})},T="MobileDiaryBtn_buttonContainer__ZK+2R",R="MobileDiaryBtn_submitButton__PchFE",V="MobileDiaryBtn_submitButtonImg__7Wtyi",W=function(e){var t=e.toggleFormVisibility;return(0,v.jsx)("div",{className:T,children:(0,v.jsxs)("button",{className:R,onClick:t,children:[" ",(0,v.jsx)("img",{className:V,loading:"lazy",src:y,alt:"Submit"})]})})},X=r(1075),Z=r(5251),J=function(){var e=(0,a.useState)(new Date),t=(0,n.Z)(e,2),r=t[0],o=t[1],s=(0,a.useState)(!1),i=(0,n.Z)(s,2),c=i[0],d=i[1],u=(0,X.ac)({query:"(max-width: 703px)"}),l=function(e){console.log("Date selected:",e),o(e)};return(0,v.jsxs)("div",{className:x.pageContainer,children:[(0,v.jsxs)("div",{className:x.leftSideContainer,children:[u&&!c&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{selectedDate:r,onDateChange:l}),(0,v.jsx)(I,{selectedDate:r})]}),u&&c&&(0,v.jsx)(C,{selectedDate:r}),u&&!c&&(0,v.jsx)(W,{toggleFormVisibility:function(){d((function(e){return!e}))}}),!u&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{selectedDate:r,onDateChange:l}),(0,v.jsx)(C,{selectedDate:r}),(0,v.jsx)(I,{selectedDate:r})]})]}),(0,v.jsx)("div",{className:x.rightSideContainer,style:{display:u&&c?"none":"block"},children:(0,v.jsx)("div",{className:x.summarySection,children:(0,v.jsx)(Z.E,{selectedDate:r})})})]})}}}]);
//# sourceMappingURL=426.39d6b277.chunk.js.map