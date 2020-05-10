import { Instance } from "mobx-state-tree"
import { PageInfoModelBase } from "./PageInfoModel.base"

/* The TypeScript type of an instance of PageInfoModel */
export interface PageInfoModelType extends Instance<typeof PageInfoModel.Type> {}

/* A graphql query fragment builders for PageInfoModel */
export { selectFromPageInfo, pageInfoModelPrimitives, PageInfoModelSelector } from "./PageInfoModel.base"

/**
 * PageInfoModel
 *
 * Information about pagination in a connection.
 */
export const PageInfoModel = PageInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
