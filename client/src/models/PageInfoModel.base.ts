/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PageInfoBase
 * auto generated base class for the model PageInfoModel.
 *
 * Information about pagination in a connection.
 */
export const PageInfoModelBase = ModelBase
  .named('PageInfo')
  .props({
    __typename: types.optional(types.literal("PageInfo"), "PageInfo"),
    /** When paginating forwards, are there more items? */
    hasNextPage: types.union(types.undefined, types.boolean),
    /** When paginating backwards, are there more items? */
    hasPreviousPage: types.union(types.undefined, types.boolean),
    /** When paginating backwards, the cursor to continue. */
    startCursor: types.union(types.undefined, types.null, types.string),
    /** When paginating forwards, the cursor to continue. */
    endCursor: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PageInfoModelSelector extends QueryBuilder {
  get hasNextPage() { return this.__attr(`hasNextPage`) }
  get hasPreviousPage() { return this.__attr(`hasPreviousPage`) }
  get startCursor() { return this.__attr(`startCursor`) }
  get endCursor() { return this.__attr(`endCursor`) }
}
export function selectFromPageInfo() {
  return new PageInfoModelSelector()
}

export const pageInfoModelPrimitives = selectFromPageInfo().hasNextPage.hasPreviousPage.startCursor.endCursor
