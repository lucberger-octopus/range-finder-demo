import { useMapEvents } from 'react-leaflet/hooks'

export const DemoComponent = () => {
    useMapEvents({
        click: (e) => {
            console.log(e.latlng)
        }
    })

    return <div>Demo Component</div>;
};