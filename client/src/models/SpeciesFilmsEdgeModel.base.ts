/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: FilmModelType;
}

/**
 * SpeciesFilmsEdgeBase
 * auto generated base class for the model SpeciesFilmsEdgeModel.
 *
 * An edge in a connection.
 */
export const SpeciesFilmsEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SpeciesFilmsEdge')
  .props({
    __typename: types.optional(types.literal("SpeciesFilmsEdge"), "SpeciesFilmsEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesFilmsEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`node`, FilmModelSelector, builder) }
}
export function selectFromSpeciesFilmsEdge() {
  return new SpeciesFilmsEdgeModelSelector()
}

export const speciesFilmsEdgeModelPrimitives = selectFromSpeciesFilmsEdge().cursor
