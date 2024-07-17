import { Drawer, Link, List, ListItem, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import AccountAvatar from "./AccountAvatar";

interface SidebarProps {
  isOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setDrawerOpen }: SidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [
    { title: "home", href: "/home" },
    { title: "stats", href: "/stats" },
    { title: "ai", href: "/ai" },
  ];

  return (
    <Drawer
      PaperProps={{
        style: {
          width: "fit-content",
          padding: "7px 14px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      }}
      anchor="right"
      open={isOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {navLinks.map((link, index) => (
            <ListItem key={index}>
              <Link
                href={link.href}
                sx={{
                  textDecoration: isActive(link.href) ? "underline" : "none",
                  textDecorationColor: isActive(link.href)
                    ? "rgba(238,107,187,1)"
                    : "inherit",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "rgba(238,107,187,1)",
                  },
                }}
              >
                <Typography
                  fontSize={25}
                  fontWeight={500}
                  fontFamily={"Abril Fatface"}
                  sx={{
                    backgroundcolor: "transparent",
                    backgroundImage: `linear-gradient(to bottom, rgba(238,107,187,1) 35%, rgba(208,1,1,1) 100%)`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </div>
        <ListItem
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <AccountAvatar />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
