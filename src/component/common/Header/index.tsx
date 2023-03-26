import { Avatar, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type FC } from 'react';

import { useHandNode } from '@/hooks/useHandNode';
import { logout } from '@/lib/firebase/auth/auth';

export type HeaderProps = {
  isEditPage?: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isEditPage } = props;
  const { saveHandNode } = useHandNode();
  const router = useRouter();
  const handleSaveHandNode = () => {
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
    <Flex h={14} px={7} alignItems={'center'} justifyContent={'center'} top={0} bg={'blue.50'}>
      <Heading>PLAYFUL HAND</Heading>
      <Spacer />

      <Flex gap={3} alignItems={'center'} justifyContent={'center'}>
        {isEditPage ? (
          <Button onClick={handleSaveHandNode}>保存</Button>
        ) : (
          <>
            <Avatar src={'https://placehold.jp/40x40.png'} />
            <Link href="/edit">
              <Button>ツリー作成</Button>
            </Link>
            <Button onClick={handleLogout}>ログアウト</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
