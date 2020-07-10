import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Button } from 'reactstrap'

export default props => {

  const [open, setOpen] = useState(true)

  const { type, asset } = props

  return <div className="description">
    {type ? <Card>
      {asset.name && <CardHeader>
        <div onClick={() => setOpen(!open)}><h4><Button color={open ? 'secondary' : 'info'}>{asset.name}</Button></h4></div>
      </CardHeader>}
      {open ? <CardBody>
        <div className="scrollable">
          {asset.printApts && <div>
            <p>
              <b>Aptitudes</b>: {asset.printApts()}
            </p>
          </div>}
          {asset.printPrereqs && <p>
            <b>Prerequisites</b>: {asset.printPrereqs() || 'None'}
          </p>}
          {asset.char && asset.char !== '-' && <p>
            <b>Characteristic</b>: {asset.char.name}
          </p>}
          {asset.minRatio && <p>
            <b>Minimum Ratio</b>: {asset.minRatio}
          </p>}
          {asset.difficult && <p>
            <b>Difficulty</b>: {asset.difficult}
          </p>}
          {asset.diff && <p>
            <b>Difficulty</b>: {asset.diff}
          </p>}
          {asset.opDiff && <p>
            <b>Opponent's Difficulty</b>: {asset.opDiff}
          </p>}
          {asset.variance && asset.variance !== '-' && <p>
            <b>Variance</b>: {asset.variance}
          </p>}
          {asset.role && <p>
            <b>Role</b>: {asset.role}
          </p>}
          {asset.timing && <p>
            <b>Timing</b>: {asset.timing}
          </p>}
          {['skill', 'combat', 'grappling', 'moshing'].includes(type) && <p>
            <b>Description</b>: {asset.desc}
          </p>}
          {type === 'talent' && <>
            <p>
              <b>Tier</b>: {asset.tier}
            </p>
            <p>
              <b>Description</b>: {asset.fullDesc}
            </p>
          </>}
          {type === 'combat' && <p>
            <b>Talent Required</b>: {asset.talentRequired ? 'Yes' : 'No'}
          </p>}
          {type === 'moshing' && <>
            <p><b>Difficulties</b>:</p>
            <ul>
              <li>1 - 4: {asset.diff1}</li>
              <li>1 - 2: {asset.diff2}</li>
              <li>1 - 1: {asset.diff3}</li>
              <li>2 - 1: {asset.diff4}</li>
              <li>4 - 1: {asset.diff5}</li>
            </ul>
          </>}
          {asset.type && <p>
            <b>Type:</b> {asset.type}
          </p>}
        </div>
      </CardBody> : <></>}
    </Card> : <h5>
        Click on items to see descriptions
      </h5>}
  </div>
}
