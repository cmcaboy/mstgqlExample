import { Instance } from "mobx-state-tree"
import { PlanetsConnectionModelBase } from "./PlanetsConnectionModel.base"

/* The TypeScript type of an instance of PlanetsConnectionModel */
export interface PlanetsConnectionModelType extends Instance<typeof PlanetsConnectionModel.Type> {}

/* A graphql query fragment builders for PlanetsConnectionModel */
export { selectFromPlanetsConnection, planetsConnectionModelPrimitives, PlanetsConnectionModelSelector } from "./PlanetsConnectionModel.base"

/**
 * PlanetsConnectionModel
 *
 * A connection to a list of items.
 */
export const PlanetsConnectionModel = PlanetsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
