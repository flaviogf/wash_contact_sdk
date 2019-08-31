export class Mask {
  static cep(value) {
    return value
      .replace(/\D/, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d+$)/, '$1')
  }
}
