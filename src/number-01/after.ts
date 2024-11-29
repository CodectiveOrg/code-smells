// Code Smell: Long Method | After
import { UserModel } from "../demo-purpose/models/user.model";
import { showErrorToast } from "../demo-purpose/services/toast.service";

async function fetchUserAndGenerateDetails(id: string): Promise<string | null> {
  const user = await fetchUser(id);
  if (!user) {
    return null;
  }

  return generateUserDetails(user);
}

async function fetchUser(id: string): Promise<UserModel | null> {
  const response = await fetch(`https://api.com/user/${id}`);

  if (!response.ok) {
    showErrorToast(`Cannot fetch user with id of ${id}.`);
    return null;
  }

  return await response.json();
}

function generateUserDetails(user: UserModel): string {
  const fullName = `${user.firstName} ${user.lastName}`;
  const address = `${user.address.street}, ${user.address.city}, ${user.address.zip}`;
  return `Name: ${fullName}, Address: ${address}`;
}
