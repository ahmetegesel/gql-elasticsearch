export function transformSearchResponse(response) {
  return response.body.hits.hits.map(hit => ({
    id: hit._id,
    ...hit._source
  }));
}

export function transformGetResponse(response) {
  return response.body._source;
}
