/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { PageInfoModelSelector } from "./PageInfoModel.base"
import { PersonVehiclesEdgeModel, PersonVehiclesEdgeModelType } from "./PersonVehiclesEdgeModel"
import { PersonVehiclesEdgeModelSelector } from "./PersonVehiclesEdgeModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  vehicles: IObservableArray<VehicleModelType>;
}

/**
 * PersonVehiclesConnectionBase
 * auto generated base class for the model PersonVehiclesConnectionModel.
 *
 * A connection to a list of items.
 */
export const PersonVehiclesConnectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PersonVehiclesConnection')
  .props({
    __typename: types.optional(types.literal("PersonVehiclesConnection"), "PersonVehiclesConnection"),
    /** Information to aid in pagination. */
    pageInfo: types.union(types.undefined, types.late((): any => PageInfoModel)),
    /** A list of edges. */
    edges: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => PersonVehiclesEdgeModel)))),
    /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to "first", then fetch the total count so it could display "5 of 83", for example. */
    totalCount: types.union(types.undefined, types.null, types.integer),
    /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } }" version should be used instead. */
    vehicles: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => VehicleModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PersonVehiclesConnectionModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
  pageInfo(builder?: string | PageInfoModelSelector | ((selector: PageInfoModelSelector) => PageInfoModelSelector)) { return this.__child(`pageInfo`, PageInfoModelSelector, builder) }
  edges(builder?: string | PersonVehiclesEdgeModelSelector | ((selector: PersonVehiclesEdgeModelSelector) => PersonVehiclesEdgeModelSelector)) { return this.__child(`edges`, PersonVehiclesEdgeModelSelector, builder) }
  vehicles(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehicles`, VehicleModelSelector, builder) }
}
export function selectFromPersonVehiclesConnection() {
  return new PersonVehiclesConnectionModelSelector()
}

export const personVehiclesConnectionModelPrimitives = selectFromPersonVehiclesConnection().totalCount
