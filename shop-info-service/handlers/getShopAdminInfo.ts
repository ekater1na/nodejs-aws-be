import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const getShopAdminInfo: APIGatewayProxyHandler = async (event) => {
    console.log('lambda event', event);
    
  return {
    statusCode: 200,
    body: JSON.stringify({
        shopAdminInfo: 'Katia',
    }),
  };
}
