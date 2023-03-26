import { useBreakpointValue } from '@chakra-ui/react';

import { MobilePage } from '@/component/layout/MobilePage';
import { HandTreePage } from '@/component/page/edit';

const Page = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    return <MobilePage />;
  }
  return <HandTreePage />;
};
export default Page;
