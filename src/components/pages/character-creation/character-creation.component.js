import React from 'react'
import { Button } from 'reactstrap'
import { characteristics } from '../../../data/characteristic'
import TestTable from '../../test-table/test-table.component'
import CareerTable from '../../career-table/carrer-table.component'
import { species } from '../../../data/species'
import { aptitudes } from '../../../data/aptitude'

export default props => {

  const toggleParagraph = par => () => {
    props.dispatch({
      type: 'RULES_CHAR_REACTION',
      payload: par
    })
  }

  const makeHeader = (par, text) => <h4>
    <Button color="secondary" onClick={toggleParagraph(par)}>{text}</Button>
  </h4>

  const makeArticle = (par, text) => <h5>
    <Button color="info" onClick={toggleParagraph(par)}>{text}</Button>
  </h5>

  return <>
    <h3>Character Creation</h3>
    {makeHeader('characteristics', 'Characteristics')}
    {props.pars.characteristics && <>
      {makeArticle('categories', 'Characteristic')}
      {props.pars.categories && <>
        <p>
          People are a varied lot. Even before training and adventuring,
          their inherent abilities come in an awe inspiring distribution that can be summarized by eight easy to understand categories.
        </p>
        {characteristics.map(char => <p key={char.name}>
          <b>{char.name}:</b>{` (${char.abvr}) ${char.desc}`}
        </p>)}
      </>}
      {makeArticle('testingChars', 'Testing Characteristics')}
      {props.pars.testingChars && <>
        <p>
          Testing your metal will amount to testing one of these characteristics.
          This amounts to adding your characteristic to a modifier that depends on a dice roll and the general difficulty of the task.
          E.g, a test to shoot an elk can be given as Acc + 2d8 – 16. If you meet 0, you succeed.
          Thus in that case if your Weapon Skill was 6, you would need to roll a result at least 10 on the 2d8 to make the shot.
        </p>
        <p>
          Typically, the base modifier for any task will be in the format XdY – X*Y such as 1d20 – 20 or 3d6 – 18.
          However, additional pluses and minuses may occur.
          Depending on the situation, the amount by which you succeed or fail also matter.
        </p>
      </>}
      {makeArticle('testsExtended', 'Tests Extended')}
      {props.pars.testsExtended && <>
        <p>
          Tests can be organized into categories of difficulty and variance.
          For the XdY – X*Y, higher difficulty tests have a higher X*Y and higher variance tests have a lower X.
          For a rough map of variance and difficulty, see below:
        </p>
        <TestTable />
        <p>
          This mapping isn't perfect since the arithmetic doesn't work out for multiple of 2 and 3.
          That said, there are a few important things to note here.
          For one thing, even the impossible are passable with a low characteristic since a high roll will pass regardless.
          If your characteristic is less than half the difficulty of the test, you will be much more likely to pass a high variance test.
          If your characteristic exceeds half the difficulty, you will be better off with a lower variance test.
        </p>
      </>}
    </>}
    {makeHeader('species', 'Species')}
    {props.pars.species && <>
      {species.map(speis => <div key={speis.name}>
        {makeArticle(speis.name, speis.name)}
        {props.pars[speis.name] && <>
          <p>{speis.desc}</p>
          <p>Bonus Aptitude: {speis.bApt.name}</p>
          <p>Restricted Aptitude: {speis.rApt.name}{speis.rApt2 && `, ${speis.rApt2.name}`}</p>
          <p>Bonus Talent: {speis.bTalent.name}</p>
        </>}
      </div>)}
    </>}
    {makeHeader('careers', 'Careers')}
    {props.pars.careers && <>
      <p>
        People come from all walks of life. It is time to chose yours.
      </p>
      <CareerTable />
      <p>
        Choosing a career determines 2 of your non-characteristic attributes.
      </p>
      <p>
        In addition to providing attributes, choosing a career will give
        allow you to train in skills and talent earlier than you would otherwise be able to.
        Eventually, you will have access to the entire catalog of personal improvements,
        but your career will steer your early development.
      </p>
    </>}
    {makeHeader('aptitudes', 'Aptitudes')}
    {props.pars.aptitudes && <>
      <p>
        We all learn at a different pace. We are all challenged at picking up certain skills.
        You may consider some ways of being challenged more debilitating than others,
        but that's just your opinion. To explain our learning strengths, we use aptitudes.
        For every characteristic, there is a characteristic aptitude.
        Someone with the Might aptitude will have an easier time getting buff.
        Here are the rest:
      </p>
      {aptitudes.map(apt => <p key={apt.name}>
        <b>{apt.name}</b>: {apt.desc}
      </p>)}
      <p>
        After choosing species and career, you may pick two characteristic aptitudes of your choice and one non-characteristic aptitude of your choice to be your aptitudes.
        You may not pick an aptitude that is restricted by your species.
        If you are not a sentient mechaniform, you also get the general aptitude for free.
        If you are, you pick another non-characteristic.
      </p>
    </>}
    {makeHeader('finally', 'Finally')}
    {props.pars.finally && <>
      <p>
        Some other things to know. You must have a name, or a serial number, but preferably a name.
        There are a few other stats to track.
    </p>
      <p>
        Characteristic Points: (ChP) these are for increasing your characteristics.
        You start with 120 chp.
    </p>
      <p>
        Experience: (Exp) these are for obtaining skills and talents.
        You start with 120 exp.
    </p>
      <p>
        Rank: your rank affects what you can buy.
        At any point your rank is the amount of exp spent / 100 rounded down.
    </p>
      <p>
        Wounds: at any given point your total wounds are Might + Rank.
    </p>
      <p>
        Insanity: (I) tracks your state of mental degradation.
        You start at 0. When you reach 100 it's all over.
    </p>
      <p>
        Mental Exhaustion: effects your ability to resist mental trauma, sits at 0 unless otherwise noted.
        Any Willpower or Intelligence test will be decreased by your mental exhaustion.
    </p>
      <p>
        Physical Exhaustion: a measure of your physical endurance, sits at 0 unless otherwise noted.
        Any Might, Reflexes or Accuracy test will be decrease by your physical exhaustion.
    </p>
      <p>
        Reactions: these refresh whenever you get a turn to do something.
        By default you have 1 reaction per round, but can accumulate more.
    </p>
    </>}
  </>
}
