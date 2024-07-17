import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useUser } from "../../UserContext";

const AccountAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const { user } = useUser();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }} src={user?.images[1].url} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "10px",
            overflow: "visible",
            height: "fit-content",
            width: "fit-content",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: isSmall ? 14 : 0,
              right: isSmall ? 0 : 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: isSmall ? "center" : "top",
        }}
        anchorOrigin={{
          horizontal: isSmall ? "left" : "right",
          vertical: isSmall ? "center" : "bottom",
        }}
      >
        <MenuItem onClick={handleSignOut}>
          <LogoutIcon sx={{ fontSize: "18px" }} />
          <Typography marginX="10px" fontSize={16}>
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AccountAvatar;
