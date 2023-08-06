import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "../hero/IconSection";
import { useTranslation } from "react-i18next";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
const Hero = () => {
  const theme = useTheme();
  const [t, i18n] = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          pt: 4,
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link}>
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "2%",
                      textAlign: "left",
                      width: "60%",
                      flexWrap: "wrap",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h6"
                  >
                    {i18n.language === "ar" && (
                      <p dir="rtl">مجموعة اسلوب حياة</p>
                    )}
                    {i18n.language === "en" && "LIFESTYLE COLLECTION"}
                    {i18n.language === "fr" && "MODE DE VIE collection"}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h4"
                  >
                    {item.text === "MEN"
                      ? i18n.language === "ar" && <p dir="rtl">{t("رجالى")}</p>
                      : null}
                    {item.text === "MEN"
                      ? i18n.language === "en" && <p dir="rtl">{t("MEN")}</p>
                      : null}
                    {item.text === "MEN"
                      ? i18n.language === "fr" && <p dir="rtl">{t("Hommes")}</p>
                      : null}

                    {item.text === "WOMEN"
                      ? i18n.language === "ar" && <p dir="rtl">{t("حريمى")}</p>
                      : null}
                    {item.text === "WOMEN"
                      ? i18n.language === "en" && <p dir="rtl">{t("WOMEN")}</p>
                      : null}
                    {item.text === "WOMEN"
                      ? i18n.language === "fr" && <p dir="rtl">{t("Femmes")}</p>
                      : null}
                  </Typography>

                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                  >
                    <Typography variant="h5" mr={1} color="#333">
                      {i18n.language === "ar" && <p dir="rtl">بيع يصل الى</p>}
                      {i18n.language === "en" && "SALE UP TO"}
                      {i18n.language === "fr" && "vente jusqu'à"}
                    </Typography>
                    <Typography variant="h5" color="#D23F57">
                      {i18n.language === "ar" && <p dir="rtl"> 30% خصم</p>}
                      {i18n.language === "en" && " 30% OFF"}
                      {i18n.language === "fr" && "30%  déduire"}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    {(i18n.language === "ar" &&
                      "احصل على شحن مجاني للطلبات التي تزيد عن 99.00 دولارًا") ||
                      (i18n.language === "en" && (
                        <p style={{ fontSize: "13px" }}>
                          {t("Get Free Shipping on orders Over $99.00")}
                        </p>
                      )) ||
                      (i18n.language === "fr" && (
                        <p dir="rtl">
                          {t(
                            "Obtenez la livraison gratuite sur les commandes de plus de 99,00 $"
                          )}
                        </p>
                      ))}
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#FFF",
                      borderRadius: "2px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    {(i18n.language === "ar" && "تسوق الان") ||
                      (i18n.language === "en" && (
                        <p style={{ fontSize: "13px" }}>{t("shop now")}</p>
                      )) ||
                      (i18n.language === "fr" && (
                        <p dir="rtl">{t("Achetez maintenant")}</p>
                      ))}
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box
            sx={{ position: "relative", padding: "0px", marginBottom: "15px" }}
          >
            <img width={"100%"} src="src/images/banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "48%",
                left: "5%",
                transform: "translateY(-50%)",
                width: "60%",
                height: "90%",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {(i18n.language === "ar" && "وصف للمنتجات المرسلة") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "13px" }}>
                      {t("items.description ARRIVALS")}
                    </p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "12px" }} dir="rtl">
                      {t("articles.description ARRIVÉES")}
                    </p>
                  ))}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                  fontSize: "13px",
                }}
              >
                {(i18n.language === "ar" && "صيف") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "13px" }}>{t("SUMMER")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "12px" }}>
                      {t("ÉTÉ")}
                    </p>
                  ))}
              </Typography>

              <Typography
                sx={{
                  color: "#2B3445",
                }}
              >
                {(i18n.language === "ar" && "اوكازيون 20& خصم") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "13px" }}>{t("SALE 20% OFF")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "12px" }} dir="rtl">
                      {t("VENTE 20% DE RABAIS")}
                    </p>
                  ))}
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "1px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                {(i18n.language === "ar" && <p style={{marginTop: "10px"}}>اشترى الان</p>) ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "13px" }}>{t("Shop Now")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "10px" }}>
                      {t("Achetez maintenant")}
                    </p>
                  ))}
                <ArrowForwardIcon className="arrowForward" sx={{ fontSize: "22px", color: "#D23F57", marginLeft: "5px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "48%",
                left: "5%",
                transform: "translateY(-50%)",
                
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {(i18n.language === "ar" && "العاب K4") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "11px" }}>{t("GAMING 4K")}</p>
                  )) ||
                  (i18n.language === "fr" && <p dir="rtl">{t("JEUX 4K")}</p>)}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                  fontSize: "13px",
                }}
              >
                {(i18n.language === "ar" && "مكاتب و") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "10px" }}>{t("DESKTOPS &")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p dir="rtl">{t("ORDINATEURS DE BUREAU &")}</p>
                  ))}
              </Typography>

              <Typography
                sx={{
                  color: "#2B3445",
                }}
              >
                {(i18n.language === "ar" && "لاب توب") ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "10px" }}>{t("LAPTOPS")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "10px" }} dir="rtl">{t("ORDINATEURS PORTABLES")}</p>
                  ))}
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                {(i18n.language === "ar" && <p style={{marginTop: "10px"}}>اشترى الان</p>) ||
                  (i18n.language === "en" && (
                    <p style={{ fontSize: "13px" }}>{t("Shop Now")}</p>
                  )) ||
                  (i18n.language === "fr" && (
                    <p style={{ fontSize: "10px" }} dir="rtl">
                      {t("Achetez maintenant")}
                    </p>
                  ))}
                <ArrowForwardIcon className="arrowForward" sx={{ fontSize: "22px", color: "#D23F57" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default Hero;
