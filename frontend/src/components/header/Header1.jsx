import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,


} from "@mui/material";
import {
  DarkModeOutlined,

  LightModeOutlined,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";




const Header1 = () => {
  const [t, i18n] = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
 

  return (
    <Box
      sx={{
        py: "4px",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        bgcolor: "#2B3445",
       
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
             
              p: "15px 20px 3px",
              bgcolor: "#D23F57",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center"
            }}
            variant="body2"
          >
            
            { i18n.language === "ar" && <p dir="rtl">ســاخن</p>}
            { i18n.language === "en" && <p style={{p: "10px 20px 3px"}} >HOT</p> }
            { i18n.language === "fr" && <p style={{p: "10px 20px 3px"}} >chaud</p>}
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 300,
              color: "#fff",
             
              
            }}
            variant="body2"
          >
          
            { i18n.language === "ar" && <p style={{marginTop: "10px"}} dir="rtl">الشحن السريع المجاني</p>}
            { i18n.language === "en" && "Free Express Shipping"}
            { i18n.language === "fr" && "Livraison express gratuite"}

          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton className="iconLight"
             
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "20px", color: "orange" ,
              "&:focus": { outLine: "none", border: "none" },
              
              }} />
              </IconButton>
            ) : (
              <IconButton
              className="iconDark"
              sx={{ fontSize: "25px" }}
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "25px"}} />
              </IconButton>
            )}
          </div>

          <ul className="flex">
            <li className="main-list lang" style={{fontSize: 12, marginRight: "30px"}}>
              <p className="languagPragraph">
              
              { i18n.language === "ar" && ("اللغات") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Languages")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Langues")}</p>}
              </p>
            <ul className="lang-box">
              <li
              dir="rtl"
                onClick={() => {
                  i18n.changeLanguage("ar");
                }}
                style={{ listStyle: "none" }}
              >
                <p>العربية</p>
              </li>
              <li
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                style={{ listStyle: "none" }}
              >
                <p>English</p>
              </li>

              <li
                onClick={() => {
                  i18n.changeLanguage("fr");
                }}
                style={{ listStyle: "none" }}
              >
                <p>Français</p>
              </li>
            </ul>
            
            </li>
        
          </ul>

          <FacebookIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
              margin: "5px",
              "&:hover": { color: "#7878d4", rotate: "30deg", transition: "0.5s" },
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
              margin: "5px",
              mx: 1,
              "&:hover": { color: "#2196f3", rotate: "30deg", transition: "0.5s" },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
              margin: "5px",
              "&:hover": { color: "#6f7f8d", rotate: "30deg", transition: "0.5s" },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
