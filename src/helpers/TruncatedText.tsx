import React from 'react';
import { Text } from 'react-native';

const truncateText = (text:string) => {
  if (typeof text !== 'string') {
    return '';
  }
  if (text.length <= 21) {
    return text;
  } else {
    return text.slice(0, 21) + '...';
  }
};

const TruncatedText = ({text}:any) => {
  const truncated = truncateText(text);
  return <Text style={{fontSize:18, fontWeight:'700', color:'#101018'}}>{truncated}</Text>;
};

export default TruncatedText;
