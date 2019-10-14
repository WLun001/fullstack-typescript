import * as Sequelize from 'sequelize';

export const sequelize = new Sequelize.Sequelize('mysql://root:apple123@IP_ADDRESS/sampleApp', {});
// export const sequelize = new Sequelize.Sequelize(db, username, password, {
//   host: 'HOST',
//   dialect: "mysql",
//   port: 3306,
//   retry: {
//     match: [
//       /ETIMEDOUT/,
// 			/EHOSTUNREACH/,
// 			/ECONNRESET/,
// 			/ECONNREFUSED/,
// 			/ETIMEDOUT/,
// 			/ESOCKETTIMEDOUT/,
// 			/EHOSTUNREACH/,
// 			/EPIPE/,
// 			/EAI_AGAIN/,
// 			/SequelizeConnectionError/,
// 			/SequelizeConnectionRefusedError/,
// 			/SequelizeHostNotFoundError/,
// 			/SequelizeHostNotReachableError/,
// 			/SequelizeInvalidConnectionError/,
// 			/SequelizeConnectionTimedOutError/
//     ],
//     max: 5
//   }
// });
