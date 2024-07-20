import { Box, Link, Typography, useTheme } from "@mui/material";

interface CardProps {
  title: string;
  titleLink?: string;
  subtitle?: string;
  author?: string;
  rank: number;
  imgUrl: string;
}

const Card = ({
  title,
  titleLink,
  subtitle,
  author,
  rank,
  imgUrl,
}: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "10px",
        width: "320px",
        height: "140px",
        background:
          "linear-gradient(to bottom, rgba(238,107,187,1) 35%, rgba(208,1,1,1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "-1px 3px 3px rgba(0,0,0, 0.4)",
        minWidth: "320px",
        flex: "0 0 auto",
      }}
    >
      <Box
        position="relative"
        sx={{
          borderRadius: "6px",
          width: "310px",
          height: "130px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          columnGap="10px"
          sx={{ margin: "10px" }}
        >
          <img
            src={imgUrl}
            alt=""
            width="110px"
            height="110px"
            style={{
              borderRadius: "6px",
            }}
          />

          {titleLink ? (
            <Box display="flex" flexDirection="column">
              <Link
                href={titleLink}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "primary",
                  },
                }}
              >
                <Typography
                  fontWeight={450}
                  sx={{
                    mt: "-4.5px",
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  fontSize={20}
                >
                  {title}
                </Typography>
              </Link>
              {subtitle && (
                <Typography
                  fontWeight={400}
                  sx={{
                    mt: "-2px",
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  fontSize={13}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          ) : (
            <Box display="flex" flexDirection="column">
              <Typography
                fontWeight={450}
                sx={{
                  mt: "-4.5px",
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
                fontSize={20}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  fontWeight={400}
                  sx={{
                    mt: "-2px",
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  fontSize={13}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          )}
        </Box>

        <Typography position="absolute" bottom="1px" right="7px">
          #{rank + 1}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
