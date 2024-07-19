import { Box, Typography } from "@mui/material";
import CardRow from "../components/StatsPage/CardRow";
import { useTopArtists } from "../hooks/useTopArtists";
import { useTopSongs } from "../hooks/useTopSongs";
import GenreWordCloud from "../components/StatsPage/GenreWordCloud";
import useWindowWidth from "../hooks/useWindowWidth";
import RecentTracksGrid from "../components/StatsPage/RecentTracksGrid";
import { useRecentSongs } from "../hooks/useRecentSongs";

const StatsPage = () => {
  const { artists } = useTopArtists();
  const { songs } = useTopSongs();
  const { recentSongs } = useRecentSongs();
  const windowWidth = useWindowWidth();

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
          <GenreWordCloud width={windowWidth * 0.92} height={280} />
        </Box>
        <Typography fontSize={24} fontFamily={"Abril Fatface"}>
          Personal Insights
        </Typography>
        <RecentTracksGrid data={recentSongs} />
      </Box>
    </Box>
  );
};

export default StatsPage;
