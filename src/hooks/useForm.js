import { useState } from 'react';




export function useForm() {
  const [formState, setFormState] = useState({
    title: '',
    request: ''
  })




  
  

  return { formState }
}