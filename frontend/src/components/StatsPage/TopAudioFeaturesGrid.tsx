import { Box, Grid, Typography } from "@mui/material";
import { Feature } from "../../hooks/useTopFeatures";

interface TopAudioFeaturesGridProps {
  audioFeatures: Feature[];
}

interface Averages {
  [key: string]: number;
}

const TopAudioFeaturesGrid = ({ audioFeatures }: TopAudioFeaturesGridProps) => {
  const averages = audioFeatures.reduce<Averages>((acc, feature) => {
    Object.keys(feature).forEach((key) => {
      if (key !== "id") {
        const value = feature[key as keyof Feature];
        if (typeof value === "number") {
          acc[key] = (acc[key] || 0) + value / audioFeatures.length;
        }
      }
    });
    return acc;
  }, {});

  return (
    <Box display="flex" flexDirection="column" rowGap="5px">
      <Typography>Average Audio Features</Typography>
      <Grid container spacing={1} padding="10px">
        {Object.entries(averages).map(([key, value], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography>{`${key}: ${value.toFixed(3)}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopAudioFeaturesGrid;
