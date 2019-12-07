import React from 'react'
import { Button } from 'reactstrap'
import { characteristics } from '../../../data/characteristic'
import TestTable from '../../test-table/test-table.component'
import { species } from '../../../data/species'

export default props => {

  const toggleParagraph = par => () => {
    props.dispatch({
      type: 'RULES_CHAR_REACTION',
      payload: par
    })
  }

  return <>
    {JSON.stringify(props.pars)}
    <h3>Character Creation</h3>
    <h4><Button color="secondary" onClick={toggleParagraph('characteristics')}>Characteristics</Button></h4>
    {props.pars.characteristics && <>
      <h5><Button color="info" onClick={toggleParagraph('categories')}>Characteristic</Button></h5>
      {props.pars.categories && <>
        <p>
          People are a varied lot. Even before training and adventuring,
          their inherent abilities come in an awe inspiring distribution that can be summarized by eight easy to understand categories.
        </p>
        {characteristics.map(char => <p key={char.name}>
          <b>{char.name}:</b>{` (${char.abvr}) ${char.descr}`}
        </p>)}
      </>}
      <h5><Button color="info" onClick={toggleParagraph('testingChars')}>Testing Characteristics</Button></h5>
      {props.pars.testingChars && <>
        <p>
          Testing your metal will amount to testing one of these characteristics.
          This amounts to adding your characteristic to a modifier that depends on a dice roll and the general difficulty of the task.
          E.g, a test to shoot an elk can be given as WS + 2d8 – 16. If you meet 0, you succeed.
          Thus in that case if your Weapon Skill was 6, you would need to roll a result at least 10 on the 2d8 to make the shot.
        </p>
        <p>
          Typically, the base modifier for any task will be in the format XdY – X*Y such as 1d20 – 20 or 3d6 – 18.
          However, additional pluses and minuses may occur.
          Depending on the situation, the amount by which you succeed or fail also matter.
        </p>
      </>}
      <h5><Button color="info" onClick={toggleParagraph('testsExtended')}>Tests Extended</Button></h5>
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
    <h4><Button color="secondary" onClick={toggleParagraph('species')}>Species</Button></h4>
    {props.pars.species && <>
      {species.map(speis => <div key={speis.name}>
        <h5><Button color="info" onClick={toggleParagraph(speis.name)}>{speis.name}</Button></h5>
        {props.pars[speis.name] && <>
          <p><b>{speis.name}:</b>{' ' + speis.descr}</p>
          <p>Bonus Aptitude: {speis.bApt.name}</p>
          <p>Restricted Aptitude: {speis.rApt.name}{speis.rApt2}</p>
          <p>Bonus Talent: {speis.bTalent}</p>
        </>}
      </div>)}
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('careers')}>Careers</Button></h4>
    {props.pars.careers && <>Ca
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('aptitudes')}>Aptitudes</Button></h4>
    {props.pars.aptitudes && <>A
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('finally')}>Finally</Button></h4>
    {props.pars.finally && <>F
    </>}
  </>
}
