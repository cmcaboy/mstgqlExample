import { Instance } from "mobx-state-tree"
import { VehiclePilotsConnectionModelBase } from "./VehiclePilotsConnectionModel.base"

/* The TypeScript type of an instance of VehiclePilotsConnectionModel */
export interface VehiclePilotsConnectionModelType extends Instance<typeof VehiclePilotsConnectionModel.Type> {}

/* A graphql query fragment builders for VehiclePilotsConnectionModel */
export { selectFromVehiclePilotsConnection, vehiclePilotsConnectionModelPrimitives, VehiclePilotsConnectionModelSelector } from "./VehiclePilotsConnectionModel.base"

/**
 * VehiclePilotsConnectionModel
 *
 * A connection to a list of items.
 */
export const VehiclePilotsConnectionModel = VehiclePilotsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
