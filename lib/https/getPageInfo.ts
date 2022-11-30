import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
   *[_type == 'pageInfo'][0]
`;

const getPageInfo = async () => {
    let results = await sanityClient.fetch(query);

    return results;
};

export default getPageInfo;
