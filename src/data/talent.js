
import { Asset, Purchasable } from './models'

const mapTrainingToString = training => ({
  Basic: '',
  Professional: ' +2',
  Expert: ' +4'
}[training])

export class Talent {

  constructor(name, desc, fullDesc, apts, tier, prereqs, mixedApts) {
    this.constructor.apply(this, name, desc, fullDesc, apts, tier, prereqs, mixedApts)
  }

  static printPrereqs(funcObj) {
    return () => funcObj.prereqs.map(prereqOptions => (
      prereqOptions.map(
        option => option.name + (option.training ? mapTrainingToString(option.training) : '')
      ).join(' | ')
    )).join(', ')
  }

  static apply(funcObj, name, desc, fullDesc, apts, tier, prereqs, mixedApts) {
    Asset.apply(funcObj, name, desc)
    Purchasable.apply(funcObj, apts, mixedApts)
    funcObj.fullDesc = fullDesc
    funcObj.tier = tier
    funcObj.prereqs = prereqs
    funcObj.printPrereqs = Talent.printPrereqs(funcObj)
  }

}
