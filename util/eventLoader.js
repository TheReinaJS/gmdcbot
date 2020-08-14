const req = event => require(`../events/${event}`)





module.exports = client => {
    client.on('ready',() => req('ready')(client))
    client.on('message',req('message'))
   

}