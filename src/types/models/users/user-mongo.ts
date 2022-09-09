import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
