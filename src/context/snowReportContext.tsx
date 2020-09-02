import * as React from "react"
import { ISnowReportData } from "../types/api"
import { getData } from '../util/util'

// type Action = { type: 222036 }
// type Dispatch = (action: Action) => void
// type State = { snowReport: ISnowReportData }

// const SnowReportStateContext = React.createContext<State | undefined>(undefined)
// const SnowReportDispatchContext = React.createContext<Dispatch | undefined>(
// 	undefined,
// )

// function snowReportReducer(state: any, action: any) {
// 	switch (action.type) {
// 		case 222036: {
// 			return { report: state.westendorf }
// 		}
// 		case 222013: {
// 			return { report: state.kitzbuhel }
// 		}
// 	}
// }

const snowReportContext = React.createContext({})

const initialState: ISnowReportData = {
	conditions: "",
	lastsnow: "",
	lastsnow_cm: 0,
	lastsnow_in: 0,
	lowersnow_cm: 0,
	lowersnow_in: 0,
	newsnow_cm: 0,
	newsnow_in: 0,
	pctopen: 0,
	reportdate: "",
	reporttime: "",
	resortcountry: "",
	resortid: 0,
	resortname: "Westendorf",
	uppersnow_cm: 0,
	uppersnow_in: 0,
}