import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "../../../theme/ThemeRegister";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';


export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/dashboard", icon: HomeIcon },
  { text: "Create", href: "/dashboard/starred", icon: StarIcon },
  { text: "Links", href: "/dashboard/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings",href:"/api/auth/logout", icon: SettingsIcon },
  { text: "Support", href:"/api/auth/logout",icon: SupportIcon },
  { text: "Logout", href:"/api/auth/logout", icon: LogoutIcon },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const { user } = useUser();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeRegistry>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar
          sx={{
            backgroundColor: "background.paper",
            paddingX: theme.spacing(1),
          }}
          disableGutters
        >
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <DashboardIcon
              sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
            />
            <Typography variant="h6" noWrap component="div" color="black">
              Next.js App Router
            </Typography>
          </Box>
          {!!user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Button type="link" href="/dashboard/starred">
                + Create
              </Button>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user.picture ? user.picture : ""}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                  <Link href="/api/auth/logout">Logout</Link>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link href="/api/auth/login"> Login</Link>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton component={Link} href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: "auto" }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, href,icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          ml: `${DRAWER_WIDTH}px`,
          mt: ["48px", "56px", "64px"],
          p: 3,
        }}
      >
        {children}
      </Box>
    </ThemeRegistry>
  );
}
