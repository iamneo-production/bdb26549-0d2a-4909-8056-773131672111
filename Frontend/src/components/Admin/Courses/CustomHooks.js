import { useState } from 'react';
import axios from 'axios';

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
        axios.post("http://localhost:8080/admin/addCourse", { ...inputs })
            .then(res => {
            console.log(res);
            console.log(res.data);
            })
        setInputs({
            ...inputs,
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseDuration: "",
            noOfStudents:"",
            courseTiming:"",

        });
     console.log('data posted to database');
    } else {
      console.log('errors try again', validationErrors);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const reset=()=>{
      setInputs({
        ...inputs,
        courseId: "",
        courseName: "",
        courseDescription: "",
        courseDuration: "",
        noOfStudents:"",
        courseTiming:"",

    });
    setErrors('');
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
    reset,
  };
};

export default useForm;
