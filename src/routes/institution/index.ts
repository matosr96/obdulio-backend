import { RouteOptions } from "fastify";
import { InstitutionCreateRoute } from "./create";
import { getAllInstitutionsRoute } from "./list";
import { InstitutionSigninRoute } from "./signin";
import { updateInstitutionRoute } from "./update";


export const institutionRoutes: RouteOptions[] = [
    InstitutionCreateRoute,
    InstitutionSigninRoute,
    updateInstitutionRoute,
    getAllInstitutionsRoute
]