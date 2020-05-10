/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { RootModel, RootModelType } from "./RootModel"
import { rootModelPrimitives, RootModelSelector } from "./RootModel.base"
import { FilmsConnectionModel, FilmsConnectionModelType } from "./FilmsConnectionModel"
import { filmsConnectionModelPrimitives, FilmsConnectionModelSelector } from "./FilmsConnectionModel.base"
import { PageInfoModel, PageInfoModelType } from "./PageInfoModel"
import { pageInfoModelPrimitives, PageInfoModelSelector } from "./PageInfoModel.base"
import { FilmsEdgeModel, FilmsEdgeModelType } from "./FilmsEdgeModel"
import { filmsEdgeModelPrimitives, FilmsEdgeModelSelector } from "./FilmsEdgeModel.base"
import { FilmModel, FilmModelType } from "./FilmModel"
import { filmModelPrimitives, FilmModelSelector } from "./FilmModel.base"
import { FilmSpeciesConnectionModel, FilmSpeciesConnectionModelType } from "./FilmSpeciesConnectionModel"
import { filmSpeciesConnectionModelPrimitives, FilmSpeciesConnectionModelSelector } from "./FilmSpeciesConnectionModel.base"
import { FilmSpeciesEdgeModel, FilmSpeciesEdgeModelType } from "./FilmSpeciesEdgeModel"
import { filmSpeciesEdgeModelPrimitives, FilmSpeciesEdgeModelSelector } from "./FilmSpeciesEdgeModel.base"
import { SpeciesModel, SpeciesModelType } from "./SpeciesModel"
import { speciesModelPrimitives, SpeciesModelSelector } from "./SpeciesModel.base"
import { PlanetModel, PlanetModelType } from "./PlanetModel"
import { planetModelPrimitives, PlanetModelSelector } from "./PlanetModel.base"
import { PlanetResidentsConnectionModel, PlanetResidentsConnectionModelType } from "./PlanetResidentsConnectionModel"
import { planetResidentsConnectionModelPrimitives, PlanetResidentsConnectionModelSelector } from "./PlanetResidentsConnectionModel.base"
import { PlanetResidentsEdgeModel, PlanetResidentsEdgeModelType } from "./PlanetResidentsEdgeModel"
import { planetResidentsEdgeModelPrimitives, PlanetResidentsEdgeModelSelector } from "./PlanetResidentsEdgeModel.base"
import { PersonModel, PersonModelType } from "./PersonModel"
import { personModelPrimitives, PersonModelSelector } from "./PersonModel.base"
import { PersonFilmsConnectionModel, PersonFilmsConnectionModelType } from "./PersonFilmsConnectionModel"
import { personFilmsConnectionModelPrimitives, PersonFilmsConnectionModelSelector } from "./PersonFilmsConnectionModel.base"
import { PersonFilmsEdgeModel, PersonFilmsEdgeModelType } from "./PersonFilmsEdgeModel"
import { personFilmsEdgeModelPrimitives, PersonFilmsEdgeModelSelector } from "./PersonFilmsEdgeModel.base"
import { PersonStarshipsConnectionModel, PersonStarshipsConnectionModelType } from "./PersonStarshipsConnectionModel"
import { personStarshipsConnectionModelPrimitives, PersonStarshipsConnectionModelSelector } from "./PersonStarshipsConnectionModel.base"
import { PersonStarshipsEdgeModel, PersonStarshipsEdgeModelType } from "./PersonStarshipsEdgeModel"
import { personStarshipsEdgeModelPrimitives, PersonStarshipsEdgeModelSelector } from "./PersonStarshipsEdgeModel.base"
import { StarshipModel, StarshipModelType } from "./StarshipModel"
import { starshipModelPrimitives, StarshipModelSelector } from "./StarshipModel.base"
import { StarshipPilotsConnectionModel, StarshipPilotsConnectionModelType } from "./StarshipPilotsConnectionModel"
import { starshipPilotsConnectionModelPrimitives, StarshipPilotsConnectionModelSelector } from "./StarshipPilotsConnectionModel.base"
import { StarshipPilotsEdgeModel, StarshipPilotsEdgeModelType } from "./StarshipPilotsEdgeModel"
import { starshipPilotsEdgeModelPrimitives, StarshipPilotsEdgeModelSelector } from "./StarshipPilotsEdgeModel.base"
import { StarshipFilmsConnectionModel, StarshipFilmsConnectionModelType } from "./StarshipFilmsConnectionModel"
import { starshipFilmsConnectionModelPrimitives, StarshipFilmsConnectionModelSelector } from "./StarshipFilmsConnectionModel.base"
import { StarshipFilmsEdgeModel, StarshipFilmsEdgeModelType } from "./StarshipFilmsEdgeModel"
import { starshipFilmsEdgeModelPrimitives, StarshipFilmsEdgeModelSelector } from "./StarshipFilmsEdgeModel.base"
import { PersonVehiclesConnectionModel, PersonVehiclesConnectionModelType } from "./PersonVehiclesConnectionModel"
import { personVehiclesConnectionModelPrimitives, PersonVehiclesConnectionModelSelector } from "./PersonVehiclesConnectionModel.base"
import { PersonVehiclesEdgeModel, PersonVehiclesEdgeModelType } from "./PersonVehiclesEdgeModel"
import { personVehiclesEdgeModelPrimitives, PersonVehiclesEdgeModelSelector } from "./PersonVehiclesEdgeModel.base"
import { VehicleModel, VehicleModelType } from "./VehicleModel"
import { vehicleModelPrimitives, VehicleModelSelector } from "./VehicleModel.base"
import { VehiclePilotsConnectionModel, VehiclePilotsConnectionModelType } from "./VehiclePilotsConnectionModel"
import { vehiclePilotsConnectionModelPrimitives, VehiclePilotsConnectionModelSelector } from "./VehiclePilotsConnectionModel.base"
import { VehiclePilotsEdgeModel, VehiclePilotsEdgeModelType } from "./VehiclePilotsEdgeModel"
import { vehiclePilotsEdgeModelPrimitives, VehiclePilotsEdgeModelSelector } from "./VehiclePilotsEdgeModel.base"
import { VehicleFilmsConnectionModel, VehicleFilmsConnectionModelType } from "./VehicleFilmsConnectionModel"
import { vehicleFilmsConnectionModelPrimitives, VehicleFilmsConnectionModelSelector } from "./VehicleFilmsConnectionModel.base"
import { VehicleFilmsEdgeModel, VehicleFilmsEdgeModelType } from "./VehicleFilmsEdgeModel"
import { vehicleFilmsEdgeModelPrimitives, VehicleFilmsEdgeModelSelector } from "./VehicleFilmsEdgeModel.base"
import { PlanetFilmsConnectionModel, PlanetFilmsConnectionModelType } from "./PlanetFilmsConnectionModel"
import { planetFilmsConnectionModelPrimitives, PlanetFilmsConnectionModelSelector } from "./PlanetFilmsConnectionModel.base"
import { PlanetFilmsEdgeModel, PlanetFilmsEdgeModelType } from "./PlanetFilmsEdgeModel"
import { planetFilmsEdgeModelPrimitives, PlanetFilmsEdgeModelSelector } from "./PlanetFilmsEdgeModel.base"
import { SpeciesPeopleConnectionModel, SpeciesPeopleConnectionModelType } from "./SpeciesPeopleConnectionModel"
import { speciesPeopleConnectionModelPrimitives, SpeciesPeopleConnectionModelSelector } from "./SpeciesPeopleConnectionModel.base"
import { SpeciesPeopleEdgeModel, SpeciesPeopleEdgeModelType } from "./SpeciesPeopleEdgeModel"
import { speciesPeopleEdgeModelPrimitives, SpeciesPeopleEdgeModelSelector } from "./SpeciesPeopleEdgeModel.base"
import { SpeciesFilmsConnectionModel, SpeciesFilmsConnectionModelType } from "./SpeciesFilmsConnectionModel"
import { speciesFilmsConnectionModelPrimitives, SpeciesFilmsConnectionModelSelector } from "./SpeciesFilmsConnectionModel.base"
import { SpeciesFilmsEdgeModel, SpeciesFilmsEdgeModelType } from "./SpeciesFilmsEdgeModel"
import { speciesFilmsEdgeModelPrimitives, SpeciesFilmsEdgeModelSelector } from "./SpeciesFilmsEdgeModel.base"
import { FilmStarshipsConnectionModel, FilmStarshipsConnectionModelType } from "./FilmStarshipsConnectionModel"
import { filmStarshipsConnectionModelPrimitives, FilmStarshipsConnectionModelSelector } from "./FilmStarshipsConnectionModel.base"
import { FilmStarshipsEdgeModel, FilmStarshipsEdgeModelType } from "./FilmStarshipsEdgeModel"
import { filmStarshipsEdgeModelPrimitives, FilmStarshipsEdgeModelSelector } from "./FilmStarshipsEdgeModel.base"
import { FilmVehiclesConnectionModel, FilmVehiclesConnectionModelType } from "./FilmVehiclesConnectionModel"
import { filmVehiclesConnectionModelPrimitives, FilmVehiclesConnectionModelSelector } from "./FilmVehiclesConnectionModel.base"
import { FilmVehiclesEdgeModel, FilmVehiclesEdgeModelType } from "./FilmVehiclesEdgeModel"
import { filmVehiclesEdgeModelPrimitives, FilmVehiclesEdgeModelSelector } from "./FilmVehiclesEdgeModel.base"
import { FilmCharactersConnectionModel, FilmCharactersConnectionModelType } from "./FilmCharactersConnectionModel"
import { filmCharactersConnectionModelPrimitives, FilmCharactersConnectionModelSelector } from "./FilmCharactersConnectionModel.base"
import { FilmCharactersEdgeModel, FilmCharactersEdgeModelType } from "./FilmCharactersEdgeModel"
import { filmCharactersEdgeModelPrimitives, FilmCharactersEdgeModelSelector } from "./FilmCharactersEdgeModel.base"
import { FilmPlanetsConnectionModel, FilmPlanetsConnectionModelType } from "./FilmPlanetsConnectionModel"
import { filmPlanetsConnectionModelPrimitives, FilmPlanetsConnectionModelSelector } from "./FilmPlanetsConnectionModel.base"
import { FilmPlanetsEdgeModel, FilmPlanetsEdgeModelType } from "./FilmPlanetsEdgeModel"
import { filmPlanetsEdgeModelPrimitives, FilmPlanetsEdgeModelSelector } from "./FilmPlanetsEdgeModel.base"
import { PeopleConnectionModel, PeopleConnectionModelType } from "./PeopleConnectionModel"
import { peopleConnectionModelPrimitives, PeopleConnectionModelSelector } from "./PeopleConnectionModel.base"
import { PeopleEdgeModel, PeopleEdgeModelType } from "./PeopleEdgeModel"
import { peopleEdgeModelPrimitives, PeopleEdgeModelSelector } from "./PeopleEdgeModel.base"
import { PlanetsConnectionModel, PlanetsConnectionModelType } from "./PlanetsConnectionModel"
import { planetsConnectionModelPrimitives, PlanetsConnectionModelSelector } from "./PlanetsConnectionModel.base"
import { PlanetsEdgeModel, PlanetsEdgeModelType } from "./PlanetsEdgeModel"
import { planetsEdgeModelPrimitives, PlanetsEdgeModelSelector } from "./PlanetsEdgeModel.base"
import { SpeciesConnectionModel, SpeciesConnectionModelType } from "./SpeciesConnectionModel"
import { speciesConnectionModelPrimitives, SpeciesConnectionModelSelector } from "./SpeciesConnectionModel.base"
import { SpeciesEdgeModel, SpeciesEdgeModelType } from "./SpeciesEdgeModel"
import { speciesEdgeModelPrimitives, SpeciesEdgeModelSelector } from "./SpeciesEdgeModel.base"
import { StarshipsConnectionModel, StarshipsConnectionModelType } from "./StarshipsConnectionModel"
import { starshipsConnectionModelPrimitives, StarshipsConnectionModelSelector } from "./StarshipsConnectionModel.base"
import { StarshipsEdgeModel, StarshipsEdgeModelType } from "./StarshipsEdgeModel"
import { starshipsEdgeModelPrimitives, StarshipsEdgeModelSelector } from "./StarshipsEdgeModel.base"
import { VehiclesConnectionModel, VehiclesConnectionModelType } from "./VehiclesConnectionModel"
import { vehiclesConnectionModelPrimitives, VehiclesConnectionModelSelector } from "./VehiclesConnectionModel.base"
import { VehiclesEdgeModel, VehiclesEdgeModelType } from "./VehiclesEdgeModel"
import { vehiclesEdgeModelPrimitives, VehiclesEdgeModelSelector } from "./VehiclesEdgeModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  films: ObservableMap<string, FilmModelType>,
  species: ObservableMap<string, SpeciesModelType>,
  planets: ObservableMap<string, PlanetModelType>,
  people: ObservableMap<string, PersonModelType>,
  starships: ObservableMap<string, StarshipModelType>,
  vehicles: ObservableMap<string, VehicleModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Root', () => RootModel], ['FilmsConnection', () => FilmsConnectionModel], ['PageInfo', () => PageInfoModel], ['FilmsEdge', () => FilmsEdgeModel], ['Film', () => FilmModel], ['FilmSpeciesConnection', () => FilmSpeciesConnectionModel], ['FilmSpeciesEdge', () => FilmSpeciesEdgeModel], ['Species', () => SpeciesModel], ['Planet', () => PlanetModel], ['PlanetResidentsConnection', () => PlanetResidentsConnectionModel], ['PlanetResidentsEdge', () => PlanetResidentsEdgeModel], ['Person', () => PersonModel], ['PersonFilmsConnection', () => PersonFilmsConnectionModel], ['PersonFilmsEdge', () => PersonFilmsEdgeModel], ['PersonStarshipsConnection', () => PersonStarshipsConnectionModel], ['PersonStarshipsEdge', () => PersonStarshipsEdgeModel], ['Starship', () => StarshipModel], ['StarshipPilotsConnection', () => StarshipPilotsConnectionModel], ['StarshipPilotsEdge', () => StarshipPilotsEdgeModel], ['StarshipFilmsConnection', () => StarshipFilmsConnectionModel], ['StarshipFilmsEdge', () => StarshipFilmsEdgeModel], ['PersonVehiclesConnection', () => PersonVehiclesConnectionModel], ['PersonVehiclesEdge', () => PersonVehiclesEdgeModel], ['Vehicle', () => VehicleModel], ['VehiclePilotsConnection', () => VehiclePilotsConnectionModel], ['VehiclePilotsEdge', () => VehiclePilotsEdgeModel], ['VehicleFilmsConnection', () => VehicleFilmsConnectionModel], ['VehicleFilmsEdge', () => VehicleFilmsEdgeModel], ['PlanetFilmsConnection', () => PlanetFilmsConnectionModel], ['PlanetFilmsEdge', () => PlanetFilmsEdgeModel], ['SpeciesPeopleConnection', () => SpeciesPeopleConnectionModel], ['SpeciesPeopleEdge', () => SpeciesPeopleEdgeModel], ['SpeciesFilmsConnection', () => SpeciesFilmsConnectionModel], ['SpeciesFilmsEdge', () => SpeciesFilmsEdgeModel], ['FilmStarshipsConnection', () => FilmStarshipsConnectionModel], ['FilmStarshipsEdge', () => FilmStarshipsEdgeModel], ['FilmVehiclesConnection', () => FilmVehiclesConnectionModel], ['FilmVehiclesEdge', () => FilmVehiclesEdgeModel], ['FilmCharactersConnection', () => FilmCharactersConnectionModel], ['FilmCharactersEdge', () => FilmCharactersEdgeModel], ['FilmPlanetsConnection', () => FilmPlanetsConnectionModel], ['FilmPlanetsEdge', () => FilmPlanetsEdgeModel], ['PeopleConnection', () => PeopleConnectionModel], ['PeopleEdge', () => PeopleEdgeModel], ['PlanetsConnection', () => PlanetsConnectionModel], ['PlanetsEdge', () => PlanetsEdgeModel], ['SpeciesConnection', () => SpeciesConnectionModel], ['SpeciesEdge', () => SpeciesEdgeModel], ['StarshipsConnection', () => StarshipsConnectionModel], ['StarshipsEdge', () => StarshipsEdgeModel], ['VehiclesConnection', () => VehiclesConnectionModel], ['VehiclesEdge', () => VehiclesEdgeModel]], ['Film', 'Species', 'Planet', 'Person', 'Starship', 'Vehicle'], "js"))
  .props({
    films: types.optional(types.map(types.late((): any => FilmModel)), {}),
    species: types.optional(types.map(types.late((): any => SpeciesModel)), {}),
    planets: types.optional(types.map(types.late((): any => PlanetModel)), {}),
    people: types.optional(types.map(types.late((): any => PersonModel)), {}),
    starships: types.optional(types.map(types.late((): any => StarshipModel)), {}),
    vehicles: types.optional(types.map(types.late((): any => VehicleModel)), {})
  })
  .actions(self => ({
    queryAllFilms(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: FilmsConnectionModelSelector) => FilmsConnectionModelSelector) = filmsConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allFilms: FilmsConnectionModelType}>(`query allFilms($after: String, $first: Int, $before: String, $last: Int) { allFilms(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmsConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryFilm(variables: { id?: string, filmId?: string }, resultSelector: string | ((qb: FilmModelSelector) => FilmModelSelector) = filmModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ film: FilmModelType}>(`query film($id: ID, $filmId: ID) { film(id: $id, filmID: $filmId) {
        ${typeof resultSelector === "function" ? resultSelector(new FilmModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPeople(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: PeopleConnectionModelSelector) => PeopleConnectionModelSelector) = peopleConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPeople: PeopleConnectionModelType}>(`query allPeople($after: String, $first: Int, $before: String, $last: Int) { allPeople(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new PeopleConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPerson(variables: { id?: string, personId?: string }, resultSelector: string | ((qb: PersonModelSelector) => PersonModelSelector) = personModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ person: PersonModelType}>(`query person($id: ID, $personId: ID) { person(id: $id, personID: $personId) {
        ${typeof resultSelector === "function" ? resultSelector(new PersonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPlanets(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: PlanetsConnectionModelSelector) => PlanetsConnectionModelSelector) = planetsConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPlanets: PlanetsConnectionModelType}>(`query allPlanets($after: String, $first: Int, $before: String, $last: Int) { allPlanets(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetsConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPlanet(variables: { id?: string, planetId?: string }, resultSelector: string | ((qb: PlanetModelSelector) => PlanetModelSelector) = planetModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ planet: PlanetModelType}>(`query planet($id: ID, $planetId: ID) { planet(id: $id, planetID: $planetId) {
        ${typeof resultSelector === "function" ? resultSelector(new PlanetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllSpecies(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: SpeciesConnectionModelSelector) => SpeciesConnectionModelSelector) = speciesConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSpecies: SpeciesConnectionModelType}>(`query allSpecies($after: String, $first: Int, $before: String, $last: Int) { allSpecies(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySpecies(variables: { id?: string, speciesId?: string }, resultSelector: string | ((qb: SpeciesModelSelector) => SpeciesModelSelector) = speciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ species: SpeciesModelType}>(`query species($id: ID, $speciesId: ID) { species(id: $id, speciesID: $speciesId) {
        ${typeof resultSelector === "function" ? resultSelector(new SpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllStarships(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: StarshipsConnectionModelSelector) => StarshipsConnectionModelSelector) = starshipsConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allStarships: StarshipsConnectionModelType}>(`query allStarships($after: String, $first: Int, $before: String, $last: Int) { allStarships(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipsConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryStarship(variables: { id?: string, starshipId?: string }, resultSelector: string | ((qb: StarshipModelSelector) => StarshipModelSelector) = starshipModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ starship: StarshipModelType}>(`query starship($id: ID, $starshipId: ID) { starship(id: $id, starshipID: $starshipId) {
        ${typeof resultSelector === "function" ? resultSelector(new StarshipModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllVehicles(variables: { after?: string, first?: number, before?: string, last?: number }, resultSelector: string | ((qb: VehiclesConnectionModelSelector) => VehiclesConnectionModelSelector) = vehiclesConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allVehicles: VehiclesConnectionModelType}>(`query allVehicles($after: String, $first: Int, $before: String, $last: Int) { allVehicles(after: $after, first: $first, before: $before, last: $last) {
        ${typeof resultSelector === "function" ? resultSelector(new VehiclesConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryVehicle(variables: { id?: string, vehicleId?: string }, resultSelector: string | ((qb: VehicleModelSelector) => VehicleModelSelector) = vehicleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ vehicle: VehicleModelType}>(`query vehicle($id: ID, $vehicleId: ID) { vehicle(id: $id, vehicleID: $vehicleId) {
        ${typeof resultSelector === "function" ? resultSelector(new VehicleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
