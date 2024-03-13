import React, { useEffect } from 'react';
/* eslint-disable no-undef */

function TrendGraph() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js';
        script.async = true;

        // Define the rendering logic function
        window.renderTrendGraph = () => {
            trends.embed.renderExploreWidget(
                "TIMESERIES",
                {"comparisonItem":[{"keyword":"pepsi","geo":"IN","time":"now 1-d"}],"category":0,"property":""},
                {"exploreQuery":"q=pepsi&date=now%201-d&geo=IN&hl=en-GB","guestPath":"https://trends.google.com:443/trends/embed/"}
            );
        };

        script.onload = () => {
            // Once the script is loaded, call the rendering logic function
            window.renderTrendGraph();
        };

         document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script);
            delete window.renderTrendGraph;
        };
    }, []);

    return (
        <div id="trend-graph-container" style={{ width: '500px', height: '300px' }}>
            {/* This div will be used as the container for the TrendGraph */}
        </div>
    );
}

export default TrendGraph;
