/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { useEditModeRef } from '@/hooks/useEditModeRef';
import { useHandNode } from '@/hooks/useHandNode';
import { useSelectedActionIDRef } from '@/hooks/useSelectedActionIDRef';

import { ActionIDRadio } from './ActionIDRadio';
import { EditModeRadio } from './EditModeRadio';
import { HandRange } from './HandRange';

export const Draw: FC = (props) => {
  const { registerHandRange } = useHandNode();
  //props渡しがきついが、仕方ない
  const { editModeRef, setEditMode } = useEditModeRef();
  const { selectedActionIDRef, setSelectedActionIDRef } = useSelectedActionIDRef();
  return (
    <Flex gap={'5'}>
      <VStack>
        <Text fontWeight={'bold'}>OOP</Text>
        <HandRange
          position={'OOP'}
          editModeRef={editModeRef}
          selectedActionIDRef={selectedActionIDRef}
        />
      </VStack>
      <VStack>
        <Text fontWeight={'bold'}>IP</Text>
        <HandRange
          position={'IP'}
          editModeRef={editModeRef}
          selectedActionIDRef={selectedActionIDRef}
        />
      </VStack>{' '}
      <Flex direction={'column'} gap={'3'} w={'full'} pt={10}>
        <Button onClick={registerHandRange}>レンジ登録</Button>
        <ActionIDRadio setSelectActionID={setSelectedActionIDRef} />
        <EditModeRadio setEditMode={setEditMode} />
      </Flex>
    </Flex>
  );
};
