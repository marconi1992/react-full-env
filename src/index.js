import React from 'react'
import { hydrate } from 'react-dom'
import '~/styles/index.scss'
import App from '~/app'

const { repos } = window.__NGP

hydrate(
  <App repos={repos} />
  ,
  document.getElementById('content')
)
