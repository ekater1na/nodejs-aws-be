import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'shop-info-service-dev',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'eu-west-1',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    getShopInfo: {
      handler: 'handler.getShopInfo',
      events: [
        {
          http: {
            method: 'get',
            path: 'shop-info',
            cors: true,
          }
        }
      ]
    },
    getShopAdminInfo: {
      handler: 'handler.getShopAdminInfo',
      events: [
        {
          http: {
            method: 'get',
            path: 'shop-admin-info',
            cors: true,
          }
        }
      ]
    }
}
}

module.exports = serverlessConfiguration