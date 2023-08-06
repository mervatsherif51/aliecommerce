import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [t, i18n] = useTranslation();
  return (
    <Box
      sx={{
      
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{
          fontSize: 18,
        }}
      >
        {/* Designed and developed by */}
        {Footer? i18n.language === "ar" && <p style={{marginTop: "10px"}} dir="rtl">{t("تصميم وتطوير ")}</p>  ||  i18n.language === "en" && <p  style={{marginTop: "10px"}} dir="rtl">{t("Designed and developed by")}</p>  ||  i18n.language === "fr" && <p style={{marginTop: "10px"}} dir="rtl">{t("Compte vendeur")}</p>  : null }
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ffyy99",
          }}
          variant="text"
          color="primary"
        >
          Mervatcoo
        </Button>
        © 2023
      </Typography>
    </Box>
  );
};

export default Footer;
