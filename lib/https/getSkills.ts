import { groq } from 'next-sanity';

const getSkills = groq`
  *[_type == 'skill']
`;
export default getSkills;
