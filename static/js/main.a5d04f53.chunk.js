(this["webpackJsonpportfolio-marco"]=this["webpackJsonpportfolio-marco"]||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/me.92d20dd0.png"},46:function(e,t,n){e.exports=n(60)},51:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(20),i=n.n(c),l=(n(51),n(15)),r=n(16),s=n(11),u=n(19),m=n(18),h=n(63),d=n(41),p=n(64),f=n(66),k=n(40),v=n(37),E=n.n(v),b=(n(52),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.personalMachineClick=a.personalMachineClick.bind(Object(s.a)(a)),a.cloudClick=a.cloudClick.bind(Object(s.a)(a)),a}return Object(r.a)(n,[{key:"personalMachineClick",value:function(){window.location.href="http://"+this.props.machineLinks[0]}},{key:"cloudClick",value:function(){window.location.href=this.props.machineLinks[1]}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(p.a.Item,null,o.a.createElement("p",{className:"text-justify title-text text-muted"},"Marco Fernandes",o.a.createElement("br",null),"Portfolio"),o.a.createElement("span",{className:"parent-image-title"},o.a.createElement("img",{className:"image-title rounded border border-secondary",src:E.a})))),o.a.createElement("span",{className:"holder-title-buttons"},o.a.createElement(f.a,{className:"title-buttons",type:"radio",name:"options",defaultValue:this.props.defaultMachine},o.a.createElement(k.a,{onClick:function(){return e.cloudClick()},value:"cloud",variant:"secondary"},o.a.createElement("div",{className:"text-title-button"},"Cloud")),o.a.createElement(k.a,{onClick:function(){return e.personalMachineClick()},value:"machine",variant:"secondary"},o.a.createElement("div",{className:"text-title-button"},"Personal ",o.a.createElement("br",null)," Machine")))))}}]),n}(a.Component)),j=n(65),g=n(67),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.cloudOpen=a.cloudOpen.bind(Object(s.a)(a)),a.machineOpen=a.machineOpen.bind(Object(s.a)(a)),a}return Object(r.a)(n,[{key:"cloudOpen",value:function(e){e.stopPropagation(),window.location.href=this.props.project.cloudLink}},{key:"machineOpen",value:function(e){e.stopPropagation(),window.location.href="http://"+this.props.project.machineLink}},{key:"renderMachineButton",value:function(){var e=this;return"#0"!=this.props.project.machineLink?o.a.createElement(d.a,{onClick:function(t){e.machineOpen(t)},variant:"dark",className:"machine-project"},o.a.createElement("div",{className:"toogle-text-project"},"Personal",o.a.createElement("br",null),"Machine")):o.a.createElement("div",{className:"machine-works-project"},"Machine in the works")}},{key:"renderCloudButton",value:function(){var e=this;return"#0"!=this.props.project.cloudLink?o.a.createElement(d.a,{onClick:function(t){e.cloudOpen(t)},variant:"secondary",className:"cloud-project"},o.a.createElement("div",{className:"toogle-text-project"},"Cloud")):o.a.createElement("div",{className:"cloud-works-project"},"Cloud in the works")}},{key:"render",value:function(){return o.a.createElement(j.a,null,o.a.createElement(g.a,null,o.a.createElement(j.a.Toggle,{as:g.a.Header,eventKey:"0",className:"project-item"},o.a.createElement(d.a,null,o.a.createElement("div",{className:"toogle-text-project"},this.props.project.name)),this.renderMachineButton(),this.renderCloudButton()),o.a.createElement(j.a.Collapse,{eventKey:"0",className:"project-item"},o.a.createElement(g.a.Body,null,o.a.createElement("div",{className:"card-text-project"},this.props.project.description)))))}}]),n}(a.Component),w=n(62),y=(n(57),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(w.a,{className:"container-projects"},this.props.configs.projects.map((function(e,t){return o.a.createElement(C,{key:t,project:e})})))}}]),n}(a.Component)),O={projects:[],defaultMachine:"cloud",machineLinks:[]};O.machineLinks[0]="invius.ddns.net",O.machineLinks[1]="https://invius.github.io/portfolio/",O.projects[0]={name:"PowerBet",description:"You can sign up to have a account to play and bet on the winning team! \n Power To Your Guess!!!",machineLink:"invius.ddns.net/powerbet",cloudLink:"https://invius.github.io/powerbet/"},O.projects[1]={name:"Angular Tetris",description:"In production...",machineLink:"#0",cloudLink:"#0"};var N=O,x=(n(58),n(59),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).state={showTechnologies:!1,isFadeInNext:!1};return a.technologiesClick=a.technologiesClick.bind(Object(s.a)(a)),a}return Object(r.a)(n,[{key:"oldPortfolioClick",value:function(){window.location.href="https://kanoeyesr.wixsite.com/portofolio"}},{key:"technologiesClick",value:function(){if(!0===this.state.showTechnologies){var e=this;this.setState({isFadeInNext:!1}),setTimeout((function(){e.setState({showTechnologies:!1})}),1e3)}else this.setState({isFadeInNext:!0,showTechnologies:!0})}},{key:"renderTechnologies",value:function(){var e=this;return this.state.showTechnologies?o.a.createElement(h.a.Dialog,{className:(this.state.isFadeInNext?"fade-in":"fade-out")+" tech-z-order"},o.a.createElement(h.a.Header,{onClick:function(){return e.technologiesClick()},closeButton:!0},o.a.createElement(h.a.Title,null,"Technologies")),o.a.createElement(h.a.Body,null,o.a.createElement("p",null,o.a.createElement("b",null,"React"),o.a.createElement("br",null),"-react-bootstrap",o.a.createElement("br",null),o.a.createElement("b",null,"Personal Machine"),o.a.createElement("br",null),"-Docker",o.a.createElement("br",null),"-Nginx")),o.a.createElement(h.a.Footer,null,o.a.createElement(d.a,{onClick:function(){return e.technologiesClick()},variant:"secondary"},"Close"))):o.a.createElement("div",null)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b,{defaultMachine:N.defaultMachine,machineLinks:N.machineLinks}),o.a.createElement(y,{configs:N}),o.a.createElement("div",{className:"footer-buttons-holder"},o.a.createElement(d.a,{onClick:function(){return e.oldPortfolioClick()},className:"app-old-portfolio"},o.a.createElement("div",null,"Old Portfolio")),o.a.createElement(d.a,{onClick:function(){return e.technologiesClick()},className:"app-technologies"},o.a.createElement("div",null,"Technologies"))),this.renderTechnologies())}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.a5d04f53.chunk.js.map