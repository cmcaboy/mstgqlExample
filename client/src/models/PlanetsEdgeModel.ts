import { Instance } from "mobx-state-tree"
import { PlanetsEdgeModelBase } from "./PlanetsEdgeModel.base"

/* The TypeScript type of an instance of PlanetsEdgeModel */
export interface PlanetsEdgeModelType extends Instance<typeof PlanetsEdgeModel.Type> {}

/* A graphql query fragment builders for PlanetsEdgeModel */
export { selectFromPlanetsEdge, planetsEdgeModelPrimitives, PlanetsEdgeModelSelector } from "./PlanetsEdgeModel.base"

/**
 * PlanetsEdgeModel
 *
 * An edge in a connection.
 */
export const PlanetsEdgeModel = PlanetsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
