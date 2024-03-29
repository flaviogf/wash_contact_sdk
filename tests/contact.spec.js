import { expect } from 'chai'

import sinon from 'sinon'

import fetch from 'node-fetch'

import { Contact } from '../src/contact'

global.fetch = fetch

describe('Contact', () => {
  const url = 'https://backend.appwash.net/contact/api/v1/contacts'

  const response = {
    json: () => ({ data: 'xpto', errors: [] })
  }

  const contact = {
    name: 'Barry',
    email: 'flash@dc.com.br',
    phone: '16999999999',
    cep: '14444444',
    interest: 'washer'
  }

  afterEach(() => {
    sinon.restore()
  })

  describe('create', () => {
    it('should have create method', () => {
      expect(Contact.create).to.be.a('function')
    })

    it('should call fetch', () => {
      const stub = sinon
        .stub(global, 'fetch')
        .usingPromise(global.Promise)
        .resolves(response)

      Contact.create(contact)

      expect(stub.calledOnce).to.be.true
    })

    it('should call fetch with correct arguments', () => {
      const stub = sinon
        .stub(global, 'fetch')
        .usingPromise(global.Promise)
        .resolves(response)

      Contact.create(contact)

      const options = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      }

      expect(stub.calledWith(url, options)).to.be.true
    })
  })
})
