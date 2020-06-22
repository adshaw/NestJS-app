import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './create-user.dto';

export type UserObj = any;

@Injectable()
export class UserService {

  private readonly users: UserObj[];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<UserObj | undefined> {
    const user = this.users.find(user => user.username === username);
    return user;
  }

  async getAllUsers(): Promise<User[]>{
    const users: User[] = await this.userModel.find().exec();
    return users;
  }

  // Get a single customer
  async getUser(email): Promise<User> {
    const user = await this.userModel.find(user => user.email === email);
    return user[0];
  }

  async addUser(createUserDTO: CreateUserDTO): Promise<User>{
    const newUser = await new this.userModel(createUserDTO);
    return newUser.save();
  }

}
