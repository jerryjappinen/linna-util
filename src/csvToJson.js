import csv from './csv'

// https://www.npmjs.com/package/parse-csv#parser-options
export default (csvData, parseHeaders, optionsInput) => {
  const opts = optionsInput || {}

  if (parseHeaders) {
    return csv.toJSON(csvData, {
      headers: {
        included: true
      },
      ...opts
    })
  }

  const parser = new csv.Parser(opts)
  const { data } = parser.parse(csvData)
  return data
}
