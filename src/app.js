import React from 'react'
import Card from '~/components/card'
const App = ({ repos }) => (
  <div className="card-grid">
    { repos.map((repo, index) => <div className="card-wrapper" key={index}><Card title={repo.name} /></div>) }
  </div>
)

export default App