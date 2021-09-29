/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
import User from "./User";

  
/**
 * Define attributes
 */
const Post = db.sequelize.define('Post',{
Titulo: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: false,
},
Descr: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: false,
},
u: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
    references: {
        model: User,
        key: 'id'
    }
},
});

Post.sync();

export default Post;