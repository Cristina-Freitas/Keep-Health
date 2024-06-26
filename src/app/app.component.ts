import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,RouterOutlet, SharedModule]
})
export class AppComponent implements OnInit {
  title = 'Keep-Health';

  ngOnInit() {
    const listaAlimentos = [
      {
        id: 1,
        name: "batata",
        description: "Tubérculo comestível rico em carboidratos e versátil na culinária.",
        image: "https://bing.com/th?id=OIP.-CshCCluPxq7xGz2-G_USgHaE5",
        calories: 1441.2,
        serving_size_g: 453.592,
        fat_total_g: 67,
        fat_saturated_g: 10.6,
        protein_g: 15.4,
        sodium_mg: 964,
        potassium_mg: 565,
        cholesterol_mg: 0,
        carbohydrates_total_g: 186.5,
        fiber_g: 17.4,
        sugar_g: 1.3
      },
      {
        id: 2,
        name: "morango",
        description: "Fruta vermelha, suculenta e doce, frequentemente usada em sobremesas.",
        image: "https://bing.com/th?id=OIP.IQXrP4fSkwtGImpZf1Av4AHaFj",
        calories: 144.7,
        serving_size_g: 453.592,
        fat_total_g: 1.4,
        fat_saturated_g: 0.1,
        protein_g: 3.1,
        sodium_mg: 4,
        potassium_mg: 108,
        cholesterol_mg: 0,
        carbohydrates_total_g: 34.7,
        fiber_g: 9,
        sugar_g: 22.2
      },
      {
        id: 3,
        name: "lasanha",
        description: "Prato italiano composto por camadas de massa, queijo e molho, podendo incluir carne ou vegetais.",
        image: "https://bing.com/th?id=OIP.ErFlHku_Rs0tmPZ1ni5YsgHaE8",
        calories: 715.3,
        serving_size_g: 453.592,
        fat_total_g: 38.5,
        fat_saturated_g: 18,
        protein_g: 51.9,
        sodium_mg: 1850,
        potassium_mg: 722,
        cholesterol_mg: 193,
        carbohydrates_total_g: 41.7,
        fiber_g: 4.6,
        sugar_g: 13.2
      },
      {
        id: 4,
        name: "maçã",
        description: "Fruta pomácea de sabor que varia de doce a ácido, consumida fresca ou em receitas.",
        image: "https://bing.com/th?id=OIP.o7rlPOWm1Zn11QSEms6-VgHaHa",
        calories: 53,
        serving_size_g: 100,
        fat_total_g: 0.2,
        fat_saturated_g: 0,
        protein_g: 0.3,
        sodium_mg: 1,
        potassium_mg: 11,
        cholesterol_mg: 0,
        carbohydrates_total_g: 14.1,
        fiber_g: 2.4,
        sugar_g: 10.3
      },
      {
        id: 5,
        name: "pera",
        description: "Fruta de polpa doce, apreciada por seu sabor suave e textura.",
        image: "https://bing.com/th?id=OIP.uXP01zK0pirJyTyt39NQcAHaHa",
        calories: 257.1,
        serving_size_g: 453.592,
        fat_total_g: 0.6,
        fat_saturated_g: 0.1,
        protein_g: 0.6,
        sodium_mg: 4,
        potassium_mg: 53,
        cholesterol_mg: 0,
        carbohydrates_total_g: 67.7,
        fiber_g: 14.3,
        sugar_g: 44.3
      },
      {
        id: 6,
        name: "farinha branca",
        description: "Pó fino obtido da moagem do trigo, usado como base para pães, bolos e outros.",
        image: "https://bing.com/th?id=OIP.37ptmS2hXg9KBJNnyLlyAQHaD_",
        calories: 1647.2,
        serving_size_g: 453.592,
        fat_total_g: 4.4,
        fat_saturated_g: 0.7,
        protein_g: 46.5,
        sodium_mg: 8,
        potassium_mg: 481,
        cholesterol_mg: 0,
        carbohydrates_total_g: 344.1,
        fiber_g: 12.1,
        sugar_g: 1.2
      },
      {
        id: 7,
        name: "ovo",
        description: "Ingrediente fundamental na culinária, rico em proteínas e utilizado em diversas receitas.",
        image: "https://bing.com/th?id=OIP.ca-8ItIXZuO4sPab1YgmUwHaE8",
        calories: 667,
        serving_size_g: 453.592,
        fat_total_g: 43.9,
        fat_saturated_g: 14.2,
        protein_g: 56.9,
        sodium_mg: 634,
        potassium_mg: 904,
        cholesterol_mg: 1685,
        carbohydrates_total_g: 3.3,
        fiber_g: 0,
        sugar_g: 1.7
      },
      {
        id: 9,
        name: "arroz",
        description: "Grão de cereal consumido mundialmente, base da alimentação em muitas culturas.",
        image: "https://www.bing.com/th?id=OIP.xH6BADAcCrI_yrUL22uZIAHaHa&w=208&h=208&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
        calories: 557.9,
        serving_size_g: 453.592,
        fat_total_g: 1.3,
        fat_saturated_g: 0.3,
        protein_g: 12.1,
        sodium_mg: 4,
        potassium_mg: 193,
        cholesterol_mg: 0,
        carbohydrates_total_g: 129,
        fiber_g: 1.8,
        sugar_g: 0.2
      },
      {
        id: 10,
        name: "queijo",
        description: "Alimento derivado do leite, com uma grande variedade de sabores e texturas.",
        image: "https://bing.com/th?id=OIP.lDqAUaaN4G-y16N6XuPM6wHaE8",
        calories: 1786.7,
        serving_size_g: 453.592,
        fat_total_g: 149.8,
        fat_saturated_g: 85.8,
        protein_g: 103.2,
        sodium_mg: 3001,
        potassium_mg: 2086,
        cholesterol_mg: 454,
        carbohydrates_total_g: 14.4,
        fiber_g: 0,
        sugar_g: 2.1
      },
      {
        id: 11,
        name: "batata frita",
        description: "Batatas cortadas em tiras e fritas até ficarem crocantes, um petisco popular.",
        image: "https://bing.com/th?id=OIP.9poN-AQsX0Ge0sjjL7AMugHaER",
        calories: 1417.3,
        serving_size_g: 453.592,
        fat_total_g: 65.5,
        fat_saturated_g: 10.5,
        protein_g: 15.6,
        sodium_mg: 950,
        potassium_mg: 558,
        cholesterol_mg: 0,
        carbohydrates_total_g: 191,
        fiber_g: 17.1,
        sugar_g: 1.4
      },  
     {
        id: 12,
        name: "sorvete",
        description: "Sobremesa gelada feita com leite ou creme, açúcar e sabores variados.",
        image: "https://bing.com/th?id=OIP.q1RcsojoCEH4-JSSFE2z8gHaE8",
        calories: 939.2,
        serving_size_g: 453.592,
        fat_total_g: 50,
        fat_saturated_g: 30.9,
        protein_g: 15.7,
        sodium_mg: 356,
        potassium_mg: 469,
        cholesterol_mg: 202,
        carbohydrates_total_g: 107,
        fiber_g: 3.2,
        sugar_g: 96.5
      }
    ];
    
    localStorage.setItem('alimentos', JSON.stringify(listaAlimentos));
  }
}
