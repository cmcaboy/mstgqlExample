import { Instance } from "mobx-state-tree"
import { VehiclesEdgeModelBase } from "./VehiclesEdgeModel.base"

/* The TypeScript type of an instance of VehiclesEdgeModel */
export interface VehiclesEdgeModelType extends Instance<typeof VehiclesEdgeModel.Type> {}

/* A graphql query fragment builders for VehiclesEdgeModel */
export { selectFromVehiclesEdge, vehiclesEdgeModelPrimitives, VehiclesEdgeModelSelector } from "./VehiclesEdgeModel.base"

/**
 * VehiclesEdgeModel
 *
 * An edge in a connection.
 */
export const VehiclesEdgeModel = VehiclesEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
