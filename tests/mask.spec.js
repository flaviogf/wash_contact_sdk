import { expect } from 'chai'

import { Mask } from '../src/mask'

describe('Mask', () => {
  describe('cep', () => {
    it('should has cep method', () => {
      expect(Mask.cep).to.be.a('function')
    })

    it('should apply mask when 6 digits is passed', () => {
      const result = Mask.cep('144040')

      expect(result).to.be.equal('14404-0')
    })

    it('should apply mask when all digits is passed', () => {
      const result = Mask.cep('14404000')

      expect(result).to.be.equal('14404-000')
    })

    it('should the mask take only the zip code digits', () => {
      const result = Mask.cep('14404000111')

      expect(result).to.be.equal('14404-000')
    })
  })
})
