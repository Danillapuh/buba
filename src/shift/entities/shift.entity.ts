import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShiftStatus } from "./shift-status.entity";

@Entity()
export class WorkShift {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'timestamp'})
    dateStart: string

    @Column({type: 'datetime'})
    dateEnd: string

    @ManyToMany(()=>User, (user)=>user.shifts)
    @JoinTable()
    users: User[]

    @OneToMany(()=>Order, (order)=>order.shift)
    orders: Order[]

 /*    @Column({type: 'time'})
    times: number */

    @ManyToOne(()=>ShiftStatus, {onDelete: 'CASCADE'})
    @JoinColumn()
    status: ShiftStatus
}
