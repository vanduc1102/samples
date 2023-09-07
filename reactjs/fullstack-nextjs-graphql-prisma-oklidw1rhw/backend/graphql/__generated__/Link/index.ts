export {
  LinkObject,
  LinkIdFieldObject,
  LinkCreatedAtFieldObject,
  LinkUpdatedAtFieldObject,
  LinkTitleFieldObject,
  LinkDescriptionFieldObject,
  LinkUrlFieldObject,
  LinkImageUrlFieldObject,
  LinkCategoryFieldObject,
  LinkUsersFieldObject
} from './object.base';
export {
  createManyLinkMutation,
  createOneLinkMutation,
  deleteManyLinkMutation,
  deleteOneLinkMutation,
  updateManyLinkMutation,
  updateOneLinkMutation,
  upsertOneLinkMutation,
  createManyLinkMutationObject,
  createOneLinkMutationObject,
  deleteManyLinkMutationObject,
  deleteOneLinkMutationObject,
  updateManyLinkMutationObject,
  updateOneLinkMutationObject,
  upsertOneLinkMutationObject
} from './mutations';
export {
  findFirstLinkQuery,
  findManyLinkQuery,
  countLinkQuery,
  findUniqueLinkQuery,
  findFirstLinkQueryObject,
  findManyLinkQueryObject,
  countLinkQueryObject,
  findUniqueLinkQueryObject
} from './queries';
