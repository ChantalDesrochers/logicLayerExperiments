import Core from './core';
import Cache from './plugins/cache';
import DataRetrieve from './plugins/data-retrieve';
import Events from './plugins/events';
// import { Cache, DataRetrieve, Events } from './plugins';

console.log(window.Cache, 'imported cache')
window.Core.register('events', window.Events);
window.Core.register('dataretrieve', window.DataRetrieve);
window.Core.register('cache', window.Cache);
window.Core.start('events');
window.Core.start('dataretrieve');
window.Core.start('cache');
// window.Core.start(window.Events);
// window.Core.start(window.DataRetrieve);
// window.Core.start(window.Cache);


// window.Core.start(window.Events)