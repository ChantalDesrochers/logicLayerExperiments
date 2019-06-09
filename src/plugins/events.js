Events = () => {
  console.log('starting Events')
    return {
      notifyEvent: (eventName, data) => {
        const event = new CustomEvent(eventName, { detail: data })
        console.log(`notifying of the event: ${eventName}`)
        window.dispatchEvent(event)
      },
      listen: (type, cb) => {
        window.addEventListener(type, cb)
      },
    }
  }