import { Box, CircularProgress, Grid, Tooltip } from "@mui/material";
import { Playlist } from "../../hooks/useUserPlaylists";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";

interface UserPlaylistsGridProps {
  playlists: Playlist[];
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

const UserPlaylistsGrid = ({ playlists }: UserPlaylistsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollableContainerRef.current;
    if (!scrollContainer) return;

    let scrollStep = 0.3;
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
  }, [playlists]);

  return (
    <ScrollableGridContainer container spacing={1} ref={scrollableContainerRef}>
      <ScrollableContent>
        {playlists && playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <Grid
              item
              key={playlist.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              marginTop="6.5px"
            >
              <Tooltip arrow title={playlist.name} key={playlist.id}>
                <img
                  src={playlist.images[0]?.url || ""}
                  alt={playlist.name}
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

export default UserPlaylistsGrid;
