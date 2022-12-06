import { groq } from 'next-sanity';

const getProjects = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;

export default getProjects;
