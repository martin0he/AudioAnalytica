import { Box, CircularProgress, Typography } from "@mui/material";
import CardRow from "../components/StatsPage/CardRow";
import { useTopArtists } from "../hooks/useTopArtists";
import { useTopSongs } from "../hooks/useTopSongs";
import GenreWordCloud from "../components/StatsPage/GenreWordCloud";
import useWindowWidth from "../hooks/useWindowWidth";
import RecentTracksGrid from "../components/StatsPage/RecentTracksGrid";
import { useRecentSongs } from "../hooks/useRecentSongs";
import TopAudioFeaturesGrid from "../components/StatsPage/TopAudioFeaturesGrid";
import { useTopFeatures } from "../hooks/useTopFeatures";
import { useTopGenres } from "../hooks/useTopGenres";

const StatsPage = () => {
  const { artists, loading: artistsLoading } = useTopArtists();
  const { songs, loading: songsLoading } = useTopSongs();
  const { recentSongs, loading: recentSongsLoading } = useRecentSongs();
  const { features, loading: featuresLoading } = useTopFeatures();
  const { genres, loading: genresLoading } = useTopGenres();
  const windowWidth = useWindowWidth();

  return artistsLoading ||
    songsLoading ||
    recentSongsLoading ||
    featuresLoading ||
    genresLoading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <CircularProgress color="primary" />
    </Box>
  ) : (
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="99%"
        height="fit-content"
        rowGap="12px"
      >
        <Typography fontSize={24} fontFamily={"Abril Fatface"}>
          General
        </Typography>
        <CardRow heading={"Artists"} data={artists} />
        <CardRow heading={"Songs"} data={songs} />
        <Box
          width="100%"
          height="fit-content"
          display="flex"
          justifyContent="flex"
          alignItems="flex"
          marginY="30px"
        >
          <GenreWordCloud
            width={windowWidth * 0.9}
            height={280}
            genres={genres}
          />
        </Box>
        <Box mt="30px" width="100%">
          <Typography fontSize={24} fontFamily={"Abril Fatface"}>
            Personal Insights
          </Typography>
          <RecentTracksGrid data={recentSongs} />
          <TopAudioFeaturesGrid audioFeatures={features} />
        </Box>
      </Box>
    </Box>
  );
};

export default StatsPage;
