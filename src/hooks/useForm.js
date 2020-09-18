import {useState, useEffect} from "react"

const useForm = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({...values, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return {values, handleChange, handleSubmit}
}

export default useForm
