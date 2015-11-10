/*! Thanks to all the providers of the components. See the respectivegithub pages for their licenses. */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("c3")):"function"==typeof define&&define.amd?define(["react","c3"],e):"object"==typeof exports?exports["d3-react-squared-c3-loader"]=e(require("react"),require("c3")):t["d3-react-squared-c3-loader"]=e(t.react,t.c3)}(this,function(t,e){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(10),u=n(o);e["default"]=u["default"],t.exports=e["default"]},function(e,r){e.exports=t},function(t,e){function r(){c=!1,i.length?a=i.concat(a):f=-1,a.length&&n()}function n(){if(!c){var t=setTimeout(r);c=!0;for(var e=a.length;e;){for(i=a,a=[];++f<e;)i&&i[f].run();f=-1,e=a.length}i=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function u(){}var i,s=t.exports={},a=[],c=!1,f=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new o(t,e)),1!==a.length||c||setTimeout(n,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=u,s.addListener=u,s.once=u,s.off=u,s.removeListener=u,s.removeAllListeners=u,s.emit=u,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(1);e["default"]=n.PropTypes.shape({subscribe:n.PropTypes.func.isRequired,dispatch:n.PropTypes.func.isRequired,getState:n.PropTypes.func.isRequired}),t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){function r(){return c}function n(t){f.push(t);var e=!0;return function(){if(e){e=!1;var r=f.indexOf(t);f.splice(r,1)}}}function o(t){if(!i["default"](t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,c=a(c,t)}finally{p=!1}return f.slice().forEach(function(t){return t()}),t}function u(t){a=t,o({type:s.INIT})}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,c=e,f=[],p=!1;return o({type:s.INIT}),{dispatch:o,subscribe:n,getState:r,replaceReducer:u}}e.__esModule=!0,e["default"]=o;var u=r(7),i=n(u),s={INIT:"@@redux/INIT"};e.ActionTypes=s},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=r(4),u=n(o),i=r(23),s=n(i),a=r(22),c=n(a),f=r(21),p=n(f),l=r(6),d=n(l);e.createStore=u["default"],e.combineReducers=s["default"],e.bindActionCreators=c["default"],e.applyMiddleware=p["default"],e.compose=d["default"]},function(t,e){"use strict";function r(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";function r(t){if(!t||"object"!=typeof t)return!1;var e="function"==typeof t.constructor?Object.getPrototypeOf(t):Object.prototype;if(null===e)return!0;var r=e.constructor;return"function"==typeof r&&r instanceof r&&n(r)===n(Object)}e.__esModule=!0,e["default"]=r;var n=function(t){return Function.prototype.toString.call(t)};t.exports=e["default"]},function(t,e){"use strict";function r(t,e){return Object.keys(t).reduce(function(r,n){return r[n]=e(t[n],n),r},{})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=function(t,e,r){for(var n=!0;n;){var o=t,u=e,i=r;n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,u);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(i)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;t=c,e=u,r=i,n=!0,s=c=void 0}},a=r(1),c=n(a),f=r(25),p=n(f),l=function(t){function e(){o(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.state={chartObject:{},chartBoundTo:"",lastEvent:0}}return u(e,t),i(e,[{key:"componentDidMount",value:function(){this.onMount()}},{key:"componentWillReceiveProps",value:function(t){var e=t.c3obj,r=t.eventData,n=e.c3fct,o=e.c3arg,u=this.state,i=u.chartObject,s=u.lastEvent;"generate"!==n&&i[n](o),t.eventData.timeStamp>s&&this.incomingEvent(t.eventData,["default"]),this.setState({lastEvent:r.timeStamp})}},{key:"shouldComponentUpdate",value:function(t){return t.eventData.timeStamp<=this.state.lastEvent}},{key:"onMount",value:function(){var t=this.props,e=t.c3obj,r=t.setEvent,n=t.highlightEmit,o=e.c3fct,u=e.c3arg,i=p["default"][o](u),s=u.bindto.substr(1);this.setState({chartObject:i,chartBoundTo:s}),i.setEvent=r,i.highlightEmit=n}},{key:"incomingEvent",value:function(t){var e=t.data,r=t.event,n=t.eventGroup,o=this.props,u=o.highlightListen,i=o.highlight,s=this.state.chartObject,a=u,c=n.filter(function(t){return-1!==a.indexOf(t)});c.length&&i&&("mouseover"===r?s.focus(e.id):"mouseout"===r&&s.revert())}},{key:"render",value:function(){var t=this.props.c3obj,e=t.c3arg.bindto,r=this.state.chartBoundTo;return e&&(r=e.substr(1)),c["default"].createElement("div",{id:r})}}]),e}(a.Component);e["default"]=l,l.defaultProps={highlight:!0,highlightEmit:["default"],highlightListen:["default"]},l.propTypes={c3obj:a.PropTypes.object,eventData:a.PropTypes.object.isRequired,highlight:a.PropTypes.bool,highlightEmit:a.PropTypes.array,highlightListen:a.PropTypes.array,setEvent:a.PropTypes.func.isRequired},t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function u(t){return{eventData:t.d3ReactSquared}}function i(t){return(0,s.bindActionCreators)(f,t)}Object.defineProperty(e,"__esModule",{value:!0});var s=r(5),a=r(15),c=r(11),f=o(c),p=r(9),l=n(p);e["default"]=(0,a.connect)(u,i)(l["default"]),t.exports=e["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return{type:i.SET_EVENT,event:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setEvent=o;var u=r(12),i=n(u)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="SET_EVENT";e.SET_EVENT=r},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(){f||(f=!0,console.error("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/rackt/react-redux/releases/tag/v2.0.0 for the migration instructions."))}e.__esModule=!0;var s=r(1),a=r(3),c=n(a),f=!1,p=function(t){function e(r,n){o(this,e),t.call(this,r,n),this.store=r.store}return u(e,t),e.prototype.getChildContext=function(){return{store:this.store}},e.prototype.componentWillReceiveProps=function(t){var e=this.store,r=t.store;e!==r&&i()},e.prototype.render=function(){var t=this.props.children;return s.Children.only(t)},e}(s.Component);e["default"]=p,p.propTypes={store:c["default"].isRequired,children:s.PropTypes.element.isRequired},p.childContextTypes={store:c["default"].isRequired},t.exports=e["default"]},function(t,e,r){(function(n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){return t.displayName||t.name||"Component"}function a(t,e,r){function o(t,e){var r=t.getState(),n=S?b(r,e):b(r);return x["default"](g["default"](n),"`mapStateToProps` must return an object. Instead received %s.",n),n}function a(t,e){var r=t.dispatch,n=M?_(r,e):_(r);return x["default"](g["default"](n),"`mapDispatchToProps` must return an object. Instead received %s.",n),n}function l(t,e,r){var n=O(t,e,r);return x["default"](g["default"](n),"`mergeProps` must return an object. Instead received %s.",n),n}var h=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],v=Boolean(t),b=t||j,_=g["default"](e)?m["default"](e):e||P,O=r||T,S=b.length>1,M=_.length>1,N=h.pure,C=void 0===N?!0:N,k=h.withRef,I=void 0===k?!1:k,R=E++;return function(t){var e=function(e){function r(t,n){u(this,r),e.call(this,t,n),this.version=R,this.store=t.store||n.store,x["default"](this.store,'Could not find "store" in either the context or '+('props of "'+this.constructor.displayName+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+this.constructor.displayName+'".')),this.stateProps=o(this.store,t),this.dispatchProps=a(this.store,t),this.state={storeState:null},this.updateState()}return i(r,e),r.prototype.shouldComponentUpdate=function(t,e){if(!C)return this.updateStateProps(t),this.updateDispatchProps(t),this.updateState(t),!0;var r=e.storeState!==this.state.storeState,n=!y["default"](t,this.props),o=!1,u=!1;return(r||n&&S)&&(o=this.updateStateProps(t)),n&&M&&(u=this.updateDispatchProps(t)),n||o||u?(this.updateState(t),!0):!1},r.prototype.computeNextState=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];return l(this.stateProps,this.dispatchProps,t)},r.prototype.updateStateProps=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=o(this.store,t);return y["default"](e,this.stateProps)?!1:(this.stateProps=e,!0)},r.prototype.updateDispatchProps=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=a(this.store,t);return y["default"](e,this.dispatchProps)?!1:(this.dispatchProps=e,!0)},r.prototype.updateState=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];this.nextState=this.computeNextState(t)},r.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},r.prototype.trySubscribe=function(){v&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},r.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},r.prototype.componentDidMount=function(){this.trySubscribe()},r.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},r.prototype.handleChange=function(){this.unsubscribe&&this.setState({storeState:this.store.getState()})},r.prototype.getWrappedInstance=function(){return x["default"](I,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},r.prototype.render=function(){var e=I?"wrappedInstance":null;return p["default"].createElement(t,c({},this.nextState,{ref:e}))},r}(f.Component);return e.displayName="Connect("+s(t)+")",e.WrappedComponent=t,e.contextTypes={store:d["default"]},e.propTypes={store:d["default"]},"production"!==n.env.NODE_ENV&&(e.prototype.componentWillUpdate=function(){this.version!==R&&(this.version=R,this.trySubscribe(),this.updateStateProps(),this.updateDispatchProps(),this.updateState())}),w["default"](e,t)}}e.__esModule=!0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=a;var f=r(1),p=o(f),l=r(3),d=o(l),h=r(17),y=o(h),v=r(16),g=o(v),b=r(18),m=o(b),_=r(19),w=o(_),O=r(20),x=o(O),j=function(){return{}},P=function(t){return{dispatch:t}},T=function(t,e,r){return c({},r,t,e)},E=0;t.exports=e["default"]}).call(e,r(2))},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t["default"]:t}e.__esModule=!0;var o=r(13);e.Provider=n(o);var u=r(14);e.connect=n(u)},function(t,e){"use strict";function r(t){if(!t||"object"!=typeof t)return!1;var e="function"==typeof t.constructor?Object.getPrototypeOf(t):Object.prototype;if(null===e)return!0;var r=e.constructor;return"function"==typeof r&&r instanceof r&&n(r)===n(Object)}e.__esModule=!0,e["default"]=r;var n=function(t){return Function.prototype.toString.call(t)};t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(t===e)return!0;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,u=0;u<r.length;u++)if(!o.call(e,r[u])||t[r[u]]!==e[r[u]])return!1;return!0}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return function(e){return o.bindActionCreators(t,e)}}e.__esModule=!0,e["default"]=n;var o=r(5);t.exports=e["default"]},function(t,e){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0};t.exports=function(t,e){for(var o=Object.getOwnPropertyNames(e),u=0;u<o.length;++u)r[o[u]]||n[o[u]]||(t[o[u]]=e[o[u]]);return t}},function(t,e,r){(function(e){"use strict";var r=function(t,r,n,o,u,i,s,a){if("production"!==e.env.NODE_ENV&&void 0===r)throw new Error("invariant requires an error message argument");if(!t){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,u,i,s,a],p=0;c=new Error("Invariant Violation: "+r.replace(/%s/g,function(){return f[p++]}))}throw c.framesToPop=1,c}};t.exports=r}).call(e,r(2))},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return function(t){return function(r,n){var o=t(r,n),i=o.dispatch,a=[],c={getState:o.getState,dispatch:function(t){return i(t)}};return a=e.map(function(t){return t(c)}),i=s["default"].apply(void 0,a)(o.dispatch),u({},o,{dispatch:i})}}}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=o;var i=r(6),s=n(i);t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){return function(){return e(t.apply(void 0,arguments))}}function u(t,e){if("function"==typeof t)return o(t,e);if("object"!=typeof t||null===t||void 0===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');return s["default"](t,function(t){return o(t,e)})}e.__esModule=!0,e["default"]=u;var i=r(8),s=n(i);t.exports=e["default"]},function(t,e,r){(function(n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function u(t,e){var r=e&&e.type,n=r&&'"'+r.toString()+'"'||"an action";return'Reducer "'+t+'" returned undefined handling '+n+". To ignore an action, you must explicitly return the previous state."}function i(t,e,r){var n=Object.keys(e),o=r&&r.type===c.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===n.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!p["default"](t))return"The "+o+' has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+n.join('", "')+'"');var u=Object.keys(t).filter(function(t){return n.indexOf(t)<0});return u.length>0?"Unexpected "+(u.length>1?"keys":"key")+" "+('"'+u.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+n.join('", "')+'". Unexpected keys will be ignored.'):void 0}function s(t){Object.keys(t).forEach(function(e){var r=t[e],n=r(void 0,{type:c.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof r(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function a(t){var e,r=y["default"](t,function(t){return"function"==typeof t});try{s(r)}catch(o){e=o}var a=d["default"](r,function(){return void 0});return function(t,o){if(void 0===t&&(t=a),e)throw e;var s=!1,c=d["default"](r,function(e,r){var n=t[r],i=e(n,o);if("undefined"==typeof i){var a=u(r,o);throw new Error(a)}return s=s||i!==n,i});if("production"!==n.env.NODE_ENV){var f=i(t,c,o);f&&console.error(f)}return s?c:t}}e.__esModule=!0,e["default"]=a;var c=r(4),f=r(7),p=o(f),l=r(8),d=o(l),h=r(24),y=o(h);t.exports=e["default"]}).call(e,r(2))},function(t,e){"use strict";function r(t,e){return Object.keys(t).reduce(function(r,n){return e(t[n])&&(r[n]=t[n]),r},{})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,r){t.exports=e}])});