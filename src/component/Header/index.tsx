import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type FC } from 'react';

import { logout } from '@/hooks/lib/firebase/auth/auth';
import { useHandNode } from '@/hooks/useHandNode';

export type HeaderProps = {
  isEditPage?: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isEditPage } = props;
  const { saveHandNode } = useHandNode();
  const router = useRouter();
  const handleSaveHandNode = () => {
    alert('ベータ版ではハンドツリーを保存することが出来ません。');
    router.push('/dashboard').catch((error) => {
      console.error(error);
    });
    return;
    saveHandNode()
      .then(async () => {
        await router.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    logout().catch((error) => {
      console.log(error);
    });
  };
  return (
    <Flex
      h={14}
      px={7}
      alignItems={'center'}
      justifyContent={'center'}
      top={0}
      bg={'main'}
    >
      <Text fontWeight={'bold'} fontSize={'2xl'} color={'headline'}>
        PLAYFUL HAND
      </Text>
      <Spacer />

      <Flex gap={3} alignItems={'center'} justifyContent={'center'}>
        {isEditPage ? (
          <Button
            bg={'button'}
            color={'buttonText'}
            _hover={{ bg: 'buttonHover' }}
            onClick={handleSaveHandNode}
          >
            保存
          </Button>
        ) : (
          <>
            {/* <Avatar src={'https://placehold.jp/40x40.png'} /> */}
            <Link href="/edit">
              <Button colorScheme="orange">色塗り開始</Button>
            </Link>
            <Button onClick={handleLogout}>ログアウト</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
