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
    </>
  )
}

export default Forms
