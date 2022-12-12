export interface User {
    id: number;
    firstName: string,
    lastName: string,
    address: Address
    // {
    //     "street": "kolorowa",
    //     "street_number": "9",
    //     "city": "Poznan",
    //     "zip_code": "60-999",
    //     "phone_number": "555-666-777"
    //   }
}

class Address {
    street: string | undefined;
    street_number: string | undefined;
    city: string | undefined;
    zip_code: string | undefined;
    phone_number: string | undefined;
}