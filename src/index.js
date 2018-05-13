import React from 'react'
import ReactDOM from 'react-dom'
import Card from '~/components/card'
import * as RepoDataProvider from '~/services/repos'
import '~/styles/index.scss'

RepoDataProvider.fetchAll('marconi1992')
  .then(repos => {
    ReactDOM.render(
      <div className="card-grid">
        { repos.map((repo, index) => <div className="card-wrapper" key={index}><Card title={repo.name} /></div>) }
      </div>,
      document.getElementById('app')
    )
  })