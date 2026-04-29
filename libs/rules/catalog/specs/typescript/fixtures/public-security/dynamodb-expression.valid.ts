const client = new AWS.DynamoDB.DocumentClient();
const scanInput = {
  FilterExpression: 'pk = :pk',
  ExpressionAttributeValues: {
    ':pk': 'user#1',
  },
};

function handler() {
  client.scan(scanInput);
}
