import ResponsiveDrawer from "./components/ui/Drawer";
import { DrawerClass } from "./data/drawerClass";

import { Content } from "./components/enum/drawer_enum";

function App() {
  const drawerItems: DrawerClass[] = [
    {
      Option_name: "Home",
      Content: Content.HOME,
    },
    {
      Option_name: "Profile",
      Content: Content.PROFILE,
    },
    {
      Option_name: " Setings",
      Content: Content.SETTINGS,
    },
    {
      Option_name: "Logout",
      Content: Content.LOGOUT,
    },
  ];
  return (
    <>
      <ResponsiveDrawer drawerItems={drawerItems} />
    </>
  );
}

export default App;
