
import { Asset, Purchasable } from './models'

const mapTrainingToString = training => ({
  Basic: '',
  Professional: ' +2',
  Expert: ' +4'
}[training])

export class Talent {

  constructor(name, desc, fullDesc, apts, tier, prereqs, mixedApts, nameAddon) {
    this.constructor.apply(this, name, desc, fullDesc, apts, tier, prereqs, mixedApts, nameAddon)
  }

  static printPrereqs(funcObj) {
    return () => funcObj.prereqs.map(prereqOptions => (
      prereqOptions.map(
        option => option.name + (option.training ? mapTrainingToString(option.training) : '')
      ).join(' | ')
    )).join(', ')
  }

  static apply(funcObj, name, desc, fullDesc, apts, tier, prereqs, mixedApts, nameAddon) {
    Asset.apply(funcObj, name, desc)
    Purchasable.apply(funcObj, apts, mixedApts)
    funcObj.fullDesc = fullDesc
    funcObj.tier = tier
    funcObj.prereqs = prereqs
    funcObj.nameAddon = nameAddon
    funcObj.printPrereqs = Talent.printPrereqs(funcObj)
    funcObj.copy = () => new Talent(name, desc, fullDesc, apts, tier, prereqs, mixedApts, nameAddon)
    funcObj.aug = (nameAddon, times) => {
      funcObj.nameAddon = nameAddon
      funcObj.times = times
    }
  }
}
