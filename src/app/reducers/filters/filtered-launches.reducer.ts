import {
  FilteredLaunchesActions, FilteredLaunchesActionTypes
} from './filtered-launches.actions';

export interface State {
  filteredLaunches: any[];
}

export const initialState: State = {
  filteredLaunches: []
};

export function reducer(state = initialState, action: FilteredLaunchesActions): State {
  switch (action.type) {
    case FilteredLaunchesActionTypes.LoadLaunchesByAgency:
      return state;
    case FilteredLaunchesActionTypes.LoadLaunchesByMission:
      return state;
    case FilteredLaunchesActionTypes.LoadLaunchesByStatus:
      return state;
    case FilteredLaunchesActionTypes.LaunchesLoaded:
      state.filteredLaunches = action.payload;
      return {...state};
    case FilteredLaunchesActionTypes.LaunchesNotLoaded:
      return state;
    default:
      return state;
  }
}
