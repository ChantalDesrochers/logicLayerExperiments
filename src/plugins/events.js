Events = function() {
    return {
      fireEvent: (eventName, data) => {
        console.log('eventName', eventName)
        console.log('data', data)
        const event = new CustomEvent(eventName, { detail: data })
        console.log('xxx event in event service - dispatch', event)
        window.dispatchEvent(event)
      },
      listen: (type, cb) => {
        window.addEventListener(type, cb)
      },
      // listen: (event)
      // testCache: () => {
      //   console.log('in the test events')
      // }
    }
  }