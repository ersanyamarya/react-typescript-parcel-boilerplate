import React, { ReactElement } from 'react'
import { TypeOfNotification } from '../components/notification'
import { Notification } from '../components'

const Texts = (): ReactElement => {
  return (
    <>
      <h1>Header Text H1</h1>
      <h2>Header Text H2</h2>
      <h3>Header Text H3</h3>
      <h4>Header Text H4</h4>
      <h5>Header Text H5</h5>

      <p>
        Laboris laborum nostrud exercitation sit non mollit irure nulla anim officia elit commodo cupidatat. Non elit
        cupidatat et consequat voluptate enim reprehenderit fugiat irure sunt ipsum sint ea. Reprehenderit ea et non ex
        adipisicing deserunt aliquip proident Lorem esse. Adipisicing mollit veniam adipisicing in enim dolor duis
        tempor. Ea id quis cupidatat est est enim excepteur. Ea fugiat ut nulla consequat anim sunt. Cupidatat dolore
        nulla irure non esse Lorem voluptate eu est eiusmod aliqua nulla cupidatat do. Voluptate nulla duis elit ipsum
        amet qui. Aliquip cupidatat ad ullamco amet et occaecat laborum cupidatat. Cupidatat sunt nostrud incididunt est
        velit tempor velit. In nisi mollit cillum do ullamco Lorem. Irure fugiat non commodo qui eiusmod eiusmod commodo
        excepteur. Minim ad consequat nisi anim id elit culpa ea. Eu enim labore et nulla labore consequat eiusmod
        mollit laboris proident ad ex.
      </p>

      <Notification
        title="Pipeline saved"
        description="You can find your saved Pipelines in the Library."
        type={TypeOfNotification.SAVE}
      />
    </>
  )
}

export default Texts
