import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

interface NavbarProps {
  title?: string;
  onLogout?: () => void;
  userName?: string;
}

function Navbar({ title, onLogout, userName = "" }: NavbarProps) {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      className="shadow-md"
    >
      <Toolbar className="flex justify-between">
        <Box className="flex items-center space-x-2">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="font-semibold">
            {title}
          </Typography>
        </Box>
        <Box className="flex items-center space-x-3">
          <Typography variant="body1" className="hidden sm:block">
            {userName}
          </Typography>
          <Avatar>{userName.charAt(0).toUpperCase()}</Avatar>
          {onLogout && (
            <IconButton color="inherit" onClick={onLogout}>
              <LogoutIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
