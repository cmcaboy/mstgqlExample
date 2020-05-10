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
 * FilmStarshipsEdgeBase
 * auto generated base class for the model FilmStarshipsEdgeModel.
 *
 * An edge in a connection.
 */
export const FilmStarshipsEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilmStarshipsEdge')
  .props({
    __typename: types.optional(types.literal("FilmStarshipsEdge"), "FilmStarshipsEdge"),
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

export class FilmStarshipsEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`node`, StarshipModelSelector, builder) }
}
export function selectFromFilmStarshipsEdge() {
  return new FilmStarshipsEdgeModelSelector()
}

export const filmStarshipsEdgeModelPrimitives = selectFromFilmStarshipsEdge().cursor
