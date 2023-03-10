import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const withRecoil = (Story) => (
  <RecoilRoot>
    <Story />
  </RecoilRoot>
);
export const decorators = [withRecoil];
