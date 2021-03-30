import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date = new Date();

    @UpdateDateColumn()
    updated_at: Date = new Date();

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column(({ nullable: true }))
    lastName?: string;

    @Column(({ nullable: true }))
    username: string | null;
    

}



// import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

// @Entity()
// export class User {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     username: string;

    
// }