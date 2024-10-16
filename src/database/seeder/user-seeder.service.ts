import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async seed() {
    const users = [
      { name: 'user1', email: 'user1@gmail.com' },
      { name: 'user2', email: 'user2@gmail.com' },
    ];

    for (const user of users) {
      await this.userRepository.save(user);
    }

    console.log('Users seeded!');
  }
}
