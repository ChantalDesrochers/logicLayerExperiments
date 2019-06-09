Core = function() {
    console.log('core has been instantiated')
    let plugins = {};
    return {
        register: (module, fn) => {
            console.log(`registering ${module}`)
            console.log('plugins', plugins)
            return plugins[module] = fn;
        },
        start: (module) => {
            console.log(`starting ${module}`)
            return module();
        },
        callFn: (module, method, ...args) => {
            const plugin = plugins[module]()
            const fn = plugin[method]
            return fn(...args)
        },
        notify: function(module, event, data) {
            // return plugins[module].init();
        },
        stop: function(module) {
            return plugins[module].destroy();
        }
    }
}();

