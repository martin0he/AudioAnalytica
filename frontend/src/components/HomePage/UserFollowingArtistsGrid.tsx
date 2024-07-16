import { Grid, keyframes, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import { Artist } from "../../useFollowingArtists";

interface UserFollowingArtistsGridProps {
  artists: Artist[];
}

const bounceAnimation = {
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
};

const hoverStyle = {
  transform: "translateY(-5px) scale(1.025)",
  boxShadow: "1px 4px 5px rgba(0, 0, 0, 0.6)",
};

const ScrollableGridContainer = styled(Grid)({
  height: "360px",
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

const UserFollowingArtistsGrid = ({
  artists,
}: UserFollowingArtistsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ScrollableGridContainer container spacing={1}>
      <ScrollableContent>
        {artists && artists.length > 0 ? (
          artists.map((artist, index) => (
            <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
              <Tooltip arrow title={artist.name} key={artist.id}>
                <img
                  src={artist.images[0]?.url || ""}
                  alt={artist.name}
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
          <Typography>na</Typography>
        )}
      </ScrollableContent>
    </ScrollableGridContainer>
  );
};

export default UserFollowingArtistsGrid;
