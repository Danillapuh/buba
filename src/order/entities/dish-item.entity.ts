import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DishItem {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: 'text', nullable: true})
    image_url: string
}
