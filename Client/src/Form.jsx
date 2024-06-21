import { useState } from "react"

export function Form() {
    const [form, setFormData] = useState({
        employee_first_name: "",
        employee_surname: "",
        employee_job_title: "",
        comment: "",
        star_rating: ""
    })

    function handleChange(event) {
        setFormData({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8080/staff', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Employee to review - First Name</label>
                <input name="employee_first_name" onChange={handleChange}></input>
                <label>Employee to review - surname Name</label>
                <input name="employee_surname" onChange={handleChange}></input>
                <label>Job Title</label>
                <input name="employee_job_title" onChange={handleChange}></input>
                <label>Comment</label>
                <input name="comment" onChange={handleChange}></input>
                <label>Rating Out of 5</label>
                <input name="star_rating" onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}