import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent {
  iconList: IconDefinition[] = []
  displayedColumns: string[] = ['icon', 'name', 'property1', 'property2'];
  dataSource = new MatTableDataSource<IconDefinition>(this.iconList)

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private dialog: MatDialog){
    console.log('List component created')
    this.iconList = Object.values(Icons).filter((el: any) => el.iconName) as IconDefinition[]
    this.dataSource = new MatTableDataSource<IconDefinition>(this.iconList)
    console.log('End List component constructor')

  }


  ngAfterViewInit() {
    console.log('List component afterView')
    if(this.paginator) this.dataSource.paginator = this.paginator;
    console.log('End List component afterView')
  }

  toCamelCase(value: string): string {
    if (!value) return '';

    const words = value.split('-');
    const camelCasedWords = words.map((word, index) => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalizedWord;
    });

    return camelCasedWords.join('');
  }

}
