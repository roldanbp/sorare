import React from 'react'

import CardState from './state/cards-state'
import Context from './context'

const Provider = ({ children }: any) => {
    const store = { ...CardState() }

    return <Context.Provider value={store}>{children}</Context.Provider>
}

export default Provider
