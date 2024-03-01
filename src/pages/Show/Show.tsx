import React from 'react'
import { useParams } from 'react-router-dom'

const Show: React.FC = () => {
  const params = useParams()
  console.log(params.id)
  return (
    <div className='container'><h1>Show info</h1></div>
  )
}

export default Show