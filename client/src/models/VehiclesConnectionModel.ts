import { Instance } from "mobx-state-tree"
import { VehiclesConnectionModelBase } from "./VehiclesConnectionModel.base"

/* The TypeScript type of an instance of VehiclesConnectionModel */
export interface VehiclesConnectionModelType extends Instance<typeof VehiclesConnectionModel.Type> {}

/* A graphql query fragment builders for VehiclesConnectionModel */
export { selectFromVehiclesConnection, vehiclesConnectionModelPrimitives, VehiclesConnectionModelSelector } from "./VehiclesConnectionModel.base"

/**
 * VehiclesConnectionModel
 *
 * A connection to a list of items.
 */
export const VehiclesConnectionModel = VehiclesConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
