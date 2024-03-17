import { Box, Button ,Text, useToast} from '@chakra-ui/react'
import React , {useState} from 'react'
import { executeCode } from '../api';


const Output = ({editorRef,language}) => {

  const toast = useToast();
  const [output,setOutput] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const runCode = async () =>{
    const sourceCode = editorRef.current.getValue();
    console.log(sourceCode);
    if (!sourceCode) return;

    try {
      setisLoading(true);
      const {run:result} = await executeCode(language,sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setisError(true) : setisError(false);

    } catch(error){
      console.log(error);
      toast({
        title: "Error Occured",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 5000

      })

    }
    finally {
      setisLoading(false);
    } 

    
  }
  return (
    <Box w = "50%">
    <Text mb = {3} fontSize = 'lg'>Output</Text>
    <Button 
    variant='outline'
    colorScheme="blue"
    mb = {6}
    isLoading = {isLoading}
    onClick={runCode}

    > 
    Run Code

    </Button>
    <Box 
        height = "90vh"
        p = {1.5}
        color = {
          isError ? "red.400" : ""
        }
        border="2px solid"
        borderRadius={5}
        borderColor= {
          isError ? "red.400" : "#333"
        }
    
    >
    {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}

    </Box>
    </Box>
  )
}

export default Output