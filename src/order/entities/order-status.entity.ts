import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { DishItem } from "./dish-item.entity";

@Entity()
export class OrderStatus {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
    
