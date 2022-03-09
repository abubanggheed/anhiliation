import { aptitudes } from './aptitude'

export class Career {

  constructor(n, b1, b2, p) {
    this.constructor.apply(this, n, b1, b2, p)
  }

  static apply(funcObj, name, bApt1, bApt2, pSS) {
    funcObj.name = name
    funcObj.bApt1 = bApt1
    funcObj.bApt2 = bApt2
    funcObj.pSS = pSS
  }
}

export const careers = [
  new Career('Academic', aptitudes[5], aptitudes[4], 'Carouse'),
  new Career('Agent', aptitudes[3], aptitudes[4], 'Interrogation'),
  new Career('Bum', aptitudes[2], aptitudes[6], 'Filibuster'),
  new Career('Celebrity', aptitudes[8], aptitudes[3], 'Perform'),
  new Career('Explorer', aptitudes[2], aptitudes[6], 'Charm'),
  new Career('Goon', aptitudes[1], aptitudes[2], 'Weapon Proficiency'),
  new Career('Hooligan', aptitudes[1], aptitudes[3], 'Intimidate'),
  new Career('Lobbyist', aptitudes[7], aptitudes[8], 'Deceive'),
  new Career('Prospector', aptitudes[5], aptitudes[6], 'Commerce'),
  new Career('Zealot', aptitudes[1], aptitudes[7], 'Command')
]
