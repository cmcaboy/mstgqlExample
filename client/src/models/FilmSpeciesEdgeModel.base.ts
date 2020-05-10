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
 * FilmSpeciesEdgeBase
 * auto generated base class for the model FilmSpeciesEdgeModel.
 *
 * An edge in a connection.
 */
export const FilmSpeciesEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilmSpeciesEdge')
  .props({
    __typename: types.optional(types.literal("FilmSpeciesEdge"), "FilmSpeciesEdge"),
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

export class FilmSpeciesEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`node`, SpeciesModelSelector, builder) }
}
export function selectFromFilmSpeciesEdge() {
  return new FilmSpeciesEdgeModelSelector()
}

export const filmSpeciesEdgeModelPrimitives = selectFromFilmSpeciesEdge().cursor
