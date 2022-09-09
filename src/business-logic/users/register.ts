import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

type UserPartial = Partial<User>;

export const userRegister = async ({
  name,
  username,
  password,
}: UserPartial): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  const user = await model.findOne({ username: username });

  if (user) {
    return new Error("El username ya esta rgistrado");
  }

  const uuid = uuidv4();
  const new_password = bcrypt.hashSync(password || "", 10);

  const new_user = new model({ uuid, name, username, password: new_password });
  await new_user.save();

  return { ...new_user._doc };
};
