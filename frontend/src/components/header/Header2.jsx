import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  maxWidth: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "266px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));






const Header2 = () => {
  const [t,  i18n] = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    
      }}
    >
      <Stack alignItems={"center"}>
        <Box sx={{ display: "flex" }}>
          <ShoppingCartOutlined />
          <Typography variant="body2"> 
          
          
          { i18n.language === "ar" && <p dir="rtl"> {t("التجارة الكترونية")}</p> }
            { i18n.language === "en" && <p> {t("E-commerce")}</p>   }
            { i18n.language === "fr" && <p> {t("Commerce électronique")}</p>  }
          
            </Typography>
        </Box>
      </Stack>

      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        
        

        />

         <div> 

          {/* START BOXXXXXXX */}

          <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "130px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
            height: "50px",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            outlineColor: "transparent",
            padding: 0

            
          }}
        >
          
          <Typography
            sx={{
             padding: "0",
              textTransform: "capitalize",
               mx: 1,
               fontSize: "13px"
              
              
            }}
          >
      

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px", marginLeft: "25px"}}>كل الفئات</p>}
            { i18n.language === "en" && "All Categories"  }
            { i18n.language === "fr" && "toutes catégories"}
          </Typography>
           <Box flexGrow={1} /> 
      

      
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
              width: 120,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
        
            <ListItemText>
            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px", fontSize: "13px"}}>سيارة</p>}
            { i18n.language === "en" && <p style={{marginTop: "12px", fontSize: "13px"}}>CAR</p> }
            { i18n.language === "fr" && "VOITURE"}

            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
    
            <ListItemText>

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>أخرى</p>}
            { i18n.language === "en" &&  "Others"}
            { i18n.language === "fr" && "Autres"}
            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
      
            <ListItemText>

            { i18n.language === "ar" && <p dir="rtl" style={{marginTop: "12px"}}>إلكترونيات</p>}
            { i18n.language === "en" && "Electronics"}
            { i18n.language === "fr" && "électronique"}

            </ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
      
      
          </MenuItem>
        </Menu>
      </Box>


          {/* END BOXXXXXXXXX */}






   </div> 
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
