import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  return (
    <>
      <section className='containers'>
        <h3>Color generator</h3>
        <form>
          <input
            type='text'
            placeholder='#f15025'
            class='null'
            value={() => {}}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'></section>
    </>
  )
}

export default App
