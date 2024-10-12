const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' })
});

// Serve static files from the Vue.js app (dist folder)
app.use(express.static(path.join(__dirname, 'dist')))

// Catch-all route to serve the Vue.js app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
