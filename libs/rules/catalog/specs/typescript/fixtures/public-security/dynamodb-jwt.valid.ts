const query = {
  KeyConditionExpression: 'pk = :pk',
  ExpressionAttributeValues: { ':pk': 'user#1' },
};

new QueryCommand(query);
DD_RUM.init({ trackUserInteractions: false });
expressjwt({ secret: getSecret(), isRevoked: revokeJwt });

