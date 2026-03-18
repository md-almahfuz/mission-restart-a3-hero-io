import Hero from '../../components/Hero';
import Stats from '../../components/Stats';
import { useLoaderData } from 'react-router';
import TrendingApps from '../../components/TrendingApps';

const HomePageContent = () => {
    const apps = useLoaderData();

    //console.log("Loaded apps data:", apps); // Debugging log to check loaded data

    return (
        <div>
            <Hero></Hero>
            <Stats></Stats>
            <TrendingApps appsData={apps}></TrendingApps>



        </div>
    );
};

export default HomePageContent;