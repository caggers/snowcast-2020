import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { getData } from '../../util/util'
import { AxiosResponse, AxiosError } from 'axios'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {
	ISnowReportData,
	ITodaysForecast,
	ServerError,
	option,
} from '../../types/api'
import { theme } from '../../util/themes'
import Error from '../Error/Error'
import Content from './Content'
import Loading from '../Loading/Loading'
import { useDataApi } from './useGetData'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(238, 238, 238, 0.5);
		color: white;
		font-family: 'Public Sans', sans-serif;
  }
	@media screen and (max-width: 600px) {
  body {
    font-size: ${theme.fontSizes.fontS};
  }
}
`

const App: FunctionComponent = () => {
	const { state: snowReport } = useDataApi('snowreport', 222036)
	const { state: resortForecast } = useDataApi('resortforecast', 222036, 6, 1)
	// const { setResort } = useDataApi()

	const [forecast, setForecast] = useState<ITodaysForecast>({
		base: { wx_desc: '' },
		upper: { wx_desc: '' },
	})
	useEffect(() => {
		if (resortForecast.data) {
			const morningForecast = resortForecast.data.forecast.find(
				(item: ITodaysForecast) => item.time === '07:00'
			)
			const forecast: ITodaysForecast = {
				base: morningForecast.base,
				resortid: resortForecast.data.id,
				resortname: resortForecast.data.name,
				time: morningForecast.time,
				upper: morningForecast.upper,
			}
			setForecast(forecast)
		}
	}, [resortForecast])

	const [error, setError] = useState<AxiosError<ServerError> | undefined>()
	useEffect(() => {
		snowReport.error
			? setError(snowReport.error)
			: resortForecast.error
			? setError(resortForecast.error)
			: null
	}, [resortForecast.error, snowReport.error])

	const handleClickOption = async (option: option) => {
		setResort(option.resortid)
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{snowReport.isLoading && <Loading />}
				{!error && !snowReport.isLoading && (
					<Content
						handleClickOption={handleClickOption}
						snowReport={snowReport.data}
						weatherDesc={forecast}
					/>
				)}
				{error && <Error error={error} />}
			</ThemeProvider>
		</>
	)
}

export default App
