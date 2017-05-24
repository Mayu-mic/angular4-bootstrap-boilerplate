import {StoreModule, combineReducers} from '@ngrx/store';

const reducer = combineReducers(
    {
    }
);

export const store = StoreModule.provideStore(reducer);
