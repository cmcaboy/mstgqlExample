import { Instance } from "mobx-state-tree"
import { PersonVehiclesEdgeModelBase } from "./PersonVehiclesEdgeModel.base"

/* The TypeScript type of an instance of PersonVehiclesEdgeModel */
export interface PersonVehiclesEdgeModelType extends Instance<typeof PersonVehiclesEdgeModel.Type> {}

/* A graphql query fragment builders for PersonVehiclesEdgeModel */
export { selectFromPersonVehiclesEdge, personVehiclesEdgeModelPrimitives, PersonVehiclesEdgeModelSelector } from "./PersonVehiclesEdgeModel.base"

/**
 * PersonVehiclesEdgeModel
 *
 * An edge in a connection.
 */
export const PersonVehiclesEdgeModel = PersonVehiclesEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
