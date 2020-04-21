(this["webpackJsonpairtable-overdose-response"]=this["webpackJsonpairtable-overdose-response"]||[]).push([[0],{12:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/SUDI-Workflow.07e4ac10.svg"},27:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),i=a(6),c=(a(12),a(18)),s=a(20),m=function(){return r.a.createElement(c.a,{fluid:!0,className:"top-bar"},r.a.createElement(s.a,null,r.a.createElement(d,{to:"/",label:"Home"}),r.a.createElement(d,{to:"/participants",label:"Participants"}),r.a.createElement(d,{to:"/incidents",label:"Incidents"}),r.a.createElement(d,{to:"/engagements",label:"Engagements"})))},d=function(e){var t=e.to,a=e.label;return r.a.createElement(i.c,{exact:!0,className:"top-bar-nav-link",to:t,activeClassName:"active-top-bar-nav-link"},a)},u=a(7),h=a(25),p=a(26),g=a(24),b=function(e){return function(t){var a=t.backgroundColor,l=void 0===a?"gray":a,o=t.useCardLayout,i=void 0===o?e.useCardLayout:o,c=t.viewControls,s=void 0===c||c,m=t.showRefresh,d=void 0===m?e.showRefresh:m,u=t.style,b=t.label,E=void 0===b?e.label:b,f=Object(p.a)(t,["backgroundColor","useCardLayout","viewControls","showRefresh","style","label"]),w=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement("div",{style:{background:"#666",display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{marginLeft:"10px",fontSize:"20px",color:"white"}},E),d&&r.a.createElement(g.a,{variant:"light",style:{margin:"10px"},onClick:function(){return w.current.src+=""}},"Refresh Table")),r.a.createElement("iframe",Object.assign({ref:w,title:"Base",className:"airtable-embed",src:"".concat(e.src,"?backgroundColor=").concat(l).concat(i?"&layout=card":"").concat(s?"&viewControls=on":""),frameBorder:"0",width:"100%",height:"533",style:Object(h.a)({background:"transparent",border:"1px solid #666",marginBottom:"50px"},u)},f)))}},E={Base:b({src:"https://airtable.com/embed/shrmD4T1dU1VdykBo",showRefresh:!0,label:"All Data"}),RecordParticipantForm:b({src:"https://airtable.com/embed/shrFwOTOVDGbQDmMP"}),RecordIncidentForm:b({src:"https://airtable.com/embed/shrvsr3brVYusYc8R"}),RecordEngagementForm:b({src:"https://airtable.com/embed/shrE7xnBvZHXOftfp"}),OutstandingIncidents:b({src:"https://airtable.com/embed/shrmD4T1dU1VdykBo/tblF0kMWjd3oHFjTu/viwJtGVG6IBJuA9En",showRefresh:!0,useCardLayout:!0,label:"Outstanding Incidents"}),Participants:b({src:"https://airtable.com/embed/shrmD4T1dU1VdykBo/tblFZsc8OLXZO9lNu/viwIW0zZjhtYz9bCS",showRefresh:!0,useCardLayout:!0,label:"All Participants"}),EngagementsByParticipants:b({src:"https://airtable.com/embed/shrmD4T1dU1VdykBo/tblPYtZuRPJaOEywQ/viw3Ijwo7QoWXHiyH",showRefresh:!0,label:"Engagements by Participant"})},f=function(e){var t=e.children;return r.a.createElement("p",{style:{fontWeight:500}},t)},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Incidents are overdose events reported by first responders or other sources. Revere gets a weekly incident report from a public safety data analyst."),r.a.createElement(f,null,"A participant is required to record an incident. If the participant does not appear in the form, please add them"," ",r.a.createElement(i.b,{to:"/participants"},"here"),". In the future, we will make it easier to add participants while recording incidents."),r.a.createElement(E.RecordIncidentForm,null),r.a.createElement(f,null,"Revere performs weekly outreach in response to incidents. Outstanding incidents without outreach engagement are shown in the table below, corresponding to the outreach for the week."),r.a.createElement(E.OutstandingIncidents,null))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Anyone that recieves help from WROC is a participant. Incidents and engagements are attached to partipicipants. Use the form below to add a new participant. Only information that is specific to the participant, such as their name and housing status, are included in the data."),r.a.createElement(E.RecordParticipantForm,null),r.a.createElement(f,null,"Once a participant is added to the system, they will appear in the table below. Clicking on a participant will show detailed personal information and associated incidents and engagements."),r.a.createElement(E.Participants,{useCardLayout:!0,showRefresh:!0}))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Engagements are interactions between WROC and a participant. Overdose outreach responses are recorded as engagements, as are interactions at drop-in hours."),r.a.createElement(f,null,"A participant is required to record an engagement. If the participant does not appear in the form, please add them"," ",r.a.createElement(i.b,{to:"/participants"},"here"),". In the future, we will make it easier to add participants while recording engagements."),r.a.createElement(E.RecordEngagementForm,null),r.a.createElement(f,null,"Engagements are grouped by participant in the table below. When an outreach engagement is logged, the incident will no longer appear in the list of outstanding incidents."),r.a.createElement(E.EngagementsByParticipants,null))},k=a(23),R=a.n(k),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:R.a,alt:"SUDO Workflow Diagram",style:{marginBottom:"1em",maxHeight:"300px"}}),r.a.createElement(f,null,"Hello! This site demonstrates workflows for running Revere's overdose response. It uses"," ",r.a.createElement("a",{href:"https://airtable.com/tblFZsc8OLXZO9lNu/viwIW0zZjhtYz9bCS"},"Airtable")," ","to store and organize data. Click on a section above to start."),r.a.createElement(f,null,"You can browse all data in the tables below. Each tab has several views, which you can select by clicking on the arrow in the upper-left corner."),r.a.createElement(f,null,"Hosted on"," ",r.a.createElement("a",{href:"https://github.com/alexjball/harm-reduction-frontend"},"Github"),"."),r.a.createElement(E.Base,null))},C=function(){return r.a.createElement("div",{className:"content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/participants"},r.a.createElement(v,null)),r.a.createElement(u.a,{path:"/incidents"},r.a.createElement(w,null)),r.a.createElement(u.a,{path:"/engagements"},r.a.createElement(y,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(O,null))))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(C,null))};a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f0e0b7d1.chunk.js.map