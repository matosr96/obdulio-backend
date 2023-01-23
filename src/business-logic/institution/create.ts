import { v4 as UUID } from "uuid";
import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution } from "../../types";

export const createInstitution = async (
  data: Institution
): Promise<Institution | Error> => {
  const model = getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo);

  const uuid = UUID();
  const result = new model({ ...data, uuid });
  if (!result) throw new Error("No se puede crear el negocio");
  const haveEmail = await model.findOne({ email: data.email });
  if (haveEmail) throw new Error("El correo ya esta en uso");
  const haveNit = await model.findOne({ nit: data.nit });
  if (haveNit) throw new Error("El nit ya esta registrado");
  await result.save();
  return { ...result._doc };
};
