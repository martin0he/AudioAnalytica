import { Box, Typography, useTheme } from "@mui/material";

interface FirstBoxProps {
  acoustic: number;
  instrumental: number;
  valence: number;
}

const FirstBox = ({ acoustic, instrumental, valence }: FirstBoxProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" width="38%" height="100%">
      <Box
        position="relative"
        height="27%"
        margin="5px"
        sx={{
          background:
            "linear-gradient(180deg, rgba(253, 174, 250, 0.75), rgba(232, 128, 128, 0.75))",
          borderRadius: "16px",
          padding: "7px",
        }}
      >
        <Typography
          color={theme.palette.background.default}
          fontFamily="Abril Fatface"
          sx={{
            position: "absolute",
            fontSize: { md: 33, sm: 24, xs: 18 },
            top: -3,
            left: 2,
            m: "5px",
          }}
        >
          Acoustic
        </Typography>
        <Typography
          color={theme.palette.background.default}
          fontFamily="Abril Fatface"
          sx={{
            fontSize: { md: 33, sm: 24, xs: 18 },
            position: "absolute",
            bottom: 0,
            right: 5,
            m: "5px",
          }}
        >
          {acoustic}
        </Typography>
      </Box>
      <Box width="100%" height="73%" display="flex" flexDirection="row">
        <Box
          position="relative"
          width="40%"
          height="100%"
          margin="5px"
          display="flex"
          flexDirection="column"
          sx={{
            background:
              "linear-gradient(0deg, rgba(253, 174, 250, 0.75), rgba(232, 128, 128, 0.75))",
            borderRadius: "16px",
            padding: "7px",
          }}
        >
          <Typography
            color={theme.palette.background.default}
            fontFamily="Abril Fatface"
            sx={{
              fontSize: { md: 33, sm: 24, xs: 18 },
              position: "absolute",
              top: 46,
              left: -40,
              rotate: "90deg",
            }}
          >
            Valence
          </Typography>
          <Typography
            color={theme.palette.background.default}
            fontFamily="Abril Fatface"
            sx={{
              fontSize: { md: 33, sm: 24, xs: 18 },
              position: "absolute",
              top: 0,
              right: 3,
              m: "5px",
            }}
          >
            {valence}
          </Typography>
        </Box>
        <Box
          position="relative"
          width="60%"
          height="100%"
          margin="5px"
          display="flex"
          flexDirection="column"
          sx={{
            background:
              "linear-gradient(0deg, rgba(253, 174, 250, 0.75), rgba(232, 128, 128, 0.75))",
            borderRadius: "16px",
            padding: "7px",
          }}
        >
          <Typography
            color={theme.palette.background.default}
            fontFamily="Abril Fatface"
            sx={{
              fontSize: { md: 33, sm: 24, xs: 18 },
              position: "absolute",
              top: -7,
              left: 3,
              m: "5px",
            }}
          >
            Instrumental
          </Typography>
          <Typography
            color={theme.palette.background.default}
            fontFamily="Abril Fatface"
            sx={{
              fontSize: { md: 33, sm: 24, xs: 18 },
              position: "absolute",
              bottom: -2,
              right: 4,
              m: "5px",
            }}
          >
            {instrumental}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstBox;
