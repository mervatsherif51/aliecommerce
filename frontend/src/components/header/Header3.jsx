import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WindowIcon from "@mui/icons-material/Window";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import { Close, ExpandMore } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";
import { useTranslation } from "react-i18next";
import translateEn from '../../locales/en.json'
import translateAr from '../../locales/ar.json'
import translateFr from '../../locales/fr.json'

const Header3 = () => {
  const [t, i18n] = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
    
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
               mx: 1,
            }}
          >
      

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>فئــــات</p>}
            { i18n.language === "en" && "Categories"}
            { i18n.language === "fr" && "Catégories"}
          </Typography>
          <Box flexGrow={1} />
      

          <KeyboardArrowRightIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // @ts-ignore
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>العــاب</p>}
            { i18n.language === "en" && "Games"}
            { i18n.language === "fr" && "Jeux"}

            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>دراجات</p>}
            { i18n.language === "en" && "Bikes"}
            { i18n.language === "fr" && "vélos"}
            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>إلكترونيات</p>}
            { i18n.language === "en" && "Electronics"}
            { i18n.language === "fr" && "électronique"}

            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>كتب</p>}
            { i18n.language === "en" && "Books"}
            { i18n.language === "fr" && "Livres"}
            </ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") &&   (

<Stack gap={3} direction={"row"} alignItems={"center"}>

{< Links title={"Home"? i18n.language === "ar" && <p dir="rtl">{t("الصفحة الرئيسية")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("HOME")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("principale")}</p>  : null } />}
{< Links title={"Mega Menu"? i18n.language === "ar" && <p dir="rtl">{t("قائمة ميجا")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("Mega Menu")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Méga Menu")}</p>  : null } />}
{< Links title={"Full Screen Menu"? i18n.language === "ar" && <p dir="rtl">{t("قائمة ملء الشاشة")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("Mega Menu")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Menu plein écran")}</p>  : null } />}
{< Links title={"Pages"? i18n.language === "ar" && <p dir="rtl">{t("الصفحات ")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("pages")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("pages")}</p>  : null } />}
{< Links title={"User Account"? i18n.language === "ar" && <p dir="rtl">{t("حساب المستخدم")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("pages")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Compte d'utilisateur")}</p>  : null } />}
{< Links title={"Vendor Account"? i18n.language === "ar" && <p dir="rtl">{t("حساب البائع")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("Vendor Account")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Compte vendeur")}</p>  : null } />}

</Stack>


      )}

    
      

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              "&:hover": { color: "red", rotate: "360deg", transition: "0.5s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "full screen menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "user account", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Vendor account",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
