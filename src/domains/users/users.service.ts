import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.UserModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    return await this.UserModel.findOne({ username }); // Use { username } shorthand for { username: username }
  }
}
