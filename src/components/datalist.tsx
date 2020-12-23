import React, { Dispatch, ReactElement, SetStateAction } from 'react'

interface Props {
  options: string[]
  title: string
  id: string
  onChange: Dispatch<SetStateAction<string>>
}

const Datalist = ({ options, title, id, onChange }: Props): ReactElement => {
  return (
    <>
      <input
        list="listForData"
        type="datalist"
        name={id}
        id={id}
        placeholder={title}
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <datalist id="listForData">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </datalist>
    </>
  )
}

export default Datalist
