
import { Asset } from './models'

export class Aptitude {

  constructor(n, d) {
    this.constructor.apply(this, n, d)
  }

  static apply(funcObj, name, descr) {
    Asset.apply(funcObj, name, descr)
  }
}

export const aptitudes = [
  new Aptitude('General', 'Can you eat? How about breathe? Good. You have the general aptitude.'),//0
  new Aptitude('Carnage', 'Excelling at directing violence as you please.'),//1
  new Aptitude('Defense', 'Dealing with the violence directed at you.'),//2
  new Aptitude('Coolness', 'The ability to look cool.'),//3
  new Aptitude('Gear', 'Though technology is frustrating, some have an inherent understanding of how to use tools.'),//4
  new Aptitude('Knowledge', 'A large available pool of memory devoted to academia.'),//5
  new Aptitude('Ranging', 'Scrounging a living out of less than favorable surroundings.'),//6
  new Aptitude('Empathy', 'A keen awareness of the emotional state of others.'),//7
  new Aptitude('Hotness', 'Leading the thoughts of others along with the power of good looks.')//8
]
