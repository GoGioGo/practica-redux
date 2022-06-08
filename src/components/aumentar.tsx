import { useAppUserDispatch } from '../store/hooks/appUserHook'

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

    return <>
        <div>
            <button onClick={() => replaceAppUser(a)}>Aumentar</button>
        </div>
    </>
}
export default Aumentar