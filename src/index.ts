import express, { Application } from "express";


export default class Server {
  constructor(app: Application) {
    
  }

  private config(app: Application): void {
    

    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}