import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 200;
function Sidebar() {
  const navigate = useNavigate();

  const navItems = [
    { text: "Inicio", icon: <DashboardIcon />, path: "/" },
    { text: "Gastos", icon: <BarChartIcon />, path: "/gastos" },
    { text: "Configuración", icon: <SettingsIcon />, path: "/config" },
  ];
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      className="h-full"
    >
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => navigate(item.path)}
            className="hover:bg-gray-100"
            component="div"
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
