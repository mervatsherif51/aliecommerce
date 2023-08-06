import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTranslation } from "react-i18next";
const IconSection = () => {
  const [t, i18n] = useTranslation();
  const theme = useTheme()
  return (
    <Container sx={{mt:3 ,bgcolor: theme.palette.mode === "dark" ?  "#000" : "#FFF"}}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap"}}
        direction={"row"}
        alignItems={"center"}
      
      
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          // title={"Fast Delivery" .... "word that translate to 3 'languages'  "}
          title={ i18n.language === "ar" && <p dir="ltr">{t("توصيل سريع ")}</p>  ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Fast Delivery")}</p> ||  i18n.language === "fr" && <p>{t("Livraison rapide")}</p>}
          //subTitle={"Start from $10"} .... "word that translate to 3 'languages' 
          subTitle={ i18n.language === "ar" && ("$10 يبدء من") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Start from $10")}</p> ||  i18n.language === "fr" && <p>{t("À partir de 10 $")}</p>}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          // title={"Mony Guarantee" .... "word that translate to 3 'languages'}
          title={ i18n.language === "ar" && ("ضمان مالى") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Mony Guarantee")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Garantie d'argent")}</p>}
          // subTitle={"7 Days Back" .... "word that translate to 3 'languages'}
          subTitle={ i18n.language === "ar" && ("الاسترجاع فى مدة 7 أيام") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("7 Days Back")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("7 jours de retour")}</p>}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          // title={"365 Days"  .... "word that translate to 3 'languages' }
          title={ i18n.language === "ar" && ("365 يوم") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("365 Days")}</p> ||  i18n.language === "fr" && <p>{t("365 jours")}</p>}
        //  subTitle={"For Free returs"  .... "word that translate to 3 'languages' }
        subTitle={ i18n.language === "ar" && ("للحصول على عوائد مجانية") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("For Free returs")}</p> ||  i18n.language === "fr" && <p>{t("Pour les retours gratuits")}</p>}
      
      
      
      
      />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
        //  title={"Payment" .... "word that translate to 3 'languages'}
          title={ i18n.language === "ar" && ("قسط") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Payment")}</p> ||  i18n.language === "fr" && <p>{t("Paiement")}</p>}
        //  subTitle={"Secure System"  .... "word that translate to 3 'languages'}
          subTitle={ i18n.language === "ar" && ("نظام امن ") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Secure System")}</p> ||  i18n.language === "fr" && <p>{t("Système sécurisé")}</p>}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;



const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
  
      sx={{
        width: 220,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
      
        
         py: 1.6,
        justifyContent: useMediaQuery('(min-width:600px)')? "center" : "left",
        
      }}
    >
      {icon}
  
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
