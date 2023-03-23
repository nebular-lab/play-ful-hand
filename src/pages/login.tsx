import { Button } from '@chakra-ui/react';

import { login } from '@/lib/auth';

const Page = () => {
  const handleLogin = () => {
    login().catch((err) => {
      console.log(err);
    });
  };
  return <Button onClick={handleLogin}></Button>;
};
export default Page;
