import { Container } from "@mui/system";
import { createTheme, styled, ThemeProvider } from "@mui/material";



export default function CustomContainer({ children }) {

    const CustomContainer = styled(Container)(({ theme }) => ({
        margin: "0 auto",
        paddingLeft: "15px",
        paddingRight: "15px",

        [theme.breakpoints.up('md')]: {
            width: "750px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "970px"
        },
        [theme.breakpoints.up('xl')]: {
            width: "1170px"
        },
    }));

    const theme = createTheme({
        breakpoints: {
            values: {
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
            },
        },
    });



    return (
        <ThemeProvider theme={theme}>
            <CustomContainer>{children}</CustomContainer>
        </ThemeProvider>
    )
}
