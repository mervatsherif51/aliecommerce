import {
  Box,
  CardContent,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";   
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetials from "./ProductDetials";
import { useGetproducttByNameQuery } from "../../redux/productt";
import { useTranslation } from "react-i18next";

const Main = () => {
  
  const [t, i18n] = useTranslation();
  const handleAlignment = (event, newValue) => {
  
    setmyData(newValue)
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const allProductsAPI = "productts?populate=*"
const menCategoryAPI = "productts?populate=*&filters[producttCategory][$eq]=men"
const womenCategoryAPI = "productts?populate=*&filters[producttCategory][$eq]=women"


const [myData, setmyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproducttByNameQuery(
    myData
  );

  if (isLoading) {
    return <Typography variant="h6">LOADING ...........</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h6">
        {" "}
        {
          // @ts-ignore
          error.message
        }
      </Typography>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">
              {/* Selected Products ....."  عبارة مترجمة" */}
            
            {data? i18n.language === "ar" && <p dir="rtl">{t("المنتجات المختارة")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("Selected Products")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Produits sélectionnés")}</p>  : null }
            
            </Typography>
            <Typography fontWeight={300} variant="body1">
              {/* All Our new arrival in a exclusive brand selection ......"  عبارة مترجمة"  */}
              {data? i18n.language === "ar" && <p dir="rtl">{t(" معنا يصل اليك كل جديد و حصرى")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("All Our new arrival in a exclusive brand selection")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Tous Nos nouveautés dans une sélection exclusive de marques")}</p>  : null }
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5 ) !important",
                color: "#e94560",
                backgroundColor: "initial",
              
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              {/* all products */}
              {data? i18n.language === "ar" && <p dir="rtl">{t("كل المنتجات")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("all products")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("tous les produits")}</p>  : null }
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoryAPI}
              aria-label="centered"
            >
              {/* men category */}
              {data? i18n.language === "ar" && <p dir="rtl">{t("منتجات رجالى")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("men category")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("catégorie hommes")}</p>  : null }
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              {/* woman category */}
              {data? i18n.language === "ar" && <p dir="rtl">{t("منتجات حريمى")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("woman category")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("catégorie femme")}</p>  : null }
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  "&:hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.35s",
                    rotate: "1.5deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${
                    item.attributes.producttImg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" component="div">
                      {item.attributes.producttTitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      {item.attributes.producttPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text-secondary">
                    {item.attributes.producttDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    {/* Add to cart */}
                    {data? i18n.language === "ar" && <p dir="rtl">{t("اضف الى السلة")}</p>  ||  i18n.language === "en" && <p dir="rtl">{t("Add to cart")}</p>  ||  i18n.language === "fr" && <p style={{fontSize: "13px"}} dir="rtl">{t("Ajouter au panier")}</p>  : null }
                  </Button>

                  <Rating
                    precision={4.5}
                    name="read-only"
                    value={item.attributes.producttRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{
            ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              "&:hover": { color: "red", rotate: "360deg", transition: "0.5s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetials />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
