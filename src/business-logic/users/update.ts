import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types";

export const updateUser = async (
  uuid: string,
  name: string,
  username: string
): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ uuid: uuid });

  if (!user) {
    throw new Error("No se encontro el usuario");
  }

  user.name = name ? name : user.name;
  user.username = username ? username : user.username;

  console.log(user);

  await user.save();

  const result = (await model.findOne({ uuid: uuid })) as User;

  return result;
};
