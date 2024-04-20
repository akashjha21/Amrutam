import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect, Text as SvgText } from 'react-native-svg';

const CircularProgressBar = ({ progress, radius, strokeWidth, progressWidth, color }:any) => {
  const circumference = 2 * Math.PI * radius;
  const progressAngle = (progress / 100) * 360;
  const progressEndX = radius + radius * Math.sin(((progressAngle - 90) * Math.PI) / 180);
  const progressEndY = radius - radius * Math.cos(((progressAngle - 90) * Math.PI) / 180);

  return (
    <View>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={progressWidth}
          fill="none"
          strokeDasharray={`${progressAngle} ${360}`}
          strokeDashoffset="0"
        />
        {/* Rounded Ends */}
        <Rect
          x={radius - progressWidth / 2}
          y={progressWidth / 2}
          width={progressWidth}
          height={progressWidth}
          rx={progressWidth / 2}
          ry={progressWidth / 2}
          fill={color}
        />
        <Rect
          x={progressEndX - progressWidth / 2}
          y={progressEndY - progressWidth / 2}
          width={progressWidth}
          height={progressWidth}
          rx={progressWidth / 2}
          ry={progressWidth / 2}
          fill={color}
        />
        {/* Progress Value Text */}
        <SvgText
          x={radius}
          y={radius + 6} // Adjust position vertically to center the text
          fill="#000"
          textAnchor="middle"
          fontSize={16} // Keep text size big
        >
          {`${progress}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
