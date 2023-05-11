import { useBreakpointValue } from '@chakra-ui/react';
import { getAuth } from 'firebase-admin/auth';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import { MobilePage } from '@/component/layout/MobilePage';
import { HandTreePage } from '@/component/page/edit';
import { adminApp } from '@/lib/firebase/init/server';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    await getAuth(adminApp).verifyIdToken(cookies.token);
    // the user is authenticated!

    return {
      props: {},
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
  }
};
const Page = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    return <MobilePage />;
  }
  return <HandTreePage />;
};
export default Page;
