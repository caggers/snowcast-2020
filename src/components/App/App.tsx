import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { AxiosError } from 'axios'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ITodaysForecast, ServerError, option, Forecast } from '../../types/api'
import { theme } from '../../util/themes'
import Error from '../Error/Error'
import Content from './Content'
import Loading from '../Loading/Loading'
import { useGetData } from './useGetData'

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
	const { state: snowReport, setResortID: setSnowReportID } = useGetData('snowreport', 222036)
	const { state: resortForecast, setResortID: setResortForecastID } = useGetData(
		'resortforecast',
		222036,
		6,
		1
	)

	const [todaysForecast, setTodaysForecast] = useState<ITodaysForecast>({
		base: { wx_desc: '' },
		upper: { wx_desc: '' },
	})
	useEffect(() => {
		const getResortForecast = async () => {
			if (!resortForecast?.resortForecastData) {
				return
			}
			const data = resortForecast.resortForecastData
			const morningForecast = data.forecast.find((item: Forecast) => item.time === '07:00')

			const forecast: ITodaysForecast = {
				base: morningForecast!.base,
				resortid: data.id,
				resortname: data.name,
				time: morningForecast!.time,
				upper: morningForecast!.upper,
			}
			setTodaysForecast(forecast)
		}

		getResortForecast()
	}, [resortForecast])

	const [error, setError] = useState<AxiosError<ServerError> | undefined>()
	useEffect(() => {
		snowReport.error ? setError(snowReport.error) : null
		resortForecast.error ? setError(resortForecast.error) : null
	}, [snowReport, resortForecast])

	const [loading, setLoading] = useState<boolean>(false)
	// useEffect(() => {
	// 	console.log(snowReport.isLoading)
	// 	snowReport.isLoading ? setLoading(snowReport.isLoading) : null
	// 	resortForecast.isLoading ? setLoading(resortForecast.isLoading) : null
	// }, [])

	const handleClickOption = async (option: option) => {
		setSnowReportID(option.resortid)
		setResortForecastID(option.resortid)
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{loading && <Loading />}
				{snowReport.snowReportData && (
					<Content
						handleClickOption={handleClickOption}
						snowReport={snowReport.snowReportData}
						weatherDesc={todaysForecast}
					/>
				)}
				{error && <Error error={error} />}
			</ThemeProvider>
		</>
	)
}

export default App
