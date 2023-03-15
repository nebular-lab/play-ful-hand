import { RecoilRoot } from 'recoil';
import { theme } from './../src/styles/theme';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  layout: 'fullscreen',
};
const withRecoil = (Story) => (
  <RecoilRoot>
    <Story />
  </RecoilRoot>
);
export const decorators = [withRecoil];
