/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  node: VehicleModelType;
}

/**
 * VehiclesEdgeBase
 * auto generated base class for the model VehiclesEdgeModel.
 *
 * An edge in a connection.
 */
export const VehiclesEdgeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('VehiclesEdge')
  .props({
    __typename: types.optional(types.literal("VehiclesEdge"), "VehiclesEdge"),
    /** The item at the end of the edge */
    node: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehicleModel))),
    /** A cursor for use in pagination */
    cursor: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class VehiclesEdgeModelSelector extends QueryBuilder {
  get cursor() { return this.__attr(`cursor`) }
  node(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`node`, VehicleModelSelector, builder) }
}
export function selectFromVehiclesEdge() {
  return new VehiclesEdgeModelSelector()
}

export const vehiclesEdgeModelPrimitives = selectFromVehiclesEdge().cursor
