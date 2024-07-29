import { Box, CircularProgress, Grid, Tooltip } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { AlbumObject } from "../../hooks/useSavedAlbums";

interface UserSavedAlbumsGridProps {
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

const ScrollableContent = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

const UserFollowingArtistsGrid = ({ albums }: UserSavedAlbumsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollableContainerRef.current;
    if (!scrollContainer) return;

    let scrollStep = 0.25;
    let scrollPosition = 0;
    let direction = 1; // 1 for down, -1 for up

    const performScroll = () => {
      if (!scrollContainer) return;

      const totalScrollHeight = scrollContainer.scrollHeight;
      const visibleHeight = scrollContainer.clientHeight;

      scrollPosition += scrollStep * direction;

      if (
        scrollPosition + visibleHeight >= totalScrollHeight ||
        scrollPosition <= 0
      ) {
        direction *= -1; // Reverse direction
      }

      scrollContainer.scrollTop = scrollPosition;

      requestAnimationFrame(performScroll);
    };

    const scrollTimeout = setTimeout(() => {
      requestAnimationFrame(performScroll);
    }, 1000);

    return () => clearTimeout(scrollTimeout);
  }, [albums]);

  return (
    <ScrollableGridContainer container spacing={1} ref={scrollableContainerRef}>
      <ScrollableContent>
        {albums && albums.length > 0 ? (
          albums.map((album, index) => (
            <Grid
              item
              key={album.album.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              marginTop="6.5px"
            >
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
            <CircularProgress color="primary" />
          </Box>
        )}
      </ScrollableContent>
    </ScrollableGridContainer>
  );
};

export default UserFollowingArtistsGrid;
