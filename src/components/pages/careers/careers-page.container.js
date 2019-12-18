import React from 'react'
import { connect } from 'react-redux'
import CareersComponent from './careers-page.component'

import { careerPaths, universalPath } from '../../../data/paths/universal-path'
import { careers } from '../../../data/career'

const CareersPage = props => {

  const pathDescriptions = [
    'Academics are those who have dedicated their lives to the acquisition of knowledge. This may seem an innocent career, but academia is among the most infamous of path. This is due to the academics who work with magic theory to develop and improve spells. Not only due spells have wondrous effects, but the constant cerebral strain degrades the mental health of academics and their assistants. Some say that the certificate of asylum is the highest degree of academia. Of course, many villages rely on brain power to solve the challenges they face on a regular basis, thus all have a team of academics ready to power the think tank.',
    'Agents are those who do not openly discuss nor admit their choice of career. Their purpose is to act as spies, counterspies, saboteurs, and assassins. They do so with a mix of social skills, physical stealth, and technical expertise. They employ a mixed bag of methods including weapons, explosives, and spells.',
    'Most people do not chose to be a bum. You, apparently, are the exception. The bum “career” is recognized by no one, and acknowledged by no one who is sane. Bum\'s end up piecing together lives off of happenstance, and largely at the mercy of more prominent people.',
    'The celebrity is a noble and ancient career. You sole purpose is to be beloved by strangers.  To that end, you life is one laid open for as many as possible to see, that they can bask in your presence to their hearts content. Privacy is not an option.',
    'Explorer. These individuals venture out of their villages, and across the wilds. They find friends, enemies, and everything in between. They prospect. They prosper. They show only the appropriate amount of fear. But more than anything else, they show their superiors what they want (or need) to see and hear.',
    'To be a goon, is to enact the violent removal of unwanted creatures and people. This is a dreary and dreaded occupation, but for the most part, people are grateful to their goons. Without them, all the enemies, and nasty beasties would rummaging through or chewing apart their corpses. Those who command goons command respect, but must take care to treat their goons well less they be violently removed.',
    'In a sense, the civilized world is run by hooligans. Those who define it as their path of life are simply being honest. In short, hooligans live at the expense of others. Some villages persist off the banditry of their hooligans. Others keep their hooligans under the arm of the law, or at least attempt to. Either way, wherever you go, hooligans can be found.',
    'Now we\'re talking. Lobbyists live with a rare and addictive luxury, power. They carve up pieces of the world among each other sit upon their hidden thrones behind a facade of deception. Lobbyist rarely recognize non-lobbyists as rivals, since if they have one as an enemy, there is surely another lobbyist making a move behind the scenes.',
    'The prospector seeks to develop wealth in the field. After the explorers return with their findings, the prospectors swoop in to begin exploiting the resources whether they be animal, vegetable, mechanical, or mineral. This career is by far the least evil way to become rich.',
    'Zealots are those who see beyond their lives, to live on the behalf of a cause. To a zealot, their cause is their master. Because of this, it takes significant skills of deception to use zealots as a private army. Many regard zealot based organizations as autonomous, reactive ideas that may be steered, but never owned. The zealots themselves are known for using any tactic to achieve their goals, even at the cost of their physical or mental well-being. That said, not all zealots are dangerous, and not all causes are violent. But all zealots wholeheartedly believe in the justness of their actions.'
  ]

  const changePar = par => () => {
    props.dispatch({
      type: 'RULES_PATHS',
      payload: par
    })
  }

  return <>
    <CareersComponent
      careers={careers}
      paths={careerPaths}
      descriptions={pathDescriptions}
      uPath={universalPath}
      pars={props.paragraphs}
      toggleParagraph={changePar}
    />
  </>
}

export default connect(({ rulesParReducer }) => ({
  paragraphs: rulesParReducer.careerPaths
}))(CareersPage)
