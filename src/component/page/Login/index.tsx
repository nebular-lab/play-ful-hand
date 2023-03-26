import { Button, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

import { login } from '@/lib/firebase/auth/auth';
export const LoginPage = () => {
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
  return (
    <Flex
      minH={'100vH'}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
      gap={'5'}
    >
      <Text>ハンドレンジ表に色塗りをするためのアプリです。</Text>
      <Text>現在正式リリースに向けて開発中です。</Text>
      <Text> 実装予定の機能は以下のリンクから確認出来ます。</Text>
      <Link
        href={
          'https://veil-marjoram-47c.notion.site/38a0b255390b4e6092ca90ca38963a53?v=b747904428e641899e5609c727c9f7de'
        }
      >
        <Text color={'blue.500'}>Notion</Text>
      </Link>

      <Center p={8}>
        <Button
          onClick={handleLogin}
          w={'full'}
          maxW={'md'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text>Googleログインして体験</Text>
          </Center>
        </Button>
      </Center>
    </Flex>
  );
};
