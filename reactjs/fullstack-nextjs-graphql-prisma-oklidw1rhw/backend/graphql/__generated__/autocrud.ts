import * as User from './User';
import * as Role from './Role';
import * as Link from './Link';
import * as Remarks from './Remarks';
import * as MarginModel from './MarginModel';
import * as Hardware from './Hardware';
import { builder } from '../builder';
import * as Objects from './objects';

type Model = Objects.Model;

export const Cruds: Record<
  Objects.Model,
  {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
  }
> = {
  User: {
    Object: User.UserObject,
    queries: {
      findFirst: User.findFirstUserQueryObject,
      findMany: User.findManyUserQueryObject,
      count: User.countUserQueryObject,
      findUnique: User.findUniqueUserQueryObject,
    },
    mutations: {
      createMany: User.createManyUserMutationObject,
      createOne: User.createOneUserMutationObject,
      deleteMany: User.deleteManyUserMutationObject,
      deleteOne: User.deleteOneUserMutationObject,
      updateMany: User.updateManyUserMutationObject,
      updateOne: User.updateOneUserMutationObject,
      upsertOne: User.upsertOneUserMutationObject,
    },
  },
  Role: {
    Object: Role.RoleObject,
    queries: {
      findFirst: Role.findFirstRoleQueryObject,
      findMany: Role.findManyRoleQueryObject,
      count: Role.countRoleQueryObject,
      findUnique: Role.findUniqueRoleQueryObject,
    },
    mutations: {
      createMany: Role.createManyRoleMutationObject,
      createOne: Role.createOneRoleMutationObject,
      deleteMany: Role.deleteManyRoleMutationObject,
      deleteOne: Role.deleteOneRoleMutationObject,
      updateMany: Role.updateManyRoleMutationObject,
      updateOne: Role.updateOneRoleMutationObject,
      upsertOne: Role.upsertOneRoleMutationObject,
    },
  },
  Link: {
    Object: Link.LinkObject,
    queries: {
      findFirst: Link.findFirstLinkQueryObject,
      findMany: Link.findManyLinkQueryObject,
      count: Link.countLinkQueryObject,
      findUnique: Link.findUniqueLinkQueryObject,
    },
    mutations: {
      createMany: Link.createManyLinkMutationObject,
      createOne: Link.createOneLinkMutationObject,
      deleteMany: Link.deleteManyLinkMutationObject,
      deleteOne: Link.deleteOneLinkMutationObject,
      updateMany: Link.updateManyLinkMutationObject,
      updateOne: Link.updateOneLinkMutationObject,
      upsertOne: Link.upsertOneLinkMutationObject,
    },
  },
  Remarks: {
    Object: Remarks.RemarksObject,
    queries: {
      findFirst: Remarks.findFirstRemarksQueryObject,
      findMany: Remarks.findManyRemarksQueryObject,
      count: Remarks.countRemarksQueryObject,
      findUnique: Remarks.findUniqueRemarksQueryObject,
    },
    mutations: {
      createMany: Remarks.createManyRemarksMutationObject,
      createOne: Remarks.createOneRemarksMutationObject,
      deleteMany: Remarks.deleteManyRemarksMutationObject,
      deleteOne: Remarks.deleteOneRemarksMutationObject,
      updateMany: Remarks.updateManyRemarksMutationObject,
      updateOne: Remarks.updateOneRemarksMutationObject,
      upsertOne: Remarks.upsertOneRemarksMutationObject,
    },
  },
  MarginModel: {
    Object: MarginModel.MarginModelObject,
    queries: {
      findFirst: MarginModel.findFirstMarginModelQueryObject,
      findMany: MarginModel.findManyMarginModelQueryObject,
      count: MarginModel.countMarginModelQueryObject,
      findUnique: MarginModel.findUniqueMarginModelQueryObject,
    },
    mutations: {
      createMany: MarginModel.createManyMarginModelMutationObject,
      createOne: MarginModel.createOneMarginModelMutationObject,
      deleteMany: MarginModel.deleteManyMarginModelMutationObject,
      deleteOne: MarginModel.deleteOneMarginModelMutationObject,
      updateMany: MarginModel.updateManyMarginModelMutationObject,
      updateOne: MarginModel.updateOneMarginModelMutationObject,
      upsertOne: MarginModel.upsertOneMarginModelMutationObject,
    },
  },
  Hardware: {
    Object: Hardware.HardwareObject,
    queries: {
      findFirst: Hardware.findFirstHardwareQueryObject,
      findMany: Hardware.findManyHardwareQueryObject,
      count: Hardware.countHardwareQueryObject,
      findUnique: Hardware.findUniqueHardwareQueryObject,
    },
    mutations: {
      createMany: Hardware.createManyHardwareMutationObject,
      createOne: Hardware.createOneHardwareMutationObject,
      deleteMany: Hardware.deleteManyHardwareMutationObject,
      deleteOne: Hardware.deleteOneHardwareMutationObject,
      updateMany: Hardware.updateManyHardwareMutationObject,
      updateOne: Hardware.updateOneHardwareMutationObject,
      upsertOne: Hardware.upsertOneHardwareMutationObject,
    },
  },
};

const crudEntries = Object.entries(Cruds);

type ResolverType = "Query" | "Mutation";
function generateResolversByType(type: ResolverType, opts?: CrudOptions) {
  return crudEntries
    .filter(([modelName]) => includeModel(modelName, opts))
    .map(([modelName, config]) => {
      const resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);

      return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
        const resolverName = operationName + modelName;
        const isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
        const isPrismaField = !isntPrismaFieldList.includes(operationName);

        const getFields = (t: any) => {
          const field = resolverObjectDefiner(t);
          const handledField = opts?.handleResolver
            ? opts.handleResolver({
                field,
                modelName: modelName as Model,
                operationName,
                resolverName,
                t,
                isPrismaField,
                type,
              })
            : field;

          return {
            [resolverName]: isPrismaField
              ? t.prismaField(handledField)
              : t.field(handledField),
          }
        }

        return type === "Query"
          ? builder.queryFields((t) => getFields(t))
          : builder.mutationFields((t) => getFields(t));
      });
    });
}

export function generateAllObjects(opts?: CrudOptions) {
  return crudEntries
    .filter(([md]) => includeModel(md, opts))
    .map(([modelName, { Object }]) => {
      return builder.prismaObject(modelName as Model, Object); // Objects is all imports
    });
}

export function generateAllQueries(opts?: CrudOptions) {
  generateResolversByType("Query", opts);
}

export function generateAllMutations(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
}

export function generateAllResolvers(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
  generateResolversByType("Query", opts);
}

type CrudOptions = {
  include?: Model[];
  exclude?: Model[];
  /**
   * Caution: This is not type safe
   * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
   */
  handleResolver?: (props: {
    modelName: Model;
    field: any;
    operationName: string;
    resolverName: string;
    t: any;
    isPrismaField: boolean;
    type: ResolverType;
  }) => any;
};

const includeModel = (model: string, opts?: CrudOptions): boolean => {
  if (!opts) return true;
  if (opts.include) return opts.include.includes(model as Model);
  if (opts.exclude) return !opts.exclude.includes(model as Model);
  return true;
};

export function generateAllCrud(opts?: CrudOptions) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}
