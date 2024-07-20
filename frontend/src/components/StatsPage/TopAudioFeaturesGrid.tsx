import { Box, Grid, Typography } from "@mui/material";
import { Feature } from "../../hooks/useTopFeatures";

interface TopAudioFeaturesGridProps {
  audioFeatures: Feature[];
}

const TopAudioFeaturesGrid = ({ audioFeatures }: TopAudioFeaturesGridProps) => {
  const averageFeatureValue = (values: number[]) => {
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum / values.length;
  };

  const featureNames = [
    "Acousticness",
    "Danceability",
    "Energy",
    "Instrumentalness",
    "Liveness",
    "Speechiness",
    "Valence",
    "Tempo",
    "Duration",
  ];

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

  const convertToMinutes = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Number(((ms % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const allFeatureArrays = [
    allAcousticness,
    allDanceability,
    allEnergy,
    allInstrumentalness,
    allLiveness,
    allSpeechiness,
    allValence,
  ];

  return (
    <Box display="flex" flexDirection="column" rowGap="5px">
      <Typography>Average Audio Features</Typography>
      <Grid container spacing={1} padding="10px">
        {allFeatureArrays.map((featureArray, index) => (
          <Grid item xs={4} key={index}>
            <Typography>
              {featureNames[index]}:{" "}
              {averageFeatureValue(featureArray).toFixed(3)}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={4}>
          <Typography>
            {featureNames[7]}: {averageFeatureValue(allTempo).toFixed(0)} bpm
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {featureNames[8]}:{" "}
            {convertToMinutes(averageFeatureValue(allDuration))} minutes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopAudioFeaturesGrid;
