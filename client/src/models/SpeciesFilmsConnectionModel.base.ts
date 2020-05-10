/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { PageInfoModelSelector } from "./PageInfoModel.base"
import { SpeciesFilmsEdgeModel, SpeciesFilmsEdgeModelType } from "./SpeciesFilmsEdgeModel"
import { SpeciesFilmsEdgeModelSelector } from "./SpeciesFilmsEdgeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  films: IObservableArray<FilmModelType>;
}

/**
 * SpeciesFilmsConnectionBase
 * auto generated base class for the model SpeciesFilmsConnectionModel.
 *
 * A connection to a list of items.
 */
export const SpeciesFilmsConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SpeciesFilmsConnection')
  .props({
    __typename: types.optional(types.literal("SpeciesFilmsConnection"), "SpeciesFilmsConnection"),
    /** Information to aid in pagination. */
    pageInfo: types.union(types.undefined, types.late((): any => PageInfoModel)),
    /** A list of edges. */
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => SpeciesFilmsEdgeModel)))),
    /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to "first", then fetch the total count so it could display "5 of 83", for example. */
    totalCount: types.union(types.undefined, types.null, types.integer),
    /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } }" version should be used instead. */
    films: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FilmModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesFilmsConnectionModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
  pageInfo(builder?: string | PageInfoModelSelector | ((selector: PageInfoModelSelector) => PageInfoModelSelector)) { return this.__child(`pageInfo`, PageInfoModelSelector, builder) }
  edges(builder?: string | SpeciesFilmsEdgeModelSelector | ((selector: SpeciesFilmsEdgeModelSelector) => SpeciesFilmsEdgeModelSelector)) { return this.__child(`edges`, SpeciesFilmsEdgeModelSelector, builder) }
  films(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`films`, FilmModelSelector, builder) }
}
export function selectFromSpeciesFilmsConnection() {
  return new SpeciesFilmsConnectionModelSelector()
}

export const speciesFilmsConnectionModelPrimitives = selectFromSpeciesFilmsConnection().totalCount
