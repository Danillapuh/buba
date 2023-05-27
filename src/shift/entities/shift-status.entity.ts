import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShiftStatus {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
