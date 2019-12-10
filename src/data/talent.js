
import { Asset, Purchasable } from './models'


export class Talent {

  constructor(name, desc, fullDesc, apts, tier, prereqs, mixedApts) {
    this.constructor.apply(name, desc, fullDesc, apts, tier, prereqs, mixedApts)
  }

  apply(funcObj, name, desc, fullDesc, apts, tier, prereqs, mixedApts) {
    Asset.apply(funcObj, name, desc)
    Purchasable.apply(funcObj, apts, mixedApts)
    funcObj.fullDesc = fullDesc
    funcObj.tier = tier
    funcObj.prereqs = prereqs
  }

}
