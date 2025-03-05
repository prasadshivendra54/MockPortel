import React from 'react'

interface CheckPrivate {
  Component: any
}

const PrivateLayout:React.FC<React.PropsWithChildren<CheckPrivate>> = ({
    Component
}) => {
  return (
    <div>
        <Component />
    </div>
  )
}

export default PrivateLayout