import { Instance } from "mobx-state-tree"
import { SpeciesEdgeModelBase } from "./SpeciesEdgeModel.base"

/* The TypeScript type of an instance of SpeciesEdgeModel */
export interface SpeciesEdgeModelType extends Instance<typeof SpeciesEdgeModel.Type> {}

/* A graphql query fragment builders for SpeciesEdgeModel */
export { selectFromSpeciesEdge, speciesEdgeModelPrimitives, SpeciesEdgeModelSelector } from "./SpeciesEdgeModel.base"

/**
 * SpeciesEdgeModel
 *
 * An edge in a connection.
 */
export const SpeciesEdgeModel = SpeciesEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
