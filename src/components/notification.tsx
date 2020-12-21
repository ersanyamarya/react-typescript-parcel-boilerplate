import React, { ReactElement } from 'react'
import styled from '@emotion/styled'

interface Props {
  title: string
  description: string
  type?: TypeOfNotification
}
const NotificationCard = styled.div`
  width: 24rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  & > .text-area {
    margin: auto;
    font-size: 14px;
    padding: 0 1rem;

    & > span {
      font-weight: bold;
    }
  }
`
const Icon = styled.svg`
  &.notification-type {
  }
  &.close {
    cursor: pointer;
  }
  & path.white {
    fill: var(--brilliant-shadow);
  }
  & path.turquoise {
    fill: var(--weeve-turquoise);
  }
`

export enum TypeOfNotification {
  SAVE,
}

const Notification = ({ title, description, type = TypeOfNotification.SAVE }: Props): ReactElement => {
  return (
    <NotificationCard className="card-dark">
      {type === TypeOfNotification.SAVE && (
        <Icon viewBox="0 0 24 24" width="48" height="48" className="notification-type">
          <path
            className="turquoise"
            d="M17,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V7ZM12,19a3,3,0,1,1,3-3A3,3,0,0,1,12,19ZM15,9H5V5H15Z"
          />
        </Icon>
      )}

      <div className="text-area">
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <Icon viewBox="0 0 24 24" width="24" height="24" className="close" onClick={() => console.log('Close Clicked')}>
        <path
          className="white"
          d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z"
        />
      </Icon>
    </NotificationCard>
  )
}

export default Notification
