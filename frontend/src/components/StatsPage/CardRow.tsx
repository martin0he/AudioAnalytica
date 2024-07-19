import { Box, Typography } from "@mui/material";
import Card from "./Card";

interface CardRowProps {
  heading: string;
  data: any;
}

const CardRow = ({ heading, data }: CardRowProps) => {
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
        {data.map((item: any, index: number) => (
          <Card
            title={item.name}
            rank={index}
            imgUrl={!item.album ? item.images[0].url : item.album.images[0].url}
            subtitle={item.album ? item.album.name : ""}
            titleLink={
              item.album && item.external_urls
                ? item.external_urls.spotify
                : null
            }
          />
        ))}
      </Box>
    </>
  );
};

export default CardRow;
