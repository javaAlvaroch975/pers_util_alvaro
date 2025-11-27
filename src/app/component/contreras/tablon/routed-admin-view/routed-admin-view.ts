import { Component } from '@angular/core';
import { ITablon } from '../../model/tablon';
import { TablonService } from '../../service/tablon';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UnroutedAdminView } from "../unrouted-admin-view/unrouted-admin-view";

@Component({
  selector: 'app-routed-admin-view',
  imports: [UnroutedAdminView],
  templateUrl: './routed-admin-view.html',
  styleUrl: './routed-admin-view.css',
})
export class RoutedAdminView {
  oTablon: ITablon | null = null;

  constructor(private oTablonService: TablonService, private route: ActivatedRoute) {
    // Obtener el ID del tablon desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    const tablonId = idParam ? Number(idParam) : NaN;
    if (isNaN(tablonId)) {
      console.error('Invalid tablon id:', idParam);
      return;
    }
    this.getTablon(tablonId);
  }

  ngOnInit() { }

  getTablon(tablonId: number) {
    this.oTablonService.get(tablonId).subscribe({
      next: (data: ITablon) => {
        this.oTablon = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching tablon:', error);
      },
    });
  }
}
