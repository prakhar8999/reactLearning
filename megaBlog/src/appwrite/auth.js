import { Client, Account, ID } from "appwrite";
import confVariable  from './confVariable/confVariable'


export class authService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(confVariable.appwriteUrl) // Your API Endpoint
            .setProject(confVariable.projectId);   // Your project ID
        this.account = new Account(this.client);

    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await(this.account.create(ID.unique(), email, password, name))
            if (userAccount) {
                //call another method future plan
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
            return null;
        }
        
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authServiceObj =  new authService();

export default authServiceObj