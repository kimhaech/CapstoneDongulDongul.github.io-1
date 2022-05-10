import ReactSpeedometer from 'react-d3-speedometer'

function Speedometer(props) {
  const { value, state } = props

  return (
    <ReactSpeedometer
      minValue={0}
      maxValue={100}
      width={600}
      height={330}
      value={value}
      valueTextFontSize={23}
      ringWidth={117}
      needleHeightRatio={0.3}
      maxSegmentLabels={5}
      currentValueText={state}
      needleColor="#7D7D7D"
      labelFontSize="15px"
      customSegmentLabels={[
        {
          text: 'EXTREME FEAR',
          position: 'INSIDE',
          color: '#777777',
        },
        {
          text: 'FEAR',
          position: 'INSIDE',
          color: '#777777',
        },
        {
          text: 'NEUTRAL',
          position: 'INSIDE',
          color: '#777777',
        },
        {
          text: 'GREED',
          position: 'INSIDE',
          color: '#777777',
        },
        {
          text: 'EXTREME GREED',
          position: 'INSIDE',
          color: '#777777',
        },
      ]}
    />
  )
}
export default Speedometer
