const Mask = {
  apply(input, func) {
    setTimeout(() => {
      input.value = Mask[func](input.value)
    })
  },
  formatCodePerson(value){
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/,"$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
    return value
  },
  formatZipCode(value){
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
    return value
  }
}
