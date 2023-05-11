import { useToast } from "@chakra-ui/react";

function Toast({ status, title, description }) {
  const toast = useToast();

  toast({
    title: title,
    description: description,
    status: status,
    duration: 3000,
    isClosable: true,
  });

  return null;
}

export default Toast;