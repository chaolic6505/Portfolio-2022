import { Social } from "../typings";
import { sanityClient } from '../lib/sanity'


export const fetchSocials = async () => {
  console.log('process.env.NEXT_PUBLIC_BASE_URL', process.env.NEXT_PUBLIC_BASE_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;


  console.log('fetching', socials);

  return socials;
};
