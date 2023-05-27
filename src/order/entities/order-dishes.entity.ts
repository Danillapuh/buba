import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { DishItem } from "./dish-item.entity";

@Entity()
export class OrderDishes {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Order, {onDelete: 'CASCADE'})
    @JoinColumn()
    order: Order

    @ManyToOne(()=>DishItem, {onDelete: 'CASCADE'})
    @JoinColumn()
    dish: DishItem

    @Column({type: 'int'})
    amount: number
}
    
