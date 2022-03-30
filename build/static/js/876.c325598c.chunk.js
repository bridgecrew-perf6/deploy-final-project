"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[876],{3686:function(e,a,s){s.r(a),s.d(a,{default:function(){return j}});var t=s(1413),n=s(885),r=s(2791),o=s(6194),i=s(5316),c=s(3360),l=s(2336);s(8189);var d=s.p+"static/media/staffBook.9f7d5790ac150aba685db7a8077bf1ba.svg",m=s(8168),h=s(2542),u=s(184);function j(e){var a=(0,r.useState)(""),s=(0,n.Z)(a,2),j=s[0],x=s[1],p=(0,r.useState)(""),f=(0,n.Z)(p,2),b=f[0],_=f[1],g=(0,r.useState)(!1),v=(0,n.Z)(g,2),N=v[0],y=v[1],S=(0,r.useContext)(m.I).setFreelancerFind,C=(0,l.a)(o.fo),w=C.loading,T=C.error,E=C.data;if(w)return(0,u.jsx)("p",{});if(T)return console.log(T),(0,u.jsx)("p",{children:"error:"});var D=E&&E.getUsers.filter((function(e){return e.description.includes(j)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,(0,t.Z)((0,t.Z)({},e),{},{size:"xl",centered:!0,className:"ProfileUpdate jobsAdminModalBg ",children:[(0,u.jsx)(i.Z.Header,{closeButton:!0,children:(0,u.jsx)(i.Z.Title,{className:"contained-modal-title-vcenter w-100",children:(0,u.jsxs)("div",{className:"update-jobs-title d-flex align-items-center justify-content-around",children:[(0,u.jsx)("h3",{children:"Staff Search"}),(0,u.jsx)("img",{alt:"",src:d,width:"80",height:"80"})]})})}),(0,u.jsxs)(i.Z.Body,{children:[(0,u.jsx)("div",{className:"FreelancerSearch",children:(0,u.jsx)("form",{className:"Search-Form",children:(0,u.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"text",name:"freelancerSearch",placeholder:"Search by Position"})})}),D.length>0?D.map((function(e){return console.log(e.id),(0,u.jsxs)("section",{className:"MainContainer",children:[(0,u.jsxs)("div",{className:"bodyCard-avatar",children:[(0,u.jsx)("img",{src:e.avatar,alt:"img"}),(0,u.jsx)("h2",{className:"name",children:"".concat(e.first_name[0].toUpperCase()+e.first_name.substring(1).toLowerCase()," \n                      ").concat(e.last_name[0].toUpperCase()+e.last_name.substring(1).toLowerCase())}),(0,u.jsxs)("div",{className:"OpenContact",children:[(0,u.jsx)(c.Z,{className:"Btn contactDetailsButton mx-1",variant:"secondary",onClick:function(){y(!0),function(e){var a=E.getUsers.find((function(a){return a.id===e}));S(a)}(e.id),_(e.id)},children:"Contact"}),(0,u.jsx)(c.Z,{className:"Btn contactDetailsButton mx-1",variant:"secondary",onClick:function(){y(!1)},children:"Details"})]})]}),N&&b===e.id?(0,u.jsx)(h.default,{}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"bodyCard-details",children:[(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"Name: "}),e.first_name[0].toUpperCase()+e.first_name.substring(1).toLowerCase()+" "+e.last_name[0].toUpperCase()+e.last_name.substring(1).toLowerCase()]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"Hourly Rate: "}),"\u20ac".concat(e.hourly_rate," per hour ")]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"Summary/Position: "}),e.description[0].toUpperCase()+e.description.substring(1).toLowerCase()]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"Phone Number: "}),e.phone]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("span",{children:"Email: "}),e.email.toLowerCase()]})]})})]},e.id)})):(0,u.jsx)("h3",{className:"text-center my-5",children:"No such Freelancer is Available"})]})]}))})}},9040:function(e,a,s){s.r(a),s.d(a,{default:function(){return M}});var t=s(885),n=s(2791),r=s(2336),o=s(1830),i=s.n(o),c=s(2445),l=s(6153),d=s(8221),m=s(8153),h=s(8255),u=s(8168),j=s(6194),x=s(6737),p=s(1927),f=s(6871),b=s(3360),_=s(2426),g=s.n(_),v=s(5316),N=s(8820),y=s(9126),S=s(8617),C=s(6856),w=s(6355),T=s(7530),E=s(4376),D=s(8395),L=s(4991),Z=s(184);function F(e){var a=e.job,s=(0,n.useState)(!1),r=(0,t.Z)(s,2),o=r[0],i=r[1],c=(0,n.useContext)(u.I),l=c.freelancerLoginData,d=c.isFreelancerLogin,m=(0,E.D)(D.O$,{refetchQueries:{query:j.U1,variables:{getOneUserId:l.id}}}),h=(0,t.Z)(m,2),x=h[0],p=h[1];p.data,p.loading,p.error;return(0,Z.jsx)(Z.Fragment,{children:o?(0,Z.jsxs)("div",{className:"alert text-center",role:"alert",children:["Your message was sent!",(0,Z.jsx)("img",{alt:"",src:L.Z,width:"150",height:"150",className:""})]}):(0,Z.jsxs)("div",{className:"container contact-form-freelancer contactFormContainer ",children:[(0,Z.jsx)("h4",{children:"Contact the Company"}),(0,Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d&&l.email===e.target.from_email.value&&(T.ZP.sendForm({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_SERVICE_ID,{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_TEMPLATE_ID,e.target,{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_USER_ID).then((function(e){x({variables:{userId:l.id,job:{id:a.id,job_Title:a.job_Title,start_Date:a.start_Date,end_Date:a.end_Date,num_of_people_needed:a.num_of_people_needed,job_description:a.job_description}}})})).catch((function(e){return console.log(e)})),e.target.reset(),i(!0))},children:[(0,Z.jsxs)("div",{className:"d-flex justify-content-between mb-3 ",children:[(0,Z.jsxs)("div",{className:"w-100",children:[(0,Z.jsxs)("div",{className:"form-group col-auto ",children:[(0,Z.jsx)("label",{htmlFor:"name",children:"Company Name"}),(0,Z.jsx)("input",{type:"text",name:"to_name",className:"form-control",defaultValue:a.created_by.company_Name,readOnly:!0})]}),(0,Z.jsxs)("div",{className:"form-group col-auto",children:[(0,Z.jsx)("label",{htmlFor:"email",children:"Company Email"}),(0,Z.jsx)("input",{type:"email",name:"to_email",className:"form-control",defaultValue:a.created_by.email,readOnly:!0})]})]}),(0,Z.jsx)("div",{className:" d-flex justify-content-center align-items-center                          ",children:(0,Z.jsx)("img",{src:a.created_by.avatar,className:"contact-avatar-company  ",alt:""})})]}),(0,Z.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,Z.jsx)("div",{className:" d-flex justify-content-center align-items-center                          ",children:(0,Z.jsx)("img",{src:l.avatar,className:"contact-avatar-freelancer  ",alt:""})}),(0,Z.jsxs)("div",{className:"w-100",children:[(0,Z.jsxs)("div",{className:"form-group col-auto",children:[(0,Z.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,Z.jsx)("input",{type:"text",name:"from_name",className:"form-control",defaultValue:"".concat(l.first_name," ").concat(l.last_name),maxLength:"50",required:!0})]}),(0,Z.jsxs)("div",{className:"form-group col-auto",children:[(0,Z.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,Z.jsx)("input",{type:"email",name:"from_email",className:"form-control",defaultValue:l.email,maxLength:"50"})]}),(0,Z.jsx)("div",{className:"form-row",children:(0,Z.jsxs)("div",{className:"form-group col-auto",children:[(0,Z.jsx)("label",{htmlFor:"phone",children:"Contact Number"}),(0,Z.jsx)("input",{type:"tel",name:"from_phone",className:"form-control",defaultValue:l.phone,maxLength:"20"})]})})]})]}),(0,Z.jsx)("div",{className:"form-row mb-3",children:(0,Z.jsxs)("div",{className:"form-group col-md-12 ",children:[(0,Z.jsx)("label",{htmlFor:"message",children:"Message"}),(0,Z.jsx)("textarea",{type:"textarea",name:"from_message",className:"form-control",placeholder:"Message",required:!0,rows:5,maxLength:500})]})}),(0,Z.jsx)("div",{className:"text-end m-2",children:(0,Z.jsx)("button",{type:"submit",className:"btn btn-outline-secondary col-3 ",value:"Send",children:"Send"})})]})]})})}function O(e){var a=e.job,s=(0,f.s0)(),r=(0,n.useContext)(u.I),o=r.isFreelancerLogin,i=r.freelancerLoginData,c=r.setIsCompanyLogin,l=(0,n.useState)(!1),d=(0,t.Z)(l,2),m=d[0],h=d[1],j=(0,n.useState)(!1),x=(0,t.Z)(j,2),p=x[0],_=x[1],T=(0,n.useState)(!1),E=(0,t.Z)(T,2),D=E[0],L=E[1],O=function(){return L(!D)};return(0,Z.jsxs)("div",{className:"carousel-card",title:"To work from ".concat(g()(a.start_Date).locale("en").format("ll")," until ").concat(g()(a.end_Date).locale("en").format("ll"),"."),children:[(0,Z.jsxs)("h5",{children:[" ",a.job_Title.slice(0,20)+(a.job_Title.length>20?"...":"")]}),(0,Z.jsxs)("p",{children:[" ",a.num_of_people_needed," open position(s)"]}),(0,Z.jsxs)("p",{children:["posted"," ",g()(new Date(1e3*a.issued_At.slice(0,10)).toISOString()).fromNow()]}),(0,Z.jsxs)("p",{children:["by"," ",(0,Z.jsxs)("strong",{children:[" ",a.created_by.company_Name.slice(0,30)+(a.created_by.company_Name.length>30?"...":"")," "]})]}),(0,Z.jsx)("div",{className:"text-center",children:(0,Z.jsxs)(b.Z,{variant:"secondary",size:"md",onClick:function(){return h(!0)},children:["Details ",(0,Z.jsx)(N.y1n,{})]})}),(0,Z.jsxs)(v.Z,{show:m,onHide:function(){return h(!1)},animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,Z.jsx)(v.Z.Header,{className:"modalHeader",closeButton:!0,children:(0,Z.jsx)(v.Z.Title,{children:(0,Z.jsxs)("h3",{children:[" ",a.job_Title.slice(0,100)+(a.job_Title.length>100?"...":"")]})})}),(0,Z.jsxs)(v.Z.Body,{children:[p||(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)(N.wEQ,{})," ",(0,Z.jsx)("strong",{children:"Job description:"})," ",a.job_description.slice(0,500)+(a.job_description.length>500?"...":"")]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(y.HHm,{})," ",(0,Z.jsx)("strong",{children:"Open positions:"})," ",a.num_of_people_needed," (to work from ".concat(g()(a.start_Date).locale("en").format("ll")," until ").concat(g()(a.end_Date).locale("en").format("ll"),").")]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(C.dvE,{})," ",(0,Z.jsx)("strong",{children:"Posted:"})," ",g()(new Date(1e3*a.issued_At.slice(0,10)).toGMTString()).fromNow()]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(S.$xp,{})," ",(0,Z.jsx)("strong",{children:"Company:"})," ",a.created_by.company_Name.slice(0,50)+(a.created_by.company_Name.length>50?"...":"")]})]}),(0,Z.jsx)("div",{className:"text-center m-2",children:o?(0,Z.jsx)(b.Z,{onClick:function(){return _(!p)},variant:"secondary  col-6",onMouseEnter:O,onMouseLeave:O,disabled:!!i.favorite.find((function(e){return e.id===a.id})),children:D?(0,Z.jsx)(w.UzV,{}):p?"Return to job description":i&&i.favorite.find((function(e){return e.id===a.id}))?" you already applied":" Contact"}):(0,Z.jsx)(b.Z,{onClick:function(){localStorage.clear(),c(!1),s("/freelancer-login")},variant:"secondary  col-6",children:"You should be logged to contact this company."})})]}),p&&(0,Z.jsx)(F,{job:a})]})]})}var I=[{width:1,itemsToShow:1,itemsToScroll:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3,itemsToScroll:3},{width:1200,itemsToShow:4,itemsToScroll:4}];function P(){var e=(0,r.a)(j.Jq),a=e.data;return e.error?(0,Z.jsx)("div",{children:(0,Z.jsx)("p",{children:"Currently there are no Job Available"})}):(0,Z.jsxs)("div",{className:"jobs-carousel",children:[(0,Z.jsx)("hr",{className:"separator"}),(0,Z.jsx)("div",{className:"carousel-wrapper",children:(0,Z.jsx)(p.Z,{enableMouseSwipe:!1,easing:"cubic-bezier(1,.15,.55,1.54)",tiltEasing:"cubic-bezier(0.110, 1, 1.500, 0.210)",transitionMs:1500,breakPoints:I,children:a.getJobs.slice(0,40).map((function(e){return(0,Z.jsx)(O,{job:e},e.id)}))})})]})}s(7757),s(4569),"".concat("https://api.adzuna.com/v1/api/jobs","/").concat("de","/search/").concat("1","?app_id=").concat("d2c33ab1","&app_key=").concat("29a3798b05f90a06de46cbde16715be2","&").concat("results_per_page=40","&").concat("what_and=freiberuf","&").concat("what_or=freelance%20freiberuf","&").concat("where=deutschland","&").concat("category=hospitality-catering-jobs","&sort_by=date");s(3686);var A=s.p+"static/media/register.f6baf7e8fffa2899117adce9f8ff9ccb.svg";var B=s.p+"static/media/searchJobs.49e025ac0316fb6dc9698621978f5fb9.svg";var k=s.p+"static/media/getHired.083253c8492bdc00c332e025c478d016.svg",H=function(){return(0,Z.jsxs)("section",{className:"main",children:[(0,Z.jsx)("div",{className:"center-text",children:(0,Z.jsx)("h2",{children:"Find and apply for restaurant & hospitality Jobs"})}),(0,Z.jsxs)("div",{className:"allExp",children:[(0,Z.jsxs)("div",{className:"exps",children:[(0,Z.jsx)("div",{className:"circleImage",children:(0,Z.jsx)("img",{src:A,alt:""})}),(0,Z.jsx)("h4",{children:"Create your profile"}),(0,Z.jsx)("p",{children:"Add photos, your skills and interests so you can apply to jobs fast and show employers who you are and what you bring to the table."})]}),(0,Z.jsxs)("div",{className:"exps",children:[(0,Z.jsx)("div",{className:"circleImage",children:(0,Z.jsx)("img",{src:B,alt:""})}),(0,Z.jsx)("h4",{children:"Search Jobs"}),(0,Z.jsx)("p",{children:"Find jobs without wasting time. Search once and see all jobs that match, filter results based on your needs, sort by what is most important to you."})]}),(0,Z.jsxs)("div",{className:"exps",children:[(0,Z.jsx)("div",{className:"circleImage",children:(0,Z.jsx)("img",{src:k,alt:""})}),(0,Z.jsx)("h4",{children:"Get Hired"}),(0,Z.jsx)("p",{children:"With an ever-growing number of jobs in top restaurants,bars, hotels, nightlife and more, It's never been easier to advance your career."})]})]})]})};function R(e){var a=e.job,s=(0,f.s0)(),r=(0,n.useContext)(u.I).isFreelancerLogin,o=(0,n.useState)(!1),i=(0,t.Z)(o,2),c=i[0],l=i[1],d=(0,n.useState)(!1),m=(0,t.Z)(d,2),h=m[0],j=m[1],x=(0,n.useState)(!1),p=(0,t.Z)(x,2),_=p[0],T=p[1],E=function(){return T(!_)};return(0,Z.jsx)("div",{className:"jobs-searchCardSection",title:"To work from ".concat(g()(a.start_Date).locale("en").format("ll")," until ").concat(g()(a.end_Date).locale("en").format("ll"),"."),children:(0,Z.jsxs)("div",{className:"searchCard-card",children:[(0,Z.jsxs)("h5",{children:[" ",a.job_Title.slice(0,15)+(a.job_Title.length>15?"...":"")]}),(0,Z.jsxs)("p",{children:[" ",a.num_of_people_needed," open position(s)"]}),(0,Z.jsxs)("p",{children:["posted"," ",g()(new Date(1e3*a.issued_At.slice(0,10)).toGMTString()).fromNow()]}),(0,Z.jsxs)("p",{children:["by"," ",(0,Z.jsxs)("strong",{children:[" ",a.created_by.company_Name.slice(0,30)+(a.created_by.company_Name.length>30?"...":"")," "]})]}),(0,Z.jsx)("div",{className:"text-center",children:(0,Z.jsxs)(b.Z,{variant:"secondary",size:"md",onClick:function(){return l(!0)},children:["Details ",(0,Z.jsx)(N.y1n,{})]})}),(0,Z.jsxs)(v.Z,{show:c,onHide:function(){return l(!1)},animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,Z.jsx)(v.Z.Header,{className:"modalHeader",closeButton:!0,children:(0,Z.jsx)(v.Z.Title,{children:(0,Z.jsxs)("h3",{children:[" ",a.job_Title.slice(0,100)+(a.job_Title.length>100?"...":"")]})})}),(0,Z.jsxs)(v.Z.Body,{children:[h||(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)(N.wEQ,{}),"  ",(0,Z.jsx)("strong",{children:"Job description:"}),"  ",a.job_description.slice(0,500)+(a.job_description.length>500?"...":"")]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(y.HHm,{}),"  ",(0,Z.jsx)("strong",{children:"Open positions:"})," ",a.num_of_people_needed,(0,Z.jsxs)("em",{children:[" "," (to work from ".concat(g()(a.start_Date).locale("en").format("ll")," until ").concat(g()(a.end_Date).locale("en").format("ll"),".)")," "]})]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(C.dvE,{}),"  ",(0,Z.jsx)("strong",{children:"Posted:"})," ",g()(new Date(1e3*a.issued_At.slice(0,10)).toGMTString()).fromNow()]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(S.$xp,{}),"  ",(0,Z.jsx)("strong",{children:"Company:"})," ",a.created_by.company_Name.slice(0,50)+(a.created_by.company_Name.length>50?"...":"")]})]}),(0,Z.jsx)("div",{className:"text-center m-2",children:r?(0,Z.jsx)(b.Z,{onClick:function(){return j(!h)},variant:"secondary  col-6",onMouseEnter:E,onMouseLeave:E,children:_?(0,Z.jsx)(w.UzV,{}):h?"Return to job description":"  Contact"}):(0,Z.jsx)(b.Z,{onClick:function(){s("/freelancer-login")},variant:"secondary  col-6",children:"You should be logged to contact this company."})})]}),h&&(0,Z.jsx)(F,{job:a})]})]})})}s(2144);function M(){var e=(0,n.useState)(""),a=(0,t.Z)(e,2),s=a[0],o=a[1],p=[c,l,d,m,h][Math.floor(5*Math.random())],f=(0,r.a)(j.Jq),b=f.loading,_=f.error,g=f.data,v=(0,n.useContext)(u.I),N=v.isTitleFilter,y=v.setIsTitleFilter,S=(0,n.useRef)(),C=s&&g.getJobs.filter((function(e){return e.job_Title.toLowerCase().includes(s.toLowerCase())||e.job_description.toLowerCase().includes(s.toLowerCase())||e.created_by.company_Name.toLowerCase().includes(s.toLowerCase())}));return b?(0,Z.jsx)("div",{className:"m2-auto text-center loading-block Spinner-Media",children:(0,Z.jsx)("img",{src:"https://cdn.dribbble.com/users/924068/screenshots/3757746/media/6035d641a7d26f1ba75421d15ce173cf.gif",alt:"img"})}):(_&&(console.log("========GraphQL Fetch Error============================"),console.log(_),console.log("====================================")),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:" homeContainer",children:[(0,Z.jsxs)("section",{className:"jobSearchContainer",children:[(0,Z.jsxs)("div",{className:"banner-container",style:{backgroundImage:"url(' ".concat(p,"')"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",animation:"fadeIn 3s ease-in-out"},children:[(0,Z.jsxs)("h4",{className:"animate__animated animate__fadeInLeftBig animate__delay-2s animate__slow",children:[" ","GASTRONOMY JOBS"]}),(0,Z.jsxs)("h5",{className:"animate__animated animate__fadeInLeftBig animate__delay-3s animate__slower",children:[" ","PEOPLE WHEN YOU NEED"]}),(0,Z.jsx)("div",{className:"search-fields",children:(0,Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(S.current.value),S.current.value.length>0?y(!0):(i().fire({position:"top",iconHtml:"<img src=".concat(x,">"),title:"No job found",showConfirmButton:!1,timer:2e3}),y(!1)),document.getElementById("reset-form").reset()},id:"reset-form",children:[(0,Z.jsx)("input",{name:"searchJobTitle",type:"text",placeholder:" Search by job title, description or company name",ref:S}),(0,Z.jsx)("input",{className:"search-button",type:"submit",value:"Search Jobs"})]})})]}),(0,Z.jsx)("div",{className:"jobSearchBox",children:N&&C&&C.slice(0,20).map((function(e){return(0,Z.jsx)(R,{job:e},e.id)}))})]}),(0,Z.jsxs)("div",{className:"jobs-combo-box",children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(H,{})]})]})}))}},8189:function(){},6737:function(e,a,s){e.exports=s.p+"static/media/exclamation.a4279905560c3f2363a1.ico"},2445:function(e,a,s){e.exports=s.p+"static/media/homeBg1.74e979a3f15e4116e1f8.jpg"},6153:function(e,a,s){e.exports=s.p+"static/media/homeBg2.1e89c30e8ed28eaa0bc6.jpg"},8221:function(e,a,s){e.exports=s.p+"static/media/homeBg3.69752624b7bdeb8d11fb.jpg"},8153:function(e,a,s){e.exports=s.p+"static/media/homeBg4.4c4a950e0e3d722fd5fe.jpg"},8255:function(e,a,s){e.exports=s.p+"static/media/homeBg5.7960d16caa6b124ab3bf.jpg"}}]);
//# sourceMappingURL=876.c325598c.chunk.js.map