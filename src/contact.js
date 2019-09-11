const API_URL = 'https://backend.appwash.net/contact/api/v1/contacts'

const headers = {
  'Content-Type': 'application/json'
}

const json = () => (res) => res.json()

export class Contact {
  static create({ name, email, phone, cep, interest = 'washer' }) {
    const body = JSON.stringify({ name, email, phone, cep, interest })
    return fetch(API_URL, { method: 'POST', body, headers }).then(json())
  }
}
