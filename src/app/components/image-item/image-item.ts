import { Component, input } from '@angular/core';
import { Image } from '../../interfaces/image';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-item',
  imports: [NgOptimizedImage],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {
  imageData = input.required<Image>();

  isFeatured = input<boolean>(false);
}
