(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';var _something=require('./something');var _something2=_interopRequireDefault(_something);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var someThing=new _something2.default;var anotherThing=new _something.AnotherThing;document.getElementById('output').innerHTML=someThing.name+' & '+anotherThing.name;

},{"./something":2}],2:[function(require,module,exports){
'use strict';function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var Something=function(){function Something(){var name=arguments.length<=0||arguments[0]===undefined?Something.DEFAULT_NAME:arguments[0];_classCallCheck(this,Something);this._name=name}Something.prototype.doSomething=function doSomething(){var str='I DO SOMETHING';return str};_createClass(Something,[{key:'name',get:function get(){return this._name},set:function set(value){this._name=value}}]);return Something}();Something.DEFAULT_NAME='Something';exports.default=Something;var AnotherThing=exports.AnotherThing=function(_Something){_inherits(AnotherThing,_Something);function AnotherThing(){_classCallCheck(this,AnotherThing);return _possibleConstructorReturn(this,_Something.call(this,AnotherThing.DEFAULT_NAME))}return AnotherThing}(Something);AnotherThing.DEFAULT_NAME='AnotherThing';

},{}]},{},[1]);
