import React from 'react'
import { Button } from 'reactstrap'

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
    {props.pars.characteristics && <>Ch
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('species')}>Species</Button></h4>
    {props.pars.species && <>S
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
