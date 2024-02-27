import {Client, Databases} from 'appwrite'
import confVariable from '../confVariable/confVar.js'
import { ID } from 'appwrite';

export class Service {
    client = new Client()
    databases;

    constructor() {
        this.client
            .setEndpoint(confVariable.appwriteUrl) // Your API Endpoint
            .setProject(confVariable.projectId);   // Your project ID
        this.databases = new Databases(this.client);
    }

    async createPost({name, pinCode}){
        try {
            return await this.databases.createDocument(
                confVariable.databaseId,
                confVariable.collectionId,
                ID.unique(),
                {
                    name,pinCode
                }
            )
        }  catch (error) {
            throw error;
        }
    }
}

    const serviceObj = new Service();

export default serviceObj;