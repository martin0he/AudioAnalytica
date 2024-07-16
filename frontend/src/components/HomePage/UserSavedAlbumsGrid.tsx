import { Box, Grid, keyframes, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import { AlbumObject } from "../../hooks/useSavedAlbums";

interface UserFollowingArtistsGridProps {
  albums: AlbumObject[];
}

const bounceAnimation = {
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
};

const hoverStyle = {
  transform: "translateY(-5px) scale(1.025)",
  boxShadow: "1px 4px 5px rgba(0, 0, 0, 0.6)",
};

const ScrollableGridContainer = styled(Grid)({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  marginTop: "10px",
  padding: "10px",
});

const scrollAnimation = keyframes`
  0% { transform: translateY(0); } /* Start at the top */
  48%, 51.2% { transform: translateY(calc(-100% + 350px)); } /* Transition to bottom and pause for 0.8 seconds */
  100% { transform: translateY(0); } /* Transition back to top */
`;

const ScrollableContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  animation: `${scrollAnimation} 25s linear infinite`,
}));

const UserSavedAlbumsGrid = ({ albums }: UserFollowingArtistsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ScrollableGridContainer container spacing={1}>
      <ScrollableContent>
        {albums && albums.length > 0 ? (
          albums.map((album, index) => (
            <Grid item key={album.album.id} xs={12} sm={6} md={4} lg={3}>
              <Tooltip
                arrow
                title={`${album.album.name} by ${album.album.artists[0].name}`}
                key={album.album.id}
              >
                <img
                  src={album.album.images[0]?.url || ""}
                  alt={album.album.name}
                  width="90px"
                  height="90px"
                  style={{
                    borderRadius: "13px",
                    boxShadow: "1px 1px 2px #000",
                    ...(hoveredIndex === index ? hoverStyle : {}),
                    ...bounceAnimation,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </Tooltip>
            </Grid>
          ))
        ) : (
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography>N/A</Typography>
          </Box>
        )}
      </ScrollableContent>
    </ScrollableGridContainer>
  );
};

export default UserSavedAlbumsGrid;
