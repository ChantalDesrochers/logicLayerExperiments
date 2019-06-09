Core = function () {
    console.log('core has been instantiated')
    let plugins = {};
    return {
        register: (module, fn) => {
            // adding all the plugins to the private core plugins variable
            console.log(`registering ${module}`)
            console.log('all plugins', plugins)
            return plugins[module] = fn;
        },
        start: (module) => {
            // start plugin by executing (this doesn't seem to work long term?)
            console.log(`starting ${module}`)
            return plugins[module]();
        },
        routeFn: (module, method, ...args) => {
            // execute the function from the appropriate registered plugin
            const plugin = plugins[module]()
            const fn = plugin[method]
            // core responsible for error handling
            try {
                return fn(...args)
            } catch (e) {
                console.log(e)
            }
        },
        stop: (module) => {
            // stopping the module - not used
            return plugins[module].destroy();
        }
    }
}();

