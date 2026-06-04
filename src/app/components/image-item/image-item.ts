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
  isSelected = input<boolean>(false);

  deleteImage = output<string>();
  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation();

    this.deleteImage.emit(this.image().id);
  }

  selectImage = output<string>();
  onImageClick() {
    this.selectImage.emit(this.image().id);
  }

}
