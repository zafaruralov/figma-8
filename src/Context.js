import React, { createContext, useState } from 'react'
import { dataCategory } from './data/data'

export const marketInfo = createContext()

const Context = ({children}) => {
    const [data, setData] = useState(dataCategory)
    const [type, setType] = useState(false)
  return (
    <marketInfo.Provider value={{data, setData, type, setType}}>
      {children}
    </marketInfo.Provider>
  )
}

export default Context