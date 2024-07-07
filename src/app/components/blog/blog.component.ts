import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newPost: IPost = {title: '', imageURL: '', content: '', date: null};
  arrPosts: IPost[] = [
    {
      title: 'Aviso por lluvia y tormentas eléctricas en 14 provincias',
      imageURL: 'https://phantom-elmundo.unidadeditorial.es/fa2fb5d912e303cc0a44b1fceab4252b/crop/614x265/3072x1903/resize/646/f/webp/assets/multimedia/imagenes/2024/07/06/17202524560172.jpg',
      content: 'Las lluvias, las tormentas eléctricas y los fenómenos costeros han activado las alertas en 14 provincias para este sábado 6 de julio, según la predicción de la Agencia Estatal de Meteorología.',
      date: new Date('2024-07-06')
    },
    {
      title: 'El chupinazo de los Sanfermines 2024',
      imageURL: 'https://imagenes.elpais.com/resizer/v2/7G3CERPKCBCFZBKH3JV26YCGA4.jpg?auth=8612177315eb32df2e7ab7fa4318b4c10096cc5b13fed36739fd94006f53dec5&width=1960',
      content: 'Del 6 al 14 de julio, la capital de Navarra es la sede de una de las fiestas más multitudinarias y reconocidas del mundo',
      date: new Date('2024-07-06')
    },
  ]

  getData() {
    if(this.newPost.title === '' || this.newPost.imageURL === '' || this.newPost.content === '' || this.newPost.date === null) {
      alert('Todos los campos son obligatorios');
      return;
    } else {
      this.arrPosts.push(this.newPost);
      this.newPost = {title: '', imageURL: '', content: '', date: null};
    }
  }

  removeData(){
    this.newPost = {title: '', imageURL: '', content: '', date: null};
  }

  cargarPosts() : string{
    let html = "";

    this.arrPosts.forEach((post: IPost) => {
      html += `<article [class]="post">
                <figure>
                  <img src="${post.imageURL}" alt="${post.title}">
                </figure>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p>${post.date}</p>
              </article>`;
      
    } )

    return html;
  }


}
