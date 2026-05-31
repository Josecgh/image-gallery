import { Component, input } from '@angular/core';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {
  imageData = input.required<Image>();

  isFeatured = input<boolean>(false);
}
