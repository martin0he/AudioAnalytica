import { Box, Typography, useTheme } from "@mui/material";

interface SecondBoxProps {
  danceability: number;
  liveness: number;
  energy: number;
  tempo: number;
}

const SecondBox = ({
  danceability,
  liveness,
  energy,
  tempo,
}: SecondBoxProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" width="100%" height="64%">
      <Box
        position="relative"
        height="100%"
        width="45%"
        margin="5px"
        sx={{
          background:
            "linear-gradient(180deg, rgba(129, 156, 251, 0.75), rgba(191, 63, 236, 0.75), rgba(129, 156, 251, 0.75))",
          borderRadius: "16px",
          padding: "7px",
        }}
      >
        <Typography
          fontFamily="Abril Fatface"
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          color={theme.palette.background.default}
          position="absolute"
          bottom="3px"
          left="8px"
        >
          Danceability
        </Typography>
        <Typography
          fontFamily="Abril Fatface"
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          color={theme.palette.background.default}
          position="absolute"
          top="3px"
          right="10px"
        >
          {danceability}
        </Typography>
      </Box>
      <Box
        margin="5px"
        display="flex"
        flexDirection="column"
        height="105%"
        width="35%"
        rowGap="10px"
      >
        <Box
          position="relative"
          height="35%"
          sx={{
            background:
              "linear-gradient(180deg, rgba(129, 156, 251, 0.75), rgba(191, 63, 236, 0.75))",
            borderRadius: "16px",
          }}
        >
          <Typography
            fontFamily="Abril Fatface"
            fontSize={{ md: 36, sm: 26, xs: 20 }}
            color={theme.palette.background.default}
            position="absolute"
            top="-4px"
            left="8px"
          >
            Liveness
          </Typography>
          <Typography
            fontFamily="Abril Fatface"
            fontSize={{ md: 36, sm: 26, xs: 20 }}
            color={theme.palette.background.default}
            position="absolute"
            bottom="-3px"
            right="8px"
          >
            {liveness}
          </Typography>
        </Box>
        <Box
          position="relative"
          height="65%"
          sx={{
            background:
              "linear-gradient(180deg, rgba(191, 63, 236, 0.75), rgba(129, 156, 251, 0.75))",
            borderRadius: "16px",
          }}
        >
          <Typography
            fontFamily="Abril Fatface"
            fontSize={{ md: 36, sm: 26, xs: 20 }}
            color={theme.palette.background.default}
            position="absolute"
            bottom="0px"
            left="8px"
          >
            Energy
          </Typography>
          <Typography
            fontFamily="Abril Fatface"
            fontSize={{ md: 36, sm: 26, xs: 20 }}
            color={theme.palette.background.default}
            position="absolute"
            top="-3px"
            right="8px"
          >
            {energy}
          </Typography>
        </Box>
      </Box>
      <Box
        margin="5px"
        position="relative"
        height="100%"
        width="20%"
        sx={{
          background:
            "linear-gradient(180deg, rgba(129, 156, 251, 0.75), rgba(191, 63, 236, 0.75), rgba(129, 156, 251, 0.75))",
          borderRadius: "16px",
          padding: "7px",
        }}
      >
        <Typography
          fontFamily="Abril Fatface"
          fontSize={{ md: 36, sm: 26, xs: 20 }}
          color={theme.palette.background.default}
          sx={{ rotate: "-90deg" }}
          position="absolute"
          top="40px"
          right="-30px"
        >
          Tempo
        </Typography>
        <Typography
          fontFamily="Abril Fatface"
          fontSize={{ md: 36, sm: 24, xs: 20 }}
          color={theme.palette.background.default}
          position="absolute"
          bottom="3px"
          left="8px"
        >
          {tempo.toFixed(0)} bpm
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondBox;
