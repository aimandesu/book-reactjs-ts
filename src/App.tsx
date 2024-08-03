import { Typography } from "@mui/material";
import ResponsiveDrawer from "./components/ui/Drawer";
import { DrawerClass } from "./data/drawerClass";
import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";

function App() {
  const drawerItems: DrawerClass[] = [
    {
      Option_name: "Home",
      Content: <HomePage />,
    },
    {
      Option_name: "Profile",
      Content: <AddBook />,
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
