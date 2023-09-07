export {
  RemarksObject,
  RemarksIdFieldObject,
  RemarksCreatedAtFieldObject,
  RemarksUpdatedAtFieldObject,
  RemarksContentFieldObject,
  RemarksTrashedFieldObject,
  RemarksUserFieldObject,
  RemarksUserIdFieldObject
} from './object.base';
export {
  createManyRemarksMutation,
  createOneRemarksMutation,
  deleteManyRemarksMutation,
  deleteOneRemarksMutation,
  updateManyRemarksMutation,
  updateOneRemarksMutation,
  upsertOneRemarksMutation,
  createManyRemarksMutationObject,
  createOneRemarksMutationObject,
  deleteManyRemarksMutationObject,
  deleteOneRemarksMutationObject,
  updateManyRemarksMutationObject,
  updateOneRemarksMutationObject,
  upsertOneRemarksMutationObject
} from './mutations';
export {
  findFirstRemarksQuery,
  findManyRemarksQuery,
  countRemarksQuery,
  findUniqueRemarksQuery,
  findFirstRemarksQueryObject,
  findManyRemarksQueryObject,
  countRemarksQueryObject,
  findUniqueRemarksQueryObject
} from './queries';
