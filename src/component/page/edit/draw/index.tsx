/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { useHandNode } from '@/hooks/useHandNode';

import { ActionIDRadioGroup } from './ActionIDRadioGroup';
import { EditModeGroup } from './EditModeGroup';
import { HandRange } from './HandRange';

export const Draw: FC = (props) => {
  const { registerHandRange } = useHandNode();

  return (
    <Flex gap={'5'}>
      <VStack>
        <Text fontWeight={'bold'}>OOP</Text>
        <HandRange />
      </VStack>
      <VStack>
        <Text fontWeight={'bold'}>IP</Text>
        <HandRange />
      </VStack>{' '}
      <Flex direction={'column'} gap={'3'} w={'full'}>
        <ActionIDRadioGroup />
        <div>色塗りモード</div>
        <EditModeGroup />
        <Button onClick={registerHandRange}>登録</Button>
      </Flex>
    </Flex>
  );
};
