
import Container from "./Container"
import Box from "@mui/material/Box"


function App() {

  return (
    <>
      <Box sx={{ backgroundColor: 'red' }}>
        <Container sx={{ backgroundColor: 'blue' }} >
          <Box >1</Box>
          <Box >2</Box>
        </Container>
      </Box>
    </>
  )
}

export default App
