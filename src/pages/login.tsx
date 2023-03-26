import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { login } from '@/lib/firebase/auth/auth';

const Page = () => {
  const router = useRouter();
  const handleLogin = () => {
    login()
      .then(async () => {
        await router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <Button onClick={handleLogin}></Button>;
};
export default Page;
