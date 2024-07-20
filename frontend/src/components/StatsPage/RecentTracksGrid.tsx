import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { Song } from "../../hooks/useTopSongs";

interface RecentTracksGridProps {
  data: { track: Song; played_at: Date }[];
}

const RecentTracksGrid = ({ data }: RecentTracksGridProps) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      marginY="20px"
    >
      <Typography>Recent Tracks</Typography>
      <Grid container spacing={0} marginTop="12px">
        {data.map((item) => (
          <Grid item key={item.track.id} xs="auto">
            <Tooltip arrow title={item.track.name}>
              <Box
                component="img"
                src={item.track.album.images[0].url}
                alt={item.track.name}
                width="65px"
                height="65px"
                borderRadius="7.5px"
                margin="4px"
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentTracksGrid;
