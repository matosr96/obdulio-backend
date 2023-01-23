import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types";
import { v4 as uuidv4 } from "uuid";

type UserPartial = Partial<User>;

export const userRegister = async ({
  name,
  lastname,
  username,
  phone,
  photo,
  password,
}: UserPartial): Promise<User | Error> => {
  console.log(name, lastname, username, phone, photo, password);
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  const user = await model.findOne({ name: name });

  if (user) {
    return new Error("El name ya esta rgistrado");
  }

  const uuid = uuidv4();

  const new_user = new model({
    uuid,
    name,
    lastname,
    username,
    phone,
    photo,
    password,
  });
  await new_user.save();

  return { ...new_user._doc };
};
