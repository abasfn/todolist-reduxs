import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import styles from '../styles/Home.module.css'
import { dataReduser } from '../reduser'
import { combineReducers, createStore } from 'redux'
import { ItemReduser } from '../reduser/item'

function MyApp({ Component, pageProps }: AppProps) {
  const createMainReduser = () => {
    const rootReduser = combineReducers({
      dataReduser: dataReduser,
      ItemReduser:ItemReduser
    });
    const store = createStore(rootReduser);
    return store
  }
  return (
    <Provider store={createMainReduser()}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
