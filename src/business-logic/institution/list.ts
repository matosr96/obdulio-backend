import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution } from "../../types";

export const getInstitution = async (user: string): Promise<any> => {
  const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo);
  const obj = await model.findOne({ user });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  return obj;
};
