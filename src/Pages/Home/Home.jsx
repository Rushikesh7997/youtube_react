import React from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'


export const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
    </>
  )
}
 