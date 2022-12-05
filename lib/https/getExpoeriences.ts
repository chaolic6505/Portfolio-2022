import { groq } from 'next-sanity';

const getExperience = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;
export default getExperience;
