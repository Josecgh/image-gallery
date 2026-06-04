import { Component, input, output } from '@angular/core';
import { Image } from '../../interfaces/image';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-item',
  imports: [NgOptimizedImage],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input<boolean>(false);
  isSelected = input(false);

  deleteImage = output<string>();
  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation();

    this.deleteImage.emit(this.image().id);
  }
}
