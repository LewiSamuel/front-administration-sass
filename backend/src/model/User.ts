/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';

  
/**
 * Define attributes
 */
const User = db.sequelize.define('User',{
Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: false,
},
Email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
},
Password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: false,
},
});

User.sync();

export default User;