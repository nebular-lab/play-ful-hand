import { Avatar, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { type FC } from 'react';

export type HeaderProps = {
  isLogin: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isLogin } = props;
  return (
    <Flex h={14} px={7} alignItems={'center'} justifyContent={'center'} top={0} bg={'blue.50'}>
      <Heading>PLAYFUL HAND</Heading>
      <Spacer />
      {isLogin ? (
        <Flex gap={3}>
          <Avatar src={'https://placehold.jp/40x40.png'} />
          <Button>新規登録</Button>
        </Flex>
      ) : (
        <Button>ログイン</Button>
      )}
    </Flex>
  );
};
