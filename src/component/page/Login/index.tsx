import { Button, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

import { login, loginAnonymously } from '@/hooks/lib/firebase/auth/auth';
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
  const handleAnonymousLogin = () => {
    loginAnonymously()
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
      <Text fontSize={'xl'} fontWeight={'bold'}>
        Playful Hand (仮) へようこそ
      </Text>
      <Text>ハンドレンジ表に色塗りをするためのアプリです。</Text>
      <Text>ハンドレビューや戦略構築にご利用ください</Text>
      <Text>※現在正式リリースに向けて開発中です。</Text>
      {/* <Text> 実装予定の機能は以下のリンクから確認出来ます。</Text>
      <Link
        href={
          'https://veil-marjoram-47c.notion.site/38a0b255390b4e6092ca90ca38963a53?v=b747904428e641899e5609c727c9f7de'
        }
      >
        <Text color={'blue.500'}>Notion</Text>
      </Link> */}
      混合戦略での入力が可能なバージョンは
      <Link href={'https://play-ful-hand-mix.vercel.app/'}>
        <Text color={'blue.500'}>こちら</Text>
      </Link>
      で開発中です。
      <Flex>
        要望がありましたら
        <Link href={'https://twitter.com/hirano_pos'}>
          <Text color={'blue.500'}>@hirano_pos</Text>
        </Link>
        に連絡をください。
      </Flex>
      <Center>
        <Button
          onClick={handleAnonymousLogin}
          w={'full'}
          maxW={'md'}
          colorScheme={'blue'}
        >
          <Center>
            <Text>体験する</Text>
          </Center>
        </Button>
      </Center>
      <Center pt={8}>
        <Button
          onClick={handleLogin}
          w={'full'}
          maxW={'md'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
          isDisabled={true}
        >
          <Center>
            <Text>Googleログインして体験(現在非推奨)</Text>
          </Center>
        </Button>
      </Center>
    </Flex>
  );
};
