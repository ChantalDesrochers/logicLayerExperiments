Events = function() {
    return {
      fireEvent: (eventName, data) => {
        console.log('eventName', eventName)
        console.log('data', data)
        const event = new CustomEvent(eventName, { detail: data })
        console.log('xxx event in event service - dispatch', event)
        window.dispatchEvent(event)
      }
      // notify: (plugin, data) => {

      // },
      // listen: (event)
      // testCache: () => {
      //   console.log('in the test events')
      // }
    }
  }