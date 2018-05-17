import React from 'react'
import express from 'express'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import App from '~/app'
import * as RepoDataProvider from '~/services/repos'
import template from '~/template'

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/cards', async (req, res) => {
  const repos = await RepoDataProvider.fetchAll('marconi1992')

  const html =  ReactDOMServer.renderToString(
    <App repos={repos} />
  )

  res.send(template(html, { repos }))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000)