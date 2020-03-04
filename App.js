import React, { Component, lazy, Suspense } from 'react' //the most important components
const LazyLoading = lazy(() => import('./components/LazyLoading'))

export class App extends Component { //React LazyLoading
  render() {
    return (
      
        <div style={{margin:10}}>
          
          <div>another component</div> {
            //this text will appear first
          }
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoading/>
          </Suspense>
        </div>
      
    )
  }
}

export default App
