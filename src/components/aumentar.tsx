import { useAppUserDispatch } from '../store/hooks/appUserHook';
import { useMapDispatch } from '../store/hooks/mapsHooks';
import { useEffect } from 'react';

function Aumentar() {
    let birthday = new Date(1995, 11, 17)
    let a = {
        activated: true,
        organization: 'kio',
        firstName: 'Sergio',
        lastName: 'Condori',
        name: 'Gio',
        designation: 'adm',
        _id: '1',
        email: 'gio',
        city: 'LaPaz',
        county: 'Bolivia',
        serviceArea: 'uno',
        photo: 'uno',
        phone: 'uno',
        title: 'uno',
        zipCode: 'uno',
        status: 'uno',
        coordinates: {
            latitude: 3,
            longitude: 4
        },
        zoomarea: 'uno',
        polygon: [],
        createdAt: birthday
    }
    const { replaceAppUser } = useAppUserDispatch();

    let b = 'prueba';
    let c = ['uno', 'dos'];

    const { getMapLayers } = useMapDispatch();

    //const { detailed } = useMapState();
    useEffect(() => {
        let headers = new Headers();
        let token = 'GUEST';
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        fetch('https://confdevbc.mhfd.org/map', {
            method: 'POST',
            headers,
            body: JSON.stringify({ table: "floodplains_non_fema" })
        }).then(resp => resp.json())
            .then(data => console.log(data))
    }, []);

    return <>
        <div>
            <button onClick={() => {
                replaceAppUser(a);
                getMapLayers(b, c);
            }}>Aumentar</button>
        </div>
    </>
}
export default Aumentar