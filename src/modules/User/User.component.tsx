import React from 'react'

interface UserProps {
  name: string
}

export const User: React.FC<UserProps> = ({ name }) => {
  return <div>{name}</div>
}
