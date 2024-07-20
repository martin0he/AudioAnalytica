import { Box, Typography } from "@mui/material";
import { Feature } from "../../hooks/useTopFeatures";
import FirstBox from "./AudioFeatureBoxes/FirstBox";

interface TopAudioFeaturesGridProps {
  audioFeatures: Feature[];
}

export const averageFeatureValue = (values: number[]) => {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / values.length;
  return parseFloat(avg.toFixed(3));
};

export const convertToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Number(((ms % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const TopAudioFeaturesGrid = ({ audioFeatures }: TopAudioFeaturesGridProps) => {
  const allAcousticness = audioFeatures.map((feature) => feature.acousticness);
  const allDanceability = audioFeatures.map((feature) => feature.danceability);
  const allEnergy = audioFeatures.map((feature) => feature.energy);
  const allInstrumentalness = audioFeatures.map(
    (feature) => feature.instrumentalness
  );
  const allLiveness = audioFeatures.map((feature) => feature.liveness);
  const allSpeechiness = audioFeatures.map((feature) => feature.speechiness);
  const allValence = audioFeatures.map((feature) => feature.valence);
  const allTempo = audioFeatures.map((feature) => feature.tempo);
  const allDuration = audioFeatures.map((feature) => feature.duration_ms);

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap="5px"
      width="100%"
      marginY="25px"
    >
      <Typography>Average Audio Features</Typography>
      <Box display="flex" flexDirection="row" width="100%" height="400px">
        {/**first box of 3 */}
        <FirstBox
          acoustic={averageFeatureValue(allAcousticness)}
          instrumental={averageFeatureValue(allInstrumentalness)}
          valence={averageFeatureValue(allValence)}
        />
        {/**second box of 4 */}
        {/**third box of 2 */}
      </Box>
    </Box>
  );
};

export default TopAudioFeaturesGrid;
