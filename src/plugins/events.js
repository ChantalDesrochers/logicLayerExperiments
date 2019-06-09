Events = () => {
    return {
      notifyEvent: (eventName, data) => {
        // notify an event for any plugin who cares
        const event = new CustomEvent(eventName, { detail: data })
        console.log(`notifying of the event: ${eventName}`)
        window.dispatchEvent(event)
      },
      listen: (type, cb) => {
        // add event listener to the window
        window.addEventListener(type, cb)
      },
    }
  }