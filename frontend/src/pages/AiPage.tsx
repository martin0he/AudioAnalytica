import axios from "axios";
import { useState } from "react";
import { useTopFeatures } from "../hooks/useTopFeatures";
import { averageFeatureValue } from "../components/StatsPage/TopAudioFeaturesGrid";
import { Box, Button, Typography } from "@mui/material";

const AiPage = () => {
  const { features, loading: featuresLoading } = useTopFeatures();
  const [score, setScore] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const allAcousticness = features.map((feature) => feature.acousticness);
      const allDanceability = features.map((feature) => feature.danceability);
      const allEnergy = features.map((feature) => feature.energy);
      const allInstrumentalness = features.map(
        (feature) => feature.instrumentalness
      );
      const allLiveness = features.map((feature) => feature.liveness);
      const allSpeechiness = features.map((feature) => feature.speechiness);
      const allValence = features.map((feature) => feature.valence);
      const allTempo = features.map((feature) => feature.tempo);
      const allDuration = features.map((feature) => feature.duration_ms);
      const data = {
        acousticness: averageFeatureValue(allAcousticness),
        valence: averageFeatureValue(allValence),
        instrumentalness: averageFeatureValue(allInstrumentalness),
        danceability: averageFeatureValue(allDanceability),
        liveness: averageFeatureValue(allLiveness),
        energy: averageFeatureValue(allEnergy),
        tempo: averageFeatureValue(allTempo),
        speechiness: averageFeatureValue(allSpeechiness),
        duration_ms: averageFeatureValue(allDuration),
      };
      const evaluationResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/neuralNet`,
        data
      );
      setScore(evaluationResponse.data.score);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="calc(100vw - 80px)"
      height="calc(100vh - 150px)"
      marginTop="95px"
      paddingY="15px"
      paddingX="27px"
    >
      {score !== null ? (
        <Typography>Your music taste: {(score * 100).toFixed(4)}</Typography>
      ) : (
        <Typography>Your music taste</Typography>
      )}
      <Button onClick={fetchData}>Evaluate</Button>
    </Box>
  );
};

export default AiPage;
