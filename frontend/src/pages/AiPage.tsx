import axios from "axios";
import { useEffect, useState } from "react";
import { useTopFeatures } from "../hooks/useTopFeatures";
import { averageFeatureValue } from "../components/StatsPage/TopAudioFeaturesGrid";
import { Box, Button, Typography } from "@mui/material";
import Typewriter, { Options } from "typewriter-effect";

const AiPage = () => {
  const { features, loading: featuresLoading } = useTopFeatures();
  const [score, setScore] = useState<number | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const scoreToGrade = (score: number) => {
    if (score < 0.2) {
      return "F";
    } else if (score < 0.4) {
      return "D";
    } else if (score < 0.6) {
      return "C";
    } else if (score < 0.8) {
      return "B";
    } else if (score < 0.9) {
      return "A";
    } else {
      return "A+";
    }
  };

  const scoreMessage = (score: number) => {
    if (score < 0.4) {
      return "Your music sucks lol lower the volume";
    } else if (score < 0.5) {
      return "I can't hate on you too much";
    } else if (score < 0.6) {
      return "You're allowed on aux for a lil bit";
    } else if (score < 0.8) {
      return "We can vibe together";
    } else if (score < 0.9) {
      return "Fair 'nough well played";
    } else {
      return "I'm stealing your playlists";
    }
  };

  const fetchData = async () => {
    if (featuresLoading) {
      setAlertMessage("Please wait for the data to load.");
      return;
    }
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
      const fetchedScore = evaluationResponse.data.score;
      setScore(fetchedScore);
      setAlertMessage(scoreMessage(fetchedScore));
    } catch (error) {
      console.error(error);
      setAlertMessage("Error fetching the score. Please try again later.");
    }
  };

  useEffect(() => {
    if (score !== null) {
      setAlertMessage(scoreMessage(score));
    }
  }, [score]);

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
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        width="100%"
        padding="15px"
      >
        <Typography>
          Time to evaluate your music taste! Click the button below to see how
          well our listening habits align together. The neural net model will
          evaluate your music taste based on the average of your top 50 tracks'
          audio features and compare them to my own. Let's see if you get a
          passing grade!
        </Typography>
        <Button
          sx={{
            textTransform: "lowercase",
            fontSize: { md: "40px", sm: "36px", xs: "30px" },
            borderRadius: "18px",
            height: "wrap-content",
            paddingY: 0,
            paddingX: "10px",
            marginTop: "50px",
          }}
          onClick={fetchData}
        >
          evaluate
        </Button>
      </Box>

      <Box
        width="45%"
        height="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-start"
        padding="15px"
      >
        <Typography>
          <Typewriter
            options={
              {
                strings: [alertMessage],
                autoStart: true,
                delay: 40,
                pauseFor: 100000,
                skipAddStyles: true,
              } as Partial<Options>
            }
          />
        </Typography>
      </Box>

      <Box
        position="absolute"
        bottom="20px"
        right="25px"
        display="flex"
        flexDirection="row"
        alignItems="flex-end"
      >
        <Typography
          sx={{
            fontSize: { md: "2.5rem", sm: "2rem", xs: "1.5rem" },
            marginRight: { md: "10px", sm: "8px", xs: "5px" },
            alignSelf: "flex-end",
            lineHeight: 1,
            paddingBottom: "20px",
          }}
        >
          {score !== null ? `${(score * 100).toFixed(1)}%` : ""}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "12rem", sm: "8rem", xs: "5rem" },
            alignSelf: "flex-end",
            lineHeight: 1,
            paddingBottom: "0px",
          }}
        >
          {score !== null ? scoreToGrade(score) : "NaN"}
        </Typography>
      </Box>
    </Box>
  );
};

export default AiPage;
