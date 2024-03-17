import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";


function App() {
  return (
    <Box minH="100vh" bg = '#0f0a19' color = 'gray' px = {5} py = {11}>
    <CodeEditor/>
    </Box>
  );
}

export default App;
