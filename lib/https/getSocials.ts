import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == 'social']
`;

const getSocials = async () => {
    let results = await sanityClient.fetch(query);

    return results;
};

export default getSocials;
