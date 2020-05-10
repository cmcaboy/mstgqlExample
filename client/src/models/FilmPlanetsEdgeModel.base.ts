/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: PlanetModelType;
}

/**
 * FilmPlanetsEdgeBase
 * auto generated base class for the model FilmPlanetsEdgeModel.
 *
 * An edge in a connection.
 */
export const FilmPlanetsEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilmPlanetsEdge')
  .props({
    __typename: types.optional(types.literal("FilmPlanetsEdge"), "FilmPlanetsEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FilmPlanetsEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`node`, PlanetModelSelector, builder) }
}
export function selectFromFilmPlanetsEdge() {
  return new FilmPlanetsEdgeModelSelector()
}

export const filmPlanetsEdgeModelPrimitives = selectFromFilmPlanetsEdge().cursor
