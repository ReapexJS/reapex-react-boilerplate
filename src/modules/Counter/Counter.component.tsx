import React from 'react'
import styles from './Counter.css'

import { app } from '../../app'

export const CounterModel = app.model('Counter', { total: 50 })

const [mutations] = CounterModel.mutations({
  increase: () => (s) => ({ ...s, total: s.total + 1 }),
  decrease: () => (s) => ({ ...s, total: s.total - 1 }),
})

document.getElementById('tets')

export const Counter = () => {
  const total = CounterModel.useState((s) => s.total)

  return (
    <div className={styles.counter}>
      <button onClick={mutations.decrease}>-</button>
      {total}
      <button onClick={mutations.increase}>+</button>
    </div>
  )
}
