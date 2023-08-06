import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";



const Links = ({title}) => {
  const [t, i18n] = useTranslation();
  return (
    <Box
      // className="border" ..... الكود المترجم
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },

        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          transform: "translateX(-50%)",
          left: "50%",
          display: "none",
          zIndex: 20 
        }}
      >
        <Paper sx={{ mt: 2}}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    //  primary="Dashboardddd" ..... الكود المترجم
                    primary={ i18n.language === "ar" && ("لوحة القيادة") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Dashboard")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Tableau de bord")}</p>}
                    
                    
                    






                />

            
                 
                  
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    // primary="Products" ..... الكود المترجم
                    primary={ i18n.language === "ar" && ("منتجات") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Products")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Des produits")}</p>}


                  />

                  <Box flexGrow={1} />

                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className=" sub-link"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                          sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,
                          }}
                          >
                            <ListItemText
                            sx={{
                          "& .MuiTypography-root":{

                            fontSize: "15px",
                            fontWeight: 300,
                          }
                            }}
                            // primary="Add Product" ..... الكود المترجم
                            primary={ i18n.language === "ar" && ("أضف منتج ") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Add Product")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Ajouter un produit")}</p>}
                            
                            
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                    




                        <ListItem disablePadding>
                          <ListItemButton
                          sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,
                          }}
                          >
                            <ListItemText
                            sx={{
                          "& .MuiTypography-root":{

                            fontSize: "15px",
                            fontWeight: 300,
                          }
                            }}
                            // primary="Edit Product" ..... الكود المترجم
                            primary={ i18n.language === "ar" && ("تعديل منتج") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Edit Product")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Modifier le produit")}</p>}
                            
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>




                  





                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    // primary="Orders" ..... الكود المترجم

                    primary={ i18n.language === "ar" && ("طلبات") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Orders")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("Ordres")}</p>}

                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    // primary="Profile"

                    primary={ i18n.language === "ar" && ("شخصيتك") ||  i18n.language === "en" && <p style={{fontSize: "13px"}}>{t("Profile")}</p> ||  i18n.language === "fr" && <p dir="rtl">{t("profil")}</p>}
                  />

                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
