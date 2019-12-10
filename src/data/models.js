export class Purchasable {

  constructor(apts, mixedApts) {
    this.constructor.apply(this, apts, mixedApts)
  }

  static apply(funcObj, apts, mixedApts) {
    funcObj.apts = apts
    funcObj.apt1 = apts[0]
    funcObj.apt2 = apts[1]
    funcObj.apt3 = apts[2]
    funcObj.mixedApts = mixedApts
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
