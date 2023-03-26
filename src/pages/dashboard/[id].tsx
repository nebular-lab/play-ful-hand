import { useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { MobilePage } from '@/component/layout/MobilePage';
import { PostPage } from '@/component/page/Dashboard/PostPage';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    return <MobilePage />;
  }
  return <PostPage id={String(id)} />;
};
export default Page;
