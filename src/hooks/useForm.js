import { useState } from 'react';

const useForm = (initialState) => {
  const [ form, setForm ] = useState(initialState)

  const handleInputChange = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
        [e.target.name]: e.target.value
    }));
  };

  const clear = () => {
    setForm(initialState)
  }

  return {form, handleInputChange, clear};
}

export default useForm;
