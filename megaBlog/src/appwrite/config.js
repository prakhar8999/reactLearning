import { Client, ID, Databases, Storage, Query } from "appwrite";
import confVariable from '../confVariable/confVariable.js'

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(confVariable.appwriteUrl) // Your API Endpoint
            .setProject(confVariable.projectId);   // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImg, status, userId}){
        try {
            return await this.databases.createDocument(
                confVariable.databaseId,
                confVariable.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(
                confVariable.databaseId,
                confVariable.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                confVariable.databaseId,
                confVariable.collectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
        
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                confVariable.databaseId,
                confVariable.collectionId,
                slug
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getActivePost(){
        try {
            return await this.databases.listDocuments(
                confVariable.databaseId,
                confVariable.collectionId,
                [
                    Query.equal("status","active")
                ]
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    //flie upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                confVariable.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    //flie delete
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                confVariable.bucketId,
                fileId
            )
            return true;
        }
        catch (error) {
            throw error;
            return false;
        }
    }

    //get File Preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            confVariable.bucketId,
            fileId
        )
    }

}

const serviceObj = new Service();

export default serviceObj;