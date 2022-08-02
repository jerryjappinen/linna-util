import csv from './csv'

export default (csvData, headersIncluded) => {
  const json = csv.toJSON(csvData, {
    headers: {
      included: headersIncluded
    }
  })

  return json
}
