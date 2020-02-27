import React, { Component, lazy, Suspense } from 'react'
// import TodoApp from './components/TodoApp'
// import LazyLoading from './components/LazyLoading'
const LazyLoading = lazy(() => import('./components/LazyLoading'))

export class App extends Component { //React LazyLoading
  render() {
    return (
      
        <div style={{margin:10}}>
          <div>another component</div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoading/>
          </Suspense>
        </div>
      
    )
  }
}

export default App
