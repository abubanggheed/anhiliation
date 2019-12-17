export class Purchasable {

  constructor(apts, mixedApts) {
    this.constructor.apply(this, apts, mixedApts)
  }

  static printApts(funcObj) {
    return () => (
      funcObj.apts.map(apt => apt.abvr ? apt.abvr : apt.name).join(', ')
      + (funcObj.mixedApts && funcObj.mixedApts.length ? ', ' + funcObj.mixedApts.map(
        options => options.map(option => option.abvr ? option.abvr : option.name).join(' | ')
      ).join(', ') : ''
      ))
  }

  static apply(funcObj, apts, mixedApts) {
    funcObj.apts = apts
    funcObj.apt1 = apts[0]
    funcObj.apt2 = apts[1]
    funcObj.apt3 = apts[2]
    funcObj.mixedApts = mixedApts
    funcObj.printApts = Purchasable.printApts(funcObj)
  }
}

export class Asset {

  constructor(name, desc) {
    this.constructor.apply(this, name, desc)
  }

  static apply(funcObj, name, desc) {
    funcObj.name = name
    funcObj.desc = desc
  }
}
