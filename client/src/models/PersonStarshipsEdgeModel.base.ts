/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: StarshipModelType;
}

/**
 * PersonStarshipsEdgeBase
 * auto generated base class for the model PersonStarshipsEdgeModel.
 *
 * An edge in a connection.
 */
export const PersonStarshipsEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PersonStarshipsEdge')
  .props({
    __typename: types.optional(types.literal("PersonStarshipsEdge"), "PersonStarshipsEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PersonStarshipsEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`node`, StarshipModelSelector, builder) }
}
export function selectFromPersonStarshipsEdge() {
  return new PersonStarshipsEdgeModelSelector()
}

export const personStarshipsEdgeModelPrimitives = selectFromPersonStarshipsEdge().cursor
