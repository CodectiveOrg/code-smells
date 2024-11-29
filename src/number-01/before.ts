// Code Smell: Long Method | Before
import { UserModel } from "../demo-purpose/models/user.model";
import { showErrorToast } from "../demo-purpose/services/toast.service";

async function fetchUserAndGenerateDetails(id: string): Promise<string | null> {
  const response = await fetch(`https://api.com/user/${id}`);
  if (!response.ok) {
    showErrorToast(`Cannot fetch user with id of ${id}.`);
    return null;
  }
  const user: UserModel = await response.json();
  const fullName = `${user.firstName} ${user.lastName}`;
  const address = `${user.address.street}, ${user.address.city}, ${user.address.zip}`;
  return `Name: ${fullName}, Address: ${address}`;
}
