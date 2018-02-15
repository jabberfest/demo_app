/*eslint-disable*/
// jshint ignore: start
/** 
 * DO NOT MODIFY!
 * This file was automatically generated and will be overwritten in the next build
 */

(function (name, definition){
   if (typeof define === 'function'){
     define(definition);
   } else if (typeof module !== 'undefined' && module.exports) {
     var moduleDef = definition();
     for (var key in moduleDef) {
       if (moduleDef.hasOwnProperty(key)) {
         module.exports[key] = moduleDef[key];
       }
     }
   } else {
     var theModule = definition(), global = this, old = global[name];
     theModule.noConflict = function () {
       global[name] = old;
       return theModule;
     };
     global[name] = theModule;
   }
 })('PhoenixJsRoutes', function () {
   return { 
     
     reactAppIndex: function reactAppIndex() {
       return '/';
     }, 
     
     appIndex: function appIndex() {
       return '/app';
     }, 
     
     loginIndex: function loginIndex() {
       return '/login';
     }, 
     
     reactAppIndex: function reactAppIndex() {
       return '/react_app';
     }, 
     
     reactAppIndex: function reactAppIndex() {
       return '/react_app/*glob';
     }, 
     
     channelIndex: function channelIndex() {
       return '/api/channels';
     }, 
     
     channelShow: function channelShow(id) {
       return '/api/channels/' + id;
     }, 
     
     channelCreate: function channelCreate() {
       return '/api/channels';
     }, 
     
     channelChannelMessageIndex: function channelChannelMessageIndex(channel_id) {
       return '/api/channels/' + channel_id + '/channel_messages';
     }, 
     
     channelChannelMessageShow: function channelChannelMessageShow(channel_id, id) {
       return '/api/channels/' + channel_id + '/channel_messages/' + id;
     }, 
     
     channelChannelMessageCreate: function channelChannelMessageCreate(channel_id) {
       return '/api/channels/' + channel_id + '/channel_messages';
     }, 
     
     authRequest: function authRequest(provider) {
       return '/auth/' + provider;
     }, 
     
     authCallback: function authCallback(provider) {
       return '/auth/' + provider + '/callback';
     }, 
     
     authCallback: function authCallback(provider) {
       return '/auth/' + provider + '/callback';
     }, 
     
     authDelete: function authDelete() {
       return '/auth/logout';
     }, 
   }
 });
