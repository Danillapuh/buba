import { WorkShift } from "src/shift/entities/shift.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderDishes } from "./order-dishes.entity";
import { User } from "src/user/entities/user.entity";
import { OrderStatus } from "./order-status.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>WorkShift, {onDelete: 'CASCADE'})
    @JoinColumn()
    shift: WorkShift

    @OneToMany(()=>OrderDishes, (dish)=>dish.order)
    dishes: OrderDishes[]

    @ManyToOne(()=>User, {onDelete: 'CASCADE'})
    cookedBy: User

    @ManyToOne(()=>User, {onDelete: 'CASCADE'})
    @JoinColumn()
    addedBy: User

    @ManyToOne(()=>OrderStatus, {onDelete: 'CASCADE'})
    @JoinColumn()
    status: OrderStatus
}
