export {
  RoleObject,
  RoleIdFieldObject,
  RoleCreatedAtFieldObject,
  RoleUpdatedAtFieldObject,
  RoleNameFieldObject,
  RoleCodeFieldObject,
  RoleUsersFieldObject
} from './object.base';
export {
  createManyRoleMutation,
  createOneRoleMutation,
  deleteManyRoleMutation,
  deleteOneRoleMutation,
  updateManyRoleMutation,
  updateOneRoleMutation,
  upsertOneRoleMutation,
  createManyRoleMutationObject,
  createOneRoleMutationObject,
  deleteManyRoleMutationObject,
  deleteOneRoleMutationObject,
  updateManyRoleMutationObject,
  updateOneRoleMutationObject,
  upsertOneRoleMutationObject
} from './mutations';
export {
  findFirstRoleQuery,
  findManyRoleQuery,
  countRoleQuery,
  findUniqueRoleQuery,
  findFirstRoleQueryObject,
  findManyRoleQueryObject,
  countRoleQueryObject,
  findUniqueRoleQueryObject
} from './queries';
