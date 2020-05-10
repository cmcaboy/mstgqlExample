/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: SpeciesModelType;
}

/**
 * SpeciesEdgeBase
 * auto generated base class for the model SpeciesEdgeModel.
 *
 * An edge in a connection.
 */
export const SpeciesEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SpeciesEdge')
  .props({
    __typename: types.optional(types.literal("SpeciesEdge"), "SpeciesEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`node`, SpeciesModelSelector, builder) }
}
export function selectFromSpeciesEdge() {
  return new SpeciesEdgeModelSelector()
}

export const speciesEdgeModelPrimitives = selectFromSpeciesEdge().cursor
