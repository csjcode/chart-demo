// components/ChartComponent.tsx
import React, { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  LineData,
} from "lightweight-charts";

const DemoCandleBars = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chartOptions = {
      layout: {
        textColor: "white",
        background: { type: "solid", color: "black" },
      },
    };

    const chart: IChartApi = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#000" },
        textColor: "#2096F3",
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.3)",
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.2)",
        },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: true,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const data: any = [
      { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
      { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
      { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
      { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
      { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
      { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
      { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
      { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
      { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
      { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
      { open: 10.96, high: 11.2, low: 10.5, close: 10.8, time: 1643291876 },
      { open: 10.8, high: 11.05, low: 10.6, close: 10.9, time: 1643378276 },
      { open: 10.9, high: 11.25, low: 10.7, close: 10.8, time: 1643464676 },
      { open: 10.9, high: 11.25, low: 10.7, close: 10.8, time: 1643551076 },
      { open: 11.2, high: 11.7, low: 11.0, close: 11.5, time: 1643637476 },
      { open: 11.5, high: 11.8, low: 11.3, close: 11.6, time: 1643723876 },
      { open: 11.6, high: 11.9, low: 11.4, close: 11.7, time: 1643810276 },
      { open: 11.7, high: 12.0, low: 11.5, close: 11.8, time: 1643896676 },
      { open: 11.8, high: 11.9, low: 11.6, close: 11.7, time: 1643983076 },
      { open: 11.9, high: 11.2, low: 10.7, close: 11.6, time: 1644069476 },
      { open: 12.0, high: 12.3, low: 11.8, close: 12.1, time: 1644155876 },
      { open: 12.1, high: 12.4, low: 11.9, close: 12.2, time: 1644242276 },
      { open: 12.2, high: 12.0, low: 11.0, close: 11.4, time: 1644328676 },
      { open: 12.3, high: 12.6, low: 11.1, close: 11.7, time: 1644415076 },
      { open: 12.4, high: 12.7, low: 12.2, close: 12.5, time: 1644501476 },
      { open: 12.5, high: 12.1, low: 12.1, close: 12.6, time: 1644587876 },
      { open: 12.6, high: 12.9, low: 12.0, close: 12.3, time: 1644674276 },
      { open: 12.7, high: 13.0, low: 12.5, close: 12.6, time: 1644760676 },
      { open: 12.8, high: 13.1, low: 12.6, close: 12.5, time: 1644847076 },
      { open: 12.9, high: 13.2, low: 12.7, close: 12.1, time: 1644933476 },
      { open: 12.9, high: 13.0, low: 12.2, close: 12.0, time: 1645019876 }, // Decreased close
      { open: 12.0, high: 12.4, low: 11.8, close: 11.9, time: 1645106276 }, // Decreased close
      { open: 11.9, high: 12.1, low: 11.5, close: 11.6, time: 1645192676 }, // Decreased close
      { open: 11.6, high: 11.8, low: 11.2, close: 11.3, time: 1645279076 }, // Decreased close
      { open: 11.3, high: 11.7, low: 11.0, close: 11.1, time: 1645365476 }, // Decreased close
      { open: 11.1, high: 11.8, low: 11.0, close: 11.5, time: 1645451876 }, // Starting to increase
      { open: 11.5, high: 11.7, low: 11.4, close: 11.4, time: 1645538276 }, // Increased close
      { open: 11.3, high: 12.1, low: 11.2, close: 11.9, time: 1645624676 }, // Increased close
      { open: 12.3, high: 12.8, low: 12.1, close: 12.6, time: 1645711076 }, // Increased close
      { open: 12.6, high: 13.1, low: 12.4, close: 12.9, time: 1645797476 }, // Increased close
    ];

    candlestickSeries.setData(data);

    chart.timeScale().fitContent();

    // Resize chart on container resizes
    const resizeObserver = new ResizeObserver((entries) => {
      if (
        entries.length === 0 ||
        entries[0].target !== chartContainerRef.current
      ) {
        return;
      }
      const newWidth = chartContainerRef.current!.clientWidth;
      const newHeight = chartContainerRef.current!.clientHeight;
      chart.applyOptions({ width: newWidth, height: newHeight });
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      chart.remove();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default DemoCandleBars;
