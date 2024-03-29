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

  describe('phone', () => {
    it('should has phone method', () => {
      expect(Mask.phone).to.be.a('function')
    })

    it('should add "()" when 3 digits is passed', () => {
      const result = Mask.phone('111')

      expect(result).to.be.equal('(11) 1')
    })

    it('should add "-" when 7 digits is passed', () => {
      const result = Mask.phone('1199999')

      expect(result).to.be.equal('(11) 9999-9')
    })

    it('should add "-" when 8 digits is passed', () => {
      const result = Mask.phone('11999999')

      expect(result).to.be.equal('(11) 9999-99')
    })

    it('should apply completed mask when a phone with 11 digits is passed', () => {
      const result = Mask.phone('11999998888')

      expect(result).to.be.equal('(11) 99999-8888')
    })

    it('should apply completed mask when a phone with 10 digits is passed', () => {
      const result = Mask.phone('1199998888')

      expect(result).to.be.equal('(11) 9999-8888')
    })

    it('should maks limit max digits in 11 digits', () => {
      const result = Mask.phone('11999998888777')

      expect(result).to.be.equal('(11) 99999-8888')
    })
  })

  describe('unmask', () => {
    it('should has unmask method', () => {
      expect(Mask.unmask).to.be.a('function')
    })

    it('should unmask value', () => {
      const result = Mask.unmask('(16) 99999-9999')

      expect(result).to.be.equal('16999999999')
    })
  })
})
