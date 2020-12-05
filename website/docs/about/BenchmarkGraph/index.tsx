import * as React from "react"
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    "testCase": "Singleton",
    "VContainer (CodeGen)": 4.3884,
    "VContainer (CodeGen)color": "hsl(192, 70%, 50%)",
    "VContainer (Reflection)": 4.918865,
    "Zenject (Reflection)": 21.209325,
  },
  {
    "testCase": "Transient",
    "VContainer (CodeGen)": 4.3569,
    "VContainer (Reflection)": 19.2531,
    "Zenject (Reflection)": 79.1066,
  },
  {
    "testCase": "Combined",
    "VContainer (CodeGen)": 15.0227,
    "VContainer (Reflection)": 49.60295,
    "Zenject (Reflection)": 164.6642,
  },
  {
    "testCase": "Complex",
    "VContainer (CodeGen)": 18.8648,
    "VContainer (Reflection)": 57.0287,
    "Zenject (Reflection)": 441.1458,
  },
  {
    "testCase": "Initialize",
    "VContainer (CodeGen)": 159.816,
    "VContainer (Reflection)": 272.3955,
    "Zenject (Reflection)": 683.2439,
  },
]

type BenchmarkGraphProps = {
  height: number,
}

export const BenchmarkGraph: React.FC<{ height: number }> = ({ height }) =>
  <div style={{height, width: '100%'}}>
    <ResponsiveBar
    data={data}
    groupMode="grouped"
    layout="vertical"
    keys={['VContainer (CodeGen)', 'VContainer (Reflection)', 'Zenject (Reflection)']}
    indexBy="testCase"
    margin={{top: 0, right: 150, bottom: 50, left: 60}}
    padding={0.3}
    valueScale={{type: 'linear'}}
    indexScale={{type: 'band', round: true}}
    colors={[
      'rgb(151, 227, 213)',
      // 'rgb(241, 225, 91)',
      'rgb(97, 205, 187)',
      'rgb(244, 117, 96)',
      // 'rgb(232, 193, 160)',
    ]}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        // background: 'inherit',
        background: 'rgb(97, 205, 187)',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        // background: 'inherit',
        background: 'rgb(241, 225, 91)',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {id: 'VContainer (CodeGen)'},
        id: 'lines'
      },
      // {
      //   match: {id: 'VContainer (Reflection)'},
      //   id: 'dots'
      // }
    ]}
    borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      tickValues: 5,
      legend: 'ms',
      legendPosition: 'middle',
      legendOffset: -50
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 150,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}/>
  </div>