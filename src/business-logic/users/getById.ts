import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types";

export const getUserById = async (uuid: string): Promise<User[]> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = (await model.findOne({ uuid: uuid })) as User[];
  return user;
};
