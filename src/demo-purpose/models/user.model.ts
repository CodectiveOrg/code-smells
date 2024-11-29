export interface UserModel {
  firstName: string;
  lastName: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
}
