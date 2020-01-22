import Vue from 'vue'

//create the plugin object, which is a new vue instance
const eventBus = new Vue();

//A plugin should expose an install method.
//It is the only requiered method for a plugin
eventBus.install = function (Vue) {
 //Here we add the $eventbus method, defining it on the prototype so that it is available to
 // all components without needed to be injected
 Vue.prototype.$eventBus = eventBus;
}

//make the plugin available
Vue.use(eventBus)
