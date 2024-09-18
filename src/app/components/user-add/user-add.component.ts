import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
})
export class UserAddComponent {
    
    user = {
        name: '',
        email: '',
        age: null
    };

    constructor(private userService: UserService) { }

    addUser(): void {
        this.userService.addUser(this.user).subscribe(result => {
            console.log('Usuário adicionado com sucesso: ', result);
        });
    }
}