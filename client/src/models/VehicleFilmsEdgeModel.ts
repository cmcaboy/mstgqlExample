import { Instance } from "mobx-state-tree"
import { VehicleFilmsEdgeModelBase } from "./VehicleFilmsEdgeModel.base"

/* The TypeScript type of an instance of VehicleFilmsEdgeModel */
export interface VehicleFilmsEdgeModelType extends Instance<typeof VehicleFilmsEdgeModel.Type> {}

/* A graphql query fragment builders for VehicleFilmsEdgeModel */
export { selectFromVehicleFilmsEdge, vehicleFilmsEdgeModelPrimitives, VehicleFilmsEdgeModelSelector } from "./VehicleFilmsEdgeModel.base"

/**
 * VehicleFilmsEdgeModel
 *
 * An edge in a connection.
 */
export const VehicleFilmsEdgeModel = VehicleFilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
