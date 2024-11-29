// Code Smell: Primitive Obsession | After

export interface User {
  username: string;
  fullName: FullName;
  address: Address;
}

interface FullName {
  firstName: string;
  middleName: string;
  lastName: string;
}

interface Address {
  province: string;
  city: string;
  street: string;
  zipCode: string;
}
