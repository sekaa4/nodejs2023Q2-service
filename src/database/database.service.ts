import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { Track } from 'src/track/entities/track.entity';
import { UserResp } from 'src/database/interface/user.interface';
import { User } from 'src/user/entities/user.entity';
import { Favorites } from './interface/favorites.interface';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { IDatabaseService } from 'src/core/abstracts/database-service.abstract';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { InMemoryGenericRepository } from './in-memory/in-memory-generic-repository';
import { async } from 'rxjs';
import { CreateAlbumDto } from 'src/album/dto/create-album.dto';
import { CreateArtistDto } from 'src/artist/dto/create-artist.dto';
import { CreateTrackDto } from 'src/track/dto/create-track.dto';

@Injectable()
export class DatabaseService implements IDatabaseService {
  users = new InMemoryGenericRepository<User, UpdateUserDto>([]);
  readonly artists = new InMemoryGenericRepository<Artist, CreateArtistDto>([]);
  readonly albums = new InMemoryGenericRepository<Album, CreateAlbumDto>([]);
  readonly tracks = new InMemoryGenericRepository<Track, CreateTrackDto>([]);

  // this.users;

  // readonly favorites = new InMemoryGenericRepository<
  //   Favorites,
  //   Artist | Album | Track
  // >({
  //   artists: [],
  //   albums: [],
  //   tracks: [],
  // });

  // async addUser(payload: User): Promise<User> {
  //   try {
  //     this.users.push({ ...payload });

  //     return payload;
  //   } catch (error) {
  //     throw new InternalServerErrorException(
  //       'Can not add user, try again later',
  //     );
  //   }
  // }

  // async findAllUser() {
  //   try {
  //     const users = [...this.users];
  //     const resUsers = users.map((user) => {
  //       delete user.password;
  //       return user;
  //     });
  //     return resUsers;
  //   } catch (error) {
  //     throw new InternalServerErrorException(
  //       'Something wrong, try again later',
  //     );
  //   }
  // }

  // async findOneUser(id: string) {
  //   try {
  //     const users = [...this.users];
  //     const resUser = users.find((user) => user.id === id);

  //     if (!resUser) throw new NotFoundException(`User ${id} not found`);

  //     return resUser;
  //   } catch (error) {
  //     if (error.status === HttpStatus.NOT_FOUND) throw error;

  //     throw new InternalServerErrorException(
  //       'Something wrong, try again later',
  //     );
  //   }
  // }

  // async updateUser(id: string, payload: UpdateUserDto) {
  //   try {
  //     const { newPassword, oldPassword } = payload;
  //     const users = this.users;
  //     const user = users.find((user) => user.id === id);

  //     if (!user) throw new NotFoundException(`User ${id} not found`);

  //     if (user.password === oldPassword) {
  //       user.password = newPassword;
  //       user.updatedAt = Date.now();
  //       user.version++;

  //       return { ...user };
  //     }

  //     throw new ForbiddenException(
  //       `User ${id} with oldPassword "${oldPassword}" is wrong, please enter correct password`,
  //     );
  //   } catch (error) {
  //     if (
  //       error.status === HttpStatus.NOT_FOUND ||
  //       error.status === HttpStatus.FORBIDDEN
  //     )
  //       throw error;

  //     throw new InternalServerErrorException(
  //       'Something wrong in the server, try again later',
  //     );
  //   }
  // }

  // async removeUser(id: string) {
  //   try {
  //     const users = this.users;
  //     const userIndex = users.findIndex((user) => user.id === id);

  //     if (!~userIndex) throw new NotFoundException(`User ${id} not found`);

  //     users.splice(userIndex, 1);
  //   } catch (error) {
  //     if (error.status === HttpStatus.NOT_FOUND) throw error;
  //     throw new InternalServerErrorException(
  //       'Something wrong in the server, try again later',
  //     );
  //   }
  // }
}
