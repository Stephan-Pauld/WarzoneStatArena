import React, { useEffect } from 'react'
import axios from 'axios'

export default function CreatedSmallOverlay(props) {
  const { 
    statName1,
    statValue1,
    statName2,
    statValue2,
    statName3,
    statValue3,
    statName4,
    statValue4,
  } = props

  return (
    <>
      <div className="medium-created-bar"></div>
      <div className="stats-medium-created-bar">
        <div className="created-stats1">
          <div className="overlay-title1">{statName1}</div>
          <div className="overlay-stat1">{Number.isInteger(statValue1) ? statValue1 : statValue1.toFixed(2)}</div>
        </div>
        <div className="created-stats1">
          <div className="overlay-title1">{statName2}</div>
          <div className="overlay-stat1">{Number.isInteger(statValue2) ? statValue2 : statValue2.toFixed(2)}</div>
        </div>
        <div className="created-stats1">
          <div className="overlay-title1">{statName3}</div>
          <div className="overlay-stat1">{Number.isInteger(statValue3) ? statValue3 : statValue3.toFixed(2)}</div>
        </div>
        <div className="created-stats1">
          <div className="overlay-title1">{statName4}</div>
          <div className="overlay-stat1">{Number.isInteger(statValue4) ? statValue4 : statValue4.toFixed(2)}</div>
        </div>
      </div>
    </>
  )
}