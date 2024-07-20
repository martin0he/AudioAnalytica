import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useTopGenres } from "../../hooks/useTopGenres";
import { Box, Typography } from "@mui/material";

interface ExampleProps {
  width: number;
  height: number;
  showControls?: boolean;
}

export interface WordData {
  text: string;
  value: number;
}

function wordFreq(words: string[]): WordData[] {
  let value = 130;
  return words.map((word) => ({
    text: word,
    value: value--,
  }));
}

const colors = ["#0630c6", "#3e67f9", "#916ef2", "#e69bf3"];

export default function GenreWordCloud({ width, height }: ExampleProps) {
  const { genres } = useTopGenres();

  const words = wordFreq(genres.topGenres);

  const fontScale = scaleLog({
    domain: [
      Math.min(...words.map((w) => w.value)),
      Math.max(...words.map((w) => w.value)),
    ],
    range: [10, 100],
  });
  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

  const fixedValueGenerator = () => 0.5;

  return (
    <Box display="flex" flexDirection="column" rowGap="10px">
      <Typography>Top Genres</Typography>
      <Wordcloud
        words={words}
        width={width}
        height={height}
        fontSize={fontSizeSetter}
        font={"Abril Fatface"}
        padding={2}
        spiral={"rectangular"}
        rotate={0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={"middle"}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
    </Box>
  );
}
