import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const getSocials = groq`
    *[_type == 'social']
`;

export default getSocials;
