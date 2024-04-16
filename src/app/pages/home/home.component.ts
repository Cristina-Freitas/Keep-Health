import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule,
            LoginComponent,
            RouterLink,
            CommonModule,
            DialogModule,
            ButtonModule,
            ReactiveFormsModule,
            FormsModule,
            ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideAnimations(), 
              provideNoopAnimations()]
})
export class HomeComponent {

  visible: boolean = false;
  showDialog() {
    this.visible = true;
    this.novaAtividade.reset();
    this.editarAtividade = null;
  }

  listaDeTreinos = this.gettreinos();

  novaAtividade = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    distance: new FormControl(0),
    time: new FormControl(''),
  });

  tiposDeAtividades = [
    {name: "Caminhada", image:"../../assets/img/caminhada.jpg"},
    {name: "Corrida", image:"../../assets/img/corrida.png"},
    {name: "Natação", image:"../../assets/img/natacao.png"},
    {name: "Bicicleta", image:"../../assets/img/bike.png"},
    {name: "Dança", image:"../../assets/img/danca.png"},
    {name: "Musculação", image:"../../assets/img/musculacao.png"},
    {name: "Crossfit", image:"../../assets/img/crossfit.png"},
  ];

  editarAtividade: any = null;

  salvarAtividade() {
    if (this.novaAtividade.value.title && this.novaAtividade.value.type && this.novaAtividade.value.date) {
      let treinos = this.gettreinos();

      let distance = typeof this.novaAtividade.value.distance === 'number' ? this.novaAtividade.value.distance : 0;

      if (this.editarAtividade) {

        let index = treinos.findIndex((treino: { title: any; type: any; date: any; distance: any; time: any; }) => 
          treino.title == this.editarAtividade.title &&
          treino.type == this.editarAtividade.type &&
          treino.date == this.editarAtividade.date &&
          treino.distance == this.editarAtividade.distance &&
          treino.time == this.editarAtividade.time
        );
        if (index > -1) {
          treinos[index] = this.novaAtividade.value;
        }
        localStorage.setItem("Atividades", JSON.stringify(treinos));
      } else {
        // Adicionar novo exercício:
      this.addAtividade(this.novaAtividade.value.title, 
                        this.novaAtividade.value.type, 
                        this.novaAtividade.value.date, distance, 
                        this.novaAtividade.value.time);
      this.novaAtividade.reset();
      }
      this.visible = false;
      this.listaDeTreinos = this.gettreinos();
      this.editarAtividade = null;
    }
    else {
      alert("Preencha todos os campos obrigatórios.");
    }
  };

  gettreinos() {
    const emptyDatabase: string[] = [];
    const treinos = localStorage.getItem("Atividades");
    if (!!treinos) {
      let parsedtreinos = JSON.parse(treinos);

      // ordenar em ordem cronológica, por data
      parsedtreinos.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return parsedtreinos;
    } else {
      localStorage.setItem("Atividades", JSON.stringify(emptyDatabase));
      return [];
    };
  };

  addAtividade(title: string, type: string, date: string, distance: number, time: any) {
    const novaAtividade = {
      title: title,
      type: type,
      date: date,
      distance: distance,
      time: time,
    };
    let treinos = this.gettreinos();
    treinos.push(novaAtividade);
    localStorage.setItem("Atividades", JSON.stringify(treinos));
  };

  // Chama a funcionalidade de editar o exercício através do card:
  atividade(treino: any) {
    this.editarAtividade = treino;
    this.novaAtividade.setValue(treino);
    this.visible = true;
  };

  deletarAtividade() {
    if (this.editarAtividade) {
      if (confirm("Tem certeza que deseja apagar essa atividade? Esta ação será irreversível.")) {
      let treinos = this.gettreinos();
      let index = treinos.findIndex((treino: { title: any; type: any; date: any; distance: any; time: any; }) => 
        treino.title === this.editarAtividade.title &&
        treino.type === this.editarAtividade.type &&
        treino.date === this.editarAtividade.date &&
        treino.distance === this.editarAtividade.distance &&
        treino.time === this.editarAtividade.time
      );
      if (index > -1) {
        treinos.splice(index, 1);
        localStorage.setItem("Atividades", JSON.stringify(treinos));
      }
      this.novaAtividade.reset();
      this.editarAtividade = null;
      this.visible = false;
      this.listaDeTreinos = this.gettreinos();
    }
    }
  };
}