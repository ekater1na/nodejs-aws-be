import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const getShopInfo: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      shopName: 'MyShop',
      workingHours: '00-24',
    }),
  };
}
