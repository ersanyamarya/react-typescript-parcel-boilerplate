import React, { ReactElement } from 'react'

const Forms = (): ReactElement => {
  return (
    <>
      <button>Normal Button</button>
      <br />
      <button className="border">Border Button</button>
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
      <input
        list="browsers"
        type="datalist"
        name="browser"
        id="browser"
        placeholder="browsers"
        onChange={e => {
          console.log(e.target.value)
        }}
      />
      <br />
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
      <br />

      <label htmlFor="select-item">Select</label>
      <select
        id="select-item"
        value="0"
        onChange={e => {
          console.log(e.target.value)
        }}
      >
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
    </>
  )
}

export default Forms
