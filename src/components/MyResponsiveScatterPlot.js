import React from "react"
import { ResponsiveScatterPlot } from "@nivo/scatterplot"


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createXy = () => {
  var xyarray = []
  const amount = 50

  for(var q = 0; q < amount; q++){
    const xValue = getRandomInt(100)
    const yValue = getRandomInt(120)

    xyarray.push({ x: xValue, y: yValue })
  }

  return(xyarray)
}

const CreateData = () => {
  var data= []

  for(var i = 0; i < 5; i++){
    const xydata = createXy()
    data.push({ id:i, data: xydata })
  }

  return(data)
}

const MyResponsiveScatterPlot = ({ data }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    xFormat={function(e){return e+" kg"}}
    yScale={{ type: "linear", min: 0, max: "auto" }}
    yFormat={function(e){return e+" cm"}}
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: 46
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: -60
    }}
    isInteractive={false}
    legends={[]}
  />
)

export { MyResponsiveScatterPlot, CreateData }