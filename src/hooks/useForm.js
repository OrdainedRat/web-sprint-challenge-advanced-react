// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue) => {
//Values
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
//Handles 'values' changes
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
//Handles form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };

    return [ showSuccessMessage, values, handleChanges, handleSubmit]
  

}

export default useForm;