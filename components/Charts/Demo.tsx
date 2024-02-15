// components/ChartComponent.tsx
import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi, LineData } from 'lightweight-charts';

// Define a functional component named Demo
const Demo = () => {
  // Use the useRef hook to create a ref object for the chart container div.
  // This allows us to reference the DOM element directly to pass its dimensions to the chart and to attach the chart to it.
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  // useEffect hook to perform side effects in the component.
  // In this case, it's used to initialize the chart after the component mounts and to clean up when the component unmounts.
  useEffect(() => {
    // Check if the chartContainerRef is null to ensure the DOM element is mounted and available.
    if (!chartContainerRef.current) return;

    // Initialize the chart using the createChart function from Lightweight Charts,
    // passing the DOM element and some initial configuration for the chart.
    const chart: IChartApi = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth, // Use the container's current width.
      height: 400, // Set a fixed height for the chart.
      layout: {
        background: { color: '#ffffff' }, // Set the background color of the chart.
        textColor: 'rgba(33, 56, 77, 1)', // Set the text color used in the chart.
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.7)', // Set the color for vertical grid lines.
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.7)', // Set the color for horizontal grid lines.
        },
      },
    });

    // Add a line series to the chart to represent data as a line.
    const lineSeries: ISeriesApi<"Line"> = chart.addLineSeries();

    // Define the data for the line series, consisting of time-value pairs.
    const seriesData: LineData[] = [
      // Each object in the array represents a point on the line.
      { time: '2019-04-11', value: 80.01 },
      // Add more data points as needed.
    ];

    // Set the data for the line series using the setData method.
    lineSeries.setData(seriesData);

    // Create a ResizeObserver to observe changes in the size of the chartContainerRef.
    // This ensures the chart resizes accordingly when the container's size changes.
    const resizeObserver = new ResizeObserver(entries => {
      // Check if the observed entry is the chart container to avoid unnecessary updates.
      if (entries.length === 0 || entries[0].target !== chartContainerRef.current) {
        return;
      }
      // Update the chart's width and height based on the container's current dimensions.
      const newWidth = chartContainerRef.current!.clientWidth;
      const newHeight = chartContainerRef.current!.clientHeight;
      chart.applyOptions({ width: newWidth, height: newHeight });
    });

    // Start observing the chart container for size changes.
    resizeObserver.observe(chartContainerRef.current);

    // Return a cleanup function to be called when the component unmounts.
    // This removes the chart and stops the ResizeObserver to avoid memory leaks.
    return () => {
      chart.remove();
      resizeObserver.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  // Render a div that will serve as the container for the chart.
  // The ref attribute is used to attach the chartContainerRef to the div.
  return <div ref={chartContainerRef} style={{ width: '600px', height: '400px' }} />;
};

export default Demo;




/**

Chart Customization: You can customize the chart further by adjusting its configuration options.

This includes changing the chart type, adding more series (e.g., candlestick, bar, area), adjusting scales, and more.

Series Data: Instead of hardcoding the series data, you could fetch it from an API or a database, making the chart dynamic and interactive.

Interactive Features: Lightweight Charts supports interactive features such as price markers, crosshairs, and time range selection, which you can enable and configure according to your needs.

Responsive Design: While we used a fixed width in this example (600px), you might want to make the chart fully responsive by dynamically setting its width and height based on the container's size or the window dimensions.


*/
