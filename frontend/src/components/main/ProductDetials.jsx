/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src/images/13.jpg" alt="" />
      </Box>
      <Box sx={{ textAlign: { sx: "center", sm: "left" } }}>
        <Typography variant="h5">MEN'S FASHON</Typography>
        <Typography variant="body1">$12.99</Typography>
        <Typography variant="body1">
          Lizards are widespread group of squarte reptiles, with specles,
          ranhing across all continents except Antarctica
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/11.jpg", "src/images/12.JPG"].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }} size="large"
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetials;
