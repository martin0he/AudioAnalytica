import { Box, Typography, useTheme } from "@mui/material";

interface SmallScreenBoxProps {
  hasFirstColor?: boolean;
  hasSecondColor?: boolean;
  hasThirdColor?: boolean;
  title: string;
  value: number | string;
  isTempo?: boolean;
}

const SmallScreenBox = ({
  hasFirstColor,
  hasSecondColor,
  hasThirdColor,
  title,
  value,
  isTempo,
}: SmallScreenBoxProps) => {
  const theme = useTheme();
  const selectBgColor = () => {
    if (hasFirstColor) {
      return "linear-gradient(180deg, rgba(253, 174, 250, 0.75), rgba(232, 128, 128, 0.75))";
    } else if (hasSecondColor) {
      return "linear-gradient(180deg, rgba(129, 156, 251, 0.75), rgba(191, 63, 236, 0.75))";
    } else if (hasThirdColor) {
      return "linear-gradient(90deg, rgba(237, 74, 192, 0.65), rgba(236, 31, 31, 0.65))";
    } else {
      return "linear-gradient(180deg, rgba(253, 174, 250, 0.75), rgba(232, 128, 128, 0.75))";
    }
  };
  return (
    <Box
      position="relative"
      height="20vh"
      margin="5px"
      sx={{
        background: selectBgColor(),
        borderRadius: "16px",
        padding: "7px",
      }}
    >
      <Typography
        color={theme.palette.background.default}
        fontFamily="Abril Fatface"
        sx={{
          position: "absolute",
          fontSize: { sm: 35, xs: 29 },
          top: 2,
          left: 7,
          m: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography
        color={theme.palette.background.default}
        fontFamily="Abril Fatface"
        sx={{
          fontSize: { sm: 35, xs: 29 },
          position: "absolute",
          bottom: 0,
          right: 7,
          m: "5px",
        }}
      >
        {isTempo
          ? `${(value as number).toFixed(0)} bpm`
          : typeof value === "number"
          ? value.toFixed(3)
          : `${value} min`}
      </Typography>
    </Box>
  );
};

export default SmallScreenBox;
