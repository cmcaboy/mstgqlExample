/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmCharactersEdgeModel, FilmCharactersEdgeModelType } from "./FilmCharactersEdgeModel"
import { FilmCharactersEdgeModelSelector } from "./FilmCharactersEdgeModel.base"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { PageInfoModelSelector } from "./PageInfoModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  characters: IObservableArray<PersonModelType>;
}

/**
 * FilmCharactersConnectionBase
 * auto generated base class for the model FilmCharactersConnectionModel.
 *
 * A connection to a list of items.
 */
export const FilmCharactersConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilmCharactersConnection')
  .props({
    __typename: types.optional(types.literal("FilmCharactersConnection"), "FilmCharactersConnection"),
    /** Information to aid in pagination. */
    pageInfo: types.union(types.undefined, types.late((): any => PageInfoModel)),
    /** A list of edges. */
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => FilmCharactersEdgeModel)))),
    /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to "first", then fetch the total count so it could display "5 of 83", for example. */
    totalCount: types.union(types.undefined, types.null, types.integer),
    /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } }" version should be used instead. */
    characters: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PersonModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FilmCharactersConnectionModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
  pageInfo(builder?: string | PageInfoModelSelector | ((selector: PageInfoModelSelector) => PageInfoModelSelector)) { return this.__child(`pageInfo`, PageInfoModelSelector, builder) }
  edges(builder?: string | FilmCharactersEdgeModelSelector | ((selector: FilmCharactersEdgeModelSelector) => FilmCharactersEdgeModelSelector)) { return this.__child(`edges`, FilmCharactersEdgeModelSelector, builder) }
  characters(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`characters`, PersonModelSelector, builder) }
}
export function selectFromFilmCharactersConnection() {
  return new FilmCharactersConnectionModelSelector()
}

export const filmCharactersConnectionModelPrimitives = selectFromFilmCharactersConnection().totalCount
