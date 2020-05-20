(this.webpackJsonphw19=this.webpackJsonphw19||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=a(12),o=a(13),u=a(17),i=a(16);var m=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"})))},h=a(14),f=a.n(h);var d=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name",r.a.createElement("i",{className:" btn fa fa-fw fa-sort",onClick:function(){return e.handleSort("Name")}})),r.a.createElement("th",{scope:"col"},"Phone",r.a.createElement("i",{className:"fa fa-fw fa-sort",onClick:function(){return e.handleSort("Phone")}})),r.a.createElement("th",{scope:"col"},"Email",r.a.createElement("i",{className:"fa fa-fw fa-sort",onClick:function(){return e.handleSort("Email")}})),r.a.createElement("th",{scope:"col"},"DOB",r.a.createElement("i",{className:"fa fa-fw fa-sort",onClick:function(){return e.handleSort("DOB")}})))),r.a.createElement("tbody",null,e.results.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("img",{alt:e.name,className:"img-fluid",src:e.picture})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(f.a,{format:"MM/DD/YYYY",date:e.dob})))}))))},p=a(15),E=a.n(p),v=function(){return E.a.get("https://randomuser.me/api?results=200&nat=us")},b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],queryResults:[]},e.userInitialize=function(){v().then((function(t){var a=t.data.results;a=a.map((function(e){return{id:e.id.value,picture:e.picture.large,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date}})),e.setState({results:a}),e.setState({queryResults:a})})).catch((function(e){return console.log(e)}))},e.searchEmployees=function(t){var a=t.toLowerCase();if(a){var n=e.state.results;0===(n=n.filter((function(e){return e.name.toLowerCase().includes(a)}))).length&&(n=e.state.results.filter((function(e){return e.phone.includes(a)}))),e.setState({queryResults:n})}else e.setState({queryResults:e.state.results})},e.handleSort=function(t){console.log("clicked");var a=e.state.queryResults;switch(t){case"Name":a=a.sort((function(e,t){var a=0;return e.name>t.name?a=1:e.name<t.name&&(a=-1),a}));break;case"Email":a=a.sort((function(e,t){var a=0;return e.email>t.email?a=1:e.email<t.email&&(a=-1),a}));break;case"Phone":a=a.sort((function(e,t){var a=0;return e.phone>t.phone?a=1:e.phone<t.phone&&(a=-1),a}));break;case"DOB":a=a.sort((function(e,t){var a=0;return e.dob>t.dob?a=1:e.dob<t.dob&&(a=-1),a}))}e.setState({queryResults:a})},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a},(function(){e.searchEmployees(e.state.search)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.userInitialize()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Employee Directory")),r.a.createElement(m,{search:this.state.search,handleInputChange:this.handleInputChange}),r.a.createElement(d,{results:this.state.queryResults,handleSort:this.handleSort}))}}]),a}(n.Component);var y=function(){return r.a.createElement(b,null)};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ea633567.chunk.js.map