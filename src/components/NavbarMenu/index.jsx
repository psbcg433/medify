import { 
  Tabs, 
  Tab, 
  Stack, 
  Box, 
  IconButton, 
  Drawer,
  useMediaQuery,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavbarContext } from "../../contexts/NavbarContext.jsx";
import CustomButton from "../Button";
import Logo from "../Logo";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarMenu = () => {
  const location = useLocation();
  const { tabs } = useNavbarContext();
  const currentPath = location.pathname;
  const tabPaths = tabs.map((tab) => tab.path);
  const tabsValue = tabPaths.includes(currentPath) ? currentPath : false;
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const DesktopMenu = () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Tabs
        value={tabsValue}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "primary.main",
            height: "3px",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            label={tab.label}
            value={tab.path}
            component={Link}
            to={tab.path}
            sx={{
              color: "secondary.dark",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              minHeight: 48,
              px: 2,
              "&:not(.Mui-selected)": {
                opacity: 0.9,
                borderBottom: "2px solid transparent",
              },
              "&:hover": {
                color: "primary.main",
                borderBottom: "2px solid",
                borderColor: "primary.main",
                transition: "all 0.2s ease-in-out",
              },
              "&.Mui-selected": {
                color: "primary.main",
                borderBottom: "2px solid",
                borderColor: "primary.main",
              },
            }}
          />
        ))}
      </Tabs>

      <Link to="/bookings" style={{ textDecoration: "none" }}>
        <CustomButton
          buttonText="My Bookings"
          width="130px"
          height="40px"
        />
      </Link>
    </Stack>
  );

  const MobileMenu = () => (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '75%',
            maxWidth: '300px',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {tabs.map((tab) => (
            <ListItem key={tab.path} disablePadding>
              <ListItemButton
                component={Link}
                to={tab.path}
                selected={currentPath === tab.path}
                onClick={toggleDrawer(false)}
                sx={{
                  color: currentPath === tab.path ? 'primary.main' : 'text.primary',
                  fontWeight: currentPath === tab.path ? 600 : 400,
                }}
              >
                {tab.label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/bookings"
              sx={{
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <CustomButton
                buttonText="My Bookings"
                fullWidth
                height="40px"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );

  return (
    <Box sx={{ padding: "0.5em 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>

        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Box>
    </Box>
  );
};

export default NavbarMenu;