const client = new AWS.DynamoDB.DocumentClient();

function handler(req) {
  client.scan({
    FilterExpression: req.query.expression,
  });
}
