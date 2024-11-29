// export default {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('ToDos', {
//       todo_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//       },
//       title: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       description: {
//         type: Sequelize.TEXT,
//         allowNull: true,
//       },
//       status: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       due_date: {
//         type: Sequelize.DATE,
//         allowNull: true,
//       },
      // createdAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // },
      // updatedAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // },
//     });
//   },

//   async down(queryInterface) {
//     await queryInterface.dropTable('ToDos');
//   },
// };

import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    todo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  return Todo;
};
