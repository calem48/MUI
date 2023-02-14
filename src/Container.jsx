import { createTheme, styled, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";



export default function CustomContainer({ children }) {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
                xxl: 1400
            },
        },
    });

    //here override on container mui to create custom container for us

    // const CustomContainer = styled(Container)(({ theme }) => ({
    //     margin: "0 auto",
    //     paddingLeft: "15px",
    //     paddingRight: "15px",
    //     // paddingTop: theme.spacing(2),/* by default 2*8 px */
    //     "&.MuiContainer-root": {
    //         // maxWidth: "100%",
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         width: "750px ",
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         width: "970px"
    //     },
    //     [theme.breakpoints.up('xl')]: {
    //         width: "1170px"
    //     }
    //     // [theme.breakpoints.between('md', 'lg')]: {
    //     //     width: "750px ",
    //     // },
    //     // [theme.breakpoints.between('lg', 'xl')]: {
    //     //     width: "970px"
    //     // },
    //     // [theme.breakpoints.between('xl', 'xxl')]: {
    //     //     width: "1170px"
    //     // }
    // }));


    // here create custom container
    const CustomContainer = styled('div')(({ theme }) => ({
        margin: "0 auto",
        paddingLeft: "15px",
        paddingRight: "15px",
        [theme.breakpoints.up('md')]: {
            width: "750px ",
        },
        [theme.breakpoints.up('lg')]: {
            width: "970px"
        },
        [theme.breakpoints.up('xl')]: {
            width: "1170px"
        }
    }));


    return (
        <ThemeProvider theme={theme} >
            <CustomContainer sx={{ backgroundColor: 'blue' }} >{children}</CustomContainer>
            {/* {console.log(children)} */}
        </ThemeProvider>
    )
}
