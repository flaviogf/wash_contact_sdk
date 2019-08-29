const API_URL = 'https://backend.appwash.net/landingpage/api/v1/contacts'

const json = () => (res) => res.json()

export class Contact {
  static create({ name, email, phone, cep, interest = 'washer' }) {
    const body = { name, email, phone, cep, interest }
    fetch(API_URL, { method: 'POST', body }).then(json())
  }
}
