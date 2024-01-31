import { getStorage } from "./Storage"

export const authenticate = () => {
    const storageData = getStorage();
    return storageData == null ? false : true;
}