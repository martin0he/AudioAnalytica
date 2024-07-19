import { Box, Typography } from "@mui/material";
import CardRow from "../components/StatsPage/CardRow";
import { useTopArtists } from "../hooks/useTopArtists";
import { useTopSongs } from "../hooks/useTopTracks";
import { useTopGenres } from "../hooks/useTopGenres";
import GenreRow from "../components/StatsPage/GenreRow";

const StatsPage = () => {
  const { artists } = useTopArtists();
  const { songs } = useTopSongs();
  const { genres } = useTopGenres();

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="calc(100vw - 54px)"
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
        <CardRow heading={"Songs"} data={songs} />
        <CardRow heading={"Songs"} data={songs} />
      </Box>
    </Box>
  );
};

export default StatsPage;
