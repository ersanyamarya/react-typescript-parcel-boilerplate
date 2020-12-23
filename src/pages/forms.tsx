import React, { ReactElement } from 'react'
import { Datalist, Selection } from '../components'

const CAR_DATA = ['Audi', 'BMW', 'Citroen', 'Ford', 'Honda', 'Jaguar', 'Land Rover', 'Mercedes']
const Forms = (): ReactElement => {
  return (
    <>
      <button
        onClick={() => {
          console.log('Normal button Click')
        }}
      >
        Normal Button
      </button>
      <br />
      <button
        className="border"
        onClick={() => {
          console.log('Border button Click')
        }}
      >
        Border Button
      </button>
      <br />

      <input
        type="text"
        name="text"
        placeholder="name"
        id="name"
        onChange={e => {
          console.log(e.target.value)
        }}
      />

      <br />
      <label htmlFor="data-cars">Select</label>
      <Datalist options={CAR_DATA} id="data-cars" title="Cars" onChange={a => console.log(a)} />
      <br />
      <label htmlFor="select-cars">Select Car</label>
      <Selection options={CAR_DATA} id="select-item" onChange={a => console.log(a)} />

      <input type="checkbox" name="engineer" id="is-engineer" />
    </>
  )
}

export default Forms
