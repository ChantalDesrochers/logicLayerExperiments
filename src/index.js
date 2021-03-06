import Core from './core';
import Cache from './plugins/cache';
import DataRetrieve from './plugins/data-retrieve';
import Events from './plugins/events';

// is this set up okay? 
// registering all plugins
window.Core.register('events', window.Events);
window.Core.register('dataretrieve', window.DataRetrieve);
window.Core.register('cache', window.Cache);
// starting all plugins
window.Core.start('events');
window.Core.start('dataretrieve');
window.Core.start('cache');



const deleteButton = document.querySelector('#delete')
deleteButton.addEventListener('click', window.Core.stopAll)

const cacheDelete = document.querySelector('#cachedelete')

cacheDelete.addEventListener('click', () => {
    window.Core.stop('cache')
})

