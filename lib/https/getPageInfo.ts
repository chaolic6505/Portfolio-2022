import { groq } from 'next-sanity';

const getPageInfo = groq`
   *[_type == 'pageInfo'][0]
`
export default getPageInfo;
