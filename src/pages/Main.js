import React from 'react'
import Hydrated from '../components/Hydrated'
import Posture from '../components/Posture'
import Stretch from '../components/Stretch'
function Main() {
  let useDefinedWaterAmount = 5
  let userStretchAmount = 5
  let userPostureAmount = 4
  return (
    <div>
        <Hydrated useDefinedWaterAmount={useDefinedWaterAmount}/>
        <Stretch userStretchAmount={userStretchAmount}/>
        <Posture userDefinedAmount={userPostureAmount}/>
    </div>
  )
}

export default Main