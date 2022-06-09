import { useAppUserDispatch } from '../store/hooks/appUserHook';
import { useMapDispatch } from '../store/hooks/mapsHooks';
import { useEffect } from 'react';
import { SELECT_ALL_FILTERS } from '../constants/constants';

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

    const { getMapLayers } = useMapDispatch();

    const loadData = (tile: any, name?: string) => {
        let headers = new Headers();
        let token = 'GUEST';
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise((resolve) => {
            (fetch('https://confdevbc.mhfd.org/map', {
                method: 'POST',
                headers,
                body: JSON.stringify({ table: tile })
            }).then(resp => resp.json())
                .then(data => { return (data) }))
                .then(tiles => {
                    resolve(true);
                    if (!name) getMapLayers(tile, tiles);
                })
        })
    }

    const changes = () => {
        replaceAppUser(a);
        const promesas: Promise<any>[] = [];
        SELECT_ALL_FILTERS.forEach((layer) => {
            if (typeof layer === 'object') {
                layer.tiles.forEach((tiles: string) => {
                    promesas.push(loadData(tiles, layer.name));
                })
            } else {
                promesas.push(loadData(layer));
            }
        })
    }

    return <>
        <div>
            <button onClick={() => {
                changes();
            }}>Aumentar</button>
        </div>
    </>
}
export default Aumentar