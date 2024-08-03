import { Typography } from "@mui/material";
import ResponsiveDrawer from "./components/ui/Drawer";
import { DrawerClass } from "./data/drawerClass";
import HomePage from "./pages/HomePage";

function App() {
  const drawerItems: DrawerClass[] = [
    {
      Option_name: "Home",
      Content: <HomePage />,
    },
    {
      Option_name: "Profile",
      Content: <Typography paragraph>Profile Content</Typography>,
    },
    {
      Option_name: " Setings",
      Content: <Typography paragraph>Settings Content</Typography>,
    },
    {
      Option_name: "Logout",
      Content: <Typography paragraph>Logout Content</Typography>,
    },
  ];
  return (
    <>
      <ResponsiveDrawer drawerItems={drawerItems} />
    </>
  );
}

export default App;
