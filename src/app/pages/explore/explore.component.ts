import { Component, OnInit } from '@angular/core';
import { MyApiService } from './../../services/my-api.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  providers: [MyApiService],
})
export class ExploreComponent implements OnInit {
  data: any[] = []; // Datos principales
  imageCache: Map<number, string> = new Map(); // Cache para URLs de imágenes de armas
  armaduraCache: Map<number, string> = new Map(); // Cache para URLs de imágenes de armaduras exóticas
  claseCache: Map<number, string> = new Map(); // Cache para URLs de imágenes de clases
  subclaseCache: Map<number, string> = new Map(); // Cache para URLs de imágenes de subclases

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  handleClick() {
    
  }

  private loadData(): void {
    this.myApiService.getDataBuilds().subscribe(builds => {
      this.data = builds;

      // Cargar los detalles relacionados
      this.data.forEach(item => {
        this.getArmaImgUrl(item.armaPrincipalId).subscribe(imgUrl => item.armaPrincipalImgUrl = imgUrl);
        this.getArmaImgUrl(item.armaSecundariaId).subscribe(imgUrl => item.armaSecundariaImgUrl = imgUrl);
        this.getArmaImgUrl(item.armaTerciariaId).subscribe(imgUrl => item.armaTerciariaImgUrl = imgUrl);
        this.getArmaduraExoticaImgUrl(item.armaduraExoticaId).subscribe(imgUrl => item.armaduraExoticaImgUrl = imgUrl);
        this.getClaseImgUrl(item.claseId).subscribe(imgUrl => item.claseImgUrl = imgUrl);
        this.getSubclaseImgUrl(item.subclaseId).subscribe(imgUrl => item.subclaseImgUrl = imgUrl);
      });
    });
  }

  private getArmaImgUrl(id: number): Observable<string> {
    if (this.imageCache.has(id)) {
      return of(this.imageCache.get(id)!);
    }

    return this.myApiService.getDataArmasById(id).pipe(
      map(data => {
        const imgUrl = data.imgUrl || 'default-image.png';
        this.imageCache.set(id, imgUrl);
        return imgUrl;
      }),
      catchError(() => of('default-image.png'))
    );
  }

  private getArmaduraExoticaImgUrl(id: number): Observable<string> {
    if (this.armaduraCache.has(id)) {
      return of(this.armaduraCache.get(id)!);
    }

    return this.myApiService.getDataArmadurasExoticasById(id).pipe(
      map(data => {
        const imgUrl = data.imgUrl || 'default-image.png';
        this.armaduraCache.set(id, imgUrl);
        return imgUrl;
      }),
      catchError(() => of('default-image.png'))
    );
  }

  private getClaseImgUrl(id: number): Observable<string> {
    if (this.claseCache.has(id)) {
      return of(this.claseCache.get(id)!);
    }

    return this.myApiService.getDataClasesById(id).pipe(
      map(data => {
        const imgUrl = data.imgUrl || 'default-image.png';
        this.claseCache.set(id, imgUrl);
        return imgUrl;
      }),
      catchError(() => of('default-image.png'))
    );
  }

  private getSubclaseImgUrl(id: number): Observable<string> {
    if (this.subclaseCache.has(id)) {
      return of(this.subclaseCache.get(id)!);
    }

    return this.myApiService.getDataSubclasesById(id).pipe(
      map(data => {
        const imgUrl = data.imgUrl || 'default-image.png';
        this.subclaseCache.set(id, imgUrl);
        return imgUrl;
      }),
      catchError(() => of('default-image.png'))
    );
  }
}
