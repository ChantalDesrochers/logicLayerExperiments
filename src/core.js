Core = function() {
    console.log('core has been instantiated')
    let plugins = {};
    return {
        register: function(module, fn) {
            console.log(`registering ${module}`)
            // plugins[module] = fn;
            console.log('plugins', plugins)
            return plugins[module] = fn;
        },
        start: function(module) {
            return plugins[module].init();
        },
        stop: function(module) {
            return plugins[module].destroy();
        }
    }
}();

