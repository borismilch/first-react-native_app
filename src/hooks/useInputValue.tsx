import React from 'react'
import { useState } from 'react'

interface BindValue {
  value: string,
  onChangeText: (val: string) => void
}

type hookReturnType = [string, BindValue, () => void]

const useInputValue = (initialValue: string = ""): hookReturnType => {
  const [value, setValue] = useState<string>(initialValue)

  const onChangeText = (val: string) => {
    setValue(val)
  }

  const clean = () => {
    setValue("")
  }

  const bind = {
    value, 
    onChangeText
  }

  return [value, bind, clean]
}

export default useInputValue