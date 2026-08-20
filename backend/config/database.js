import mongoose from 'mongoose';

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.warn('MONGODB_URI is not set. Server will start without MongoDB connection.');
        return;
    }

    const maxRetries = 5;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            await mongoose.connect(uri);
            console.log('MongoDB Connected Successfully');
            return;
        } catch (error) {
            attempt += 1;
            console.error(`MongoDB Connection attempt ${attempt} failed:`, error);

            if (attempt >= maxRetries) {
                console.warn('Max retries reached. Continuing without MongoDB connection.');
                return;
            }

            const delay = Math.min(1000 * 2 ** (attempt - 1), 30000); // exponential backoff up to 30s
            console.log(`Retrying MongoDB connection in ${delay}ms...`);
            await wait(delay);
        }
    }
};

export default connectDB;