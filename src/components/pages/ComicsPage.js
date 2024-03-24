import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";

const Comics = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of comics"
                />
                <title>Marvel comics</title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </>
    )
}

export default Comics;