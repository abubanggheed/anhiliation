
export class Aptitude {

  constructor(n, d) {
    this.constructor.apply(this, n, d)
  }

  static apply(funcObj, name, descr) {
    funcObj.name = name
    funcObj.descr = descr
  }
}

export const aptitudes = [
  new Aptitude('General', 'Can you eat? How about breathe? Good. You have the general aptitude.'),
  new Aptitude('Offense', 'Excelling at directing violence as you please.'),
  new Aptitude('Defense', 'Dealing with the violence directed at you.'),
  new Aptitude('Finesse', 'The ability to look cool.'),
  new Aptitude('Tech', 'Though technology is frustrating, some have an inherent understanding of how to get the bits to work.'),
  new Aptitude('Knowledge', 'A large available pool of memory devoted to academia.'),
  new Aptitude('Fieldcraft', 'Scrounging a living out of less than favorable surroundings.'),
  new Aptitude('Empathy', 'A keen awareness of the emotional state of others.'),
  new Aptitude('Charisma', 'Leading the thoughts of others along your force of personality.')
]
