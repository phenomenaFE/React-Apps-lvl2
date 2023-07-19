import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          trackLineSettings: {
            visible: true,
          },
        }}
        dataSource={data}
        xName="xval"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </>
  );
};

export default SparkLine;
