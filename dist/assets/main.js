!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(4),t.exports=n(6)},function(t,e){t.exports=Handlebars},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function i(){}function r(t,e){var n=t.events[e];return n?_.isFunction(n)?n.bind(t):t[n].bind(t):i}function a(t){_.each(t.events,function(e,n){var o=n.split(" "),i=o[0],a=o[1],s=!!a,u=r(t,n);s?(0,c["default"])(document).on(i,a,u):t.zafClient.on(i,u)}.bind(t))}function s(t,e){this._location=e.context.location,this.zafClient=t,a(this),this.defaultState&&this.switchTo(this.defaultState),r(this,"app.created")()}Object.defineProperty(e,"__esModule",{value:!0});var u=n(11),c=o(u);s.prototype={events:{},requests:{},currentLocation:function(){return this._location},ajax:function(t){var e=this.requests[t],n=r(this,t+".done"),o=r(this,t+".fail"),i=r(this,t+".always"),a=_.isFunction(e)?e.apply(this,Array.prototype.slice.call(arguments,1)):e;return this.zafClient.request(a).then(n,o).then(i,i)},renderTemplate:function(t,e){var o=n(9)("./"+t+".hdbs");return o(e)},switchTo:function(t,e){this.$("[data-main]").html(this.renderTemplate(t,e))},$:function(){var t=Array.prototype.slice.call(arguments,0);return t.length?c["default"].apply(c["default"],arguments):(0,c["default"])("body")}},s.extend=function(t){var e=function(t,e){s.call(this,t,e)};return e.prototype=_.extend({},s.prototype,t),e},e["default"]=s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={fmt:function(t,e){var n=e;if(!_.isArray(n)||arguments.length>2){n=new Array(arguments.length-1);for(var o=1,i=arguments.length;i>o;o++)n[o-1]=arguments[o]}var r=0;return t.replace(/%@([0-9]+)?/g,function(t,e){return e=e?parseInt(e,10)-1:r++,t=n[e],null===t?"(null)":void 0===t?"":_.isFunction(t.toString)?t.toString():t})}};e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(5),r=o(i),a=n(10),s=o(a),u=s["default"].init();window.zafClient=u,u.on("app.registered",function(t){"ticket_sidebar"===t.context.location&&new r["default"](u,t)})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _base_app=__webpack_require__(2),_base_app2=_interopRequireDefault(_base_app),_helpers=__webpack_require__(3),_helpers2=_interopRequireDefault(_helpers),UP_ARROW_KEY=38,DOWN_ARROW_KEY=40,format=function(t){return _.isObject(t)||_.isArray(t)?JSON.stringify(t,void 0,2):_.isUndefined(t)?"undefined":t},CommandHistory=function(){var t=[],e=0;return{addCommand:function(n){t.push(n),e=t.length},previousCommand:function(){return e>=0?t[--e]:void 0},nextCommand:function(){return e<t.length?t[++e]:void 0}}}(),log=function(){function t(t,e){console&&console.info&&(console.group&&console.group("REPL App"),console.info("Eval: ",t),console.info("Result: ",e),console.groupEnd&&console.groupEnd())}var e=0;return function(n,o,i){var r=this.$(".history-container");t(n,o),CommandHistory.addCommand(n),r.append(this.$('<pre class="history input">').text(++e+": "+n)).append(this.$('<pre class="history output">').text("> "+o).addClass(i)),r.scrollTop(r.get(0).scrollHeight)}}(),logError=function(t,e){log.call(this,t,e.name+": "+e.message+"\n"+e.stack,"error")},FunctionToJson,stubFunction=function(){FunctionToJson=Function.prototype.toJSON,Function.prototype.toJSON=function(){return"function"+(this.name?": "+this.name:"")}},unstubFunction=function(){Function.prototype.toJSON=FunctionToJson},logEvent=function(){var t;return function(e,n){if(console&&console.info){var o=Array.prototype.slice.call(arguments,2),i=_helpers2["default"].fmt("REPL app (%@) received: '%@'",e,n);t=t||Function.prototype.bind.call(console.info,console),t.apply(console,[i].concat(o))}}}(),fakeLog=function(t){var e=this.$(".history-container"),n=format.call(this,t),o=this.$('<pre class="history output">').text(n);_.defer(function(){e.append(o),e.scrollTop(e.get(0).scrollHeight)})},App={defaultState:"testing",events:{"submit form":function submitForm(event){event.preventDefault();var oldConsole=window.console,$script=this.$(".script");stubFunction();var console={log:fakeLog.bind(this)};try{var input=$script.val().trim(),value=eval(input),formatedValue=format.call(this,value);if(!input)return;log.call(this,input,formatedValue)}catch(e){oldConsole.error(e),logError.call(this,input,e)}console=oldConsole,unstubFunction(),$script.val("").select()},"keydown .script":function(t){if(t.which===UP_ARROW_KEY){var e=CommandHistory.previousCommand();e&&(t.preventDefault(),this.$(".script").val(e))}else t.which===DOWN_ARROW_KEY&&this.$(".script").val(CommandHistory.nextCommand()||"")}}};["app.created","app.activated","app.deactivated","pane.activated","pane.deactivated","app.willDestroy","*.changed","app.route.changed","ticket.submit.start","ticket.submit.done","ticket.submit.fail","ticket.submit.always","ticket.viewers.changed","ticket.updated","ticket.save","ticket.saved"].forEach(function(t){App.events[t]=function(){logEvent(this.currentLocation(),t,arguments)}}),exports["default"]=_base_app2["default"].extend(App)},function(t,e){},function(t,e,n){var o=n(1);t.exports=(o["default"]||o).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,o,i){return'<header>\n  <span class="logo"/>\n  <h3>'+t.escapeExpression((n.setting||e&&e.setting||n.helperMissing).call(null!=e?e:{},"name",{name:"setting",hash:{},data:i}))+"</h3>\n</header>\n<section data-main/>\n"},useData:!0})},function(t,e,n){var o=n(1);t.exports=(o["default"]||o).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,o,i){var r;return'<form>\n  <div class="history-container '+t.escapeExpression((r=null!=(r=n.location||(null!=e?e.location:e))?r:n.helperMissing,"function"==typeof r?r.call(null!=e?e:{},{name:"location",hash:{},data:i}):r))+'"></div>\n  <input type="text" class="script"></textarea>\n</form>\n'},useData:!0})},function(t,e,n){function o(t){return n(i(t))}function i(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./layout.hdbs":7,"./testing.hdbs":8};o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=9},function(t,e){t.exports=ZAFClient},function(t,e){t.exports=jQuery}]);
//# sourceMappingURL=main.js.map