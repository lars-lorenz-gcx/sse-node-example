const express = require('express')
const app = express()

const port = 8000

// TODO: Change this to increase or decrease the response interval time
const intervalSeconds = 1

app.get('/sse', (req, res) => {
  console.log('Client connected')

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Access-Control-Allow-Origin', '*')

  // TODO: Uncomment this to test if the browser reconnects after each response to the client
  // res.setHeader("Content-Length", "0")

  // TODO: This is for testing timeouts
  // res.socket.setTimeout(0)

  res.write(`data: ${new Date().toLocaleString()}\n\n`)

  const invalidId = setInterval(() => {
    res.write(`data: ${new Date().toLocaleString()}\n\n`)
  }, intervalSeconds * 1000)

  res.on('close', () => {
    console.log('Client closed connection')

    clearInterval(invalidId)

    res.end()
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
