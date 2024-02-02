import mongoose, { connection } from 'mongoose';

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;
        connection.on('Connected',()=>{
            console.log('MONGODB connected successfully');
        })

        connection.on('error',(err)=>{
            console.log('Connection error');
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }
}