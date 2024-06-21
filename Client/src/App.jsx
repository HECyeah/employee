import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from "./Form"
import { Home } from './Home.jsx'
import { Nav } from './Nav'

export default function App() {

  const [staff, setStaff] = useState([])

  useEffect(() => {
    fetchStaff()
  }, [])


  async function fetchStaff() {
    const result = await fetch('https://employee2-rxwp.onrender.com')
    const staff = await result.json()
    setStaff(staff)
    console.log(staff)
  }

  //console.log(staff)


  return (
    <div>
      <Nav />
      <Home />
      <Form />
      {staff.map((people) => {
        return (
          <div key={people.employee_id}>
            <p>Employee name: {people.employee_first_name} {people.employee_surname}</p>
            <p>employee job:<b>{people.employee_job_title}</b></p>
            <p>Comment: {people.comment}</p>
            <p>Rating out of five:{people.star_rating}</p>
          </div>
        )
      })}
    </div>
  )
}

