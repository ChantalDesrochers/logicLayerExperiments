Core = function () {
    console.log('core has been instantiated')
    let plugins = {};
    return {
        register: (module, fn) => {
            console.log(`registering ${module}`)
            console.log('all plugins', plugins)
            return plugins[module] = fn;
        },
        start: (module) => {
            console.log(`starting ${module}`)
            return plugins[module]();
        },
        routeFn: (module, method, ...args) => {
            const plugin = plugins[module]()
            const fn = plugin[method]
            try {
                return fn(...args)
            } catch (e) {
                console.log(e)
            }
        },
        stop: function (module) {
            return plugins[module].destroy();
        }
    }
}();

