import React, { useEffect } from 'react';

const TrendGraph = () => {

    return (
      <iframe
        id="google-trends-iframe"
        title="Google Trends Widget"
        src="https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22pepsi%22%2C%22geo%22%3A%22IN%22%2C%22time%22%3A%22now%201-d%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-330&hl=en-GB"
        width="100%"
        height="350"
      ></iframe>
    );
  };

export default TrendGraph;