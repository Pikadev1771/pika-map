import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/db';

import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: any = {
  session: {
    strategy: 'jwt' as const, // 세션 관리하는 방식으로 jwt 사용
    maxAge: 60 * 60 * 24, // 세션의 최대 수명
    updateAge: 60 * 60 * 2, // 세션 업데이트 주기
  },
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/users/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
