import Core from './core';
import Cache from './plugins/cache';
import DataRetrieve from './plugins/data-retrieve';
import Events from './plugins/events';
// import { Cache, DataRetrieve, Events } from './plugins';

console.log(window.Cache, 'imported cache')

window.Core.register('cache', window.Cache);
window.Core.register('dataretrieve', window.DataRetrieve);
window.Core.register('events', window.Events);