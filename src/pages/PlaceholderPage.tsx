import {useEffect, useState} from "react";
import ObjectComponent from "../components/ObjectComponent.tsx";
import {useParams} from "react-router-dom";

const PlaceholderPage = () => {
    const [data, setData] = useState<Array<Record<string, unknown>> | undefined>(undefined);
    const params = useParams();
    const path = 'https://jsonplaceholder.typicode.com/' + params.primaryPath;

    const fetchData = async (path: string) => {
        const response = await fetch(path);
        const rawData = await response.json();
        setData(rawData);
    }

    useEffect(() => {
        fetchData(path).then();
    }, [path]);

    return (
        <div>
            {
                data ? data.map((value, index) => <ObjectComponent key={index} value={value}/>) : 'loading...'
            }
        </div>
    );
};

export default PlaceholderPage;