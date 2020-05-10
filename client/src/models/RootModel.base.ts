/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmModel, FilmModelType } from "./FilmModel"
import { FilmModelSelector } from "./FilmModel.base"
import { FilmsConnectionModel, FilmsConnectionModelType } from "./FilmsConnectionModel"
import { FilmsConnectionModelSelector } from "./FilmsConnectionModel.base"
import { NodeModelSelector } from "./NodeModelSelector"
import { PeopleConnectionModel, PeopleConnectionModelType } from "./PeopleConnectionModel"
import { PeopleConnectionModelSelector } from "./PeopleConnectionModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { PersonModelSelector } from "./PersonModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { PlanetModelSelector } from "./PlanetModel.base"
import { PlanetsConnectionModel, PlanetsConnectionModelType } from "./PlanetsConnectionModel"
import { PlanetsConnectionModelSelector } from "./PlanetsConnectionModel.base"
import { SpeciesConnectionModel, SpeciesConnectionModelType } from "./SpeciesConnectionModel"
import { SpeciesConnectionModelSelector } from "./SpeciesConnectionModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { StarshipModelSelector } from "./StarshipModel.base"
import { StarshipsConnectionModel, StarshipsConnectionModelType } from "./StarshipsConnectionModel"
import { StarshipsConnectionModelSelector } from "./StarshipsConnectionModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { VehicleModelSelector } from "./VehicleModel.base"
import { VehiclesConnectionModel, VehiclesConnectionModelType } from "./VehiclesConnectionModel"
import { VehiclesConnectionModelSelector } from "./VehiclesConnectionModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  film: FilmModelType;
  person: PersonModelType;
  planet: PlanetModelType;
  species: SpeciesModelType;
  starship: StarshipModelType;
  vehicle: VehicleModelType;
}

/**
 * RootBase
 * auto generated base class for the model RootModel.
 */
export const RootModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Root')
  .props({
    __typename: types.optional(types.literal("Root"), "Root"),
    allFilms: types.union(types.undefined, types.null, types.late((): any => FilmsConnectionModel)),
    film: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FilmModel))),
    allPeople: types.union(types.undefined, types.null, types.late((): any => PeopleConnectionModel)),
    person: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PersonModel))),
    allPlanets: types.union(types.undefined, types.null, types.late((): any => PlanetsConnectionModel)),
    planet: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PlanetModel))),
    allSpecies: types.union(types.undefined, types.null, types.late((): any => SpeciesConnectionModel)),
    species: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => SpeciesModel))),
    allStarships: types.union(types.undefined, types.null, types.late((): any => StarshipsConnectionModel)),
    starship: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => StarshipModel))),
    allVehicles: types.union(types.undefined, types.null, types.late((): any => VehiclesConnectionModel)),
    vehicle: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => VehicleModel))),
    /** Fetches an object given its ID */
    node: types.union(types.undefined, types.null, types.union(types.late(() => FilmModel), types.late(() => SpeciesModel), types.late(() => PlanetModel), types.late(() => PersonModel), types.late(() => StarshipModel), types.late(() => VehicleModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RootModelSelector extends QueryBuilder {
  allFilms(builder?: string | FilmsConnectionModelSelector | ((selector: FilmsConnectionModelSelector) => FilmsConnectionModelSelector)) { return this.__child(`allFilms`, FilmsConnectionModelSelector, builder) }
  film(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__child(`film`, FilmModelSelector, builder) }
  allPeople(builder?: string | PeopleConnectionModelSelector | ((selector: PeopleConnectionModelSelector) => PeopleConnectionModelSelector)) { return this.__child(`allPeople`, PeopleConnectionModelSelector, builder) }
  person(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__child(`person`, PersonModelSelector, builder) }
  allPlanets(builder?: string | PlanetsConnectionModelSelector | ((selector: PlanetsConnectionModelSelector) => PlanetsConnectionModelSelector)) { return this.__child(`allPlanets`, PlanetsConnectionModelSelector, builder) }
  planet(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__child(`planet`, PlanetModelSelector, builder) }
  allSpecies(builder?: string | SpeciesConnectionModelSelector | ((selector: SpeciesConnectionModelSelector) => SpeciesConnectionModelSelector)) { return this.__child(`allSpecies`, SpeciesConnectionModelSelector, builder) }
  species(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__child(`species`, SpeciesModelSelector, builder) }
  allStarships(builder?: string | StarshipsConnectionModelSelector | ((selector: StarshipsConnectionModelSelector) => StarshipsConnectionModelSelector)) { return this.__child(`allStarships`, StarshipsConnectionModelSelector, builder) }
  starship(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__child(`starship`, StarshipModelSelector, builder) }
  allVehicles(builder?: string | VehiclesConnectionModelSelector | ((selector: VehiclesConnectionModelSelector) => VehiclesConnectionModelSelector)) { return this.__child(`allVehicles`, VehiclesConnectionModelSelector, builder) }
  vehicle(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__child(`vehicle`, VehicleModelSelector, builder) }
  node(builder?: string | NodeModelSelector | ((selector: NodeModelSelector) => NodeModelSelector)) { return this.__child(`node`, NodeModelSelector, builder) }
}
export function selectFromRoot() {
  return new RootModelSelector()
}

export const rootModelPrimitives = selectFromRoot()
