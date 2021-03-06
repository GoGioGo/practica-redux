export type User = {
    activated: boolean,
    organization: string,
    firstName: string,
    lastName: string,
    name: string,
    designation: string,
    _id: string,
    email: string,
    city: string,
    county: string,
    serviceArea: string,
    photo: string,
    phone: string,
    title: string,
    zipCode: string,
    status: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    zoomarea: string,
    polygon: Array<Array<number>>,
    createdAt: Date
}
