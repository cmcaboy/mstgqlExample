import { Instance } from "mobx-state-tree"
import { PersonVehiclesConnectionModelBase } from "./PersonVehiclesConnectionModel.base"

/* The TypeScript type of an instance of PersonVehiclesConnectionModel */
export interface PersonVehiclesConnectionModelType extends Instance<typeof PersonVehiclesConnectionModel.Type> {}

/* A graphql query fragment builders for PersonVehiclesConnectionModel */
export { selectFromPersonVehiclesConnection, personVehiclesConnectionModelPrimitives, PersonVehiclesConnectionModelSelector } from "./PersonVehiclesConnectionModel.base"

/**
 * PersonVehiclesConnectionModel
 *
 * A connection to a list of items.
 */
export const PersonVehiclesConnectionModel = PersonVehiclesConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
