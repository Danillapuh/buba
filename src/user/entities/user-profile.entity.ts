import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne } from "typeorm";
import { UserRole } from "./role.entity";
import { User } from "./user.entity";

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    password: string

    @Column()
    login: string

    @OneToOne(()=>User, (u)=>u.profile)
    user: User

    @ManyToOne(()=>UserRole, {onDelete: 'CASCADE'})
    role: UserRole
}
