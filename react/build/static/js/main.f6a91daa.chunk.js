(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(77),s=a.n(o),c=a(2),i=a(3),l=a(5),u=a(4),m=a(6),h=a(1),p=a(19),d=(a(85),a(86),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.keys=Object.keys(a.props),a.navLinks=[],a.keys.forEach(function(e,t){var n="/"+e;"logout"===e&&(n="/"),a.navLinks.push(r.a.createElement(h.c,{to:n,className:"navbar-link"},e))}),"logout"===a.c?(console.log(a.c),a.redirectRoute="/"):a.redirectRoute="/"+a.c,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.c}},{key:"render",value:function(){return this.props.logout?r.a.createElement("header",{className:"header"},r.a.createElement(h.c,{to:"/gameselect"},r.a.createElement("img",{className:"header-logo",alt:"madmind",src:a(57)})),r.a.createElement("nav",{className:"navbar"},this.navLinks)):r.a.createElement("header",{className:"header"},r.a.createElement(h.c,{to:"/"},r.a.createElement("img",{className:"header-logo",alt:"madmind",src:a(57)})),r.a.createElement("nav",{className:"navbar"},this.navLinks))}}]),t}(n.Component)),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{signup:!0,login:!0}),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"monkaS"},r.a.createElement("img",{className:"logo",alt:"madmind",src:a(58)}),r.a.createElement("div",{className:"btn-group"},r.a.createElement(h.b,{to:"/login"},r.a.createElement("button",{className:"btn log-in"},"Login")),r.a.createElement(h.b,{to:"/signup"},r.a.createElement("button",{className:"btn sign-up"},"Sign Up"))))))}}]),t}(n.Component),E=a(7),b=(a(95),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={id:0,username:"",password:"",passwordConfirm:"",redirect:!1},e.handleSubmit=e.handleSubmit.bind(Object(E.a)(Object(E.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleValidation",value:function(){var e=!0;return/^[a-zA-Z0-9]+$/.test(this.state.username)||(e=!1,alert("Your username can contain only letters")),this.state.password.length<5&&(e=!1,alert("Your password must be atleast 5 characters long")),this.state.passwordConfirm!==this.state.password&&(e=!1,alert("Your passwords don't match")),e}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={classic:0,spree:0,infinite:0},n={username:this.state.username,password:this.state.password,highScores:JSON.stringify(a),counts:JSON.stringify(a),lastScores:JSON.stringify(a),totalScore:0};if(this.handleValidation()){console.log(JSON.stringify(n)),fetch("http://joelmaenpaa.com:8000/api/register",{body:JSON.stringify(n),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)}),setTimeout(function(){t.setState({redirect:!0})},1e3)}else console.log("Form has errors!")}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(d,{login:"true"}),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"signup-input",type:"text",name:"username",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{className:"signup-input",type:"password",name:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{className:"signup-input",type:"password",name:"passwordConfirm",placeholder:"Confirm Password",onChange:function(t){return e.setState({passwordConfirm:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("button",{className:"signup-button",onClick:function(t){return e.handleSubmit(t)}},"SIGN UP")))))}}]),t}(n.Component)),g=(a(96),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"loader-wrapper"},r.a.createElement("div",{id:"loader"}))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e={username:a.state.username,password:a.state.password};fetch("http://joelmaenpaa.com:8000/api/login",{body:JSON.stringify(e),method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){if(e.data.api_token){var t=e.data.api_token,n=e.data.id;a.setState({redirect:!0,apiToken:t,authenticated:!0,userId:n})}else alert("Login failed!")}).catch(function(e){alert("Login failed!")})},a.state={redirect:!1,authenticated:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:{pathname:"/gameselect",token:this.state.apiToken,authenticated:this.state.authenticated,userId:this.state.userId}}):r.a.createElement("div",null,r.a.createElement(d,{signup:!0}),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"signup-input",type:"text",name:"username",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{className:"signup-input",type:"password",name:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"signup-button",onClick:this.handleSubmit},"LOGIN"))))}}]),t}(n.Component),k=(a(97),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userId:a.props.location.userId,token:a.props.location.token},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("div",{className:"monkaS"},r.a.createElement("img",{className:"logo",alt:"madmind",src:a(58)}),r.a.createElement("div",{className:"button-group"},r.a.createElement(h.b,{to:{pathname:"/classic",userId:this.state.userId,token:this.state.token}},r.a.createElement("button",{className:"game-button"},"Classic")),r.a.createElement(h.b,{to:{pathname:"/spree",userId:this.state.userId,token:this.state.token}},r.a.createElement("button",{className:"game-button"},"Spree")),r.a.createElement(h.b,{to:{pathname:"/infinite",userId:this.state.userId,token:this.state.token}},r.a.createElement("button",{className:"game-button"},"Infinite"))))))}}]),t}(n.Component));var j=function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("p",null,e.question))};var y=function(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id,className:"answer-button"},e.answer)};function O(e){return r.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})}var w=function(e){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement(O,{percentage:e.percentage}))},S=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={questions:[],isLoading:!0,time:1600,questionIndex:0,percentage:100,id:"",correctAnswer:0,points:0,gameRunning:!1},a.fetchQuestions=a.fetchQuestions.bind(Object(E.a)(Object(E.a)(a))),a.countDown=a.countDown.bind(Object(E.a)(Object(E.a)(a))),a.handleClick=a.handleClick.bind(Object(E.a)(Object(E.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"fetchQuestions",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/getQuestions/"+15..toString();fetch(t).then(function(e){return e.json()}).then(function(t){var a=[];t.forEach(function(t){var n=t.question,r=t.option1,o=t.option2,s=t.option3,c=t.correctAnswer,i={};i.question=n,i.answers=[{text:r,correct:!1},{text:o,correct:!1},{text:s,correct:!1},{text:c,correct:!0}],i.correctAnswer=c,e.shuffle(i.answers),a.push(i)}),e.setState({questions:a,isLoading:!1,gameRunning:!0})}).catch(function(e){return console.log("Failed to fetch questions",e)})}},{key:"startTimer",value:function(){this.timer=setInterval(this.countDown,10)}},{key:"countDown",value:function(){var e=this.state.time-1,t=this.state.questionIndex,a=this.state.percentage-this.state.percentage/this.state.time;this.setState({time:e,percentage:a}),14===t&&e<=0&&this.setState({gameRunning:!1}),e<=0&&(clearInterval(this.timer),this.setState({time:1600,percentage:100,questionIndex:t+1}),this.startTimer())}},{key:"handleClick",value:function(e,t){var a=this.state.questionIndex,n=this.state.correctAnswer+1,r=this.state.points;a>13&&this.setState({gameRunning:!1}),e===t&&this.setState({correctAnswer:n,points:r+10}),14===this.state.questionIndex&&this.setState({gameRunning:!1}),clearInterval(this.timer),this.setState({time:1600,percentage:100,questionIndex:a+1}),this.startTimer()}},{key:"handleStartMatch",value:function(){var e=this,t={creator:this.props.location.userId,matchType:0};fetch("http://joelmaenpaa.com:8000/api/matches",{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){e.setState({matchId:t.id})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.handleStartMatch(),this.fetchQuestions(),this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.questionIndex,o=t.percentage;return this.state.isLoading?r.a.createElement(g,null):this.state.gameRunning?r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"game-wrapper"},r.a.createElement("div",{className:"game-group"},r.a.createElement(j,{question:a[n].question}),r.a.createElement("div",{className:"answer-buttons"},a[n].answers.map(function(t){return r.a.createElement(y,{onClick:function(){return e.handleClick(t.text,a[n].correctAnswer)},answer:t.text})})),r.a.createElement("div",{className:"timer"},r.a.createElement(w,{percentage:o})),r.a.createElement("div",{className:"wrong-answers"},"Question #: "+this.state.questionIndex+"/"+this.state.questions.length),r.a.createElement("div",{className:"points"},"Correct Answers: "+this.state.correctAnswer+"/"+this.state.questions.length)))):this.state.gameRunning?void 0:r.a.createElement(p.a,{to:{pathname:"/classic/game/finish",points:this.state.points,numberOfCorrectAnswers:this.state.correctAnswer,matchId:this.state.matchId,token:this.props.location.token,userId:this.props.location.userId,mode:"classic"}})}}]),t}(n.Component));var N=function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("p",null,e.question))};var C=function(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id,className:"answer-button"},e.answer)};function I(e){return r.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})}var A=function(e){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement(I,{percentage:e.percentage}))},T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={questions:[],isLoading:!0,time:6e3,questionIndex:0,percentage:100,id:"",correctAnswer:0,questionsAnswered:0,points:0,gameRunning:!1},a.fetchQuestions=a.fetchQuestions.bind(Object(E.a)(Object(E.a)(a))),a.countDown=a.countDown.bind(Object(E.a)(Object(E.a)(a))),a.handleClick=a.handleClick.bind(Object(E.a)(Object(E.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"fetchQuestions",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/getQuestions/"+12e4.toString();fetch(t).then(function(e){return e.json()}).then(function(t){var a=[];t.forEach(function(t){var n=t.question,r=t.option1,o=t.option2,s=t.option3,c=t.correctAnswer,i={};i.question=n,i.answers=[{text:r,correct:!1},{text:o,correct:!1},{text:s,correct:!1},{text:c,correct:!0}],i.correctAnswer=c,e.shuffle(i.answers),a.push(i)}),e.setState({questions:a,isLoading:!1,gameRunning:!0})}).catch(function(e){return console.log("Failed to fetch questions",e)})}},{key:"startTimer",value:function(){this.timer=setInterval(this.countDown,10)}},{key:"countDown",value:function(){var e=this.state.time-1,t=this.state.percentage-this.state.percentage/this.state.time;this.setState({time:e,percentage:t}),e<=0&&this.setState({gameRunning:!1})}},{key:"handleClick",value:function(e,t){var a=this.state.questionIndex,n=this.state.correctAnswer+1,r=this.state.questionsAnswered+1,o=this.state.points;e===t&&this.setState({correctAnswer:n,points:o+10}),this.setState({questionIndex:a+1,questionsAnswered:r})}},{key:"handleStartMatch",value:function(){var e=this,t={creator:this.props.location.userId,matchType:1};fetch("http://joelmaenpaa.com:8000/api/matches",{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){e.setState({matchId:t.id})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.handleStartMatch(),this.fetchQuestions(),this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.questionIndex,o=t.percentage;return this.state.isLoading?r.a.createElement(g,null):this.state.gameRunning?r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"game-wrapper"},r.a.createElement("div",{className:"game-group"},r.a.createElement(N,{question:a[n].question}),r.a.createElement("div",{className:"answer-buttons"},a[n].answers.map(function(t){return r.a.createElement(C,{onClick:function(){return e.handleClick(t.text,a[n].correctAnswer)},answer:t.text})})),r.a.createElement("div",{className:"timer"},r.a.createElement(A,{percentage:o})),r.a.createElement("div",{className:"points"},this.state.correctAnswer+"/"+this.state.questionsAnswered)))):this.state.gameRunning?void 0:r.a.createElement(p.a,{to:{pathname:"/spree/game/finish",points:this.state.points,numberOfCorrectAnswers:this.state.correctAnswer,matchId:this.state.matchId,token:this.props.location.token,userId:this.props.location.userId,mode:"spree"}})}}]),t}(n.Component);var x=function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("p",null,e.question))};var q=function(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id,className:"answer-button"},e.answer)},L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={questions:[],isLoading:!0,questionIndex:0,id:"",correctAnswer:0,questionsAnswered:0,points:0,gameRunning:!1,wrongAnswer:0},a.fetchQuestions=a.fetchQuestions.bind(Object(E.a)(Object(E.a)(a))),a.handleClick=a.handleClick.bind(Object(E.a)(Object(E.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"fetchQuestions",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/getQuestions/"+12e4.toString();fetch(t).then(function(e){return e.json()}).then(function(t){var a=[];t.forEach(function(t){var n=t.question,r=t.option1,o=t.option2,s=t.option3,c=t.correctAnswer,i={};i.question=n,i.answers=[{text:r,correct:!1},{text:o,correct:!1},{text:s,correct:!1},{text:c,correct:!0}],i.correctAnswer=c,e.shuffle(i.answers),a.push(i)}),e.setState({questions:a,isLoading:!1,gameRunning:!0})}).catch(function(e){return console.log("Failed to fetch questions",e)})}},{key:"handleClick",value:function(e,t){var a=this.state.questionIndex,n=this.state.correctAnswer+1,r=this.state.questionsAnswered+1,o=this.state.points;e===t?this.setState({correctAnswer:n,points:o+10}):this.setState({wrongAnswer:this.state.wrongAnswer+1}),3===this.state.wrongAnswer&&this.setState({gameRunning:!1}),this.setState({questionIndex:a+1,questionsAnswered:r})}},{key:"handleStartMatch",value:function(){var e=this,t={creator:this.props.location.userId,matchType:2};fetch("http://joelmaenpaa.com:8000/api/matches",{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){e.setState({matchId:t.id})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.handleStartMatch(),this.fetchQuestions()}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.questionIndex;return this.state.isLoading?r.a.createElement(g,null):this.state.gameRunning?r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"game-wrapper"},r.a.createElement("div",{className:"game-group"},r.a.createElement(x,{question:a[n].question}),r.a.createElement("div",{className:"answer-buttons"},a[n].answers.map(function(t){return r.a.createElement(q,{onClick:function(){return e.handleClick(t.text,a[n].correctAnswer)},answer:t.text})})),r.a.createElement("div",{className:"wrong-answers"},"Wrong Answers: "+this.state.wrongAnswer+"/3"),r.a.createElement("div",{className:"points"},"Question #: "+this.state.questionsAnswered)))):this.state.gameRunning?void 0:r.a.createElement(p.a,{to:{pathname:"/infinite/game/finish",points:this.state.points,numberOfCorrectAnswers:this.state.correctAnswer,matchId:this.state.matchId,token:this.props.location.token,userId:this.props.location.userId,mode:"infinite"}})}}]),t}(n.Component),P=(a(37),a(9)),M=a.n(P),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,userId:a.props.location.userId,token:a.props.location.token},a.saveMatch(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveMatch",value:function(){var e={id:this.props.location.matchId,isRunning:!1,numberOfCorrectAnswers:this.props.location.numberOfCorrectAnswers,score:this.props.location.points};console.log("match update obj",e),fetch("http://joelmaenpaa.com:8000/api/matches/update",{body:JSON.stringify(e),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"fetchUserData",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/users/"+this.props.location.userId;fetch(t,{method:"GET",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){var a=t.highScores[e.props.location.mode];if(e.setState({username:t.username,isLoading:!1}),e.props.location.points>a){var n=Object.keys(t.highScores),r=t.totalScore-a+e.props.location.points,o={};n.forEach(function(a){a!==e.props.location.mode?o[a]=t.highScores.key:o[a]=e.props.location.points}),e.updateScore(o,r)}}).catch(function(e){return console.log(e)})}},{key:"updateScore",value:function(e,t){var a={updateObj:e,newTotalScore:t,userId:this.props.location.userId};fetch("http://joelmaenpaa.com:8000/api/users/update",{body:JSON.stringify(a),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.fetchUserData()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement("h1",{className:"kentteri margini"},"Your Highest Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,"pappa")))),r.a.createElement("h1",{className:"kentteri margini"},"Your Last Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,this.props.location.points))))),r.a.createElement("div",{className:"text-center nappimargin"},r.a.createElement(h.b,{to:{pathname:"/classic/game",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,userId:a.props.location.userId,token:a.props.location.token},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveMatch",value:function(){var e={id:this.props.location.matchId,isRunning:!1,numberOfCorrectAnswers:this.props.location.numberOfCorrectAnswers,score:this.props.location.points};fetch("http://joelmaenpaa.com:8000/api/matches/update",{body:JSON.stringify(e),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"fetchUserData",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/users/"+this.props.location.userId;fetch(t,{method:"GET",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){var a=t.highScores[e.props.location.mode];if(e.setState({username:t.username,isLoading:!1}),e.props.location.points>a){var n=Object.keys(t.highScores),r=t.totalScore-a+e.props.location.points,o={};n.forEach(function(a){a!==e.props.location.mode?o[a]=t.highScores.key:o[a]=e.props.location.points}),e.updateScore(o,r)}}).catch(function(e){return console.log(e)})}},{key:"updateScore",value:function(e,t){var a={updateObj:e,newTotalScore:t,userId:this.props.location.userId};fetch("http://joelmaenpaa.com:8000/api/users/scores",{body:JSON.stringify(a),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.fetchUserData()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement("h1",{className:"kentteri margini"},"Your Highest Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,"pappa")))),r.a.createElement("h1",{className:"kentteri margini"},"Your Last Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,this.props.location.points))))),r.a.createElement("div",{className:"text-center nappimargin"},r.a.createElement(h.b,{to:{pathname:"/spree/game",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,userId:a.props.location.userId,token:a.props.location.token},a.saveMatch(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveMatch",value:function(){var e={id:this.props.location.matchId,isRunning:!1,numberOfCorrectAnswers:this.props.location.numberOfCorrectAnswers,score:this.props.location.points};fetch("http://joelmaenpaa.com:8000/api/matches/update",{body:JSON.stringify(e),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"fetchUserData",value:function(){var e=this,t="http://joelmaenpaa.com:8000/api/users/"+this.props.location.userId;fetch(t,{method:"GET",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){var a=t.highScores[e.props.location.mode];if(e.setState({username:t.username,isLoading:!1}),e.props.location.points>a){var n=Object.keys(t.highScores),r=t.totalScore-a+e.props.location.points,o={};n.forEach(function(a){a!==e.props.location.mode?o[a]=t.highScores.key:o[a]=e.props.location.points}),e.updateScore(o,r)}}).catch(function(e){return console.log(e)})}},{key:"updateScore",value:function(e,t){var a={updateObj:e,newTotalScore:t,userId:this.props.location.userId};fetch("http://joelmaenpaa.com:8000/api/users/scores",{body:JSON.stringify(a),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.fetchUserData()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement("h1",{className:"kentteri margini"},"Your Highest Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,"pappa")))),r.a.createElement("h1",{className:"kentteri margini"},"Your Last Score"),r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.state.username),r.a.createElement("td",null,this.props.location.points))))),r.a.createElement("div",{className:"text-center nappimargin"},r.a.createElement(h.b,{to:{pathname:"/infinite/game",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",token:this.state.token,userId:this.state.userId}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dunno whatchu were looking for but it's not here..."))}}]),t}(n.Component),J=a(14),Q=(a(50),a(26)),z=a.n(Q),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={top10Players:[],isLoading:!0,userId:a.props.location.userId,token:a.props.location.token},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getData",value:function(e,t){var a=this;z.a.get(e).then(function(e){var n,r=e.data;a.setState((n={},Object(J.a)(n,t,r),Object(J.a)(n,"isLoading",!1),n))})}},{key:"componentDidMount",value:function(){this.getData("https://jsonplaceholder.typicode.com/users","top10Players")}},{key:"handleStartMatch",value:function(){var e=this,t={creator:this.props.location.userId,matchType:0};fetch("http://joelmaenpaa.com:8000/api/matches",{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json",ACCEPT:"application/json",Authorization:"Bearer "+this.props.location.token}}).then(function(e){return e.json()}).then(function(t){e.setState({matchId:t.id,redirect:!0}),console.log(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.top10Players;return e.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))}),r.a.createElement("tr",{className:"playerRank"},r.a.createElement("td",null,"asd "),r.a.createElement("td",null," asddas"),r.a.createElement("td",null," adsdasds"))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/classic/game",userId:this.state.userId,token:this.state.token,mode:"classic"}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",userId:this.props.location.userId,token:this.props.location.token}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={top10Players:[],isLoading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getData",value:function(e,t){var a=this;z.a.get(e).then(function(e){var n,r=e.data;a.setState((n={},Object(J.a)(n,t,r),Object(J.a)(n,"isLoading",!1),n)),console.log(a.state.top10Players)})}},{key:"componentDidMount",value:function(){this.getData("https://jsonplaceholder.typicode.com/users","top10Players")}},{key:"render",value:function(){var e=this.state,t=e.top10Players;return e.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))}),r.a.createElement("tr",{className:"playerRank"},r.a.createElement("td",null,"asd "),r.a.createElement("td",null," asddas"),r.a.createElement("td",null," adsdasds"))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/spree/game",userId:this.props.location.userId,token:this.props.location.token}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",userId:this.props.location.userId,token:this.props.location.token}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={top10Players:[],isLoading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getData",value:function(e,t){var a=this;z.a.get(e).then(function(e){var n,r=e.data;a.setState((n={},Object(J.a)(n,t,r),Object(J.a)(n,"isLoading",!1),n))})}},{key:"componentDidMount",value:function(){this.getData("https://jsonplaceholder.typicode.com/users","top10Players")}},{key:"render",value:function(){var e=this.state,t=e.top10Players;return e.isLoading?r.a.createElement(g,null):r.a.createElement("div",null,r.a.createElement(d,{logout:!0}),r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement(M.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))}),r.a.createElement("tr",{className:"playerRank"},r.a.createElement("td",null,"asd "),r.a.createElement("td",null," asddas"),r.a.createElement("td",null," adsdasds"))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:{pathname:"/infinite/game",userId:this.props.location.userId,token:this.props.location.token}},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:{pathname:"/gameselect",userId:this.props.location.userId,token:this.props.location.token}},r.a.createElement("button",{className:"select-button"},"Go Back")))))}}]),t}(n.Component),H=(a(166),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isLoading:!0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(g,null):r.a.createElement(h.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:f,exact:!0}),r.a.createElement(p.b,{path:"/login",component:v,exact:!0}),r.a.createElement(p.b,{path:"/signup",component:b,exact:!0}),r.a.createElement(p.b,{path:"/gameselect",component:k,exact:!0}),r.a.createElement(p.b,{path:"/classic",component:G,exact:!0}),r.a.createElement(p.b,{path:"/spree",component:Y,exact:!0}),r.a.createElement(p.b,{path:"/infinite",component:F,exact:!0}),r.a.createElement(p.b,{path:"/classic/game",component:S,exact:!0}),r.a.createElement(p.b,{path:"/spree/game",component:T,exact:!0}),r.a.createElement(p.b,{path:"/infinite/game",component:L,exact:!0}),r.a.createElement(p.b,{path:"/classic/game/finish",component:D,exact:!0}),r.a.createElement(p.b,{path:"/spree/game/finish",component:R,exact:!0}),r.a.createElement(p.b,{path:"/infinite/game/finish",component:U,exact:!0}),r.a.createElement(p.b,{component:B})))}}]),t}(n.Component)),W=document.querySelector("#root");s.a.render(r.a.createElement(H,null),W)},36:function(e,t,a){},37:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/madmind.e886468a.png"},58:function(e,t,a){e.exports=a.p+"static/media/madmindNoText.b020daee.png"},80:function(e,t,a){e.exports=a(167)},85:function(e,t,a){},86:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.f6a91daa.chunk.js.map