Core = function () {
    console.log('core has been instantiated')
    let plugins = {};
    return {
        register: (module, fn) => {
            // adding all the plugins to the private core plugins variable
            console.log(`registering ${module}`)
            return plugins[module] = fn;
        },
        start: (module) => {
            // start plugin by executin... not really working
            console.log(`starting ${module}`)
            return plugins[module]();
        },
        routeFn: (module, method, ...args) => {
            // execute the function from the appropriate registered plugin
            if (!plugins[module]) {
                console.log('ERROR plugin does not exist - register and start the plugin!');
                return;
            } else {
                const plugin = plugins[module]()
                const fn = plugin[method]
                // core responsible for error handling
                try {
                    return fn(...args)
                } catch (e) {
                    console.log(e)
                }
            }
        },
        stop: (module) => {
            console.log(`${module} being destroyed!`)
            delete plugins[module]
        },
        stopAll: () => {
            console.log(`destroying all the plugins!`)
            Object.keys(plugins).forEach((plugin) => {
                delete plugins[plugin]
            })
        }
    }
}();

