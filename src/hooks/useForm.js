import {useState} from "react"

const useForm = (validate) => {

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

        setErrors(validate(values))
    }

    return {values, handleChange, handleSubmit, errors}
}

export default useForm
