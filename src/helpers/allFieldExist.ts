function allFieldsExist <T extends Object>(object: T) {
  return (Object.values(object).map(Boolean).includes(false))
}

export default allFieldsExist