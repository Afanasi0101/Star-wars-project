/* eslint-disable import/no-extraneous-dependencies */
import { VitePluginFonts } from 'vite-plugin-fonts';

export default {
  plugins: [
    VitePluginFonts({
      google: {
        families: ['Montserrat'],
      },
    }),
  ],
};
