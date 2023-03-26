import { onIdTokenChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { createContext, useEffect, useState } from 'react';

import { auth } from '@/lib/firebase/init/client';

export const AuthContext = createContext<{ user: User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    const handleIdTokenChange = async (user: User | null) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
        await router.push('/login');
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      }
    };
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      handleIdTokenChange(user).catch((error) => {
        console.error('Error handling ID token change:', error);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const refreshToken = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          await user.getIdToken(true);
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      }
    };

    const handle = setInterval(() => {
      void refreshToken();
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
