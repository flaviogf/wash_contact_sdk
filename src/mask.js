export class Mask {
  static cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d+$)/, '$1')
  }

  static phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d)/, '($1')
      .replace(/(\d{2})/, '$1) ')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  }
}
