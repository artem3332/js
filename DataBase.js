const { Sequelize } = require('sequelize')
const {DataTypes} = require("sequelize");



const sequelize = new Sequelize('node_js', 'postgres', 'root', {
    host: 'localhost',
    dialect:  'postgres',
    logging:false
})



const User=sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            serial: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            unique: true
        },
        created_at: {
            type: DataTypes.TIME,
            freezeTableName: true,
            autoIncrement: false,
        }

    }, {
        modelName: 'users',
        timestamps: false
    })
 const Chat=sequelize.define('chats', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                serial: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                autoIncrement: false,
                unique: true
            },
            created_at: {
                type: DataTypes.TIME,
                autoIncrement: false,
            }

        }, {
            modelName: 'chats',
            freezeTableName: true,
            timestamps: false
        })

const Message=sequelize.define('messages',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    id_user:{
        type:DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        }


    },
    id_chat:{
        type:DataTypes.INTEGER,
        references:{
            model:'chats',
            key:'id'
        }

    },
    text:{
        type:DataTypes.STRING,
        autoIncrement:false,
    },
    created_at:{
        type:DataTypes.TIME,
        freezeTableName: true,
        autoIncrement:false,
    },


},{
    modelName: 'messages',
    timestamps: false
})

const User_Chat=sequelize.define('user_chats',{

        id_user:{
            type:DataTypes.INTEGER,
            references:{
                model:'users',
                key:'id'
            }
        },
        id_chat:{
            type:DataTypes.INTEGER,
            references:{
                model:'chats',
                key:'id'
            }
        }

    },{
        modelName: 'user_chats',
        freezeTableName: true,
        timestamps: false
    })

User.belongsToMany(Chat, {
    through: User_Chat,
    foreignKey: 'id_user'
});
Chat.belongsToMany(User, {
    through: User_Chat,
    foreignKey: 'id_chat'
});
User.hasMany(Message,{
    foreignKey: 'id_user'
})
Chat.hasMany(Message,{
    foreignKey: 'id_chat'
})


module.exports = {
    sequelize:sequelize,
    user:User,
    chat:Chat,
    message:Message,
    user_chat:User_Chat
}

