import { Box, Tooltip, Typography } from "@mui/material";
import { Song } from "../../hooks/useTopSongs";

interface RecentTracksGridProps {
  data: { track: Song; played_at: Date }[];
}

const RecentTracksGrid = ({ data }: RecentTracksGridProps) => {
  return (
    <Box marginTop="40px" width="100%">
      <Typography>Recent Tracks</Typography>
      <Box
        marginTop="5px"
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "18px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 3px rgba(0,0,0,0.3)",
            borderRadius: "15px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(45deg, #fca6f9, #9078fc)",
            borderRadius: "15px",
            "&:hover": {
              background: "linear-gradient(45deg, #dd5dfd, #602dfb)",
            },
          },
        }}
        display="flex"
        height="fit-content"
        width="100%"
      >
        {data.map((item, index) => (
          <Tooltip key={index} arrow title={item.track.name}>
            <img
              src={item.track.album.images[0].url}
              alt={item.track.name}
              width="65px"
              height="65px"
              style={{ borderRadius: "7.5px", margin: "7px 4px" }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default RecentTracksGrid;
