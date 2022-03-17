
import { Asset, Purchasable } from './models'
import { charMap } from './characteristic'
import { aptitudes } from './aptitude'

export const skillCosts = [24, 22, 20, 18]

export class Skill {

  constructor(name, desc, apts, type) {
    this.constructor.apply(this, name, desc, apts, type)
  }

  static apply(funcObj, name, desc, apts, type) {
    Asset.apply(funcObj, name, desc)
    Purchasable.apply(funcObj, apts)
    funcObj.type = type
  }

}

export const skills = [
  new Skill(//0
    'Acrobatics',
    'This skill is used for all difficult movement.',
    [charMap.M, aptitudes[0]],
    'Basic'
  ),
  new Skill(//1
    'Athletics',
    'Used for hard work, and challenging physical tasks such as running swimming etc.',
    [charMap.M, aptitudes[0]],
    'Basic'
  ),
  new Skill(//2
    'Awareness',
    'How good you are at taking not of your surroundings. Can also use to search for something in particular.',
    [charMap.K, aptitudes[6]],
    'Basic'
  ),
  new Skill(//3
    'Filibuster',
    'The art of oral misdirection',
    [charMap.P, aptitudes[0]],
    'Basic'
  ),
  new Skill(//4
    'Carouse',
    'Use to process and deal with the substances that enter your body. Avoid addiction, win a drinking contest. You may also substitute a carouse test for an might test to resist poisons, toxins, and tranquilizers.',
    [charMap.M, aptitudes[6]],
    'Basic'
  ),
  new Skill(//5
    'Charm',
    'Winning the sympathy of others.',
    [charMap.P, aptitudes[8]],
    'Basic'
  ),
  new Skill(//6
    'Command',
    'Taking charge of a situation with social dominance.',
    [charMap.P, aptitudes[8]],
    'Basic'
  ),
  new Skill(//7
    'Commerce',
    'This skill may govern any interaction where wealth is involved. You can use it to lower the price of desired wares, strike a bargain with a crime lord, or renegotiate the terms of a loan. This may also be used as a social skill for bargaining favors.',
    [charMap.I, aptitudes[8]],
    'Basic'
  ),
  new Skill(//8
    'Common Lore',
    'Knowledge on matters which are widely accessible. This includes folklore, history, geography, religion, etc. Note: you need specific training in each kind of common lore. You cannot get training in all common lore.',
    [charMap.I, aptitudes[5]],
    'Variable'
  ),
  new Skill(//9
    'Deceive',
    'Subtly influence other peoples\' ambitions and beliefs, or tell bold faced lies. You may also use this skill to craft disguises.',
    [charMap.P, aptitudes[7]],
    'Basic'
  ),
  new Skill(//10
    'Inquiry',
    'Recovering information from crowds of people. A good inquiry test allows you to discretely recover information from crowds of people.',
    [charMap.P, aptitudes[8]],
    'Basic'
  ),
  new Skill(//11
    'Interrogation',
    'Use to coax information out of someone who wants to keep it from you. It is possible to use deceive or charm for this action, however interrogation will always have a better chance of success.',
    [charMap.W, aptitudes[7]],
    'Advanced'
  ),
  new Skill(//12
    'Intimidate',
    'This is an alternative skill for the socially challenged. Though in some situations it is the most appropriate. (Hint: most people do not like being intimidated.)',
    [charMap.W, aptitudes[7]],
    'Basic'
  ),
  new Skill(//13
    'Linguistics',
    'Use this skill to transcribe and decipher bizarre dialects. You can also use it to understand writing in an unfamiliar language. A good test can let you communicate with people with which you share no languages. However, this is only rudimentary communication.',
    [charMap.I, aptitudes[0]],
    'Advanced'
  ),
  new Skill(//14
    'Logic',
    'Use this skill to solve puzzles and perform mathematics. This is also sometimes an interaction skill when mechaniforms are involved.',
    [charMap.I, aptitudes[0]],
    'Basic'
  ),
  new Skill(//15
    'Magic Engineering',
    'This skill allows you to construct magical devices capable of casting from schematics, or if you are familiar enough, from memory. It also allows you to reverse engineer magical devices to come up with schematics to build copies later. You cannot use this to come up with your own spells.',
    [charMap.I, aptitudes[4]],
    'Advanced'
  ),
  new Skill(//16
    'Medical',
    'With equipment, you can use this skill for a number of useful applications. You can apply drugs in an optimal way, provide long term care, perform first aid, treat infections and diseases, and have a rudimentary knowledge of physiology.',
    [charMap.I, aptitudes[6], aptitudes[5]],
    'Variable'
  ),
  new Skill(//17
    'Navigation',
    'This skill is used to track your position, and find options of how to get from point A to point B. Like lore skills, there are several different types of navigations, such as surface navigation, sea navigation, and urban navigation. A good navigation test will let you know the fastest ways, as well as the more discrete ways. It does not take a navigation check to follow a road.',
    [charMap.K, aptitudes[6]],
    'Variable'
  ),
  new Skill(//18
    'Perform',
    'Put on a show. This skill may be taken any number of times, each one specifying a different performance.',
    [charMap.P, aptitudes[8]],
    'Advanced'
  ),
  new Skill(//19
    'Ride',
    'How well you can sit a mount, be it animal or mechaniform.',
    [charMap.R, aptitudes[6]],
    'Basic'
  ),
  new Skill(//20
    'Scholastic Lore',
    'Knowledge on matters that require specialized education. This includes chemistry, magic theory, geology, biology, etc. Note: you need specific training in each kind of scholastic lore. You cannot get training in all scholastic lore.',
    [charMap.I, aptitudes[5]],
    'Advanced'
  ),
  new Skill(//21
    'Scrutiny',
    'This ability allows you to discern someone\'s emotional state. Failing this test, unless otherwise stated, leaves you with uncertainty. Npcs, when failing the test, will believe the liar unless they have a good reason not to. If scrutiny is being used on you, you must oppose with a deceive or token deceive test. (Being a good liar can get you into trouble.)',
    [charMap.K, aptitudes[7]],
    'Basic'
  ),
  new Skill(//22
    'Security',
    'this is used to arm and disarm explosives and other traps.',
    [charMap.I, aptitudes[4], aptitudes[6]],
    'Advanced'
  ),
  new Skill(//23
    'Sleight of Hand',
    'This skill is for recovering small objects, and place them where they don’t belong without others noticing. This skill is also used for contortion and opening mechanical locks.',
    [charMap.R, aptitudes[7]],
    'Advanced'
  ),
  new Skill(//24
    'Spell Use',
    'This skill is for using those magnificent magical devices in combat or otherwise.',
    [charMap.I, aptitudes[4]],
    'Advanced'
  ),
  new Skill(//25
    'Stealth',
    'This skill encompasses moving silently, hiding and shadowing.',
    [charMap.K, aptitudes[6]],
    'Basic'
  ),
  new Skill(//26
    'Survival',
    'Use this to find food and set up shelter. Unless your provisions are depleted, or the weather is horrible, you can get by without this skill.',
    [charMap.K, aptitudes[6]],
    'Basic'
  ),
  new Skill(//27
    'Tech Use',
    'Use this skill to interact with mechaniforms and their byproducts.',
    [charMap.I, aptitudes[4]],
    'Basic'
  ),
  new Skill(//28
    'Trade',
    'Each trade skill indicates a certain profession. This could include, glass blowing, wrangling, janitorial duty, etc.',
    [charMap.I, aptitudes[5]],
    'Advanced'
  )
]
