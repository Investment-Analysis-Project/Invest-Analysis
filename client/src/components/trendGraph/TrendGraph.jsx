import React, { useEffect } from 'react';
import './trendgraph.css'

const TrendGraph = (props) => {

  const {company} = props;
  const url=`https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22${company}%22%2C%22geo%22%3A%22IN%22%2C%22time%22%3A%22now%207-d%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-330&hl=en-GB`
  return (
    <iframe 
      id="google-trends-iframe"
      title="Google Trends Widget"
      src={url}
      width="100%"
      height="350"
    ></iframe>
  );
};

export default TrendGraph;