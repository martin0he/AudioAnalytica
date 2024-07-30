import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Feature } from "../../hooks/useTopFeatures";
import FirstBox from "./AudioFeatureBoxes/FirstBox";
import SecondBox from "./AudioFeatureBoxes/SecondBox";
import ThirdBox from "./AudioFeatureBoxes/ThirdBox";
import SmallScreenBox from "./AudioFeatureBoxes/SmallScreenBox";

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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap="5px"
      width="100%"
      marginTop="40px"
      marginBottom="10px"
    >
      <Tooltip
        arrow
        title="Average audio features of your top tracks"
        sx={{ width: "fit-content" }}
      >
        <Typography>Average Audio Features</Typography>
      </Tooltip>
      {isSmallScreen ? (
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          marginY="15px"
          height="fit-content"
        >
          <SmallScreenBox
            hasFirstColor
            title={"Acoustic"}
            value={averageFeatureValue(allAcousticness)}
          />
          <SmallScreenBox
            hasSecondColor
            title={"Instrumental"}
            value={averageFeatureValue(allInstrumentalness)}
          />
          <SmallScreenBox
            hasThirdColor
            title={"Valence"}
            value={averageFeatureValue(allValence)}
          />
          <SmallScreenBox
            hasFirstColor
            title={"Danceability"}
            value={averageFeatureValue(allDanceability)}
          />
          <SmallScreenBox
            hasSecondColor
            title={"Liveness"}
            value={averageFeatureValue(allLiveness)}
          />
          <SmallScreenBox
            hasThirdColor
            title={"Energy"}
            value={averageFeatureValue(allEnergy)}
          />
          <SmallScreenBox
            isTempo
            hasFirstColor
            title={"Tempo"}
            value={parseInt(averageFeatureValue(allTempo).toFixed(0))}
          />
          <SmallScreenBox
            hasSecondColor
            title={"Speechiness"}
            value={averageFeatureValue(allSpeechiness)}
          />
          <SmallScreenBox
            hasThirdColor
            title={"Duration"}
            value={convertToMinutes(averageFeatureValue(allDuration))}
          />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          marginBottom="30px"
          marginTop="5px"
          height={{ md: "400px", sm: "350px", xs: "300px" }}
        >
          {/**first box of 3 */}
          <FirstBox
            acoustic={averageFeatureValue(allAcousticness)}
            instrumental={averageFeatureValue(allInstrumentalness)}
            valence={averageFeatureValue(allValence)}
          />
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            width="62%"
            marginX="6px"
            rowGap="26px"
          >
            {/**second box of 4 */}
            <SecondBox
              danceability={averageFeatureValue(allDanceability)}
              liveness={averageFeatureValue(allLiveness)}
              energy={averageFeatureValue(allEnergy)}
              tempo={averageFeatureValue(allTempo)}
            />
            {/**third box of 2 */}
            <ThirdBox
              speechiness={averageFeatureValue(allSpeechiness)}
              duration={convertToMinutes(averageFeatureValue(allDuration))}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TopAudioFeaturesGrid;
