import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type UserPartial = Partial<User>;

interface UserLogin extends UserPartial {
  token: string;
}

export const userLogin = async ({
  password,
  username,
}: UserPartial): Promise<UserLogin | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  const user = await model.findOne({ username: username });

  if (!user) {
    return new Error("Usuario no existe o esta inactivo");
  }

  const match = await bcrypt.compare(password || "", user.password);

  if (!match) {
    return new Error("Contrasena incorrecta");
  }

  const token = jwt.sign(
    { uuid: user.uuid },
    process.env.JWT_SECRET_KEY || "",
    { expiresIn: "5h" }
  );

  return {
    token,
    ...user._doc,
  };
};
