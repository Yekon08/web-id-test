import { Static, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

export const usersSchema = Type.Array(
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
  })
);
export type UsersSchemaType = Static<typeof usersSchema>;
export const usersValidation = TypeCompiler.Compile(usersSchema);

export const averageSchema = Type.Object({
  average: Type.Number(),
});
export type AverageSchemaType = Static<typeof averageSchema>;
export const averageValidation = TypeCompiler.Compile(averageSchema);
