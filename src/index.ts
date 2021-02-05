import { Handler, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import axios from 'axios'

type WolframResult = {
	input: string
	parseType: string
	waPath: string
	summaryBoxPath: string
}

type WolframResponse = {
	query: string
	instantMath: null
	results: WolframResult[]
}

const status = (statusCode: number) => ({
	text: (data: string) => ({
		statusCode,
		headers: {
			'Content-Type': 'text/plain',
		},
		body: data,
	}),
	json: (data: unknown) => ({
		statusCode,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}),
})

export const handler: Handler<APIGatewayEvent, APIGatewayProxyResult> = async (req) => {
	try {
		const query = req.queryStringParameters?.q
		const response = await axios.get<WolframResponse>(`https://www.wolframalpha.com/n/v1/api/autocomplete/?i=${query}`)
		if (response.data) {
			const data = response.data.results.map((d) => d.input)
			return status(200).json([query, data])
		}
		return status(200).text('')
	} catch (err) {
		const error = err as Error
		console.log(error)
		return status(500).text(error.message)
	}
}
