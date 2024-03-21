import {legacy_createStore} from 'redux'
import {CountReducer} from "../reducer/CountReducer"

export let store= legacy_createStore(CountReducer)