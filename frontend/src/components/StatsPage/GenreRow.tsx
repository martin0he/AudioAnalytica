import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { Genre } from "../../hooks/useTopGenres";

interface GenreRowProps {
  heading: string;
  data: Genre;
}

const GenreRow = ({ heading, data }: GenreRowProps) => {
  return (
    <>
      <Typography>Top {heading}</Typography>
      <Box
        display="flex"
        flexDirection="row"
        height="fit-content"
        columnGap="12px"
        paddingY="12px"
        paddingX="3px"
        sx={{
          width: "100%",
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
            background: "linear-gradient(45deg, #924FE9, #3e67f9)",
            borderRadius: "15px",
            "&:hover": {
              background: "linear-gradient(45deg, #6019be, #0630c6)",
            },
          },
        }}
      >
        {data.topGenres.map((item: string, index: number) => (
          <Card title={item} rank={index} imgUrl={""} key={index} />
        ))}
      </Box>
    </>
  );
};

export default GenreRow;
