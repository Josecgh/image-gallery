import { Component, signal } from '@angular/core';
import { Image } from '../../interfaces/image';
import { ImageItem } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  images = signal<Image[]>([
    {
      id: "1",
      src: 'https://picsum.photos/id/237/200/300',
      alt: 'Cachorro de labrador negro'
    },
    {
      id: "2",
      src: 'https://picsum.photos/id/238/200/300',
      alt: 'Vista panorámica de una ciudad'
    },
    {
      id: "3",
      src: 'https://picsum.photos/id/239/200/300',
      alt: 'Diente de león con gotas de rocío'
    }
  ]);

  eliminarFoto(idBorrar: string): void {
    this.images.update(arrayActual => arrayActual.filter(img => img.id !== idBorrar));
  }

  selectedImageIds = signal<Set<string>>(new Set());

  toggleSelection(id: string) {
    this.selectedImageIds.update(currentIds => {
      const newSet = new Set(currentIds); // Crea una nueva referencia para la reactividad
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }
}
