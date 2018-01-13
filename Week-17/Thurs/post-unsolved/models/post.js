module.exports = function(sequelize, DataType) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining

    const Blogger = sequelize.define("blogger", {
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1, 160]
            }
        }, 
        body: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataType.STRING,
            defaultValue: "Personal"
        }
    });

    return Blogger
};
