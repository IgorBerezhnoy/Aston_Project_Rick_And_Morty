import { Component, ReactNode } from 'react'

import { CardPage } from '@/components/cardPage'

export class ErrorBoundary extends Component<{ children: ReactNode }, StateType> {
  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({
      error: true,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <CardPage
          subtitle={<h3>If this does not help, contact customer support </h3>}
          title={' Something went wrong try to reload the page'}
        />
      )
    }

    return this.props.children
  }
}

type StateType = {
  error: boolean
}
