import Header from '../components/Header';
import getSocials from '../lib/https/getSocials';
import { Social } from '../typings';

type Props = {
    socials: Social[];
};

export default function Home({ socials }: Props) {
    return (
        <div
            className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
        >
            {/* Header */}
            <Header socials={socials} />
        </div>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const socials = await getSocials();

    // By returning { props: { socials } }, the Home component
    // will receive `socials` as a prop at build time
    return {
        props: {
            socials,
        },
    };
}
