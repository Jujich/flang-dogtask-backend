import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class DogapiService {
  private DefaultApiInstance: AxiosInstance;

  constructor() {
    const baseURL = 'https://random.dog/';
    const defaultConfig = {
      baseURL,
    };
    this.DefaultApiInstance = axios.create(defaultConfig);
  }
  async getAllDogs() {
    const dogs = await this.DefaultApiInstance.get('/doggos');
    return dogs.data;
  }
}
