import { Box, Typography } from "@mui/material";
import Card from "../components/StatsPage/Card";

const StatsPage = () => {
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
        width="97%"
        height="fit-content"
        rowGap="12px"
      >
        <Typography fontSize={24} fontFamily={"Abril Fatface"}>
          General
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          height="fit-content"
          width="100%"
          overflow="auto"
          columnGap="12px"
          paddingY="12px"
          paddingX="5px"
          sx={{
            "&::-webkit-scrollbar": {
              width: "18px",
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 3px rgba(0,0,0,0.3)",
              borderRadius: "15px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "linear-gradient(45deg, #924FE9, #3C38E5)",
              borderRadius: "15px",
              "&:hover": {
                background: "linear-gradient(45deg, #6019be, #0b099a)",
              },
            },
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <Card
              title={"Rihanna"}
              rank={index}
              imgUrl={"https://picsum.photos/200"}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StatsPage;
