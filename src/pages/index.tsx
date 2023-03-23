import { getAuth } from 'firebase-admin/auth';
import { GetServerSideProps, NextPage } from 'next';
import nookies from 'nookies';

import { adminApp } from '@/lib/firebase/server';
type Props = {
  message: string;
};
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await getAuth(adminApp).verifyIdToken(cookies.token);
    // the user is authenticated!
    const { uid, email } = token;

    return {
      props: { message: `Your email is ${email ?? ''} and your UID is ${uid}.` },
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

const Page: NextPage<Props> = (props) => {
  const { message } = props;
  return <>{message}</>;
};
export default Page;
