import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { UserRole } from "./role.entity";
import { UserProfile } from "./user-profile.entity";
import { WorkShift } from "src/shift/entities/shift.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: true})
    photo_url: string

    @Column()
    name: string

    @OneToOne(()=>UserProfile, {onDelete: 'CASCADE', cascade: true})
    @JoinColumn()
    profile: UserProfile

    @ManyToMany(()=>WorkShift, (shift)=>shift.users)
    shifts: WorkShift[]

    @ManyToOne(()=>UserRole, {onDelete: 'CASCADE'})
    @JoinColumn()
    role: UserRole

}
