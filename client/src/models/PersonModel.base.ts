/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PersonFilmsConnectionModel, PersonFilmsConnectionModelType } from "./PersonFilmsConnectionModel"
import { PersonFilmsConnectionModelSelector } from "./PersonFilmsConnectionModel.base"
import { PersonStarshipsConnectionModel, PersonStarshipsConnectionModelType } from "./PersonStarshipsConnectionModel"
import { PersonStarshipsConnectionModelSelector } from "./PersonStarshipsConnectionModel.base"
import { PersonVehiclesConnectionModel, PersonVehiclesConnectionModelType } from "./PersonVehiclesConnectionModel"
import { PersonVehiclesConnectionModelSelector } from "./PersonVehiclesConnectionModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  homeworld: PlanetModelType;
  species: SpeciesModelType;
}

/**
 * PersonBase
 * auto generated base class for the model PersonModel.
 *
 * An individual person or character within the Star Wars universe.
 */
export const PersonModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Person')
  .props({
    __typename: types.optional(types.literal("Person"), "Person"),
    /** The name of this person. */
    name: types.union(types.undefined, types.null, types.string),
    /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
    birthYear: types.union(types.undefined, types.null, types.string),
    /** The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye. */
    eyeColor: types.union(types.undefined, types.null, types.string),
    /** The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender. */
    gender: types.union(types.undefined, types.null, types.string),
    /** The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair. */
    hairColor: types.union(types.undefined, types.null, types.string),
    /** The height of the person in centimeters. */
    height: types.union(types.undefined, types.null, types.integer),
    /** The mass of the person in kilograms. */
    mass: types.union(types.undefined, types.null, types.number),
    /** The skin color of this person. */
    skinColor: types.union(types.undefined, types.null, types.string),
    /** A planet that this person was born on or inhabits. */
    homeworld: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    filmConnection: types.union(types.undefined, types.null, types.late((): any => PersonFilmsConnectionModel)),
    /** The species that this person belongs to, or null if unknown. */
    species: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
    starshipConnection: types.union(types.undefined, types.null, types.late((): any => PersonStarshipsConnectionModel)),
    vehicleConnection: types.union(types.undefined, types.null, types.late((): any => PersonVehiclesConnectionModel)),
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

export class PersonModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get birthYear() { return this.__attr(`birthYear`) }
  get eyeColor() { return this.__attr(`eyeColor`) }
  get gender() { return this.__attr(`gender`) }
  get hairColor() { return this.__attr(`hairColor`) }
  get height() { return this.__attr(`height`) }
  get mass() { return this.__attr(`mass`) }
  get skinColor() { return this.__attr(`skinColor`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  homeworld(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`homeworld`, PlanetModelSelector, builder) }
  filmConnection(builder?: string | PersonFilmsConnectionModelSelector | ((selector: PersonFilmsConnectionModelSelector) => PersonFilmsConnectionModelSelector)) { return this.__child(`filmConnection`, PersonFilmsConnectionModelSelector, builder) }
  species(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`species`, SpeciesModelSelector, builder) }
  starshipConnection(builder?: string | PersonStarshipsConnectionModelSelector | ((selector: PersonStarshipsConnectionModelSelector) => PersonStarshipsConnectionModelSelector)) { return this.__child(`starshipConnection`, PersonStarshipsConnectionModelSelector, builder) }
  vehicleConnection(builder?: string | PersonVehiclesConnectionModelSelector | ((selector: PersonVehiclesConnectionModelSelector) => PersonVehiclesConnectionModelSelector)) { return this.__child(`vehicleConnection`, PersonVehiclesConnectionModelSelector, builder) }
}
export function selectFromPerson() {
  return new PersonModelSelector()
}

export const personModelPrimitives = selectFromPerson().name.birthYear.eyeColor.gender.hairColor.height.mass.skinColor.created.edited
