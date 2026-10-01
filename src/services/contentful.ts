import { createClient } from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID || '';
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '';

export const contentfulClient = createClient({
  space,
  accessToken,
});
