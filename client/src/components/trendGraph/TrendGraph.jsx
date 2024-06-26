import React from 'react';
import './trendgraph.css'

const TrendGraph = (props) => {

  const {company,time} = props;
  let x;

  switch(time)
  {
    case "1-d" : 
    x="now%201-d";
    break;
    case "7-d" :
    x="now%207-d";
    break;
    default :
    x="today%201-m";
    break
  }

  const url=`https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22${company}%22%2C%22geo%22%3A%22IN%22%2C%22time%22%3A%22${x}%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-330&hl=en-GB`
  return (
    <iframe 
      id="google-trends-iframe"
      title="Google Trends Widget"
      src={url}
      width="100%"
      height="420"
    ></iframe>
  );
};

export default TrendGraph;