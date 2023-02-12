import { Box, Button, Grid, Typography } from "@mui/material";

function Details() {
  const selectedCounrty = JSON.parse(localStorage.getItem("Country"));

  return (
    <>
      {selectedCounrty && (
        <Box component={"div"} sx={{ maxWidth: "100%", padding: "80px" }}>
          <Button color="white" sx={{ width: "130px", height: "40px" }}>
            Back
          </Button>
          <Grid container justifyContent={"space-between"} gap={"140px"} >
            <Grid>
              {/* left image */}
              <Box
                component={"img"}
                src={selectedCounrty.flag}
                alt={selectedCounrty.name}
              />
            </Grid>
            {/* right */}
            <Grid
              width={"580px"}
              justifyContent={"space-around"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Grid marginTop={"50px"}>
                <Typography fontWeight={"800"} fontSize={"1rem"}>
                  {selectedCounrty.name}
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                marginTop={"40px"}
              >
                <Grid>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Native Name : </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.nativeName}
                    </Typography>
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Population : </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.population}
                    </Typography>
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Region Name : </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.region}
                    </Typography>
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Sub Region Name : </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.subRegion}
                    </Typography>
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Capital : </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.capital}
                    </Typography>
                  </Box>
                </Grid>
                <Grid>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>
                      Top Level Development :
                    </Typography>
                    <Typography component={"span"}>
                      {selectedCounrty.toplevelDomain}
                    </Typography>
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Currencies : </Typography>
                    {selectedCounrty.currency.map((el) => {
                      return (
                        <Typography component={"span"}>{el.name}</Typography>
                      );
                    })}
                  </Box>
                  <Box component={"div"} display={"flex"}>
                    <Typography component={"p"}>Languages : </Typography>
                    {selectedCounrty.languages.map((el) => {
                      return (
                        <Typography component={"span"}>{el.name}</Typography>
                      );
                    })}
                  </Box>
                </Grid>
              </Grid>
              <Grid display={"flex"} alignItems={"center"} marginTop={"80px"}>
                <Typography component={"p"}>Border : </Typography>
                {selectedCounrty.borderCountries.map((el) => {
                  return (
                    <Typography
                      marginRight={"5px"}
                      padding={"5px"}
                      sx={{ backgroundColor: "hsl(209, 23%, 22%)" }}
                      component={"span"}
                    >
                      {el}
                    </Typography>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default Details;
