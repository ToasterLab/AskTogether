import React, { useState, useCallback } from 'react'

const useValue = () => {
  const [value, setValue] = useState(``)

  const onTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setValue(text)
  }, [])

  return { value, onTextChange }
}

export default useValue