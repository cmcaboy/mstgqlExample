/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { SpeciesFilmsConnectionModel, SpeciesFilmsConnectionModelType } from "./SpeciesFilmsConnectionModel"
import { SpeciesFilmsConnectionModelSelector } from "./SpeciesFilmsConnectionModel.base"
import { SpeciesPeopleConnectionModel, SpeciesPeopleConnectionModelType } from "./SpeciesPeopleConnectionModel"
import { SpeciesPeopleConnectionModelSelector } from "./SpeciesPeopleConnectionModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  homeworld: PlanetModelType;
}

/**
 * SpeciesBase
 * auto generated base class for the model SpeciesModel.
 *
 * A type of person or character within the Star Wars Universe.
 */
export const SpeciesModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Species')
  .props({
    __typename: types.optional(types.literal("Species"), "Species"),
    /** The name of this species. */
    name: types.union(types.undefined, types.null, types.string),
    /** The classification of this species, such as "mammal" or "reptile". */
    classification: types.union(types.undefined, types.null, types.string),
    /** The designation of this species, such as "sentient". */
    designation: types.union(types.undefined, types.null, types.string),
    /** The average height of this species in centimeters. */
    averageHeight: types.union(types.undefined, types.null, types.number),
    /** The average lifespan of this species in years, null if unknown. */
    averageLifespan: types.union(types.undefined, types.null, types.integer),
    /** Common eye colors for this species, null if this species does not typically have eyes. */
    eyeColors: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** Common hair colors for this species, null if this species does not typically have hair. */
    hairColors: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** Common skin colors for this species, null if this species does not typically have skin. */
    skinColors: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The language commonly spoken by this species. */
    language: types.union(types.undefined, types.null, types.string),
    /** A planet that this species originates from. */
    homeworld: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    personConnection: types.union(types.undefined, types.null, types.late((): any => SpeciesPeopleConnectionModel)),
    filmConnection: types.union(types.undefined, types.null, types.late((): any => SpeciesFilmsConnectionModel)),
    /** The ISO 8601 date format of the time that this resource was created. */
    created: types.union(types.undefined, types.null, types.string),
    /** The ISO 8601 date format of the time that this resource was edited. */
    edited: types.union(types.undefined, types.null, types.string),
    /** The ID of an object */
    id: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SpeciesModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get classification() { return this.__attr(`classification`) }
  get designation() { return this.__attr(`designation`) }
  get averageHeight() { return this.__attr(`averageHeight`) }
  get averageLifespan() { return this.__attr(`averageLifespan`) }
  get eyeColors() { return this.__attr(`eyeColors`) }
  get hairColors() { return this.__attr(`hairColors`) }
  get skinColors() { return this.__attr(`skinColors`) }
  get language() { return this.__attr(`language`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  homeworld(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`homeworld`, PlanetModelSelector, builder) }
  personConnection(builder?: string | SpeciesPeopleConnectionModelSelector | ((selector: SpeciesPeopleConnectionModelSelector) => SpeciesPeopleConnectionModelSelector)) { return this.__child(`personConnection`, SpeciesPeopleConnectionModelSelector, builder) }
  filmConnection(builder?: string | SpeciesFilmsConnectionModelSelector | ((selector: SpeciesFilmsConnectionModelSelector) => SpeciesFilmsConnectionModelSelector)) { return this.__child(`filmConnection`, SpeciesFilmsConnectionModelSelector, builder) }
}
export function selectFromSpecies() {
  return new SpeciesModelSelector()
}

export const speciesModelPrimitives = selectFromSpecies().name.classification.designation.averageHeight.averageLifespan.eyeColors.hairColors.skinColors.language.created.edited
