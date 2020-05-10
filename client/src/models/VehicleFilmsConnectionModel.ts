import { Instance } from "mobx-state-tree"
import { VehicleFilmsConnectionModelBase } from "./VehicleFilmsConnectionModel.base"

/* The TypeScript type of an instance of VehicleFilmsConnectionModel */
export interface VehicleFilmsConnectionModelType extends Instance<typeof VehicleFilmsConnectionModel.Type> {}

/* A graphql query fragment builders for VehicleFilmsConnectionModel */
export { selectFromVehicleFilmsConnection, vehicleFilmsConnectionModelPrimitives, VehicleFilmsConnectionModelSelector } from "./VehicleFilmsConnectionModel.base"

/**
 * VehicleFilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const VehicleFilmsConnectionModel = VehicleFilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
