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
    const result = await fetch('http://localhost:8080/staff')
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
            <p><b>{people.employee_job_title}</b></p>
            <p>{comment}</p>
            <p>{star_rating}</p>
          </div>
        )
      })}
    </div>
  )
}
