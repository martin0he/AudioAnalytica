import { Box, Typography, useTheme } from "@mui/material";

interface ThirdBoxProps {
  speechiness: number;
  duration: string;
}

const ThirdBox = ({ speechiness, duration }: ThirdBoxProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" width="100%" height="33%">
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(237, 74, 192, 0.65), rgba(236, 31, 31, 0.65))",
          borderRadius: "16px",
        }}
        position="relative"
        width="65%"
        height="100%"
        margin="5px"
        padding="7px"
      >
        <Typography
          fontFamily="Abril Fatface"
          color={theme.palette.background.default}
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          position="absolute"
          bottom="2px"
          left="8px"
        >
          Speechiness
        </Typography>
        <Typography
          fontFamily="Abril Fatface"
          color={theme.palette.background.default}
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          position="absolute"
          top="2px"
          right="8px"
        >
          {speechiness}
        </Typography>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(-90deg, rgba(237, 74, 192, 0.65), rgba(236, 31, 31, 0.65))",
          borderRadius: "16px",
        }}
        position="relative"
        width="35%"
        height="100%"
        margin="5px"
        padding="7px"
      >
        <Typography
          fontFamily="Abril Fatface"
          color={theme.palette.background.default}
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          position="absolute"
          top="2px"
          left="8px"
        >
          Duration
        </Typography>
        <Typography
          fontFamily="Abril Fatface"
          color={theme.palette.background.default}
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          position="absolute"
          bottom="2px"
          right="8px"
        >
          {duration} min
        </Typography>
      </Box>
    </Box>
  );
};

export default ThirdBox;
