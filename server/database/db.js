import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://iuc510:silpi123@blogapp-shard-00-00.3weny.mongodb.net:27017,blogapp-shard-00-01.3weny.mongodb.net:27017,blogapp-shard-00-02.3weny.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-viwejt-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;