import { Component, OnInit } from "@angular/core";
import { ItemService } from "../item.service";

interface Item{
    _id?: string;
    name: string;
    description: string;
}

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
    items: Item[] = [];
    newItem: Item = { name: '', description: ''};

    constructor(private itemService: ItemService) {}

    ngOnInit(): void {
        this.itemService.getItems().subscribe((data) => {
            this.items = data; 
        });
    }

    addItem() {
        this.itemService.addItem(this.newItem).subscribe((item) => {
            this.items.push(item);
            this.newItem = { name: '', description: '' };
        });
    }
}