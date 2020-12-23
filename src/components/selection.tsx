import React, { ReactElement, Dispatch, SetStateAction } from 'react'

interface Props {
  options: string[]
  id: string
  onChange: Dispatch<SetStateAction<string>>
}

const Selection = ({ options, id, onChange }: Props): ReactElement => {
  return (
    <>
      <select
        id={id}
        onChange={e => {
          onChange(e.target.value)
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default Selection
