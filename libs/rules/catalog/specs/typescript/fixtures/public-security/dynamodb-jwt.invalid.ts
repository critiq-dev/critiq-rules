new QueryCommand(req.body.filter);
DD_RUM.init({ trackUserInteractions: true });
expressjwt({ secret: getSecret() });

