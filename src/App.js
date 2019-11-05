import { hot } from 'react-hot-loader/root'
import React from 'react'

const Warning = React.lazy(() =>
  import(/* webpackChunkName: "warning" */ './warning')
)

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className={count > 10 ? 'warning' : ''}>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        {count > 10 && (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        )}
      </div>
    )
  }
}

export default hot(App)
