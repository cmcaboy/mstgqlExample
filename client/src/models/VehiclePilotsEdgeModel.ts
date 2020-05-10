import { Instance } from "mobx-state-tree"
import { VehiclePilotsEdgeModelBase } from "./VehiclePilotsEdgeModel.base"

/* The TypeScript type of an instance of VehiclePilotsEdgeModel */
export interface VehiclePilotsEdgeModelType extends Instance<typeof VehiclePilotsEdgeModel.Type> {}

/* A graphql query fragment builders for VehiclePilotsEdgeModel */
export { selectFromVehiclePilotsEdge, vehiclePilotsEdgeModelPrimitives, VehiclePilotsEdgeModelSelector } from "./VehiclePilotsEdgeModel.base"

/**
 * VehiclePilotsEdgeModel
 *
 * An edge in a connection.
 */
export const VehiclePilotsEdgeModel = VehiclePilotsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
