import { LineChart } from "react-native-chart-kit";
import { scale } from "react-native-size-matters";
import colorScheme from "@/constants/colorScheme";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

const DataChart = ({
  data,
  max,
}: {
  data: { data: number; matchNumber: number }[];
  max: number | undefined;
}) => {
  const [segments, setSegments] = useState(max);

  const getSegments = () => {
    if (segments == undefined) {
      setSegments(5);
    } else {
      setSegments(segments > 5 ? Math.round(segments / 1) : segments);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSegments();
    }, [])
  );

  return (
    <LineChart
      data={{
        labels: data.map((match, index) => match.matchNumber.toString()),
        datasets: [
          {
            data: data.map((obj) => obj.data),
          },
        ],
      }}
      width={scale(240)} // from react-native
      height={scale(200)}
      yLabelsOffset={scale(8)}
      xLabelsOffset={scale(5)}
      fromZero={true}
      chartConfig={{
        decimalPlaces: 0, // Set to 0 for whole number intervals
        backgroundColor: colorScheme.background,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: scale(2),
        },
        propsForLabels: {
          fontSize: scale(10),
        },
        propsForDots: {
          r: "10",
          strokeWidth: "3",
          stroke: colorScheme.purple,
        },
      }}
      segments={segments}
      bezier
      style={{
        paddingBottom: scale(-15),
      }}
    />
  );
};

export default DataChart;
